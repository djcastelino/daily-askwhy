import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-JKZZWDPZP9';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track question views
export const trackQuestionView = (questionText: string, category: string) => {
  ReactGA.event({
    category: 'Content',
    action: 'question_viewed',
    label: `${category}: ${questionText}`,
  });
};

// Track share
export const trackShare = (questionText: string) => {
  ReactGA.event({
    category: 'Social',
    action: 'question_shared',
    label: questionText,
  });
};

// Track archive views
export const trackArchiveView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'archive_viewed',
  });
};

// Track archive question access
export const trackArchiveQuestion = (questionNumber: number) => {
  ReactGA.event({
    category: 'Content',
    action: 'archive_question_accessed',
    value: questionNumber,
  });
};

