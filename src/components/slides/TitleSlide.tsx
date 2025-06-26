
import React from 'react';
import { Cross, Heart, Star } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

const TitleSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <Cross className="w-28 h-28 text-yellow-300 floating" />
        </div>
        
        <h1 className="slide-header text-6xl md:text-8xl mb-4">
          Catholic Youth Faith Journey 🌟
        </h1>
        
        <p className="slide-subheader text-3xl md:text-4xl mb-6">
          Understanding Our Faith, History, and Mission ✨
        </p>
        
        <div className="text-2xl text-yellow-200 mb-6 italic font-bold">
          "A journey of faith that spans generations, touching hearts across all ages"
        </div>
        
        <div className="flex justify-center space-x-8 mb-6">
          <Heart className="w-16 h-16 text-red-400 floating cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '1s' }} />
          <Star className="w-16 h-16 text-yellow-300 floating cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '2s' }} />
          <Cross className="w-16 h-16 text-white floating cursor-pointer hover:scale-110 transition-transform" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="bible-verse max-w-4xl mx-auto text-xl mb-4">
          "For I know well the plans I have in mind for you—oracle of the LORD—plans for your welfare and not for woe, so as to give you a future of hope."
          <div className="text-yellow-300 mt-2 font-bold text-lg">- Jeremiah 29:11</div>
        </div>

        <div className="bible-verse max-w-4xl mx-auto text-xl mb-4">
          "Train the young in the way they should go; even when old, they will not swerve from it."
          <div className="text-yellow-300 mt-2 font-bold text-lg">- Proverbs 22:6</div>
        </div>

        <div className="bible-verse max-w-4xl mx-auto text-xl mb-4">
          "Let the children come to me, and do not prevent them; for the kingdom of heaven belongs to such as these."
          <div className="text-yellow-300 mt-2 font-bold text-lg">- Matthew 19:14</div>
        </div>
        
        <div className="mt-6 text-2xl text-white max-w-3xl mx-auto font-semibold">
          From the youngest heart to the wisest soul, God's love calls us all home 🏠❤️
        </div>

        {/* Interactive navigation hint */}
        <div className="mt-6 p-3 bg-black bg-opacity-30 rounded-lg max-w-2xl mx-auto">
          <div className="text-yellow-200 text-lg font-bold mb-1">📖 How to Navigate:</div>
          <div className="text-white text-base">
            • Press ➡️ ARROW KEYS to move forward/backward<br/>
            • Press M for MENU to jump to any slide<br/>
            • Press HOME to return here anytime
          </div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default TitleSlide;
