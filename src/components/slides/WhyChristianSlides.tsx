
import React from 'react';
import { Heart, Cross, Star, Smile, Home, Users } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const GodsLoveSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        {/* Jesus image with heart */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=300&fit=crop&crop=center" 
            alt="Jesus showing God's Love" 
            className="w-40 h-40 rounded-full object-cover border-4 border-red-400 floating shadow-2xl"
          />
          <Heart className="absolute -top-2 -right-2 w-16 h-16 text-red-400 floating" style={{ animationDelay: '1s' }} />
        </div>
        
        <h1 className="slide-header">God's Unconditional Love 💕</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          A Love That Knows No Boundaries or Age
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>God's love embraces us from our first breath to our final moment 🌅</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>His love is eternal and unchanging - through childhood wonder, teenage struggles, adult challenges, and golden years of wisdom 💫</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>Every wrinkle tells a story, every laugh line speaks of joy, every tear shows His comfort 📖✨</span>
          </div>
          
          <div className="slide-bullet">
            <Users className="catholic-icon" />
            <span>He knows the dreams of a child, the hopes of youth, the struggles of parents, and the prayers of grandparents 🙏👨‍👩‍👧‍👦</span>
          </div>
        </div>
        
        {/* Small Jesus images in corners */}
        <div className="absolute top-20 left-20 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=150&h=150&fit=crop&crop=center" 
            alt="Jesus" 
            className="w-16 h-16 rounded-full object-cover floating"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="bible-verse">
          "For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life."
          <div className="text-yellow-300 mt-2 font-semibold">- John 3:16 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "See what love the Father has bestowed on us that we may be called the children of God. Yet so we are."
          <div className="text-yellow-300 mt-2 font-semibold">- 1 John 3:1 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          From the youngest child to the eldest elder, we are all beloved children of the Most High God
        </div>
      </div>
    </PresentationSlide>
  );
};

export const SalvationSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        {/* Jesus on the cross image */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=350&h=350&fit=crop&crop=center" 
            alt="Jesus Christ Crucified" 
            className="w-44 h-44 rounded-lg object-cover border-4 border-yellow-300 floating shadow-2xl"
          />
          <Cross className="absolute -top-4 -right-4 w-20 h-20 text-yellow-300 floating" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <h1 className="slide-header">Salvation Through Jesus 🙏</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          The Bridge Between Heaven and Earth
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Jesus is the Way for every wandering soul - whether young and searching or old and seeking peace 🛤️</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>Through His sacrifice, every generation finds redemption - from the rebellious teen to the repentant elder 🌈</span>
          </div>
          
          <div className="slide-bullet">
            <Cross className="catholic-icon" />
            <span>His resurrection conquers every fear - of failure, of aging, of death itself 🌅⚡</span>
          </div>
          
          <div className="slide-bullet">
            <Home className="catholic-icon" />
            <span>It's never too late to come home, never too early to start the journey 🏠💝</span>
          </div>
        </div>
        
        {/* Multiple Jesus images around the slide */}
        <div className="absolute top-10 right-10 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Risen Jesus" 
            className="w-20 h-20 rounded-full object-cover floating"
            style={{ animationDelay: '2s' }}
          />
        </div>
        
        <div className="absolute bottom-20 left-10 opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=120&h=120&fit=crop&crop=center" 
            alt="Jesus Christ" 
            className="w-20 h-20 rounded-full object-cover floating"
            style={{ animationDelay: '4s' }}
          />
        </div>
        
        <div className="bible-verse">
          "Jesus said to him, 'I am the way and the truth and the life. No one comes to the Father except through me.'"
          <div className="text-yellow-300 mt-2 font-semibold">- John 14:6 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "For by grace you have been saved through faith, and this is not from you; it is the gift of God; it is not from works, so no one may boast."
          <div className="text-yellow-300 mt-2 font-semibold">- Ephesians 2:8-9 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Come to me, all you who labor and are burdened, and I will give you rest."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 11:28 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The same Jesus who blessed children also honored the elderly widow's offering - salvation for all ages
        </div>
      </div>
    </PresentationSlide>
  );
};

export const HopeAndPurposeSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        {/* Jesus as light of the world */}
        <div className="mb-6 flex justify-center relative">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=300&fit=crop&crop=center" 
            alt="Jesus Light of the World" 
            className="w-36 h-36 rounded-full object-cover border-4 border-yellow-300 floating shadow-2xl"
          />
          <Star className="absolute -top-2 -right-2 w-16 h-16 text-yellow-300 floating" style={{ animationDelay: '1s' }} />
          <Star className="absolute -bottom-2 -left-2 w-12 h-12 text-white floating" style={{ animationDelay: '2s' }} />
        </div>
        
        <h1 className="slide-header">Hope and Purpose 🌟</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Every Season of Life Has Divine Meaning
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>God's plan unfolds through every season - the energy of youth, the wisdom of age 🎯🌸</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>We're called to be light in every stage of life - children shine with innocence, elders glow with wisdom 🕯️👴👶</span>
          </div>
          
          <div className="slide-bullet">
            <Star className="catholic-icon" />
            <span>Our mission transcends age: Love God, serve others, inspire generations 🚀💖</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span>Whether you're starting your story or nearing its earthly end, every chapter matters to God 📚🌅</span>
          </div>
        </div>
        
        {/* Jesus images in multiple positions */}
        <div className="absolute top-16 left-16 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus" 
            className="w-14 h-14 rounded-full object-cover floating"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="absolute bottom-16 right-16 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=100&h=100&fit=crop&crop=center" 
            alt="Jesus" 
            className="w-14 h-14 rounded-full object-cover floating"
            style={{ animationDelay: '5s' }}
          />
        </div>
        
        <div className="bible-verse">
          "For I know well the plans I have in mind for you—oracle of the LORD—plans for your welfare and not for woe, so as to give you a future of hope."
          <div className="text-yellow-300 mt-2 font-semibold">- Jeremiah 29:11 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "We know that all things work for good for those who love God, who are called according to his purpose."
          <div className="text-yellow-300 mt-2 font-semibold">- Romans 8:28 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "You are the light of the world. A city set on a mountain cannot be hidden."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 5:14 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          From teenage dreams to grandparent prayers, His plans span lifetimes and generations
        </div>
      </div>
    </PresentationSlide>
  );
};
