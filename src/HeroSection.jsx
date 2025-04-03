// import { useEffect, useState } from 'react';
import brainAi from './pictures/brain-ai.jpeg';
import glowingCircle from './pictures/glowing-circle.jpeg';
// import robotIcon from '/images/robot-icon.jpg';
import aiColorful from './pictures/ai-colorgul.jpeg';
import digitalBrain from './pictures/digital-brain.jpeg';

function HeroSection() {
  // Define card data
  const cards = [
    { title: 'Innovative', icon: '✨', bgImage: brainAi },
    { title: 'Epic', icon: '🔮', bgImage: glowingCircle },
    { title: 'Brilliance', icon: '💫', bgImage: digitalBrain },
    { title: 'Genius', icon: '🧠', bgImage: aiColorful },
    { title: 'Creative', icon: '🎨', bgImage: brainAi },
  ];

  // Create a translucent purple icon for each card
  const renderIcon = () => (
    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-purple-600/30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-purple-500/50 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-7.5h2v5h-2zm0-7h2v2.5h-2z" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden relative rounded-b-[50px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/20 z-0"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16  relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mt-16 mb-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Creating </span>
            <span className="text-purple-500">Impactful Apps</span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">for the World</h2>
          <p className="text-gray-300 max-w-3xl text-lg md:text-xl leading-relaxed">
            Vyro builds the next generation of content creation tools powered by Artificial Intelligence and
            Machine Learning to empower you to express your creativity.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-hidden relative lg:-mb-[100px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-gray-800 bg-black/40 h-64 transform transition-transform hover:scale-105  "
            >
              {/* Card background image with overlay */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Purple glow effect */}
              {/* <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-600/30 rounded-full filter blur-3xl"></div> */}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col p-6">
                <h3 className="text-white text-2xl font-bold">{card.title}</h3>

                {/* Persona image */}
                <div className="mt-auto lg:mt-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full overflow-hidden border-2 border-purple-500/50">
                    <div className="w-full h-full flex items-center justify-center text-xl">
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon */}
              {renderIcon()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;