
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToSlide: (slideIndex: number) => void;
}

const SlideMenu: React.FC<SlideMenuProps> = ({ isOpen, onClose, onGoToSlide }) => {
  const menuItems = [
    { title: 'Title Slide', slides: [0], color: 'bg-blue-600' },
    { title: 'Why We Are Christian', slides: [1, 2, 3], color: 'bg-purple-600' },
    { title: 'History of Christianity', slides: [4, 5, 6, 7], color: 'bg-indigo-600' },
    { title: 'Modern Day Catholics', slides: [8, 9], color: 'bg-blue-700' },
    { title: 'The Holy Rosary', slides: [10, 11, 12], color: 'bg-purple-700' },
    { title: 'Conclusion', slides: [13, 14], color: 'bg-indigo-700' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Presentation Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
              <div key={index} className={`${item.color} rounded-lg p-4 text-white cursor-pointer hover:opacity-80 transition-opacity`}>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.slides.map((slideIndex) => (
                    <Button
                      key={slideIndex}
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        onGoToSlide(slideIndex);
                        onClose();
                      }}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-none"
                    >
                      Slide {slideIndex + 1}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SlideMenu;
