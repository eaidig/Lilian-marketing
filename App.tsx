import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES, TOTAL_SLIDES } from './constants';
import Background from './components/Background';
import Controls from './components/Controls';
import SlideView from './components/SlideView';
import { Direction } from './types';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction | null>(null);

  const handleNavigate = useCallback((dir: Direction) => {
    setDirection(dir);
    setCurrentIndex(prev => {
      if (dir === Direction.NEXT) {
        return Math.min(prev + 1, TOTAL_SLIDES - 1);
      } else {
        return Math.max(prev - 1, 0);
      }
    });
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); // Prevent scrolling on space
        handleNavigate(Direction.NEXT);
      } else if (e.key === 'ArrowLeft') {
        handleNavigate(Direction.PREV);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNavigate]);

  const getAnimationClass = () => {
    if (direction === Direction.NEXT) return 'animate-slide-in-right';
    if (direction === Direction.PREV) return 'animate-slide-in-left';
    return 'animate-fade-in';
  };

  return (
    <div className="relative w-full h-screen font-sans text-white overflow-hidden selection:bg-neon-purple selection:text-white">
      <Background />
      
      <main className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col">
        {/* Render current slide with a key to trigger animations on change */}
        <div 
          key={currentIndex} 
          className={`flex-grow w-full h-full ${getAnimationClass()}`}
        >
           <SlideView data={SLIDES[currentIndex]} />
        </div>
      </main>

      <Controls 
        current={currentIndex} 
        total={TOTAL_SLIDES} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
};

export default App;