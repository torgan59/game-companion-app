import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card, H2, Muted, Screen } from '@/components/ui';
import { C, S, TOUCH } from '@/constants/theme';
import type { SpoilerLevel } from '@/data/types';
import { useProgress } from '@/state/progress';

const options: { value: SpoilerLevel; title: string; detail: string }[] = [
  { value: 'hints', title: 'Hints first', detail: 'Every step starts as a nudge. You choose when to see more.' },
  { value: 'balanced', title: 'Balanced', detail: 'Show full steps, but hide bosses and story until you tap.' },
  { value: 'full', title: 'Show everything', detail: 'Full answers straight away, spoilers included.' },
];

export default function Settings() {
  const { spoilerLevel, setSpoilerLevel } = useProgress();

  return (
    <Screen>
      <H2>Spoiler level</H2>
      <View accessibilityRole="radiogroup" style={{ gap: S.sm }}>
        {options.map((o) => {
          const selected = o.value === spoilerLevel;
          return (
            <Pressable
              key={o.value}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              accessibilityLabel={`${o.title}. ${o.detail}`}
              onPress={() => setSpoilerLevel(o.value)}>
              <Card style={selected ? styles.selected : undefined}>
                <View style={styles.row}>
                  <View style={[styles.dot, selected && styles.dotOn]} />
                  <Text style={styles.title}>{o.title}</Text>
                </View>
                <Muted>{o.detail}</Muted>
              </Card>
            </Pressable>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  selected: { borderColor: C.accent, borderWidth: 2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: S.sm, minHeight: TOUCH - 16 },
  dot: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: C.muted },
  dotOn: { borderColor: C.accent, backgroundColor: C.accent },
  title: { color: C.text, fontSize: 18, fontWeight: '700' },
});
