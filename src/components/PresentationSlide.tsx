
import React from 'react';
import { cn } from '@/lib/utils';

interface PresentationSlideProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'stained-glass' | 'cross' | 'gradient';
}

const PresentationSlide: React.FC<PresentationSlideProps> = ({ 
  children, 
  className, 
  background = 'default' 
}) => {
  const getBackgroundClass = () => {
    switch (background) {
      case 'stained-glass':
        return 'stained-glass-bg';
      case 'cross':
        return 'bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900';
      case 'gradient':
        return 'bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800';
      default:
        return 'bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800';
    }
  };

  return (
    <div className={cn(
      'presentation-slide',
      getBackgroundClass(),
      className
    )}>
      {/* Decorative cross pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-white transform rotate-12">✠</div>
        <div className="absolute top-20 right-20 text-4xl text-yellow-300 transform -rotate-12">✠</div>
        <div className="absolute bottom-20 left-20 text-5xl text-white transform rotate-45">✠</div>
        <div className="absolute bottom-10 right-10 text-3xl text-yellow-300 transform -rotate-45">✠</div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PresentationSlide;
