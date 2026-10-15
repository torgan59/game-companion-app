// Sample content only. Lanternfall is a made-up game so the demo uses no
// one else's guide text. Real guides must be original or licensed (see docs/RESEARCH.md).
import type { Game } from './types';

export const lanternfall: Game = {
  id: 'lanternfall',
  title: 'Lanternfall',
  platforms: ['PS5', 'Xbox', 'Switch 2', 'PC'],
  blurb: 'A sample action-adventure used to demo the guide format.',
  accent: '#F2B84B',
  chapters: [
    {
      id: 'c1',
      title: '1. The Drowned Harbour',
      summary: 'Wake on the pier, find a lantern, reach the lighthouse.',
      steps: [
        {
          id: 'c1s1',
          title: 'Light your first lantern',
          nudge: 'Something on the pier still holds a spark.',
          more: 'Check the overturned boat at the end of the pier.',
          text: 'Walk to the end of the pier and interact with the overturned boat. Take the Ember Wick, then hold the use button at the dead lantern beside the gate to light it.',
        },
        {
          id: 'c1s2',
          title: 'Open the harbour gate',
          nudge: 'The gate answers to light, not force.',
          more: 'Carry your lantern close to the gate symbols.',
          text: 'Stand in front of the gate with your lantern raised. The three symbols glow in turn. Step left, centre, right on the matching floor tiles to open it.',
          collectibles: ['r1'],
        },
        {
          id: 'c1s3',
          title: 'Climb the net warehouse',
          nudge: 'Look up. The nets are a ladder.',
          text: 'Inside the warehouse, climb the hanging nets on the left wall. At the top beam, turn around: a Keeper\'s Letter sits on the rafter behind you.',
          collectibles: ['l1'],
        },
        {
          id: 'c1s4',
          title: 'Boss: the Tidewarden',
          nudge: 'Its armour hates your light.',
          more: 'Wait for the slam attack, then shine the lantern on its back.',
          text: 'The Tidewarden is the harbour keeper, drowned and bound to the bell. Dodge sideways when it raises the anchor. After the slam, its back plates open: raise your lantern for 3 seconds to stun it, then attack. Repeat three times.',
          spoiler: true,
          collectibles: ['u1'],
        },
      ],
    },
    {
      id: 'c2',
      title: '2. Saltglass Market',
      summary: 'Cross the flooded market and meet the glassmaker.',
      steps: [
        {
          id: 'c2s1',
          title: 'Cross the flooded square',
          nudge: 'Not every stall roof will hold you.',
          more: 'Roofs with blue cloth are safe.',
          text: 'Jump across stall roofs with blue cloth only. Red cloth roofs collapse. At the far side, drop into the dry fountain.',
        },
        {
          id: 'c2s2',
          title: 'Find the glassmaker',
          nudge: 'Follow the sound of chimes.',
          text: 'Take the alley north of the fountain. The glassmaker is in the shop with the chimes over the door. Talk to her twice to unlock lantern upgrades.',
          collectibles: ['r2'],
        },
        {
          id: 'c2s3',
          title: 'Leave the market',
          nudge: 'Point of no return ahead.',
          text: 'Before you ride the lift up to the cliffs, grab anything you missed in the market. The lift breaks behind you and the market cannot be revisited until after the credits.',
        },
      ],
    },
  ],
  collectibles: [
    { id: 'r1', name: 'Gull Relic', kind: 'relic', chapterId: 'c1', where: 'Under the gate symbols, revealed when the gate opens.' },
    { id: 'l1', name: "Keeper's Letter #1", kind: 'letter', chapterId: 'c1', where: 'Rafter at the top of the net warehouse.' },
    { id: 'u1', name: 'Bellmetal Shard', kind: 'upgrade', chapterId: 'c1', where: 'Dropped by the Tidewarden.' },
    { id: 'r2', name: 'Chime Relic', kind: 'relic', chapterId: 'c2', where: "Glassmaker's back shelf, after the second conversation." },
    {
      id: 'l2',
      name: "Keeper's Letter #2",
      kind: 'letter',
      chapterId: 'c2',
      where: 'Inside the collapsed red-cloth stall, reached by dropping through its roof.',
      missable: 'Get it before riding the lift in Saltglass Market.',
    },
    { id: 't1', name: 'Trophy: Light Keeper', kind: 'trophy', chapterId: 'c1', where: 'Beat the Tidewarden without taking a hit.', missable: 'Only during the first fight. Reload a save to retry.' },
  ],
};

export const games: Game[] = [lanternfall];

export function getGame(id: string): Game | undefined {
  return games.find((g) => g.id === id);
}
