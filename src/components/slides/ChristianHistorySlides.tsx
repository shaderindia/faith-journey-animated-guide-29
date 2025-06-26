
import React from 'react';
import { Crown, Sword, Church, BookOpen, Zap, Shield, Users, Heart } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const ApostolicAgeSlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Crown className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Apostolic Age (33-100 AD) 👑</h1>
        <p className="slide-subheader">Where It All Began - A Love Story for the Ages 🎬</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>April 33 AD:</strong> Jesus' Resurrection - Death defeated, hope reborn for every human heart 🔥💀➡️💖</span>
          </div>
          
          <div className="slide-bullet">
            <Zap className="catholic-icon" />
            <span><strong>May 33 AD (Pentecost):</strong> Holy Spirit descends - Ordinary people become extraordinary witnesses, age no barrier ⚡👥</span>
          </div>
          
          <div className="slide-bullet">
            <Users className="catholic-icon" />
            <span><strong>33-70 AD:</strong> Faith spreads person to person - grandparents teaching children, children converting parents 📱❤️</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>50-100 AD:</strong> Gospel reaches every corner of the known world - a message of love crossing all boundaries 🌍💕</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "But you will receive power when the holy Spirit comes upon you, and you will be my witnesses in Jerusalem, throughout Judea and Samaria, and to the ends of the earth."
          <div className="text-yellow-300 mt-2 font-semibold">- Acts 1:8 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "So they went forth and preached everywhere, while the Lord worked with them and confirmed the word through accompanying signs."
          <div className="text-yellow-300 mt-2 font-semibold">- Mark 16:20 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The same Spirit that filled Mary at the Annunciation also strengthened the apostles in their final years
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
        
        <h1 className="slide-header">Age of Persecution (64-313 AD) ⚔️</h1>
        <p className="slide-subheader">When Love Proved Stronger Than Fear 💪</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Sword className="catholic-icon" />
            <span><strong>64-313 AD:</strong> Empire vs Faith - Children watched parents die for love, grandparents blessed grandchildren with courage 🏛️❤️</span>
          </div>
          
          <div className="slide-bullet">
            <Shield className="catholic-icon" />
            <span><strong>249-251 AD:</strong> Decius persecution - Young martyrs like St. Agnes (13) inspired elderly bishops to stand firm 🦸‍♀️👴</span>
          </div>
          
          <div className="slide-bullet">
            <Users className="catholic-icon" />
            <span><strong>100-300 AD:</strong> Families gathered in secret catacombs - three generations praying together in darkness 🕳️👨‍👩‍👧‍👦</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>Result:</strong> Every tear watered the seeds of faith - suffering united all ages in unbreakable bonds 📈💎</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Blessed are they who are persecuted for the sake of righteousness, for theirs is the kingdom of heaven."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 5:10 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "If anyone wishes to come after me, he must deny himself and take up his cross daily and follow me."
          <div className="text-yellow-300 mt-2 font-semibold">- Luke 9:23 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "The blood of martyrs is the seed of Christians."
          <div className="text-yellow-300 mt-2 font-semibold">- Tertullian (150-220 AD)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          From infant baptisms in hiding to elders' final prayers, faith knew no age limit in persecution
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
        <p className="slide-subheader">From Hidden Whispers to Glorious Hymns 📺</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>October 28, 312 AD:</strong> Constantine's vision before Milvian Bridge - "In this sign, conquer" ⚖️✨</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>June 19, 325 AD:</strong> Council of Nicaea begins - bishops from every land gathering like spiritual family reunion 📜👥</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>February 27, 380 AD:</strong> Theodosius makes Christianity the official religion - children could openly pray what grandparents whispered 🎊🙏</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>320-400 AD:</strong> Magnificent basilicas rise - spaces where every generation could worship together in splendor 🏗️👨‍👩‍👧‍👦</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "And so I say to you, you are Peter, and upon this rock I will build my church, and the gates of the netherworld shall not prevail against it."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 16:18 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Every kingdom divided against itself will be laid waste, and no town or house divided against itself will stand."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 12:25 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Give to Caesar what belongs to Caesar and to God what belongs to God."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 22:21 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The Rock upon which children learned to pray and elders found their eternal peace
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
        <p className="slide-subheader">Guardians of Wisdom Through Dark Ages 🤓</p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <BookOpen className="catholic-icon" />
            <span><strong>590-1054 AD:</strong> Monks preserve sacred knowledge - young novices learning from aged masters, wisdom passed like precious heirlooms 💾👴👶</span>
          </div>
          
          <div className="slide-bullet">
            <Crown className="catholic-icon" />
            <span><strong>September 3, 590 AD:</strong> Gregory the Great becomes Pope - shepherd to both royal courts and humble cottages 👑❤️</span>
          </div>
          
          <div className="slide-bullet">
            <Users className="catholic-icon" />
            <span><strong>600-1000 AD:</strong> Missionaries cross Europe - St. Boniface baptizing entire families, from newborns to great-grandparents 🗺️👨‍👩‍👧‍👦</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>July 16, 1054 AD:</strong> Great Schism - families divided by geography but united in their love for Christ 😢💔</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "All Scripture is inspired by God and is useful for teaching, for refutation, for correction, and for training in righteousness."
          <div className="text-yellow-300 mt-2 font-semibold">- 2 Timothy 3:16 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "How beautiful are the feet of those who bring the good news!"
          <div className="text-yellow-300 mt-2 font-semibold">- Romans 10:15 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          The Great Commission lived out by missionaries who baptized babies and blessed the dying
        </div>
      </div>
    </PresentationSlide>
  );
};
