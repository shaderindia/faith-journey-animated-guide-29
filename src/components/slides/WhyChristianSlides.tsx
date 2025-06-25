
import React from 'react';
import { Heart, Cross, Star } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const GodsLoveSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Heart className="catholic-icon mx-auto mb-6 w-32 h-32 text-red-400" />
        
        <h1 className="slide-header">God's Unconditional Love</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>God loves us beyond measure, without conditions</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>His love is eternal and never-changing</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>We are precious in His sight, each one unique</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
          <div className="text-yellow-300 mt-2 font-semibold">- John 3:16</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const SalvationSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <Cross className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300" />
        
        <h1 className="slide-header">Salvation Through Jesus</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Jesus is the Way, the Truth, and the Life</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Through His sacrifice, we are reconciled to God</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>His resurrection gives us hope of eternal life</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"
          <div className="text-yellow-300 mt-2 font-semibold">- John 14:6</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const HopeAndPurposeSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Star className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300" />
        
        <h1 className="slide-header">Hope and Purpose</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>God has a unique plan for each of our lives</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>We are called to be light in the darkness</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>Our purpose is to love God and serve others</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
          <div className="text-yellow-300 mt-2 font-semibold">- Jeremiah 29:11</div>
        </div>
      </div>
    </PresentationSlide>
  );
};
