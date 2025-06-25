
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
      {/* Navigation arrows */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button>
      </div>

      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Top navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={onShowMenu}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30"
        >
          <Menu className="w-6 h-6 text-white" />
        </Button>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => onGoToSlide(0)}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30"
        >
          <Home className="w-6 h-6 text-white" />
        </Button>
      </div>

      {/* Progress dots */}
      <div className="navigation-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cn('nav-dot', {
              'active': index === currentSlide
            })}
            onClick={() => onGoToSlide(index)}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-4 right-4 z-50 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </>
  );
};

export default NavigationControls;
