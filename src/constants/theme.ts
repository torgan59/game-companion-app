// One dark theme: easier on the eyes next to a TV in a dim room.
// Text colours meet at least 4.5:1 contrast on bg and card.
export const C = {
  bg: '#0E1116',
  card: '#1A1F27',
  cardRaised: '#242B36',
  border: '#2F3845',
  text: '#F3F4F6',
  muted: '#A7B0BE',
  accent: '#F2B84B',
  onAccent: '#1A1205',
  good: '#7BD88F',
  warn: '#FFB4A2',
} as const;

export const S = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

/** Minimum touch target in points. */
export const TOUCH = 44;
export const MaxContentWidth = 760;
