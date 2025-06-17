
import { useNavigate } from 'react-router-dom';
import { Flag, Target, Film, History } from 'lucide-react';

const categories = [
  {
    id: 'category1',
    title: 'Category 1',
    icon: Flag,
    emoji: '🌍',
    color: 'from-blue-500 to-cyan-500',
    description: 'Test your knowledge'
  },
  {
    id: 'category2',
    title: 'Category 2',
    icon: Target,
    emoji: '🎯',
    color: 'from-green-500 to-emerald-500',
    description: 'Challenge yourself'
  },
  {
    id: 'category3',
    title: 'Category 3',
    icon: Film,
    emoji: '🎬',
    color: 'from-purple-500 to-pink-500',
    description: 'Explore and learn'
  },
  {
    id: 'category4',
    title: 'Category 4',
    icon: History,
    emoji: '📜',
    color: 'from-orange-500 to-red-500',
    description: 'Discover more'
  }
];

const Index = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: string) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Quiz<span className="text-yellow-400">Verse</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Test your knowledge across multiple categories
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer animate-fade-in hover-scale"
                style={{animationDelay: `${index * 0.1 + 0.3}s`}}
                onClick={() => handleCategorySelect(category.id)}
              >
                <div className={`bg-gradient-to-r ${category.color} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-opacity-20 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {category.emoji}
                      </div>
                      <IconComponent className="w-8 h-8 mx-auto mb-4 text-white opacity-80" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-200 opacity-90">
                        {category.description}
                      </p>
                      <div className="mt-6 inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full text-white font-semibold group-hover:bg-opacity-30 transition-all duration-300">
                        Start Quiz →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Challenge yourself with 10 timed questions per category
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
