// Play mode: one step per screen, big type, screen kept awake.
// Built for a phone propped up next to the TV.
import { useKeepAwake } from 'expo-keep-awake';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StepHelp } from '@/components/step-help';
import { Body, Button, Card, Muted, ProgressBar } from '@/components/ui';
import { C, MaxContentWidth, S } from '@/constants/theme';
import { getGame } from '@/data/games';
import { useProgress } from '@/state/progress';

export default function PlayMode() {
  useKeepAwake();
  const { gameId } = useLocalSearchParams<{ gameId: string }>();
  const game = getGame(gameId);
  const progress = useProgress();

  const steps = game ? game.chapters.flatMap((ch) => ch.steps.map((s) => ({ ...s, chapter: ch }))) : [];
  const p = game ? progress.game(game.id) : undefined;
  const startIndex = Math.max(0, steps.findIndex((s) => s.id === p?.lastStepId));
  const [index, setIndex] = useState(startIndex);

  const step = steps[index];
  useEffect(() => {
    if (game && step) progress.setLastStep(game.id, step.id);
    // Only save when the step changes.
  }, [step?.id]);

  if (!game || !step || !p) return <Body>Nothing to play yet.</Body>;

  const done = p.doneSteps.includes(step.id);
  const items = game.collectibles.filter((c) => step.collectibles?.includes(c.id));
  const nextMissable = game.collectibles.find(
    (c) => c.missable && c.chapterId === step.chapter.id && !p.found.includes(c.id),
  );

  const finishAndNext = () => {
    if (!done) progress.toggleStep(game.id, step.id);
    if (index < steps.length - 1) setIndex(index + 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inner}>
        <Muted>
          {step.chapter.title} · step {index + 1} of {steps.length}
        </Muted>
        <ProgressBar value={(index + 1) / steps.length} />

        <Card style={{ flex: 1 }}>
          <Text accessibilityRole="header" style={styles.title}>
            {done ? '✓ ' : ''}
            {step.title}
          </Text>
          {/* key resets the hint tier when the step changes */}
          <StepHelp key={step.id} step={step} level={progress.spoilerLevel} large />
          {items.length > 0 ? (
            <Text style={styles.items}>Pick up here: {items.map((c) => c.name).join(', ')}</Text>
          ) : null}
          {nextMissable ? <Text style={styles.warn}>⚠ Missable in this chapter: {nextMissable.name}</Text> : null}
        </Card>

        <View style={styles.nav}>
          <Button
            big
            label="Back"
            style={{ flex: 1 }}
            onPress={() => setIndex(Math.max(0, index - 1))}
            hint="Go to the previous step"
          />
          <Button
            big
            kind="primary"
            style={{ flex: 2 }}
            label={index === steps.length - 1 ? 'Mark done' : 'Done, next step'}
            onPress={finishAndNext}
            hint="Marks this step done and moves on"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg, padding: S.md, alignItems: 'center' },
  inner: { flex: 1, width: '100%', maxWidth: MaxContentWidth, gap: S.md },
  title: { color: C.text, fontSize: 30, fontWeight: '800' },
  items: { color: C.good, fontSize: 18, fontWeight: '700' },
  warn: { color: C.warn, fontSize: 18, fontWeight: '700' },
  nav: { flexDirection: 'row', gap: S.md, paddingBottom: S.md },
});
