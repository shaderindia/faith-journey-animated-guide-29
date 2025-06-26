
import React from 'react';
import { Heart, Star, Globe, Users, Crown, Cross } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const SummarySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-6 flex justify-center relative">
          <Cross className="w-28 h-28 text-yellow-300 floating shadow-2xl" />
          <Crown className="absolute -top-3 -right-3 w-18 h-18 text-red-400 floating" style={{ animationDelay: '1s' }} />
          <Heart className="absolute -bottom-2 -left-2 w-16 h-16 text-red-400 floating" style={{ animationDelay: '2s' }} />
        </div>
        
        <h1 className="slide-header text-5xl mb-3">Our Faith Journey Together 🚀</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          From the Cross to Today - A Love Story That Never Ends 💕
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-lg p-3 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Cross className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>God's Love:</strong> Unconditional, eternal, embracing every heart from first breath to final prayer 💖♾️</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-purple-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Rich History:</strong> 2000 years of faith, sacrifice, and triumph - we stand on the shoulders of saints 📚👑</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-yellow-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Living Tradition:</strong> Ancient prayers, modern hearts - the Rosary, Mass, and sacraments unite all generations 📿⛪</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-lg mb-3">
          "Jesus Christ is the same yesterday, today, and forever."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Hebrews 13:8</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "One generation praises your deeds to the next and proclaims your mighty works."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Psalm 145:4</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "We will not hide them from their children; we will tell to the coming generation the glorious deeds of the LORD."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Psalm 78:4</div>
        </div>

        <div className="bible-verse text-lg">
          "These words, which I am commanding you today, shall be on your heart. You shall teach them diligently to your sons."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Deuteronomy 6:6-7</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-lg italic max-w-4xl mx-auto font-semibold">
          The same Jesus who blessed children also walked with elders - constant through every season of life
        </div>

        {/* Interactive reflection prompt */}
        <div className="mt-6 p-3 bg-black bg-opacity-30 rounded-lg max-w-3xl mx-auto">
          <div className="text-yellow-200 text-base font-bold mb-1">💭 Reflection Moment:</div>
          <div className="text-white text-base">
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
        <div className="mb-6 flex justify-center relative">
          <Users className="w-32 h-32 text-yellow-300 floating shadow-2xl" />
          <Star className="absolute -top-3 -left-3 w-18 h-18 text-white floating" style={{ animationDelay: '0.5s' }} />
          <Heart className="absolute -bottom-3 -right-3 w-16 h-16 text-red-400 floating" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <h1 className="slide-header text-5xl mb-3">Go and Make Disciples! 🔥</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Your Mission Starts Now - Every Age, Every Stage, Every Heart 🎯❤️
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-lg p-3 bg-red-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Live Your Faith:</strong> Be the saint your family needs - whether you're 15 or 85, your witness matters 🌟👑</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-blue-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Star className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Share Your Story:</strong> Your faith journey inspires others - young hearts learn from wise souls, old hearts learn from fresh faith 📖💫</span>
          </div>
          
          <div className="slide-bullet text-lg p-3 bg-green-900 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer">
            <Crown className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Serve Together:</strong> Find your place in God's plan - youth ministry, senior outreach, family prayers 🤝🙏</span>
          </div>
        </div>
        
        <div className="bible-verse mt-6 text-lg mb-3">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Matthew 28:19</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Be it done unto me according to your word."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Luke 1:38</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "You did not choose me, but I chose you and appointed you to go and bear fruit—fruit that will last."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 15:16</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Ephesians 2:10</div>
        </div>

        <div className="bible-verse text-lg">
          "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Colossians 3:23</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-lg italic max-w-4xl mx-auto font-semibold">
          The Great Commission is for every generation - your age is your strength, your faith is your gift to the world
        </div>
        
        <div className="mt-4 text-2xl text-white max-w-4xl mx-auto font-bold">
          🌟 From teenagers to grandparents, we are all called to be saints! 🌟
        </div>

        {/* Interactive commitment section */}
        <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg max-w-3xl mx-auto">
          <div className="text-yellow-200 text-lg font-bold mb-2">✝️ Your Personal Mission:</div>
          <div className="text-white text-base space-y-1">
            • How will you live your Catholic faith more fully this week?<br/>
            • Who in your family or community needs your witness?<br/>
            • What gifts has God given you to serve His Church?
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};
