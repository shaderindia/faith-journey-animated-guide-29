
import React from 'react';
import { ChevronLeft, ChevronRight, Home, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slideIndex: number) => void;
  onShowMenu: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  onShowMenu
}) => {
  return (
    <>
      {/* Large navigation arrows for seniors */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          variant="secondary"
          size="lg"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 border-white border-opacity-30 w-16 h-16 text-xl font-bold"
        >
          <ChevronLeft className="w-10 h-10 text-white" />
        </Button>
        <div className="text-white text-center mt-2 text-sm font-bold">BACK</div>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          variant="secondary"
          size="lg"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 border-white border-opacity-30 w-16 h-16 text-xl font-bold"
        >
          <ChevronRight className="w-10 h-10 text-white" />
        </Button>
        <div className="text-white text-center mt-2 text-sm font-bold">NEXT</div>
      </div>

      {/* Top navigation with larger buttons */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="secondary"
          size="lg"
          onClick={onShowMenu}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 border-white border-opacity-30 w-14 h-14 mr-4"
        >
          <Menu className="w-8 h-8 text-white" />
        </Button>
        <div className="text-white text-center mt-1 text-xs font-bold">MENU (M)</div>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => onGoToSlide(0)}
          className="bg-white bg-opacity-30 hover:bg-opacity-50 border-white border-opacity-30 w-14 h-14"
        >
          <Home className="w-8 h-8 text-white" />
        </Button>
        <div className="text-white text-center mt-1 text-xs font-bold">HOME</div>
      </div>

      {/* Larger progress dots */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-4 h-4 rounded-full transition-all duration-200 hover:scale-125',
              index === currentSlide 
                ? 'bg-yellow-300 border-2 border-white shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            )}
            onClick={() => onGoToSlide(index)}
          />
        ))}
      </div>

      {/* Enhanced slide counter */}
      <div className="fixed bottom-4 right-4 z-50 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-lg font-bold border-2 border-white border-opacity-30">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Enhanced keyboard shortcuts hint */}
      <div className="fixed bottom-4 left-4 z-40 bg-black bg-opacity-60 text-white px-4 py-3 rounded-lg text-base border-2 border-white border-opacity-30">
        <div className="font-bold text-yellow-200 mb-1">⌨️ Keyboard Shortcuts:</div>
        <div className="text-sm">
          <div>← → Arrow keys to navigate</div>
          <div>M for menu • HOME key for title</div>
          <div>ESC to close menu</div>
        </div>
      </div>
    </>
  );
};

export default NavigationControls;
