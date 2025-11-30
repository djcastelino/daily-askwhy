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
  const [showArchive, setShowArchive] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  function initGame() {
    try {
      const todayDateOnly = new Date().toISOString().split('T')[0];
      const currentQuestion: Question = getDailyQuestion();
      
      // Load saved favorites from localStorage
      const savedFavorites = localStorage.getItem('dailyaskwhy_favorites');
      const favoriteIds = savedFavorites ? JSON.parse(savedFavorites) : [];
      
      const initialGameState: GameState = {
        todayQuestion: currentQuestion,
        lastPlayedDate: todayDateOnly,
        currentStreak: 0,
        maxStreak: 0,
        questionsAnswered: 0,
        favoriteQuestionIds: favoriteIds,
      };
      
      setGameState(initialGameState);
      setLoading(false);
    } catch (error) {
      console.error("Failed to initialize game:", error);
      setLoading(false);
    }
  }

  const handleShare = () => {
    if (!gameState.todayQuestion) return;
    
    const shareText = `🤔 Daily Ask Why:\n\n"${gameState.todayQuestion.question}"\n\nGet your answer at dailyaskwhy.com 🚀\n\n#DailyAskWhy #CuriousMinds`;
    
    if (navigator.share) {
      navigator.share({ text: shareText }).catch(() => {
        navigator.clipboard.writeText(shareText);
        alert('Copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

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
          <div className="header-center">
            <h1 className="title">🤔 DAILY ASK WHY</h1>
            <p className="subtitle">Curious Minds, Daily Answers</p>
          </div>
          <div className="header-right">
            <button onClick={() => setShowArchive(true)} className="header-icon-btn">
              📚
            </button>
          </div>
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

          <div className="action-buttons">
            <button className="share-btn" onClick={handleShare}>
              📤 Share
            </button>
          </div>
        </div>
      </main>

      {showArchive && (
        <div className="modal-overlay" onClick={() => setShowArchive(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📚 Archive</h2>
              <button className="modal-close-btn" onClick={() => setShowArchive(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p style={{ textAlign: 'center', color: 'var(--color-text-medium)' }}>
                Yesterday's question feature coming soon!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
