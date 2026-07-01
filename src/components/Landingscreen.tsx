import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [startExit, setStartExit] = useState(false);
  const [openGate, setOpenGate] = useState(false);

  const duration = 2400;

  useEffect(() => {
    let start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      let percent = (elapsed / duration) * 100;

      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);

        setTimeout(() => {
          setOpenGate(true); // start gate animation

          setTimeout(() => {
            setStartExit(true);

            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 800);
        }, 200);
      }

      setProgress(percent);
    }, 16);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const text = "KIRAN";

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
      
      {/* LEFT PANEL */}
      <div
        className={`absolute left-0 top-0 h-full w-1/2 bg-[#1a1a1a] z-40 transition-transform duration-700 ${
          openGate ? "-translate-x-full" : "translate-x-0"
        }`}
      />

      {/* RIGHT PANEL */}
      <div
        className={`absolute right-0 top-0 h-full w-1/2 bg-[#1a1a1a] z-40 transition-transform duration-700 ${
          openGate ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* CENTER CONTENT */}
      <div
        className={`relative z-50 flex flex-col items-center justify-center transition-all duration-700 ${
          startExit ? "opacity-0 scale-90" : "opacity-100"
        }`}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-6"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto">
            <img
              src="./images/genlogo.png"
              alt="CCIPL Logo"
              className="w-full h-full object-contain"
              onError={handleImageError}
            />
          </div>
        </motion.div>

        {/* LETTER DROP - CCIPL */}
        <div className="flex space-x-2 text-6xl md:text-8xl font-bold">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="letter text-white"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${duration / 1000}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* SUBTITLE LINE 1 - CONSULTANCY */}
        <p className="mt-4 text-[#D9AF58] tracking-[5px] text-lg animate-fadeIn font-medium">
          GENFORCE PVT. LTD.
        </p>

       

        {/* PROGRESS BAR - Gold color */}
        <div className="w-64 h-[2px] bg-white/20 mt-8 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#D9AF58]"
            style={{
              width: `${progress}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>

        {/* PERCENT - Gold color */}
        <p className="text-[#D9AF58]/80 mt-3 text-sm tracking-widest font-mono">
          {Math.floor(progress)}%
        </p>

        {/* Tagline */}
        <p className="text-white/40 text-[10px] tracking-wider mt-4 animate-fadeIn3">
          Transforming Dreams into Reality for Over 20 Years
        </p>
      </div>

      {/* STYLES */}
      <style>{`
        .letter {
          display: inline-block;
          opacity: 0;
          transform: translateY(-150px);
          animation-name: drop;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes drop {
          0% {
            opacity: 0;
            transform: translateY(-150px);
          }
          60% {
            opacity: 1;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
          animation-delay: 1s;
        }

        .animate-fadeIn2 {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
          animation-delay: 1.3s;
        }

        .animate-fadeIn3 {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
          animation-delay: 1.8s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;