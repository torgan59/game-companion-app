import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Body, Button, Card, H1, Muted, ProgressBar, Screen } from '@/components/ui';
import { C, S } from '@/constants/theme';
import { games } from '@/data/games';
import { useProgress } from '@/state/progress';

export default function Library() {
  const progress = useProgress();

  return (
    <Screen>
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <H1>Your games</H1>
          <Muted>Guides work offline. Progress stays on this phone.</Muted>
        </View>
        <Button label="Settings" kind="ghost" onPress={() => router.push('/settings')} />
      </View>

      {games.map((game) => {
        const steps = game.chapters.flatMap((c) => c.steps);
        const p = progress.game(game.id);
        const done = p.doneSteps.length / Math.max(steps.length, 1);
        return (
          <Link key={game.id} href={`/game/${game.id}`} asChild>
            <Pressable accessibilityRole="button" accessibilityLabel={`Open ${game.title} guide`}>
              <Card style={{ borderLeftWidth: 6, borderLeftColor: game.accent }}>
                <Text style={styles.title}>{game.title}</Text>
                <Muted>{game.platforms.join(' · ')}</Muted>
                <Body>{game.blurb}</Body>
                <ProgressBar value={done} />
                <Muted>{Math.round(done * 100)}% of walkthrough done</Muted>
              </Card>
            </Pressable>
          </Link>
        );
      })}

      <Card>
        <Text style={styles.title}>More games coming</Text>
        <Muted>Phase 2 adds a game catalogue and downloadable guide packs.</Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', gap: S.md },
  title: { color: C.text, fontSize: 22, fontWeight: '800' },
});
