export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export type QuestionType = 'choice' | 'reorder';

export interface Question {
  id: number;
  type: QuestionType; // New: distinguish between multiple choice and reorder
  category: string;
  questionText: string;
  chineseText: string; // For bilingual support
  options?: Option[]; // For multiple choice
  words?: string[]; // For reordering questions
  correctAnswer?: string; // For reordering questions (the full correct string)
  imageUrl?: string; // Optional image for context
  explanation?: string; // Shown after answering
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showFeedback: boolean;
  isCorrect: boolean | null; // null if not answered yet
  isFinished: boolean;
  selectedOptionId: string | null;
}