// ---------------------------------------------------------------------------
// Domain models for Baltimore Artifact Hunt.
// Mirrors the structure from the game bible:
//   Location (Inner Harbor, Federal Hill, Pigtown, ...)
//     -> Hotspots (restaurants, bars, convenience stores, ...)
//         -> Challenge (trivia questions and/or a mini-game)
//         -> Badge earned on completion
//   Players scan a QR code at a hotspot's poster to open its challenge here.
// ---------------------------------------------------------------------------

export interface TriviaQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  /** Seconds allowed to answer, per the game bible (10s per question). */
  timeLimitSeconds: number;
}

export interface Badge {
  id: string;
  name: string;
  /** Emoji or icon key used until real art is dropped in. */
  icon: string;
  description: string;
}

export interface HotspotStory {
  title: string;
  body: string;
  footer?: string;
}

export type ChallengeType = 'trivia' | 'mini-game';

export interface Hotspot {
  id: string;
  locationId: string;
  name: string;
  /** e.g. "restaurant" | "bar" | "convenience store" */
  category: string;
  founded?: string;
  knownFor?: string;
  guideBlurb: string;
  story: HotspotStory;
  challengeType: ChallengeType;
  triviaQuestions?: TriviaQuestion[];
  badge: Badge;
  /** Hotspot ids that must be completed before this one unlocks. Empty = unlocked from the start. */
  unlockRequires: string[];
  /** Position of the beacon within the parallax scene, as % of scene width/height. */
  position: { xPct: number; yPct: number };
}

export interface CityLocation {
  id: string;
  name: string;
  tagline: string;
  /** 0-1 completion percentage, derived at runtime from hotspot progress. */
  hotspotIds: string[];
}

export interface LeaderboardEntry {
  playerName: string;
  locationId: string;
  score: number;
  rank?: number;
}

export interface PlayerHotspotResult {
  hotspotId: string;
  completed: boolean;
  correctAnswers: number;
  totalQuestions: number;
  /** Sum of per-question time-based points. */
  score: number;
  badgeEarned: boolean;
}
