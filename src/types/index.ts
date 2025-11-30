export interface Question {
  id: number;
  question: string;
  category: "Science" | "Nature" | "Space" | "Human Body" | "Animals" | "Technology" | "History" | "Physics" | "Earth";
  difficulty: "easy" | "medium" | "hard"; // Internal tracking only, NOT displayed in UI
  answerSimple: string; // Age 5-8
  answerIntermediate: string; // Age 10-12
  answerAdvanced: string; // Age 13+
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
}

export interface GameState {
  todayQuestion: Question | null;
  lastPlayedDate: string;
  currentStreak: number;
  maxStreak: number;
  questionsAnswered: number;
  favoriteQuestionIds: number[];
}

export interface Stats {
  questionsAnswered: number;
  currentStreak: number;
  maxStreak: number;
  favoriteQuestionIds: number[];
  categoryBreakdown: { [key: string]: number };
}

