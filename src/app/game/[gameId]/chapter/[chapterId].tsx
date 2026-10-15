import { Stack, useLocalSearchParams } from 'expo-router';

import { StepHelp } from '@/components/step-help';
import { Body, Card, Check, H1, Muted, Screen } from '@/components/ui';
import { getGame } from '@/data/games';
import { useProgress } from '@/state/progress';

export default function ChapterScreen() {
  const { gameId, chapterId } = useLocalSearchParams<{ gameId: string; chapterId: string }>();
  const game = getGame(gameId);
  const chapter = game?.chapters.find((c) => c.id === chapterId);
  const progress = useProgress();
  if (!game || !chapter) return <Screen><Body>Chapter not found.</Body></Screen>;

  const p = progress.game(game.id);

  return (
    <Screen>
      <Stack.Screen options={{ title: game.title }} />
      <H1>{chapter.title}</H1>
      <Muted>{chapter.summary}</Muted>
      {chapter.steps.map((step) => {
        const items = game.collectibles.filter((c) => step.collectibles?.includes(c.id));
        return (
          <Card key={step.id}>
            <Check
              checked={p.doneSteps.includes(step.id)}
              label={step.title}
              onPress={() => progress.toggleStep(game.id, step.id)}
            />
            <StepHelp step={step} level={progress.spoilerLevel} />
            {items.map((c) => (
              <Check
                key={c.id}
                checked={p.found.includes(c.id)}
                label={`Found: ${c.name}`}
                detail={c.where}
                onPress={() => progress.toggleFound(game.id, c.id)}
              />
            ))}
          </Card>
        );
      })}
    </Screen>
  );
}
