import { useLocation, useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target as TargetIcon, Home, RotateCcw, Share2, Flag, Target, Film, History } from 'lucide-react';

const categoryIcons = {
  category1: Flag,
  category2: Target,
  category3: Film,
  category4: History
};

const categoryColors = {
  category1: 'from-blue-500 to-cyan-500',
  category2: 'from-green-500 to-emerald-500',
  category3: 'from-purple-500 to-pink-500',
  category4: 'from-orange-500 to-red-500'
};

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { score, total, category, answers, timeTaken } = location.state || {};
  
  if (!score && score !== 0) {
    navigate('/');
    return null;
  }

  const accuracy = Math.round((score / total) * 100);
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
  const colorClass = categoryColors[category as keyof typeof categoryColors];
  
  const getPerformanceMessage = () => {
    if (accuracy >= 90) return "Outstanding! 🌟";
    if (accuracy >= 80) return "Excellent! 🎉";
    if (accuracy >= 70) return "Great job! 👏";
    if (accuracy >= 60) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'QuizVerse Results',
        text: `I scored ${score}/${total} (${accuracy}%) in ${category} quiz on QuizVerse!`,
        url: window.location.origin
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `I scored ${score}/${total} (${accuracy}%) in ${category} quiz on QuizVerse!`;
      navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Quiz Complete!
          </h1>
          <div className="flex items-center justify-center space-x-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <IconComponent className="w-6 h-6 text-white" />
            <span className="text-xl text-gray-300 capitalize">{category}</span>
          </div>
        </div>

        {/* Score Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className={`bg-gradient-to-r ${colorClass} p-1 rounded-3xl shadow-2xl animate-scale-in`} style={{animationDelay: '0.3s'}}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-white mb-2">
                  {score}<span className="text-4xl text-gray-300">/{total}</span>
                </div>
                <div className="text-2xl text-yellow-400 font-bold mb-2">
                  {accuracy}% Accuracy
                </div>
                <div className="text-xl text-gray-200">
                  {getPerformanceMessage()}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold text-white">{score}</div>
                    <div className="text-sm text-gray-300">Correct</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <div className="text-2xl font-bold text-white">{formatTime(timeTaken)}</div>
                    <div className="text-sm text-gray-300">Time</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4">
                    <TargetIcon className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <div className="text-2xl font-bold text-white">{accuracy}%</div>
                    <div className="text-sm text-gray-300">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate(`/quiz/${category}`)}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${colorClass} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Play Again</span>
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-white bg-opacity-20 text-white font-bold rounded-xl hover:bg-opacity-30 transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  <span>Home</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-white bg-opacity-20 text-white font-bold rounded-xl hover:bg-opacity-30 transition-all duration-300"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Review Your Answers</h3>
          <div className="space-y-4">
            {answers?.map((answer, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    answer.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-2">{answer.question}</h4>
                    <div className="space-y-1">
                      <div className={`text-sm ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        Your answer: {answer.selectedAnswer || 'No answer selected'}
                      </div>
                      {!answer.isCorrect && (
                        <div className="text-sm text-green-400">
                          Correct answer: {answer.correctAnswer}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    answer.isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {answer.isCorrect ? '✓' : '✗'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
