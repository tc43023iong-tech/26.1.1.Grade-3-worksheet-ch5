import React, { useState, useMemo } from 'react';
import { QuizCard } from './components/QuizCard';
import { Button } from './components/Button';
import { questions } from './data';
import { Question } from './types';
import { Star, Trophy, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  // Store answers as map: questionId -> answerString (optionID or full text)
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [hasStarted, setHasStarted] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Group questions by category for sections
  const sections = useMemo(() => {
    const groups: { title: string; questions: Question[] }[] = [];
    let currentCategory = '';
    
    questions.forEach((q) => {
      const cat = q.category; 
      if (cat !== currentCategory) {
        currentCategory = cat;
        groups.push({ title: currentCategory, questions: [] });
      }
      groups[groups.length - 1].questions.push(q);
    });
    return groups;
  }, []);

  // Calculate stats
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  
  const score = useMemo(() => {
    return Object.entries(answers).reduce((acc, [qId, userAns]) => {
      const question = questions.find(q => q.id === Number(qId));
      if (!question) return acc;

      if (question.type === 'choice') {
        const option = question.options?.find(o => o.id === userAns);
        return option?.isCorrect ? acc + 1 : acc;
      } else if (question.type === 'reorder') {
        return userAns === question.correctAnswer ? acc + 1 : acc;
      }
      return acc;
    }, 0);
  }, [answers]);

  const handleStart = () => {
    setHasStarted(true);
    setCurrentSectionIndex(0);
    setShowResults(false);
    window.scrollTo(0, 0);
  };

  const handleAnswer = (questionId: number, answerValue: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerValue
    }));
  };

  const handleNextSection = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setShowResults(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentSectionIndex(0);
    setShowResults(false);
    window.scrollTo(0, 0);
  };

  const getPartLetter = (title: string) => {
    return title.charAt(0);
  };

  // Helper to find global index for visual numbering
  const getGlobalIndex = (qId: number) => questions.findIndex(q => q.id === qId);

  // Intro Screen
  if (!hasStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-10 rounded-[3rem] shadow-[0_12px_0_0_rgba(0,0,0,0.1)] border-8 border-cute-yellow max-w-lg w-full animate-pop relative overflow-visible">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-9xl animate-bounce-slow filter drop-shadow-lg">
            🐱
          </div>
          <h1 className="text-5xl font-display font-bold text-primary mb-6 mt-12 tracking-tight leading-tight">
            English Fun Quest!
          </h1>
          <p className="text-gray-500 mb-10 font-sans text-xl leading-snug font-medium">
            Grade 3 • Chapter 5<br/>
            <span className="text-base text-gray-400 mt-3 block font-bold bg-gray-50 py-3 px-6 rounded-2xl">
              "Vocabulary & Grammar Adventure"
              <br/>(生字與文法大冒險)
            </span>
          </p>
          <Button onClick={handleStart} size="lg" className="w-full bg-cute-blue border-cute-blue hover:bg-blue-400 shadow-cute-blue/30">
            Start! (開始!)
          </Button>
        </div>
      </div>
    );
  }

  const percentage = Math.round((score / totalQuestions) * 100);
  const currentSection = sections[currentSectionIndex];
  const isLastSection = currentSectionIndex === sections.length - 1;

  return (
    <div className="min-h-screen pb-32">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#FFF9F0]/95 backdrop-blur-sm border-b-4 border-white shadow-sm py-3 px-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl shadow-sm border-2 border-cute-pink flex items-center gap-2 px-5">
              <Star className="text-cute-yellow fill-cute-yellow w-6 h-6" />
              <span className="font-display font-bold text-gray-700 text-2xl">{score}</span>
              <span className="text-gray-300 text-lg font-bold">/ {totalQuestions}</span>
            </div>
          </div>
          
          <div className="flex-1 mx-6 max-w-[150px] md:max-w-sm h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-white">
            <div 
              className="h-full bg-cute-green transition-all duration-500 rounded-full"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>

          <div className="text-primary font-display font-bold text-base md:text-lg bg-white px-4 py-2 rounded-2xl border-2 border-primary/20">
             Part {getPartLetter(currentSection.title)}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        
        {showResults ? (
          // --- Results Screen ---
          <div className="mt-8 text-center animate-pop bg-white p-10 rounded-[3rem] border-8 border-cute-green shadow-xl relative overflow-hidden max-w-3xl mx-auto">
             <div className="absolute top-0 left-0 w-full h-5 bg-cute-green/20"></div>
            <Trophy className="w-28 h-28 text-cute-yellow mx-auto mb-6 animate-wiggle filter drop-shadow-md" />
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
              Mission Complete!
            </h2>
            <p className="text-gray-500 mb-8 text-xl">
              You got {score} out of {totalQuestions} correct!
              <br/>
              {percentage === 100 ? "Perfect Score! 🌟" : "Good practice! 👍"}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setShowResults(false)} variant="neutral" size="md">
                Review Answers
              </Button>
              <Button onClick={handleRestart} variant="primary" size="md">
                <RotateCcw className="mr-2 w-5 h-5" /> Play Again (再玩一次)
              </Button>
            </div>
          </div>
        ) : (
          // --- Section Questions Screen ---
          <div className="animate-pop">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6 sticky top-24 z-40">
              <div className="w-14 h-14 rounded-full bg-primary text-white font-display font-bold text-2xl flex items-center justify-center shadow-[0_4px_0_0_rgba(0,0,0,0.2)] border-4 border-white transform -rotate-6">
                {getPartLetter(currentSection.title)}
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-700 bg-white/95 backdrop-blur px-6 py-3 rounded-2xl border-2 border-cute-blue shadow-sm flex-1 leading-tight">
                {currentSection.title}
              </h2>
            </div>

            {/* Questions in this section - Reduced space-y from 4 to 3 */}
            <div className="space-y-3 md:pl-8 md:border-l-4 md:border-dashed md:border-gray-200/50 md:ml-7 mb-10">
              {currentSection.questions.map((q) => (
                <QuizCard 
                  key={q.id}
                  index={getGlobalIndex(q.id)}
                  question={q}
                  userAnswerId={answers[q.id] || null}
                  onSelectOption={(ans) => handleAnswer(q.id, ans)}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4 mt-8 pt-8 border-t-4 border-gray-100">
               <div className="w-1/3">
                 {currentSectionIndex > 0 && (
                   <Button onClick={handlePrevSection} variant="neutral" className="w-full md:w-auto">
                     <ArrowLeft className="mr-2 w-6 h-6" /> Previous (上一頁)
                   </Button>
                 )}
               </div>
               
               <div className="w-1/3 text-center text-gray-400 font-bold">
                 Page {currentSectionIndex + 1} of {sections.length}
               </div>

               <div className="w-1/3 flex justify-end">
                 <Button 
                   onClick={handleNextSection} 
                   variant={isLastSection ? 'primary' : 'secondary'}
                   className="w-full md:w-auto"
                 >
                   {isLastSection ? (
                     <>Finish (完成) <Trophy className="ml-2 w-6 h-6" /></>
                   ) : (
                     <>Next (下一頁) <ArrowRight className="ml-2 w-6 h-6" /></>
                   )}
                 </Button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;