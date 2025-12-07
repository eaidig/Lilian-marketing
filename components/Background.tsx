import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-neon-dark">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1a1d2d 1px, transparent 1px), linear-gradient(90deg, #1a1d2d 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[120px] transform translate-x-1/3 translate-y-1/3 mix-blend-screen"></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent bg-[length:100%_4px] pointer-events-none"></div>
    </div>
  );
};

export default Background;