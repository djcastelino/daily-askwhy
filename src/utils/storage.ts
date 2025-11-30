import type { Question, GameState, Stats } from '../types';
import { QUESTIONS } from '../data/questions';

const GAME_STATE_KEY = 'dailyaskwhy_gameState';
const STATS_KEY = 'dailyaskwhy_stats';
const ARCHIVE_STATE_PREFIX = 'dailyaskwhy_archive_';

// Helper to get today's date in YYYY-MM-DD format
function getTodayDateOnly(): string {
  return new Date().toISOString().split('T')[0];
}

// Get daily question (deterministic based on date)
export function getDailyQuestion(date: Date = new Date()): Question {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Use a seed to deterministically select a question
  // This ensures the same question is shown for a given date
  const seed = year * 10000 + month * 100 + day;
  const index = seed % QUESTIONS.length;
  
  return QUESTIONS[index];
}

// Get question by ID
export function getQuestionById(id: number): Question | undefined {
  return QUESTIONS.find(q => q.id === id);
}

// Get question number for a given date (for archive/share)
export function getQuestionNumber(date: Date = new Date()): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const seed = year * 10000 + month * 100 + day;
  return (seed % QUESTIONS.length) + 1; // +1 to make it 1-indexed
}

// Load game state from local storage
export function loadGameState(): GameState | null {
  try {
    const savedState = localStorage.getItem(GAME_STATE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Error loading game state:", error);
  }
  return null;
}

// Save game state to local storage
export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving game state:", error);
  }
}

// Load stats from local storage
export function getStats(): Stats {
  try {
    const savedStats = localStorage.getItem(STATS_KEY);
    if (savedStats) {
      return JSON.parse(savedStats);
    }
  } catch (error) {
    console.error("Error loading stats:", error);
  }
  return {
    questionsAnswered: 0,
    currentStreak: 0,
    maxStreak: 0,
    favoriteQuestionIds: [],
    categoryBreakdown: {},
  };
}

// Save stats to local storage
export function saveStats(stats: Stats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error("Error saving stats:", error);
  }
}

// Update stats after answering a question
export function updateStats(currentStats: Stats, question: Question): Stats {
  const newStats = { ...currentStats };
  const today = getTodayDateOnly();

  // Update questions answered
  newStats.questionsAnswered++;

  // Update category breakdown
  newStats.categoryBreakdown[question.category] = (newStats.categoryBreakdown[question.category] || 0) + 1;

  // Streak logic
  const lastPlayedDate = loadGameState()?.lastPlayedDate;
  if (lastPlayedDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (lastPlayedDate === yesterday.toISOString().split('T')[0]) {
      newStats.currentStreak++;
    } else if (lastPlayedDate !== today) {
      newStats.currentStreak = 1;
    }
  } else {
    newStats.currentStreak = 1;
  }
  
  if (newStats.currentStreak > newStats.maxStreak) {
    newStats.maxStreak = newStats.currentStreak;
  }

  saveStats(newStats);
  return newStats;
}

// Check if it's a new day
export function isNewDay(lastPlayedDate: string): boolean {
  return getTodayDateOnly() !== lastPlayedDate;
}

// Toggle favorite question
export function toggleFavoriteQuestion(questionId: number): Stats {
  const stats = getStats();
  const index = stats.favoriteQuestionIds.indexOf(questionId);
  if (index > -1) {
    stats.favoriteQuestionIds.splice(index, 1);
  } else {
    stats.favoriteQuestionIds.push(questionId);
  }
  saveStats(stats);
  return stats;
}

// Load archive question state
export function loadArchiveQuestionState(questionNumber: number): { answered: boolean; questionId: number } | null {
  try {
    const savedState = localStorage.getItem(`${ARCHIVE_STATE_PREFIX}${questionNumber}`);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (error) {
    console.error("Error loading archive question state:", error);
  }
  return null;
}

// Save archive question state
export function saveArchiveQuestionState(questionNumber: number, questionId: number): void {
  try {
    localStorage.setItem(`${ARCHIVE_STATE_PREFIX}${questionNumber}`, JSON.stringify({ answered: true, questionId }));
  } catch (error) {
    console.error("Error saving archive question state:", error);
  }
}

// Generate share text
export function generateShareText(question: Question, questionNumber: number): string {
  return `🤔 Daily Ask Why #${questionNumber}:\n\n"${question.question}"\n\nGet your answer at dailyaskwhy.com 🚀\n\n#DailyAskWhy #CuriousMinds #LearnSomethingNew`;
}

