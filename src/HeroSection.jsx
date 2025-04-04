import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black text-white min-h-[90vh] flex flex-col items-center justify-center p-4 rounded-b-[50px] md:min-h-12 ">
      {/* Main Heading Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 lg:mt-24 ">
        <h1 className="text-5xl md:text-7xl font-bold mb-2">
          Creating <span className="text-purple-400">Impactful Apps</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          for the World
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Vyro builds the next generation of content creation tools powered by Artificial Intelligence and
          Machine Learning to empower you to express your creativity.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex  justify-center gap-4 w-full max-w-6xl">
        {/* Card 1: Innovative */}
        <div className="relative w-64 h-64 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Innovative</h2>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white" style={{backgroundImage: "url('/api/placeholder/48/48')"}}></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
        </div>

        {/* Card 2: Epic */}
        <div className="relative w-64 h-64 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Epic</h2>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
            <div className="flex justify-center items-center h-32">
              <div className="w-16 h-16 rounded-full bg-blue-500/70 blur-lg"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
        </div>

        {/* Card 3: Brilliance - Highlighted */}
        <div className="relative w-64 h-64 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden border border-blue-500 shadow-lg shadow-blue-500/50 lg:top-28 ">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Brilliance</h2>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-1/3 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-500/20 rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-400/30 rounded-full">
                  <div className="absolute inset-0 blur-md bg-blue-400/20 rounded-full"></div>
                  <div className="absolute inset-4 bg-blue-500/40 rounded-full"></div>
                </div>
              </div>
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-200 rounded-full shadow-lg shadow-blue-200/70"></div>
              </div>
              <div className="absolute w-full h-full">
                {[...Array(15)].map((_, i) => (
                  <div key={i} 
                       className="absolute w-1 h-1 bg-blue-300 rounded-full" 
                       style={{
                         left: `${Math.random() * 100}%`, 
                         top: `${Math.random() * 100}%`,
                         opacity: Math.random() * 0.7 + 0.3
                       }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Genius */}
        <div className="relative w-64 h-64 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Genius</h2>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
            <div className="flex justify-center items-center h-32">
              <div className="w-16 h-16 rounded-full bg-purple-500/40 blur-lg"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
        </div>

        {/* Card 5: Creative */}
        <div className="relative w-64 h-64 bg-gradient-to-b from-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">Creative</h2>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-white" style={{backgroundImage: "url('/api/placeholder/48/48')"}}></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

































// // import { useEffect, useState } from 'react';
// import brainAi from './pictures/brain-ai.jpeg';
// import glowingCircle from './pictures/glowing-circle.jpeg';
// // import robotIcon from '/images/robot-icon.jpg';
// import aiColorful from './pictures/ai-colorgul.jpeg';
// import digitalBrain from './pictures/digital-brain.jpeg';

// function HeroSection() {
//   // Define card data
//   const cards = [
//     { title: 'Innovative', icon: '✨', bgImage: brainAi },
//     { title: 'Epic', icon: '🔮', bgImage: glowingCircle },
//     { title: 'Brilliance', icon: '💫', bgImage: digitalBrain },
//     { title: 'Genius', icon: '🧠', bgImage: aiColorful },
//     { title: 'Creative', icon: '🎨', bgImage: brainAi },
//   ];

//   // Create a translucent purple icon for each card
//   const renderIcon = () => (
//     <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-purple-600/30 backdrop-blur-sm flex items-center justify-center">
//       <div className="w-6 h-6 rounded-full bg-purple-500/50 text-white flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-7.5h2v5h-2zm0-7h2v2.5h-2z" />
//         </svg>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-[77vh] bg-black overflow-hidden relative rounded-b-[50px] z-10">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900/20 z-0"></div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-16 relative z-20">
//         {/* Hero Section */}
//         <div className="flex flex-col items-center justify-center text-center mt-16 mb-32">
//           <h1 className="text-5xl md:text-7xl font-bold mb-4">
//             <span className="text-white">Creating </span>
//             <span className="text-purple-500">Impactful Apps</span>
//           </h1>
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">for the World</h2>
//           <p className="text-gray-300 max-w-3xl text-lg md:text-xl leading-relaxed">
//             Vyro builds the next generation of content creation tools powered by Artificial Intelligence and
//             Machine Learning to empower you to express your creativity.
//           </p>
//         </div>

//         {/* Container for the cards */}
//         <div className="relative lg:pb-40">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:-mb-52 -mt-[210px] relative ">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`relative overflow-hidden rounded-3xl border border-gray-800 bg-black/40 h-64 transform transition-transform hover:scale-105 ${
//                   card.title === 'Brilliance' 
//                     ? 'relative z-30 -translate-y-1/2' 
//                     : 'absolute bottom-0 translate-y-1/2'
//                 }`}
//                 style={{
//                   left: card.title === 'Brilliance' ? '50%' : 'auto',
//                   transform: card.title === 'Brilliance' 
//                     ? 'translate(-50%, 50%)' 
//                     : 'translateY(50%)'
//                 }}
//               >
//                 {/* Card background image with overlay */}
//                 <div className="absolute inset-0 opacity-30">
//                   <img
//                     src={card.bgImage}
//                     alt={card.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col p-6">
//                   <h3 className="text-white text-2xl font-bold">{card.title}</h3>

//                   {/* Persona image */}
//                   <div className="mt-auto lg:mt-8">
//                     <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full overflow-hidden border-2 border-purple-500/50">
//                       <div className="w-full h-full flex items-center justify-center text-xl">
//                         {card.icon}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Icon */}
//                 {renderIcon()}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;