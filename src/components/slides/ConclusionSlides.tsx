
import React from 'react';
import { Heart, Star, Globe, Users, Crown, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const SummarySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-8 flex justify-center relative">
          <Cross className="w-36 h-36 text-yellow-300 floating shadow-2xl" />
          <Crown className="absolute -top-4 -right-4 w-24 h-24 text-red-400 floating" style={{ animationDelay: '1s' }} />
          <Heart className="absolute -bottom-2 -left-2 w-20 h-20 text-red-400 floating" style={{ animationDelay: '2s' }} />
        </div>
        
        <h1 className="slide-header text-6xl mb-4">Our Faith Journey Together 🚀</h1>
        <p className="slide-subheader text-3xl text-yellow-200 mb-8">
          From the Cross to Today - A Love Story That Never Ends 💕
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet text-2xl p-4 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Cross className="catholic-icon" />
            <span><strong>God's Love:</strong> Unconditional, eternal, embracing every heart from first breath to final prayer 💖♾️</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="catholic-icon" />
            <span><strong>Rich History:</strong> 2000 years of faith, sacrifice, and triumph - we stand on the shoulders of saints 📚👑</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-yellow-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="catholic-icon" />
            <span><strong>Living Tradition:</strong> Ancient prayers, modern hearts - the Rosary, Mass, and sacraments unite all generations 📿⛪</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Globe className="catholic-icon" />
            <span><strong>Global Mission:</strong> Young and old, sharing the Good News in every language, every culture, every age 🌍💬</span>
          </div>
        </div>
        
        <div className="bible-verse mt-8 text-xl">
          "Jesus Christ is the same yesterday, today, and forever."
          <div className="text-yellow-300 mt-2 font-semibold">- Hebrews 13:8 (NAB)</div>
        </div>

        <div className="bible-verse mt-4 text-xl">
          "One generation praises your deeds to the next and proclaims your mighty works."
          <div className="text-yellow-300 mt-2 font-semibold">- Psalm 145:4 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-xl italic max-w-4xl mx-auto font-semibold">
          The same Jesus who blessed children also walked with elders - constant through every season of life
        </div>

        {/* Interactive reflection prompt */}
        <div className="mt-8 p-4 bg-black bg-opacity-30 rounded-lg max-w-3xl mx-auto">
          <div className="text-yellow-200 text-lg font-bold mb-2">💭 Reflection Moment:</div>
          <div className="text-white text-lg">
            Take a moment to think: How has your faith grown over the years?<br/>
            What wisdom would you share with younger Catholics?
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const CallToActionSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <div className="mb-8 flex justify-center relative">
          <Users className="w-40 h-40 text-yellow-300 floating shadow-2xl" />
          <Star className="absolute -top-4 -left-4 w-24 h-24 text-white floating" style={{ animationDelay: '0.5s' }} />
          <Heart className="absolute -bottom-4 -right-4 w-20 h-20 text-red-400 floating" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <h1 className="slide-header text-6xl mb-4">Go and Make Disciples! 🔥</h1>
        <p className="slide-subheader text-3xl text-yellow-200 mb-8">
          Your Mission Starts Now - Every Age, Every Stage, Every Heart 🎯❤️
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet text-2xl p-4 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="catholic-icon" />
            <span><strong>Live Your Faith:</strong> Be the saint your family needs - whether you're 15 or 85, your witness matters 🌟👑</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="catholic-icon" />
            <span><strong>Share Your Story:</strong> Your faith journey inspires others - young hearts learn from wise souls, old hearts learn from fresh faith 📖💫</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-green-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="catholic-icon" />
            <span><strong>Serve Together:</strong> Find your place in God's plan - youth ministry, senior outreach, family prayers 🤝🙏</span>
          </div>
          
          <div className="slide-bullet text-2xl p-4 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Globe className="catholic-icon" />
            <span><strong>Never Stop Growing:</strong> Faith is a lifetime adventure - from First Communion to final blessing, always learning, always loving 📚💕</span>
          </div>
        </div>
        
        <div className="bible-verse mt-8 text-xl">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19 (NAB)</div>
        </div>

        <div className="bible-verse mt-4 text-xl">
          "Be it done unto me according to your word."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 1:38 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-xl italic max-w-4xl mx-auto font-semibold">
          The Great Commission is for every generation - your age is your strength, your faith is your gift to the world
        </div>
        
        <div className="mt-8 text-4xl text-white max-w-4xl mx-auto font-bold">
          🌟 From teenagers to grandparents, we are all called to be saints! 🌟
        </div>

        {/* Interactive commitment section */}
        <div className="mt-8 p-6 bg-black bg-opacity-30 rounded-lg max-w-3xl mx-auto">
          <div className="text-yellow-200 text-2xl font-bold mb-4">✝️ Your Personal Mission:</div>
          <div className="text-white text-lg space-y-2">
            • How will you live your Catholic faith more fully this week?<br/>
            • Who in your family or community needs your witness?<br/>
            • What gifts has God given you to serve His Church?
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
