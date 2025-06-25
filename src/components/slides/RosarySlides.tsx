
import React from 'react';
import { Heart, Star, Crown, Book, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const RosaryHistorySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Heart className="catholic-icon mx-auto mb-6 w-32 h-32 text-red-400 floating" />
        
        <h1 className="slide-header">The Holy Rosary 📿</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Mary's Gift to All Generations - A Prayer That Unites Hearts Across Time 💕
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>1208 AD:</strong> St. Dominic receives the Rosary from Our Lady - a weapon of prayer for souls young and old 👑📿</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span><strong>October 7, 1571:</strong> Battle of Lepanto won through Rosary prayers - children and grandparents praying together for victory ⚔️🙏</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>1917:</strong> Our Lady of Fatima asks for daily Rosary - three shepherd children teaching the world to pray 🐑✨</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span><strong>2002:</strong> Pope John Paul II adds Luminous Mysteries - new light for old prayers, bridging generations 💡📿</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Hail, favored one! The Lord is with you."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:28 (NAB)</div>
          <div className="text-yellow-200 mt-3 text-lg italic">
            The angel's greeting becomes our daily prayer - from first words to final breath
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryMysteriesSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <Star className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">The Four Sets of Mysteries ✨</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Jesus' Life Through Mary's Eyes - Stories for Every Heart 👁️❤️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>Joyful Mysteries (Monday & Saturday):</strong> Birth and childhood - like watching your own children grow up 👶🎄</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span><strong>Sorrowful Mysteries (Tuesday & Friday):</strong> Passion and death - a mother's heart breaking, a love beyond measure 💔⚔️</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>Glorious Mysteries (Wednesday & Sunday):</strong> Resurrection and glory - hope that lifts every weary soul 🌅👑</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span><strong>Luminous Mysteries (Thursday):</strong> Jesus' public ministry - the light that guides both young seekers and wise elders 💡🌟</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "And Mary kept all these things, reflecting on them in her heart."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 2:19 (NAB)</div>
          <div className="text-yellow-200 mt-3 text-lg italic">
            Like Mary, we ponder Jesus' life - each bead a memory, each prayer a love letter
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryPowerSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Cross className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">The Power of the Rosary 💪</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          More Than Beads - A Spiritual Weapon for Every Age 🛡️⚔️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>Family Unity:</strong> Families that pray together stay together - children learn, parents grow, grandparents smile 👨‍👩‍👧‍👦💕</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span><strong>Peace of Heart:</strong> In anxiety, in sorrow, in joy - the Rosary brings calm to stormy souls of every age 🌊☮️</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>Spiritual Protection:</strong> Mary's mantle covers all who call on her - from playground bullies to life's greatest trials 🛡️👑</span>
          </div>
          
          <div className="slide-bullet">
            <Book className="catholic-icon" />
            <span><strong>Biblical Prayer:</strong> Every Hail Mary echoes Scripture - the Word made flesh in beads and breath 📖🙏</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Do whatever he tells you."
          <div className="text-yellow-300 mt-2 font-semibold">- John 2:5 (NAB)</div>
          <div className="text-yellow-200 mt-3 text-lg italic">
            Mary's words at Cana echo in every Rosary - trust, obey, and watch miracles unfold
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
