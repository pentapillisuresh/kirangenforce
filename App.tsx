import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Blog from './src/pages/Blog';
import Contact from './src/pages/Contact';
import PortfolioArchitecture from './src/pages/PortfolioArchitecture';
import PortfolioInteriorDesign from './src/pages/PortfolioInteriorDesign';
import NotFound from './src/pages/NotFound';

import FloatingWhatsApp from './src/components/FloatingWhatsApp';

// Preloader Component with #D8D8D5 Background
const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#D8D8D5' }}
    >
      <div className="text-center">
        {/* Loading GIF with slower animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="/images/AA.gif"
            alt="Loading..."
            className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto"
          />
        </motion.div>
        
        {/* Brand Name with slower animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6"
        >
          <p className="text-black/50 text-xs font-mono tracking-[0.3em] uppercase">
            archaidplus
          </p>
          <div className="flex items-center justify-center gap-1 mt-3">
            <div className="w-1.5 h-1.5 bg-[#D9AF58] rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-[#D9AF58] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-1.5 h-1.5 bg-[#D9AF58] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased loading time - 5 seconds
    const minimumLoadTime = 3000; // 5 seconds
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/architecture" element={<PortfolioArchitecture />} />
            <Route path="/portfolio/interior-design" element={<PortfolioInteriorDesign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsApp />
        </motion.div>
      )}
    </AnimatePresence>
  );
}