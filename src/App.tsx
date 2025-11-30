import { useState, useEffect } from 'react';
import type { Question, GameState } from './types';
import { getDailyQuestion, getQuestionNumber } from './utils/storage';
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
  const [currentLevel, setCurrentLevel] = useState<'simple' | 'intermediate' | 'advanced'>('simple');

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
  const questionNum = getQuestionNumber();

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
          <p className="date-label">📅 Question #{questionNum}</p>
          <h2 className="question-title">{question.question}</h2>
          
          <div className="answer-level-selector">
            <button 
              className={`level-btn ${currentLevel === 'simple' ? 'active' : ''}`}
              onClick={() => setCurrentLevel('simple')}
            >
              👶 Age 5-8
            </button>
            <button 
              className={`level-btn ${currentLevel === 'intermediate' ? 'active' : ''}`}
              onClick={() => setCurrentLevel('intermediate')}
            >
              🧒 Age 10-12
            </button>
            <button 
              className={`level-btn ${currentLevel === 'advanced' ? 'active' : ''}`}
              onClick={() => setCurrentLevel('advanced')}
            >
              🎓 Age 13+
            </button>
          </div>

          <div className="answer-content">
            {currentLevel === 'simple' && <p>{question.answerSimple}</p>}
            {currentLevel === 'intermediate' && <p>{question.answerIntermediate}</p>}
            {currentLevel === 'advanced' && <p>{question.answerAdvanced}</p>}
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
                const shareText = `🤔 Daily Ask Why #${questionNum}:\n\n"${question.question}"\n\nGet your answer at dailyaskwhy.com 🚀\n\n#DailyAskWhy #CuriousMinds`;
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
