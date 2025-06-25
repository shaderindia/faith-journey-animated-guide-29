
import React from 'react';
import { Crown, Sword, Church, BookOpen, Zap, Shield } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const ApostolicAgeSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Crown className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Apostolic Age (33-100 AD) 👑</h1>
        <p className="slide-subheader">The Epic Beginning! 🎬</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>33 AD:</strong> Jesus' Resurrection - The ultimate comeback story! 🔥</span>
          </div>
          
          <div className="slide-bullet">
            <Zap className="catholic-icon" />
            <span><strong>33 AD (Pentecost):</strong> Holy Spirit descends - Apostles get superpowers! ⚡</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>33-70 AD:</strong> First Christian communities spread like viral content! 📱</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>50-100 AD:</strong> Gospel message reaches the known world (no internet needed!) 🌍</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
          <div className="text-yellow-300 mt-2 font-semibold">- Acts 1:8 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const PersecutionSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <Sword className="catholic-icon mx-auto mb-6 w-32 h-32 text-red-400 floating" />
        
        <h1 className="slide-header">Age of Persecution (100-313 AD) ⚔️</h1>
        <p className="slide-subheader">When Being Christian Was Hardcore Mode! 💪</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span><strong>64-313 AD:</strong> Roman Empire vs Christians - the ultimate boss battle! 🏛️</span>
          </div>
          
          <div className="slide-bullet">
            <Shield className="catholic-icon" />
            <span><strong>249-251 AD:</strong> Decius persecution - Christians become real-life heroes! 🦸‍♂️</span>
          </div>
          
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span><strong>100-300 AD:</strong> Secret church meetings in catacombs (underground church!) 🕳️</span>
          </div>
          
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span><strong>Result:</strong> Faith grew stronger through trials - level up! 📈</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 5:10 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const ImperialChristianitySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Church className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Imperial Christianity (313-590 AD) 🏰</h1>
        <p className="slide-subheader">Christianity Goes Mainstream! 📺</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>313 AD:</strong> Constantine's Edict of Milan - Christianity becomes legal! ⚖️</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>325 AD:</strong> Council of Nicaea - establishing the rules of the game! 📜</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>380 AD:</strong> Christianity = official religion of Rome! 🎊</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>320-400 AD:</strong> Epic basilicas and churches built everywhere! 🏗️</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 16:18 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const EarlyMedievalSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <BookOpen className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Early Medieval (590-1054 AD) 📚</h1>
        <p className="slide-subheader">Monks Become the Ultimate Librarians! 🤓</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span><strong>590-1054 AD:</strong> Monasticism saves knowledge (human USB drives!) 💾</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span><strong>590-604 AD:</strong> Pope Gregory the Great strengthens papal power! 👑</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span><strong>600-1000 AD:</strong> Missionary work spreads Christianity across Europe! 🗺️</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span><strong>1054 AD:</strong> Great Schism - East meets West (awkwardly!) 😬</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19 (NAB)</div>
        </div>
      </div>
    </PresentationSlide>
  );
};
