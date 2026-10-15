import { Link, router, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Body, Button, Card, H1, H2, Muted, ProgressBar, Screen } from '@/components/ui';
import { C, S } from '@/constants/theme';
import { getGame } from '@/data/games';
import { useProgress } from '@/state/progress';

export default function GameHub() {
  const { gameId } = useLocalSearchParams<{ gameId: string }>();
  const game = getGame(gameId);
  const progress = useProgress();
  if (!game) return <Screen><Body>Game not found.</Body></Screen>;

  const p = progress.game(game.id);
  const missablesLeft = game.collectibles.filter((c) => c.missable && !p.found.includes(c.id));

  return (
    <Screen>
      <Stack.Screen options={{ title: game.title }} />
      <H1>{game.title}</H1>
      <Muted>{game.platforms.join(' · ')}</Muted>

      <Button
        big
        kind="primary"
        label={p.lastStepId ? 'Resume play mode' : 'Start play mode'}
        hint="Step-by-step help with the screen kept awake"
        onPress={() => router.push(`/game/${game.id}/play`)}
      />

      <Link href={`/game/${game.id}/checklist`} asChild>
        <Pressable accessibilityRole="button" accessibilityLabel="Open collectibles checklist">
          <Card>
            <Text style={styles.cardTitle}>Collectibles and trophies</Text>
            <ProgressBar value={p.found.length / game.collectibles.length} />
            <Muted>
              {p.found.length} of {game.collectibles.length} found
            </Muted>
            {missablesLeft.length > 0 ? (
              <Text style={styles.warn}>⚠ {missablesLeft.length} missable item(s) still to get</Text>
            ) : null}
          </Card>
        </Pressable>
      </Link>

      <H2>Walkthrough</H2>
      {game.chapters.map((ch) => {
        const done = ch.steps.filter((s) => p.doneSteps.includes(s.id)).length;
        return (
          <Link key={ch.id} href={`/game/${game.id}/chapter/${ch.id}`} asChild>
            <Pressable accessibilityRole="button" accessibilityLabel={`${ch.title}, ${done} of ${ch.steps.length} steps done`}>
              <Card>
                <View style={styles.row}>
                  <Text style={[styles.cardTitle, { flex: 1 }]}>{ch.title}</Text>
                  <Muted>
                    {done}/{ch.steps.length}
                  </Muted>
                </View>
                <Muted>{ch.summary}</Muted>
              </Card>
            </Pressable>
          </Link>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: S.sm },
  cardTitle: { color: C.text, fontSize: 18, fontWeight: '700' },
  warn: { color: C.warn, fontSize: 15, fontWeight: '700' },
});
