import React from 'react';
import { SlideContent } from '../types';

interface SlideViewProps {
  data: SlideContent;
}

const SlideView: React.FC<SlideViewProps> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 md:px-20 py-10">
      
      {/* Header Section */}
      <div className={`mb-8 ${data.layout === 'center' || data.layout === 'cover' ? 'text-center' : 'text-left'}`}>
        <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-tighter
          ${data.layout === 'cover' ? 'text-5xl md:text-7xl mb-4' : 'text-3xl md:text-5xl mb-2'}
        `}>
          {data.title}
        </h1>
        {data.subtitle && (
          <h2 className="text-xl md:text-2xl text-neon-cyan font-mono mt-2">
            {data.subtitle}
          </h2>
        )}
        <div className={`h-1 bg-gradient-to-r from-neon-purple to-transparent mt-4 rounded-full
          ${data.layout === 'center' || data.layout === 'cover' ? 'w-32 mx-auto' : 'w-24'}
        `}></div>
      </div>

      {/* Content Section */}
      <div className={`flex-grow flex flex-col ${data.layout === 'center' ? 'items-center justify-center' : ''}`}>
        
        {data.layout === 'split' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center h-full">
             {/* Left side is usually text or primary graphic provided in content */}
             <div className="h-full flex flex-col justify-center">
               {/* Visual representation for split layout is handled inside content prop in constants */}
               {data.content}
             </div>
             {/* Decorative element for Split Layouts */}
             <div className="hidden md:flex items-center justify-center opacity-80">
                <div className="w-64 h-64 border border-gray-800 rounded-full flex items-center justify-center relative animate-pulse-slow">
                   <div className="absolute inset-0 border-2 border-neon-cyan/20 rounded-full animate-spin [animation-duration:10s]"></div>
                   <div className="w-48 h-48 border border-neon-purple/30 rounded-full"></div>
                </div>
             </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center">
            {data.content}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideView;