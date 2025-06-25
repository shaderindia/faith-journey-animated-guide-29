
import React from 'react';
import { Crown, Sword, Church, BookOpen } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const ApostolicAgeSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Crown className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300" />
        
        <h1 className="slide-header">Apostolic Age (33-100 AD)</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span>Jesus' Resurrection - The foundation of our faith</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span>Pentecost - The Holy Spirit descends upon the Apostles</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span>The first Christian communities begin to spread</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span>The Gospel message reaches the known world</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."
          <div className="text-yellow-300 mt-2 font-semibold">- Acts 1:8</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const PersecutionSlide: React.FC = () => {
  return (
    <PresentationSlide background="cross">
      <div className="text-center">
        <Sword className="catholic-icon mx-auto mb-6 w-32 h-32 text-red-400" />
        
        <h1 className="slide-header">Age of Persecution (100-313 AD)</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span>Roman Empire persecutes Christians systematically</span>
          </div>
          
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span>Many martyrs die for their faith</span>
          </div>
          
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span>Christians meet in secret, using catacombs</span>
          </div>
          
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span>Faith grows stronger through persecution</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 5:10</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const ImperialChristianitySlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Church className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300" />
        
        <h1 className="slide-header">Imperial Christianity (313-590 AD)</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span>Constantine's Edict of Milan legalizes Christianity</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span>Council of Nicaea defines core Christian beliefs</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span>Christianity becomes the official religion of Rome</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span>Great basilicas and churches are built</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 16:18</div>
        </div>
      </div>
    </PresentationSlide>
  );
};

export const EarlyMedievalSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <BookOpen className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300" />
        
        <h1 className="slide-header">Early Medieval (590-1054 AD)</h1>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span>Rise of monasticism preserves learning</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span>Pope Gregory the Great strengthens papal authority</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span>Missionary work spreads Christianity across Europe</span>
          </div>
          
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span>Great Schism divides East and West (1054 AD)</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19</div>
        </div>
      </div>
    </PresentationSlide>
  );
};
