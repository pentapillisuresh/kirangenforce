import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Building2, Sofa, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#' },
  { label: 'Services', path: '/#' },
  { label: 'Features', path: '/#' },
  { label: 'Gallery', path: '/#' },
  { label: 'Blog', path: '/#' },
  { label: 'Contact', path: '/#' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Determine if we should use dark text based on scroll state, mobile menu, and current route
  const isHomePage = location.pathname === '/';
  const useDarkText = scrolled || mobileOpen || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        (!isHomePage || scrolled) && !mobileOpen
          ? 'bg-white backdrop-blur-md border-b border-black/10 shadow-md'
          : (!isHomePage || scrolled) && mobileOpen
          ? 'bg-white border-b border-black/10 shadow-md'
          : !(!isHomePage || scrolled) && mobileOpen
          ? 'bg-white border-b border-black/10'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center h-full group">
            <div className="flex items-center justify-center" style={{width:"13rem"}}>
              <img
                src="/images/genlogo.png"
                alt="Logo"
                className="max-h-full object-contain"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 group ${
                  isActive(link.path)
                    ? 'text-[#EB0133]'
                    : useDarkText
                    ? 'text-gray-700 hover:text-[#EB0133]'
                    : 'text-gray-900 hover:text-[#EB0133]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#EB0133] transition-transform duration-300 origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#EB0133] text-white hover:bg-[#CC0022] hover:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50"
            >
              Get Started
            </Link>
          </div>

          {/* Always Black Hamburger with Spring Bounce Cross Animation */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB0133]/50 transition-all duration-300 hover:bg-black/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="relative w-5 h-5">
              {/* Line 1 - Rotates and spins into position */}
              <motion.span
                custom={mobileOpen}
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  scale: mobileOpen ? 1 : 0.8,
                  y: mobileOpen ? 0 : -6,
                  opacity: 1,
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: mobileOpen ? 0.1 : 0,
                  ease: [0.34, 1.56, 0.64, 1] // Spring-like bounce
                }}
                className="absolute left-0 w-5 h-0.5 rounded-full bg-gray-800"
                style={{
                  top: '50%',
                  marginTop: '-1px',
                  transformOrigin: 'center',
                }}
              />
              
              {/* Line 2 - Rotates opposite direction with stagger */}
              <motion.span
                custom={mobileOpen}
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  scale: mobileOpen ? 1 : 0.8,
                  y: mobileOpen ? 0 : 6,
                  opacity: 1,
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: mobileOpen ? 0.2 : 0,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="absolute left-0 w-5 h-0.5 rounded-full bg-gray-800"
                style={{
                  top: '50%',
                  marginTop: '-1px',
                  transformOrigin: 'center',
                }}
              />

              {/* Optional: Middle line that fades out with scale */}
              <motion.span
                animate={{
                  scaleX: mobileOpen ? 0 : 1,
                  opacity: mobileOpen ? 0 : 1,
                  y: mobileOpen ? 0 : 0,
                }}
                transition={{ duration: 0.2, delay: mobileOpen ? 0 : 0.1 }}
                className="absolute left-0 w-5 h-0.5 rounded-full bg-gray-800"
                style={{
                  top: '50%',
                  marginTop: '-1px',
                  transformOrigin: 'center',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 pb-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-[#EB0133] bg-[#EB0133]/10'
                        : 'text-gray-700 hover:text-[#EB0133] hover:bg-[#EB0133]/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 rounded-full text-center font-semibold bg-[#EB0133] text-white hover:bg-[#CC0022] transition-all duration-200 shadow-md"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;