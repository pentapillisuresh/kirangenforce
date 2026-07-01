import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Blog from './src/pages/Blog';
import BlogPost from './src/pages/BlogPost';
import Contact from './src/pages/Contact';
import PortfolioArchitecture from './src/pages/PortfolioArchitecture';
import PortfolioInteriorDesign from './src/pages/PortfolioInteriorDesign';
import TrendingPage from './src/pages/TrendingPage';
import Gallery from './src/pages/Gallery';
import NotFound from './src/pages/NotFound';

import FloatingWhatsApp from './src/components/FloatingWhatsApp';
import FloatingCallButton from './src/components/FloatingCallButton';
import ScrollToTop from './src/components/ScrollToTop';
import LoadingScreen from "./src/components/LandingScreen"; 

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onLoadingComplete={handleLoadingComplete} />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="min-h-screen bg-black"
        >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/portfolio/architecture"
              element={<PortfolioArchitecture />}
            />
            <Route
              path="/portfolio/interior-design"
              element={<PortfolioInteriorDesign />}
            />
            <Route path="/trending-ideas" element={<TrendingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Floating Buttons */}
          <FloatingCallButton />
          <FloatingWhatsApp />

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastStyle={{
              backgroundColor: '#1a1a1a',
              color: '#ffffff',
              borderRadius: '12px',
              border: '1px solid rgba(217, 175, 88, 0.3)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}