
import React from 'react';
import { Heart, Star, Crown, Book, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const RosaryHistorySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-8 flex justify-center relative">
          <Heart className="w-32 h-32 text-red-400 floating shadow-2xl" />
          <Crown className="absolute -top-4 -right-4 w-24 h-24 text-yellow-300 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="slide-header text-6xl mb-4">The Holy Rosary 📿</h1>
        <p className="slide-subheader text-3xl text-yellow-200 mb-8">
          Mary's Gift to All Generations - A Prayer That Unites Hearts Across Time 💕
        </p>
        
        <div className="slide-content space-y-8">
          <div className="slide-bullet text-2xl p-4 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Crown className="catholic-icon" />
            <span><strong>1208 AD:</strong> St. Dominic receives the Rosary from Our Lady - a weapon of prayer for souls young and old 👑📿</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Star className="catholic-icon" />
            <span><strong>October 7, 1571:</strong> Battle of Lepanto won through Rosary prayers - children and grandparents praying together for victory ⚔️🙏</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Heart className="catholic-icon" />
            <span><strong>1917:</strong> Our Lady of Fatima asks for daily Rosary - three shepherd children teaching the world to pray 🐑✨</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Cross className="catholic-icon" />
            <span><strong>2002:</strong> Pope John Paul II adds Luminous Mysteries - new light for old prayers, bridging generations 💡📿</span>
          </div>
        </div>
        
        <div className="bible-verse mt-8 text-xl">
          "Hail, favored one! The Lord is with you."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:28 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-xl italic max-w-4xl mx-auto font-semibold">
          The angel's greeting becomes our daily prayer - from first words to final breath
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryMysteriesSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <div className="mb-8 flex justify-center space-x-6">
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Heart className="w-16 h-16 text-yellow-300 floating mx-auto mb-2" />
            <div className="text-yellow-200 text-sm font-bold">JOYFUL</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Star className="w-20 h-20 text-blue-300 floating mx-auto mb-2" style={{ animationDelay: '1s' }} />
            <div className="text-blue-200 text-sm font-bold">LUMINOUS</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Cross className="w-16 h-16 text-red-400 floating mx-auto mb-2" style={{ animationDelay: '2s' }} />
            <div className="text-red-200 text-sm font-bold">SORROWFUL</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Crown className="w-18 h-18 text-white floating mx-auto mb-2" style={{ animationDelay: '3s' }} />
            <div className="text-white text-sm font-bold">GLORIOUS</div>
          </div>
        </div>
        
        <h1 className="slide-header text-6xl mb-4">The Four Sets of Mysteries ✨</h1>
        <p className="slide-subheader text-3xl text-yellow-200 mb-8">
          Jesus' Life Through Mary's Eyes - Stories for Every Heart 👁️❤️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet text-2xl p-4 bg-yellow-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="catholic-icon" />
            <span><strong>Joyful Mysteries (Monday & Saturday):</strong> Birth and childhood - like watching your own children grow up 👶🎄</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Cross className="catholic-icon" />
            <span><strong>Sorrowful Mysteries (Tuesday & Friday):</strong> Passion and death - a mother's heart breaking, a love beyond measure 💔⚔️</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="catholic-icon" />
            <span><strong>Glorious Mysteries (Wednesday & Sunday):</strong> Resurrection and glory - hope that lifts every weary soul 🌅👑</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="catholic-icon" />
            <span><strong>Luminous Mysteries (Thursday):</strong> Jesus' public ministry - the light that guides both young seekers and wise elders 💡🌟</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-xl">
          "And Mary kept all these things, reflecting on them in her heart."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 2:19 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryPowerSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <div className="mb-8 flex justify-center relative">
          <Cross className="w-40 h-40 text-yellow-300 floating shadow-2xl" />
          <Heart className="absolute -top-6 -right-6 w-24 h-24 text-red-400 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="slide-header text-6xl mb-4">The Power of the Rosary 💪</h1>
        <p className="slide-subheader text-3xl text-yellow-200 mb-8">
          More Than Beads - A Spiritual Weapon for Every Age 🛡️⚔️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet text-2xl p-4 bg-green-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="catholic-icon" />
            <span><strong>Family Unity:</strong> Families that pray together stay together - children learn, parents grow, grandparents smile 👨‍👩‍👧‍👦💕</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="catholic-icon" />
            <span><strong>Peace of Heart:</strong> In anxiety, in sorrow, in joy - the Rosary brings calm to stormy souls of every age 🌊☮️</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="catholic-icon" />
            <span><strong>Spiritual Protection:</strong> Mary's mantle covers all who call on her - from playground bullies to life's greatest trials 🛡️👑</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-orange-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Book className="catholic-icon" />
            <span><strong>Biblical Prayer:</strong> Every Hail Mary echoes Scripture - the Word made flesh in beads and breath 📖🙏</span>
          </div>
        </div>
        
        <div className="bible-verse mt-8 text-xl">
          "Do whatever he tells you."
          <div className="text-yellow-300 mt-2 font-semibold">- John 2:5 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-xl italic max-w-4xl mx-auto font-semibold">
          Mary's words at Cana echo in every Rosary - trust, obey, and watch miracles unfold in every generation
        </div>

        {/* Interactive prayer counter */}
        <div className="mt-8 p-4 bg-black bg-opacity-30 rounded-lg max-w-2xl mx-auto">
          <div className="text-yellow-200 text-lg font-bold mb-2">🙏 Remember:</div>
          <div className="text-white text-lg">
            The Rosary = 150 Hail Marys<br/>
            5 decades = 50 Hail Marys per mystery set<br/>
            Perfect for daily prayer and meditation
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
