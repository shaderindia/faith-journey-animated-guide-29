
import React from 'react';
import { Globe, Users, Heart, Lightbulb, Church, Smartphone } from 'lucide-react';
import PresentationSlide from '../PresentationSlide';

export const ModernCatholicsSlide: React.FC = () => {
  return (
    <PresentationSlide background="stained-glass">
      <div className="text-center">
        <Globe className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Modern Day Catholics 🌍</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Living Faith in the 21st Century - Where Ancient Wisdom Meets Digital Age 📱✨
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Users className="catholic-icon" />
            <span><strong>1.3 Billion Catholics Worldwide:</strong> From teenagers livestreaming Mass to grandparents video-calling grandchildren for prayer 🌎👨‍👩‍👧‍👦</span>
          </div>
          
          <div className="slide-bullet">
            <Smartphone className="catholic-icon" />
            <span><strong>Digital Faith:</strong> Prayer apps, online retreats, virtual pilgrimages - God meets us where we are, even online 📲🙏</span>
          </div>
          
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>Social Justice:</strong> Young Catholics fighting climate change, poverty, and injustice - following Christ's call to love 🌱💚</span>
          </div>
          
          <div className="slide-bullet">
            <Lightbulb className="catholic-icon" />
            <span><strong>Faith & Science:</strong> Catholic scientists, doctors, teachers - proving faith and reason dance together beautifully 🔬⚗️</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Go, therefore, and make disciples of all nations, baptizing them in the name of the Father, and of the Son, and of the holy Spirit."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 28:19 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Let your light shine before others, that they may see your good works and glorify your heavenly Father."
          <div className="text-yellow-300 mt-2 font-semibold">- Matthew 5:16 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "As I have loved you, so you also should love one another."
          <div className="text-yellow-300 mt-2 font-semibold">- John 13:34 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
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
        <Users className="catholic-icon mx-auto mb-6 w-32 h-32 text-yellow-300 floating" />
        
        <h1 className="slide-header">Catholic Youth Today 🔥</h1>
        <p className="slide-subheader text-2xl text-yellow-200 mb-6">
          Saints in Sneakers, Disciples with Dreams 👟⭐
        </p>
        
        <div className="slide-content space-y-6">
          <div className="slide-bullet">
            <Heart className="catholic-icon" />
            <span><strong>World Youth Day:</strong> Millions of young hearts gathering to celebrate faith - from Sydney 2008 to Lisbon 2023 🎉🌟</span>
          </div>
          
          <div className="slide-bullet">
            <Church className="catholic-icon" />
            <span><strong>Youth Ministry:</strong> Leading worship, serving communities, inspiring families - age is just a number when serving God 🎵💪</span>
          </div>
          
          <div className="slide-bullet">
            <Globe className="catholic-icon" />
            <span><strong>Mission Trips:</strong> Young missionaries changing the world, elderly volunteers sharing wisdom - every generation serving together 🛫❤️</span>
          </div>
          
          <div className="slide-bullet">
            <Lightbulb className="catholic-icon" />
            <span><strong>Faith Formation:</strong> From children's catechesis to adult RCIA - learning never stops in the Catholic journey 📚👶👴</span>
          </div>
        </div>
        
        <div className="bible-verse">
          "Let no one have contempt for your youth, but set an example for those who believe, in speech, conduct, love, faith, and purity."
          <div className="text-yellow-300 mt-2 font-semibold">- 1 Timothy 4:12 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Remember your Creator in the days of your youth, before the evil days come and the years approach of which you will say, 'I have no pleasure in them.'"
          <div className="text-yellow-300 mt-2 font-semibold">- Ecclesiastes 12:1 (NAB)</div>
        </div>

        <div className="bible-verse mt-4">
          "Young men and women too, old men and children—let them all praise the name of the LORD."
          <div className="text-yellow-300 mt-2 font-semibold">- Psalm 148:12-13 (NAB)</div>
        </div>
        
        <div className="text-yellow-200 mt-6 text-lg italic max-w-3xl mx-auto">
          Young hearts can teach old souls, and wise elders can guide youthful spirits in God's love
        </div>
      </div>
    </PresentationSlide>
  );
};
