export type SpoilerLevel = 'hints' | 'balanced' | 'full';

/** One thing the player does. Hints go from vague to specific. */
export type Step = {
  id: string;
  title: string;
  /** Short nudge shown first in hint-first mode. */
  nudge: string;
  /** Extra help between the nudge and the full answer. */
  more?: string;
  /** The full answer. */
  text: string;
  /** Reveals story or a boss. Hidden behind a tap unless spoiler level is "full". */
  spoiler?: boolean;
  /** Collectible IDs picked up during this step. */
  collectibles?: string[];
};

export type Chapter = {
  id: string;
  title: string;
  summary: string;
  steps: Step[];
};

export type CollectibleKind = 'relic' | 'letter' | 'upgrade' | 'trophy';

export type Collectible = {
  id: string;
  name: string;
  kind: CollectibleKind;
  chapterId: string;
  where: string;
  /** Can be lost for good. Text explains the deadline. */
  missable?: string;
};

export type Game = {
  id: string;
  title: string;
  platforms: string[];
  blurb: string;
  accent: string;
  chapters: Chapter[];
  collectibles: Collectible[];
};
