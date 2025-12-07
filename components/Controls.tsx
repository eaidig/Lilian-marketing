import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Direction } from '../types';

interface ControlsProps {
  current: number;
  total: number;
  onNavigate: (dir: Direction) => void;
}

const Controls: React.FC<ControlsProps> = ({ current, total, onNavigate }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-500 ease-out shadow-[0_0_10px_#00f3ff]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <button 
          onClick={() => onNavigate(Direction.PREV)}
          disabled={current === 0}
          className="p-3 rounded-full bg-neon-panel border border-gray-700 text-white hover:border-neon-purple hover:text-neon-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Slide Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => onNavigate(Direction.NEXT)}
          disabled={current === total - 1}
          className="p-3 rounded-full bg-neon-panel border border-gray-700 text-white hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Próximo Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Counter */}
      <div className="fixed bottom-8 left-8 text-gray-500 font-mono text-sm z-50">
        <span className="text-neon-cyan">{current + 1}</span> <span className="mx-1">/</span> {total}
      </div>
    </>
  );
};

export default Controls;