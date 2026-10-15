// Player progress, saved on the device so it works offline and never resets.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import type { SpoilerLevel } from '@/data/types';

const KEY = 'progress.v1';

type GameProgress = {
  doneSteps: string[];
  found: string[];
  /** Where play mode was last left, as a step ID. */
  lastStepId?: string;
};

type Saved = {
  spoilerLevel: SpoilerLevel;
  games: Record<string, GameProgress>;
};

const empty: Saved = { spoilerLevel: 'hints', games: {} };
const emptyGame: GameProgress = { doneSteps: [], found: [] };

type Ctx = {
  loaded: boolean;
  spoilerLevel: SpoilerLevel;
  setSpoilerLevel: (level: SpoilerLevel) => void;
  game: (gameId: string) => GameProgress;
  toggleStep: (gameId: string, stepId: string) => void;
  toggleFound: (gameId: string, collectibleId: string) => void;
  setLastStep: (gameId: string, stepId: string) => void;
};

const ProgressContext = createContext<Ctx | null>(null);

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Saved>(empty);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (raw) setState({ ...empty, ...JSON.parse(raw) });
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) AsyncStorage.setItem(KEY, JSON.stringify(state)).catch(() => {});
  }, [state, loaded]);

  const updateGame = (gameId: string, fn: (g: GameProgress) => GameProgress) =>
    setState((s) => ({ ...s, games: { ...s.games, [gameId]: fn(s.games[gameId] ?? emptyGame) } }));

  const value: Ctx = {
    loaded,
    spoilerLevel: state.spoilerLevel,
    setSpoilerLevel: (spoilerLevel) => setState((s) => ({ ...s, spoilerLevel })),
    game: (gameId) => state.games[gameId] ?? emptyGame,
    toggleStep: (gameId, stepId) => updateGame(gameId, (g) => ({ ...g, doneSteps: toggle(g.doneSteps, stepId) })),
    toggleFound: (gameId, id) => updateGame(gameId, (g) => ({ ...g, found: toggle(g.found, id) })),
    setLastStep: (gameId, stepId) => updateGame(gameId, (g) => ({ ...g, lastStepId: stepId })),
  };

  // Wait for saved progress so screens never start from a blank state.
  return <ProgressContext.Provider value={value}>{loaded ? children : null}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
