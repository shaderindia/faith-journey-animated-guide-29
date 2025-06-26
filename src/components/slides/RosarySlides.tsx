
import React from 'react';
import { Heart, Star, Crown, Book, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const RosaryHistorySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-6 flex justify-center relative">
          <Heart className="w-28 h-28 text-red-400 floating shadow-2xl" />
          <Crown className="absolute -top-3 -right-3 w-18 h-18 text-yellow-300 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="slide-header text-5xl mb-3">The Holy Rosary 📿</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Mary's Gift to All Generations - A Prayer That Unites Hearts Across Time 💕
        </p>
        
        <div className="slide-content space-y-5">
          <div className="slide-bullet text-lg p-3 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Crown className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>1208 AD:</strong> St. Dominic receives the Rosary from Our Lady - a weapon of prayer for souls young and old 👑📿</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Star className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>October 7, 1571:</strong> Battle of Lepanto won through Rosary prayers - children and grandparents praying together for victory ⚔️🙏</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>1917:</strong> Our Lady of Fatima asks for daily Rosary - three shepherd children teaching the world to pray 🐑✨</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-lg mb-3">
          "Hail, favored one! The Lord is with you."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 1:28</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "And Mary said, 'My soul proclaims the greatness of the Lord; my spirit rejoices in God my savior.'"
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 1:46-47</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "And Mary kept all these things, reflecting on them in her heart."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 2:19</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Blessed are you among women, and blessed is the fruit of your womb."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 1:42</div>
        </div>

        <div className="bible-verse text-lg">
          "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Traditional Catholic Prayer</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-base italic max-w-4xl mx-auto font-semibold">
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
        <div className="mb-6 flex justify-center space-x-4">
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Heart className="w-12 h-12 text-yellow-300 floating mx-auto mb-1" />
            <div className="text-yellow-200 text-xs font-bold">JOYFUL</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Star className="w-14 h-14 text-blue-300 floating mx-auto mb-1" style={{ animationDelay: '1s' }} />
            <div className="text-blue-200 text-xs font-bold">LUMINOUS</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Cross className="w-12 h-12 text-red-400 floating mx-auto mb-1" style={{ animationDelay: '2s' }} />
            <div className="text-red-200 text-xs font-bold">SORROWFUL</div>
          </div>
          <div className="text-center hover:scale-110 transition-transform cursor-pointer">
            <Crown className="w-14 h-14 text-white floating mx-auto mb-1" style={{ animationDelay: '3s' }} />
            <div className="text-white text-xs font-bold">GLORIOUS</div>
          </div>
        </div>
        
        <h1 className="slide-header text-5xl mb-3">The Four Sets of Mysteries ✨</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Jesus' Life Through Mary's Eyes - Stories for Every Heart 👁️❤️
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-lg p-3 bg-yellow-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Joyful Mysteries (Monday & Saturday):</strong> Birth and childhood - like watching your own children grow up 👶🎄</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Cross className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Sorrowful Mysteries (Tuesday & Friday):</strong> Passion and death - a mother's heart breaking, a love beyond measure 💔⚔️</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Glorious Mysteries (Wednesday & Sunday):</strong> Resurrection and glory - hope that lifts every weary soul 🌅👑</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Luminous Mysteries (Thursday):</strong> Jesus' public ministry - the light that guides both young seekers and wise elders 💡🌟</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-lg mb-3">
          "And Mary kept all these things, reflecting on them in her heart."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 2:19</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Near the cross of Jesus stood his mother, his mother's sister, Mary the wife of Clopas, and Mary of Magdala."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 19:25</div>
        </div>

        <div className="bible-verse text-lg">
          "On the third day there was a wedding in Cana in Galilee, and the mother of Jesus was there."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 2:1</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryPowerSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <div className="mb-6 flex justify-center relative">
          <Cross className="w-32 h-32 text-yellow-300 floating shadow-2xl" />
          <Heart className="absolute -top-4 -right-4 w-18 h-18 text-red-400 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="slide-header text-5xl mb-3">The Power of the Rosary 💪</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          More Than Beads - A Spiritual Weapon for Every Age 🛡️⚔️
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-lg p-3 bg-green-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Family Unity:</strong> Families that pray together stay together - children learn, parents grow, grandparents smile 👨‍👩‍👧‍👦💕</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Peace of Heart:</strong> In anxiety, in sorrow, in joy - the Rosary brings calm to stormy souls of every age 🌊☮️</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Spiritual Protection:</strong> Mary's mantle covers all who call on her - from playground bullies to life's greatest trials 🛡️👑</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-lg mb-3">
          "Do whatever he tells you."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 2:5</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "From now on will all ages call me blessed."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 1:48</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Woman, behold, your son... Behold, your mother."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 19:26-27</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Pray for us sinners, now and at the hour of our death."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Traditional Hail Mary</div>
        </div>

        <div className="bible-verse text-lg">
          "The prayer of the righteous is powerful and effective."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- James 5:16</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-base italic max-w-4xl mx-auto font-semibold">
          Mary's words at Cana echo in every Rosary - trust, obey, and watch miracles unfold in every generation
        </div>

        {/* Interactive prayer counter */}
        <div className="mt-6 p-3 bg-black bg-opacity-30 rounded-lg max-w-2xl mx-auto">
          <div className="text-yellow-200 text-base font-bold mb-1">🙏 Remember:</div>
          <div className="text-white text-base">
            The Rosary = 150 Hail Marys<br/>
            5 decades = 50 Hail Marys per mystery set<br/>
            Perfect for daily prayer and meditation
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
