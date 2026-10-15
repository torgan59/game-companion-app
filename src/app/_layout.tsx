import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { C } from '@/constants/theme';
import { ProgressProvider } from '@/state/progress';

export default function RootLayout() {
  return (
    <ProgressProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: C.bg },
          headerTintColor: C.text,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: C.bg },
        }}>
        <Stack.Screen name="index" options={{ title: 'Library' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings', presentation: 'modal' }} />
        <Stack.Screen name="game/[gameId]/index" options={{ title: '' }} />
        <Stack.Screen name="game/[gameId]/chapter/[chapterId]" options={{ title: '' }} />
        <Stack.Screen name="game/[gameId]/checklist" options={{ title: 'Checklist' }} />
        <Stack.Screen name="game/[gameId]/play" options={{ title: 'Play mode' }} />
      </Stack>
    </ProgressProvider>
  );
}
