import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextProps, View, ViewStyle } from 'react-native';

import { C, MaxContentWidth, S, TOUCH } from '@/constants/theme';

export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  );
}

export function H1(props: TextProps) {
  return <Text accessibilityRole="header" {...props} style={[styles.h1, props.style]} />;
}

export function H2(props: TextProps) {
  return <Text accessibilityRole="header" {...props} style={[styles.h2, props.style]} />;
}

export function Body(props: TextProps) {
  return <Text {...props} style={[styles.body, props.style]} />;
}

export function Muted(props: TextProps) {
  return <Text {...props} style={[styles.muted, props.style]} />;
}

export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

type ButtonProps = {
  label: string;
  onPress: () => void;
  kind?: 'primary' | 'secondary' | 'ghost';
  hint?: string;
  style?: ViewStyle;
  big?: boolean;
};

export function Button({ label, onPress, kind = 'secondary', hint, style, big }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={hint}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        kind === 'primary' && styles.primary,
        kind === 'ghost' && styles.ghost,
        big && styles.big,
        pressed && { opacity: 0.75 },
        style,
      ]}>
      <Text style={[styles.buttonText, kind === 'primary' && { color: C.onAccent }, big && { fontSize: 20 }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Check({ checked, label, onPress, detail }: { checked: boolean; label: string; onPress: () => void; detail?: string }) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
      onPress={onPress}
      style={styles.checkRow}>
      <View style={[styles.box, checked && styles.boxOn]}>
        {checked && <Text style={styles.tick}>✓</Text>}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[styles.body, checked && styles.done]}>{label}</Text>
        {detail ? <Muted>{detail}</Muted> : null}
      </View>
    </Pressable>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: pct }}
      style={styles.track}>
      <View style={[styles.fill, { width: `${pct}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.bg },
  content: { padding: S.md, paddingBottom: S.xl * 2, alignItems: 'center' },
  inner: { width: '100%', maxWidth: MaxContentWidth, gap: S.md },
  h1: { color: C.text, fontSize: 30, fontWeight: '800' },
  h2: { color: C.text, fontSize: 20, fontWeight: '700' },
  body: { color: C.text, fontSize: 17, lineHeight: 25 },
  muted: { color: C.muted, fontSize: 15, lineHeight: 21 },
  card: { backgroundColor: C.card, borderRadius: 16, padding: S.md, gap: S.sm, borderWidth: 1, borderColor: C.border },
  button: {
    minHeight: TOUCH,
    paddingHorizontal: S.md,
    borderRadius: 12,
    backgroundColor: C.cardRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: C.accent },
  ghost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: C.border },
  big: { minHeight: 64, borderRadius: 16 },
  buttonText: { color: C.text, fontSize: 16, fontWeight: '700' },
  checkRow: { flexDirection: 'row', gap: S.md, alignItems: 'center', minHeight: TOUCH, paddingVertical: S.xs },
  box: { width: 28, height: 28, borderRadius: 8, borderWidth: 2, borderColor: C.muted, alignItems: 'center', justifyContent: 'center' },
  boxOn: { backgroundColor: C.good, borderColor: C.good },
  tick: { color: C.bg, fontWeight: '900', fontSize: 16 },
  done: { color: C.muted, textDecorationLine: 'line-through' },
  track: { height: 8, borderRadius: 4, backgroundColor: C.cardRaised, overflow: 'hidden' },
  fill: { height: 8, backgroundColor: C.accent },
});
