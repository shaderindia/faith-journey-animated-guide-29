
import React from 'react';
import { Heart, Cross, Star, Smile } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const GodsLoveSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Heart className="catholic-icon mx-auto mb-6 w-32 h-32 text-red-400 floating" />
        
        <h1 className="slide-header">God's Unconditional Love 💕</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>God loves us beyond measure, no strings attached! 🎉</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>His love is eternal and never-changing (even when we mess up!) 😅</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>We are precious in His sight, each one unique and awesome! ✨</span>
          </div>
          
          <div className="slide-bullet">
            <Smile className="catholic-icon" />
            <span>He knows your name, your dreams, and your favorite pizza topping! 🍕</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
          <div className="text-yellow-300 mt-2 font-semibold">- John 3:16 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const SalvationSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <Cross className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Salvation Through Jesus 🙏</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Jesus is the ultimate GPS for life - the Way, Truth, and Life! 🗺️</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Through His sacrifice, we get a fresh start with God! 🔄</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>His resurrection = our eternal life cheat code activated! 🎮</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>It's not about being perfect - it's about being loved perfectly! 💝</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"
          <div className="text-yellow-300 mt-2 font-semibold">- John 14:6 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const HopeAndPurposeSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Star className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Hope and Purpose 🌟</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>God has an epic plan for each of our lives! 🎯</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>We're called to be light in the darkness (like human flashlights!) 🔦</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>Our mission: Love God, serve others, be awesome! 🚀</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>Your life has meaning - you're not here by accident! 🎪</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
          <div className="text-yellow-300 mt-2 font-semibold">- Jeremiah 29:11 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};
