
import React from 'react';
import { Cross, Heart, Star } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

const TitleSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Cross className="w-24 h-24 text-yellow-300 floating" />
        </div>
        
        <h1 className="slide-header text-6xl md:text-8xl mb-4">
          Catholic Youth Faith Journey
        </h1>
        
        <p className="slide-subheader text-3xl md:text-4xl mb-12">
          Understanding Our Faith, History, and Mission
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <Heart className="w-16 h-16 text-red-400 floating" style={{ animationDelay: '1s' }} />
          <Star className="w-16 h-16 text-yellow-300 floating" style={{ animationDelay: '2s' }} />
          <Cross className="w-16 h-16 text-white floating" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="bible-verse max-w-2xl mx-auto">
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
          <div className="text-yellow-300 mt-2 font-semibold">- Jeremiah 29:11</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export default TitleSlide;
