import { useState, useEffect } from 'react';
import type { Question, GameState } from './types';
import { getDailyQuestion, getYesterdaysQuestion, loadArchiveQuestion, saveArchiveQuestion } from './utils/storage';
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
  const [archiveMode, setArchiveMode] = useState(false);

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

  const handleSelectArchiveQuestion = (question: Question) => {
    setArchiveMode(true);
    setGameState({
      ...gameState,
      todayQuestion: question
    });
    saveArchiveQuestion(question.id, true);
    setShowArchive(false);
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
          <h1 className="title">🤔 DAILY ASK WHY</h1>
          <p className="subtitle">Curious Minds, Daily Answers</p>
        </div>
      </header>

      <main className="main-content">
        {archiveMode && (
          <div className="archive-banner">
            📚 Archive Mode
            <button 
              onClick={() => {
                setArchiveMode(false);
                initGame();
              }}
              className="back-to-today-btn"
            >
              ← Back to Today
            </button>
          </div>
        )}

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
            <button className="archive-btn" onClick={() => setShowArchive(true)}>
              📚 Archive
            </button>
          </div>
        </div>
      </main>

      {showArchive && (
        <div className="modal-overlay" onClick={() => setShowArchive(false)}>
          <div className="modal-content archive-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📚 Previous Questions</h2>
              <button className="modal-close-btn" onClick={() => setShowArchive(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="archive-info">
                💡 Missed yesterday? Catch up now!
              </div>

              <div className="archive-item yesterday" onClick={() => {
                const yesterdayQuestion = getYesterdaysQuestion();
                handleSelectArchiveQuestion(yesterdayQuestion);
              }}>
                <div className="archive-label">⏮️ YESTERDAY</div>
                <div className="archive-question-title">
                  {getYesterdaysQuestion().question}
                </div>
                <div className="archive-meta">
                  <span className="archive-category">{getYesterdaysQuestion().category}</span>
                </div>
                {loadArchiveQuestion(getYesterdaysQuestion().id)?.hasRead && (
                  <div className="archive-status">✓ Read</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
