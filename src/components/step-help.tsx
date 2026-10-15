// Tiered help for one step: nudge, then more help, then the full answer.
// How much shows at first depends on the player's spoiler level.
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Body, Button, Muted } from '@/components/ui';
import { C, S } from '@/constants/theme';
import type { SpoilerLevel, Step } from '@/data/types';

function startTier(step: Step, level: SpoilerLevel) {
  if (level === 'full') return 2;
  if (level === 'balanced') return step.spoiler ? 0 : 2;
  return 0;
}

export function StepHelp({ step, level, large }: { step: Step; level: SpoilerLevel; large?: boolean }) {
  const [tier, setTier] = useState(() => startTier(step, level));
  const textStyle = large ? styles.large : undefined;
  const hasMore = Boolean(step.more);

  return (
    <View style={{ gap: S.sm }}>
      {step.spoiler && tier < 2 ? <Text style={styles.badge}>Spoiler: boss or story</Text> : null}
      <Body style={textStyle}>
        <Text style={styles.label}>Nudge: </Text>
        {step.nudge}
      </Body>
      {tier >= 1 && hasMore ? (
        <Body style={textStyle}>
          <Text style={styles.label}>More help: </Text>
          {step.more}
        </Body>
      ) : null}
      {tier >= 2 ? <Body style={textStyle}>{step.text}</Body> : null}
      {tier < 2 ? (
        <View style={styles.row}>
          {tier === 0 && hasMore ? (
            <Button label="More help" onPress={() => setTier(1)} hint="Shows a bigger hint without the full answer" />
          ) : null}
          <Button
            label={step.spoiler ? 'Show answer (spoiler)' : 'Show answer'}
            kind="ghost"
            onPress={() => setTier(2)}
            hint="Shows the full solution for this step"
          />
        </View>
      ) : null}
      {tier < 2 ? <Muted>Hints first keeps the game yours. Change this in Settings.</Muted> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: C.accent, fontWeight: '700' },
  large: { fontSize: 24, lineHeight: 34 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: S.sm },
  badge: {
    alignSelf: 'flex-start',
    color: C.warn,
    borderColor: C.warn,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: S.sm,
    paddingVertical: 2,
    fontSize: 13,
    fontWeight: '700',
  },
});
