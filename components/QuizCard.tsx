import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { CheckCircle2, XCircle, Volume2, RotateCcw } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  userAnswerId: string | null;
  onSelectOption: (id: string) => void;
  index: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  userAnswerId,
  onSelectOption,
  index,
}) => {
  // State for Reorder type questions
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<{id: number, text: string}[]>([]);

  // Initialize words for reorder questions
  useEffect(() => {
    if (question.type === 'reorder' && question.words) {
      const wordsWithIds = question.words.map((word, idx) => ({
        id: idx,
        text: word
      }));
      if (!userAnswerId) {
        setAvailableWords(wordsWithIds);
        setSelectedWords([]);
      }
    }
  }, [question, userAnswerId]);

  const isAnswered = userAnswerId !== null;
  
  let isCorrect = false;
  let correctTextDisplay = "";

  if (question.type === 'choice') {
    const selectedOption = question.options?.find(o => o.id === userAnswerId);
    isCorrect = selectedOption?.isCorrect ?? false;
    correctTextDisplay = question.options?.find(o => o.isCorrect)?.text || "";
  } else if (question.type === 'reorder') {
    isCorrect = userAnswerId === question.correctAnswer;
    correctTextDisplay = question.correctAnswer || "";
  }

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(question.questionText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleWordClick = (wordObj: {id: number, text: string}) => {
    if (isAnswered) return;
    setAvailableWords(prev => prev.filter(w => w.id !== wordObj.id));
    setSelectedWords(prev => [...prev, wordObj.text]);
  };

  const handleSelectedWordClick = (wordText: string, indexToRemove: number) => {
    if (isAnswered) return;
    setSelectedWords(prev => prev.filter((_, i) => i !== indexToRemove));
    setAvailableWords(prev => [...prev, { id: Date.now() + Math.random(), text: wordText }]);
  };

  const handleReorderSubmit = () => {
    const answerString = selectedWords.join(' ').replace(/\s+([.,!?;:])/g, '$1');
    onSelectOption(answerString);
  };

  const handleResetReorder = () => {
    if (question.words) {
      const wordsWithIds = question.words.map((word, idx) => ({
        id: idx,
        text: word
      }));
      setAvailableWords(wordsWithIds);
      setSelectedWords([]);
    }
  }

  const borderColors = [
    'border-cute-pink',
    'border-cute-blue',
    'border-cute-yellow',
    'border-cute-green',
    'border-cute-purple'
  ];
  const borderColor = borderColors[index % borderColors.length];
  
  const badgeColors = [
    'bg-cute-pink',
    'bg-cute-blue',
    'bg-cute-yellow',
    'bg-cute-green',
    'bg-cute-purple'
  ];
  const badgeColor = badgeColors[index % badgeColors.length];

  // Determine if we should show the bottom feedback box
  const shouldShowFeedbackBox = isAnswered && (
    !isCorrect || 
    question.category.startsWith('C') || 
    question.category.startsWith('D')
  );

  return (
    <div className={`w-full bg-white rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.1)] border-4 ${borderColor} mb-2 overflow-hidden transition-all duration-300`}>
      {/* Header Area */}
      <div className={`p-3 md:p-4 ${shouldShowFeedbackBox ? 'pb-1' : ''}`}>
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={`${badgeColor} text-gray-800 font-display font-black px-2 py-0.5 rounded-full text-xs shadow-sm border-2 border-white`}>
                #{index + 1}
              </span>
              <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                {question.category}
              </span>
              <button 
                onClick={handleSpeak}
                className="text-cute-blue hover:text-primary transition-colors p-1"
                title="Read aloud"
              >
                <Volume2 size={16} />
              </button>
            </div>
            
            <h3 className="text-lg md:text-xl font-display font-bold text-gray-800 leading-snug tracking-tight">
              {question.type === 'choice' ? (
                question.questionText.split(/(_+)/).map((part, i) => {
                  if (part.match(/_+/)) {
                    return (
                      <span key={i} className={`inline-block px-1 border-b-2 border-dashed mx-1 align-baseline ${isAnswered ? (isCorrect ? 'border-green-400 text-green-600' : 'border-red-400 text-red-500') : 'border-gray-300'}`}>
                        {isAnswered ? 
                          (question.options?.find(o => o.id === userAnswerId)?.text || part) 
                          : part}
                      </span>
                    );
                  }
                  return <React.Fragment key={i}>{part}</React.Fragment>;
                })
              ) : (
                question.questionText
              )}
            </h3>
            
            {/* Chinese Text */}
            {(!isAnswered || !isCorrect) && (
              <p className="text-gray-400 text-sm mt-1 font-sans font-bold leading-tight">
                {question.chineseText}
              </p>
            )}
          </div>

          {/* Result Icon Badge */}
          {isAnswered && (
            <div className={`flex-shrink-0 animate-pop ${isCorrect ? 'text-green-500' : 'text-red-400'}`}>
              {isCorrect ? <CheckCircle2 size={28} className="fill-green-100" /> : <XCircle size={28} className="fill-red-100" />}
            </div>
          )}
        </div>
      </div>

      {/* Interaction Area */}
      {/* Dynamic padding: if answered and showing feedback, use tighter padding to be compact */}
      <div className={`${(!isAnswered || shouldShowFeedbackBox) ? (isAnswered ? 'p-2 pt-0 pb-2' : 'p-3 md:p-4 pt-1') : 'h-0 p-0 overflow-hidden'}`}>
        
        {/* Choice Questions - Options HIDDEN if answered */}
        {question.type === 'choice' && !isAnswered && (
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
             {question.options?.map((option) => (
                <Button
                  key={option.id}
                  variant="neutral"
                  size="md"
                  onClick={() => onSelectOption(option.id)}
                  className="w-full justify-start text-left h-auto py-2 px-3 transition-all group hover:bg-cute-blue hover:text-white hover:border-cute-blue"
                >
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 text-[10px] font-bold flex items-center justify-center mr-2 flex-shrink-0 transition-colors group-hover:bg-white group-hover:text-cute-blue">
                    {option.id.toUpperCase()}
                  </span>
                  <span className="text-base md:text-lg font-bold leading-tight">{option.text}</span>
                </Button>
             ))}
           </div>
        )}

        {/* Reorder Logic - Interactive Area hidden if answered */}
        {question.type === 'reorder' && !isAnswered && (
            <div className="space-y-2">
              <div className="min-h-[40px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-1.5 flex flex-wrap gap-1.5 items-center">
                 {selectedWords.length === 0 && (
                   <span className="text-gray-400 font-bold text-xs select-none ml-1">Click words...</span>
                 )}
                 {selectedWords.map((word, idx) => (
                   <button
                      key={idx}
                      onClick={() => handleSelectedWordClick(word, idx)}
                      className="bg-white border border-cute-blue text-gray-700 font-bold text-sm px-2 py-0.5 rounded shadow-sm hover:bg-red-50 hover:text-red-500 transition-all animate-pop"
                   >
                     {word}
                   </button>
                 ))}
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {availableWords.map((wordObj) => (
                  <button
                    key={wordObj.id}
                    onClick={() => handleWordClick(wordObj)}
                    className="bg-white border-b border-gray-200 text-gray-600 font-bold text-base px-2 py-0.5 rounded hover:-translate-y-0.5 hover:border-b-2 hover:border-cute-yellow active:translate-y-0 active:border-b-0 transition-all"
                  >
                    {wordObj.text}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                 <Button 
                  variant="neutral" 
                  onClick={handleResetReorder}
                  disabled={selectedWords.length === 0}
                  className="flex-1 opacity-80 py-1.5 text-sm"
                 >
                   <RotateCcw size={14} /> Reset
                 </Button>
                 <Button 
                  variant="primary" 
                  onClick={handleReorderSubmit}
                  disabled={selectedWords.length === 0}
                  className="flex-[2] py-1.5 text-sm"
                 >
                   Check Answer
                 </Button>
              </div>
            </div>
        )}

        {/* Feedback Box - More Compact */}
        {shouldShowFeedbackBox && (
          <div className={`mt-0.5 animate-pop rounded-lg p-2 border-2 flex items-start gap-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
             <div className="mt-0.5 flex-shrink-0">
               {isCorrect ? (
                 <CheckCircle2 size={20} className="text-green-500" />
               ) : (
                 <XCircle size={20} className="text-red-500" />
               )}
             </div>
             <div className={`flex-1 flex flex-col justify-center ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {/* Error Label */}
                {!isCorrect && <span className="font-bold text-xs uppercase tracking-wide opacity-80 mb-0.5 leading-none">Oops!</span>}
                
                {/* The Answer Text - Compact but bold */}
                <span className="font-display font-black text-lg md:text-xl leading-tight">
                  {correctTextDisplay}
                </span>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};