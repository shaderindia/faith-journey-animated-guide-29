
import React from 'react';
import { Globe, Users, Heart, Lightbulb, Church, Smartphone } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const ModernCatholicsSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Globe className="catholic-icon mx-auto mb-4 w-24 h-24 text-yellow-300 floating" />
        
        <h1 className="slide-header text-5xl mb-3">Modern Day Catholics 🌍</h1>
        <p className="slide-subheader text-xl text-yellow-200 mb-4">
          Living Faith in the 21st Century - Where Ancient Wisdom Meets Digital Age 📱✨
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-base">
            <Users className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>1.3 Billion Catholics Worldwide:</strong> From teenagers livestreaming Mass to grandparents video-calling grandchildren for prayer 🌎👨‍👩‍👧‍👦</span>
          </div>
          
          <div className="slide-bullet text-base">
            <Smartphone className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Digital Faith:</strong> Prayer apps, online retreats, virtual pilgrimages - God meets us where we are, even online 📲🙏</span>
          </div>
          
          <div className="slide-bullet text-base">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Social Justice:</strong> Young Catholics fighting climate change, poverty, and injustice - following Christ's call to love 🌱💚</span>
          </div>
        </div>
        
        <div className="bible-verse text-lg mb-3">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Matthew 28:19</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Let your light shine before others, that they may see your good works and glorify your heavenly Father."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Matthew 5:16</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "As I have loved you, so you also should love one another."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- John 13:34</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "And whoever receives one child such as this in my name receives me."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Matthew 18:5</div>
        </div>

        <div className="bible-verse text-lg">
          "Rise up, you women who are at ease, hear my voice; you daughters who are secure, give ear to my speech."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Isaiah 32:9</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-base italic max-w-3xl mx-auto">
          The same Great Commission now reaches every corner of the globe - from TikTok to nursing homes
        </div>
      </div>
    </PresentationSlide>
  );
};

export const CatholicYouthTodaySlide: React.FC = () => {
  return (
    <PresentationSlide background="gradient">
      <div className="text-center">
        <Users className="catholic-icon mx-auto mb-4 w-24 h-24 text-yellow-300 floating" />
        
        <h1 className="slide-header text-5xl mb-3">Catholic Youth Today 🔥</h1>
        <p className="slide-subheader text-xl text-yellow-200 mb-4">
          Saints in Sneakers, Disciples with Dreams 👟⭐
        </p>
        
        <div className="slide-content space-y-4">
          <div className="slide-bullet text-base">
            <Heart className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>World Youth Day:</strong> Millions of young hearts gathering to celebrate faith - from Sydney 2008 to Lisbon 2023 🎉🌟</span>
          </div>
          
          <div className="slide-bullet text-base">
            <Church className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Youth Ministry:</strong> Leading worship, serving communities, inspiring families - age is just a number when serving God 🎵💪</span>
          </div>
          
          <div className="slide-bullet text-base">
            <Globe className="w-12 h-12 mr-3 text-yellow-300" />
            <span><strong>Mission Trips:</strong> Young missionaries changing the world, elderly volunteers sharing wisdom - every generation serving together 🛫❤️</span>
          </div>
        </div>
        
        <div className="bible-verse text-lg mb-3">
          "Let no one have contempt for your youth, but set an example for those who believe, in speech, conduct, love, faith, and purity."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- 1 Timothy 4:12</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Remember your Creator in the days of your youth, before the evil days come and the years approach of which you will say, 'I have no pleasure in them.'"
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Ecclesiastes 12:1</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Young men and women too, old men and children—let them all praise the name of the LORD."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Psalm 148:12-13</div>
        </div>

        <div className="bible-verse text-lg mb-3">
          "Before I formed you in the womb I knew you, before you were born I dedicated you, a prophet to the nations I appointed you."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- Jeremiah 1:5</div>
        </div>

        <div className="bible-verse text-lg">
          "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."
          <div className="text-yellow-300 mt-1 font-semibold text-base">- 1 Timothy 4:12</div>
        </div>
        
        <div className="text-yellow-200 mt-4 text-base italic max-w-3xl mx-auto">
          Young hearts can teach old souls, and wise elders can guide youthful spirits in God's love
        </div>
      </div>
    </PresentationSlide>
  );
};
