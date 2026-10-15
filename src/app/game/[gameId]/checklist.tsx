import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Body, Button, Card, Check, H2, Muted, Screen } from '@/components/ui';
import { C, S } from '@/constants/theme';
import { getGame } from '@/data/games';
import { useProgress } from '@/state/progress';

export default function Checklist() {
  const { gameId } = useLocalSearchParams<{ gameId: string }>();
  const game = getGame(gameId);
  const progress = useProgress();
  const [hideFound, setHideFound] = useState(false);
  if (!game) return <Screen><Body>Game not found.</Body></Screen>;

  const p = progress.game(game.id);

  return (
    <Screen>
      <View style={styles.row}>
        <Muted style={{ flex: 1 }}>
          {p.found.length} of {game.collectibles.length} found
        </Muted>
        <Button
          kind="ghost"
          label={hideFound ? 'Show found' : 'Hide found'}
          onPress={() => setHideFound((v) => !v)}
        />
      </View>
      {game.chapters.map((ch) => {
        const items = game.collectibles.filter(
          (c) => c.chapterId === ch.id && !(hideFound && p.found.includes(c.id)),
        );
        if (items.length === 0) return null;
        return (
          <View key={ch.id} style={{ gap: S.sm }}>
            <H2>{ch.title}</H2>
            {items.map((c) => (
              <Card key={c.id} style={c.missable && !p.found.includes(c.id) ? styles.missable : undefined}>
                <Check
                  checked={p.found.includes(c.id)}
                  label={c.name}
                  detail={c.where}
                  onPress={() => progress.toggleFound(game.id, c.id)}
                />
                {c.missable ? <Text style={styles.warn}>⚠ Missable: {c.missable}</Text> : null}
              </Card>
            ))}
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: S.sm },
  missable: { borderColor: C.warn },
  warn: { color: C.warn, fontSize: 15, fontWeight: '700' },
});
