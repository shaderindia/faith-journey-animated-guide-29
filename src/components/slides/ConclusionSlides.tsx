
import React from 'react';
import { Heart, Star, Globe, Users, Crown, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const SummarySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        {/* Jesus as King and Shepherd */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=350&h=350&fit=crop&crop=center" 
            alt="Jesus Christ the King" 
            className="w-40 h-40 rounded-full object-cover border-4 border-red-400 floating shadow-2xl"
          />
          <Crown className="absolute -top-4 -right-4 w-20 h-20 text-yellow-300 floating" style={{ animationDelay: '1s' }} />
          <Heart className="absolute -bottom-2 -left-2 w-16 h-16 text-red-400 floating" style={{ animationDelay: '2s' }} />
        </div>
        
        <h1 className="slide-header">Our Faith Journey Together 🚀</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          From the Cross to Today - A Love Story That Never Ends 💕
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span><strong>God's Love:</strong> Unconditional, eternal, embracing every heart from first breath to final prayer 💖♾️</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>Rich History:</strong> 2000 years of faith, sacrifice, and triumph - we stand on the shoulders of saints 📚👑</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span><strong>Living Tradition:</strong> Ancient prayers, modern hearts - the Rosary, Mass, and sacraments unite all generations 📿⛪</span>
          </div>
          
          <div className="slide-bullet">
            <Globe className="catholic-icon" />
            <span><strong>Global Mission:</strong> Young and old, sharing the Good News in every language, every culture, every age 🌍💬</span>
          </div>
        </div>
        
        {/* Multiple Jesus images representing different aspects */}
        <div className="absolute top-12 left-12 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Jesus teaching" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="absolute top-12 right-12 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Jesus healing" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="absolute bottom-12 left-12 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Jesus with children" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '5s' }}
          />
        </div>
        
        <div className="bible-verse">
          "Jesus Christ is the same yesterday, today, and forever."
          <div className="text-yellow-300 mt-2 font-semibold">- Hebrews 13:8 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "One generation praises your deeds to the next and proclaims your mighty works."
          <div className="text-yellow-300 mt-2 font-semibold">- Psalm 145:4 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "We will not hide them from their children; we will tell to the coming generation the glorious deeds of the LORD."
          <div className="text-yellow-300 mt-2 font-semibold">- Psalm 78:4 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The same Jesus who blessed children also walked with elders - constant through every season of life
        </div>
      </div>
    </PresentationSlide>
  );
};

export const CallToActionSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        {/* Jesus sending forth disciples */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=400&fit=crop&crop=center" 
            alt="Jesus sending forth disciples" 
            className="w-44 h-44 rounded-lg object-cover border-4 border-yellow-300 floating shadow-2xl"
          />
          <Users className="absolute -top-4 -left-4 w-20 h-20 text-yellow-300 floating" style={{ animationDelay: '0.5s' }} />
          <Star className="absolute -bottom-4 -right-4 w-16 h-16 text-white floating" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <h1 className="slide-header">Go and Make Disciples! 🔥</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Your Mission Starts Now - Every Age, Every Stage, Every Heart 🎯❤️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>Live Your Faith:</strong> Be the saint your family needs - whether you're 15 or 85, your witness matters 🌟👑</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span><strong>Share Your Story:</strong> Your faith journey inspires others - young hearts learn from wise souls, old hearts learn from fresh faith 📖💫</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>Serve Together:</strong> Find your place in God's plan - youth ministry, senior outreach, family prayers 🤝🙏</span>
          </div>
          
          <div className="slide-bullet">
            <Globe className="catholic-icon" />
            <span><strong>Never Stop Growing:</strong> Faith is a lifetime adventure - from First Communion to final blessing, always learning, always loving 📚💕</span>
          </div>
        </div>
        
        {/* Jesus images representing mission and discipleship */}
        <div className="absolute top-16 left-20 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus missionary" 
            className="w-14 h-14 rounded-full object-cover floating"
            style={{ animationDelay: '2s' }}
          />
        </div>
        
        <div className="absolute top-16 right-20 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus with apostles" 
            className="w-14 h-14 rounded-full object-cover floating"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="absolute bottom-20 left-16 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus blessing mission" 
            className="w-14 h-14 rounded-full object-cover floating"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="bible-verse">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "You did not choose me, but I chose you and appointed you to go and bear fruit that will remain."
          <div className="text-yellow-300 mt-2 font-semibold">- John 15:16 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "How beautiful are the feet of those who bring the good news!"
          <div className="text-yellow-300 mt-2 font-semibold">- Romans 10:15 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Be it done unto me according to your word."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:38 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The Great Commission is for every generation - your age is your strength, your faith is your gift to the world
        </div>
        
        <div className="mt-8 text-3xl text-white max-w-3xl mx-auto">
          🌟 From teenagers to grandparents, we are all called to be saints! 🌟
        </div>
      </div>
    </PresentationSlide>
  );
};
