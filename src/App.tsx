import { useState, useEffect } from 'react';
import type { Question, GameState } from './types';
import { getDailyQuestion } from './utils/storage';
import './App.css';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    todayQuestion: null,
    lastPlayedDate: '',
    currentStreak: 0,
    maxStreak: 0,
    questionsAnswered: 0,
    favoriteQuestionIds: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initGame();
  }, []);

  function initGame() {
    try {
      const todayDateOnly = new Date().toISOString().split('T')[0];
      const currentQuestion: Question = getDailyQuestion();
      
      const initialGameState: GameState = {
        todayQuestion: currentQuestion,
        lastPlayedDate: todayDateOnly,
        currentStreak: 0,
        maxStreak: 0,
        questionsAnswered: 0,
        favoriteQuestionIds: [],
      };
      
      setGameState(initialGameState);
      setLoading(false);
    } catch (error) {
      console.error("Failed to initialize game:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Daily Ask Why...</p>
      </div>
    );
  }

  if (!gameState.todayQuestion) {
    return (
      <div className="error-screen">
        <p>Failed to load question. Please refresh the page.</p>
      </div>
    );
  }

  const question = gameState.todayQuestion;

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="title">🤔 DAILY ASK WHY</h1>
          <p className="subtitle">Curious Minds, Daily Answers</p>
        </div>
      </header>

      <main className="main-content">
        <div className="question-card">
          <h2 className="question-title">{question.question}</h2>
          
          <div className="answer-content">
            <p>{question.answerSimple}</p>
          </div>

          <div className="fun-fact-section">
            <h3>💡 Did You Know?</h3>
            <p>{question.funFact}</p>
            <p className="source">
              <em>Source: </em>
              <a href={question.funFactSourceUrl} target="_blank" rel="noopener noreferrer">
                {question.funFactSource}
              </a>
            </p>
          </div>

          <div className="share-section">
            <button 
              className="share-btn"
              onClick={() => {
                const shareText = `🤔 Daily Ask Why:\n\n"${question.question}"\n\nGet your answer at dailyaskwhy.com 🚀\n\n#DailyAskWhy #CuriousMinds`;
                if (navigator.share) {
                  navigator.share({ text: shareText });
                } else {
                  navigator.clipboard.writeText(shareText);
                  alert('Copied to clipboard!');
                }
              }}
            >
              📤 Share
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
