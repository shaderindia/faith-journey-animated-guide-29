
import React, { useState, useEffect } from 'react';
import NavigationControls from '@/components/NavigationControls';
import SlideMenu from '@/components/SlideMenu';
import TitleSlide from '@/components/slides/TitleSlide';
import { GodsLoveSlide, SalvationSlide, HopeAndPurposeSlide } from '@/components/slides/WhyChristianSlides';
import { ApostolicAgeSlide, PersecutionSlide, ImperialChristianitySlide, EarlyMedievalSlide } from '@/components/slides/ChristianHistorySlides';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  // Define all slides
  const slides = [
    <TitleSlide key="title" />,
    <GodsLoveSlide key="gods-love" />,
    <SalvationSlide key="salvation" />,
    <HopeAndPurposeSlide key="hope-purpose" />,
    <ApostolicAgeSlide key="apostolic" />,
    <PersecutionSlide key="persecution" />,
    <ImperialChristianitySlide key="imperial" />,
    <EarlyMedievalSlide key="medieval" />,
    // More slides will be added as we build them out
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          break;
        case 'ArrowLeft':
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(slides.length - 1);
          break;
        case 'Escape':
          setShowMenu(false);
          break;
        case 'm':
        case 'M':
          setShowMenu(!showMenu);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length, showMenu]);

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Current Slide */}
      <div className="w-full h-screen">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
        onShowMenu={() => setShowMenu(true)}
      />

      {/* Slide Menu */}
      <SlideMenu
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        onGoToSlide={goToSlide}
      />

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-4 left-4 z-40 bg-black bg-opacity-50 text-white px-3 py-2 rounded text-xs">
        <div>← → Arrow keys to navigate</div>
        <div>M for menu • ESC to close</div>
      </div>
    </div>
  );
};

export default Index;
