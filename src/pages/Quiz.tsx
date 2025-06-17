
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flag, Cricket, Film, History } from 'lucide-react';
import { getQuestionsByCategory } from '../data/questions';

const categoryIcons = {
  countries: Flag,
  cricket: Cricket,
  cinema: Film,
  history: History
};

const categoryColors = {
  countries: 'from-blue-500 to-cyan-500',
  cricket: 'from-green-500 to-emerald-500',
  cinema: 'from-purple-500 to-pink-500',
  history: 'from-orange-500 to-red-500'
};

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizStartTime, setQuizStartTime] = useState(Date.now());

  useEffect(() => {
    if (category) {
      const categoryQuestions = getQuestionsByCategory(category);
      // Shuffle and take 10 questions
      const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
      setQuestions(shuffled);
      setQuizStartTime(Date.now());
    }
  }, [category]);

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, {
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect
    }]);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setTimeLeft(15);
    } else {
      const totalTime = Math.floor((Date.now() - quizStartTime) / 1000);
      navigate('/results', {
        state: {
          score,
          total: questions.length,
          category,
          answers: [...answers, {
            question: currentQuestion.question,
            selectedAnswer,
            correctAnswer: currentQuestion.answer,
            isCorrect
          }],
          timeTaken: totalTime
        }
      });
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading questions...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
  const colorClass = categoryColors[category as keyof typeof categoryColors];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <IconComponent className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white capitalize">{category}</h1>
          </div>
          <div className="text-white">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-8">
          <div 
            className={`bg-gradient-to-r ${colorClass} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center mb-8">
          <div className={`bg-gradient-to-r ${colorClass} p-1 rounded-full`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-xl font-bold text-white">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              {currentQuestion.question}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(choice)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedAnswer === choice
                      ? `bg-gradient-to-r ${colorClass} text-white shadow-lg transform scale-105`
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 hover:scale-102'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      selectedAnswer === choice ? 'bg-white text-purple-600' : 'bg-white bg-opacity-20'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{choice}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className={`px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 ${
                  selectedAnswer
                    ? `bg-gradient-to-r ${colorClass} hover:scale-105 shadow-lg`
                    : 'bg-gray-500 cursor-not-allowed opacity-50'
                }`}
              >
                {currentQuestionIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
