
import React from 'react';
import { Heart, Star, Crown, Book, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const RosaryHistorySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        {/* Mary and Jesus image */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=350&h=350&fit=crop&crop=center" 
            alt="Mary and Jesus - Holy Rosary" 
            className="w-40 h-40 rounded-full object-cover border-4 border-red-400 floating shadow-2xl"
          />
          <Heart className="absolute -top-4 -right-4 w-20 h-20 text-red-400 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
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
        
        {/* Jesus images in corners */}
        <div className="absolute top-10 left-10 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Child Jesus" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '2s' }}
          />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Jesus Christ" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="bible-verse">
          "Hail, favored one! The Lord is with you."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:28 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "And Mary said: 'My soul proclaims the greatness of the Lord; my spirit rejoices in God my savior.'"
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:46-47 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Blessed are you among women, and blessed is the fruit of your womb."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:42 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
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
        {/* Jesus in different life stages */}
        <div className="mb-6 flex justify-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=200&h=200&fit=crop&crop=center" 
            alt="Baby Jesus - Joyful Mysteries" 
            className="w-20 h-20 rounded-full object-cover border-2 border-yellow-300 floating shadow-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=200&h=200&fit=crop&crop=center" 
            alt="Jesus Teaching - Luminous Mysteries" 
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-300 floating shadow-lg"
            style={{ animationDelay: '1s' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=200&h=200&fit=crop&crop=center" 
            alt="Jesus Crucified - Sorrowful Mysteries" 
            className="w-20 h-20 rounded-full object-cover border-2 border-red-400 floating shadow-lg"
            style={{ animationDelay: '2s' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=200&h=200&fit=crop&crop=center" 
            alt="Risen Jesus - Glorious Mysteries" 
            className="w-22 h-22 rounded-full object-cover border-2 border-white floating shadow-lg"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <Star className="catholic-icon mx-auto mb-6 w-24 h-24 text-yellow-300 floating" />
        
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
        </div>

        <div className="bible-verse mt-4">
          "His mother treasured all these things in her heart."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 2:51 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Standing by the cross of Jesus were his mother and his mother's sister, Mary the wife of Clopas, and Mary of Magdala."
          <div className="text-yellow-300 mt-2 font-semibold">- John 19:25 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          Like Mary, we ponder Jesus' life - each bead a memory, each prayer a love letter to Heaven
        </div>
      </div>
    </PresentationSlide>
  );
};

export const RosaryPowerSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        {/* Jesus with outstretched arms */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=400&fit=crop&crop=center" 
            alt="Jesus Christ with outstretched arms" 
            className="w-48 h-48 rounded-lg object-cover border-4 border-yellow-300 floating shadow-2xl"
          />
          <Cross className="alternate -top-6 -right-6 w-24 h-24 text-yellow-300 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
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
        
        {/* Small Jesus images around the content */}
        <div className="absolute top-20 left-16 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus praying" 
            className="w-12 h-12 rounded-full object-cover floating"
            style={{ animationDelay: '2s' }}
          />
        </div>
        
        <div className="absolute top-20 right-16 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus blessing" 
            className="w-12 h-12 rounded-full object-cover floating"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="bible-verse">
          "Do whatever he tells you."
          <div className="text-yellow-300 mt-2 font-semibold">- John 2:5 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Pray without ceasing. In all circumstances give thanks, for this is the will of God for you in Christ Jesus."
          <div className="text-yellow-300 mt-2 font-semibold">- 1 Thessalonians 5:17-18 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "The prayer of a righteous person is very powerful."
          <div className="text-yellow-300 mt-2 font-semibold">- James 5:16 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Woman, behold, your son... Behold, your mother."
          <div className="text-yellow-300 mt-2 font-semibold">- John 19:26-27 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          Mary's words at Cana echo in every Rosary - trust, obey, and watch miracles unfold in every generation
        </div>
      </div>
    </PresentationSlide>
  );
};
