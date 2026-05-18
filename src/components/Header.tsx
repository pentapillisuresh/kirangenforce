import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, Sofa } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioLinks = [
  { label: 'Architecture', path: '/portfolio/architecture', icon: Building2 },
  { label: 'Interior Design', path: '/portfolio/interior-design', icon: Sofa },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  {
    label: 'Our Portfolio',
    path: '/portfolio',
    dropdown: portfolioLinks,
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-md'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12">
              <img src='/images/logo1.png' alt="Logo" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onKeyDown={(e) => e.key === 'Enter' && setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 ${
                      isActive(link.path)
                        ? 'text-[#D9AF58]'
                        : scrolled
                        ? 'text-gray-700 hover:text-[#D9AF58]'
                        : 'text-white/80 hover:text-[#D9AF58]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden shadow-2xl border border-[#D9AF58]/20"
                        style={{ background: 'white', backdropFilter: 'blur(20px)' }}
                      >
                        <div className="p-2 bg-white">
                          {link.dropdown.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group ${
                                  isActive(item.path)
                                    ? 'bg-[#D9AF58]/20 text-[#D9AF58]'
                                    : 'text-gray-700 hover:bg-[#D9AF58]/10 hover:text-[#D9AF58]'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 group ${
                    isActive(link.path)
                      ? 'text-[#D9AF58]'
                      : scrolled
                      ? 'text-gray-700 hover:text-[#D9AF58]'
                      : 'text-white/80 hover:text-[#D9AF58]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#D9AF58] transition-transform duration-300 origin-left ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#D9AF58] text-white hover:bg-[#C49A3E] hover:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-white/98 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-gray-700 hover:text-[#D9AF58] hover:bg-[#D9AF58]/10 transition-all duration-200 text-base font-medium"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.dropdown.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:text-[#D9AF58] hover:bg-[#D9AF58]/10 transition-all duration-200 text-sm"
                              >
                                <Icon className="w-4 h-4" />
                                {item.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-[#D9AF58] bg-[#D9AF58]/10'
                        : 'text-gray-700 hover:text-[#D9AF58] hover:bg-[#D9AF58]/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="mt-4 px-6 py-3 rounded-full text-center font-semibold bg-[#D9AF58] text-white hover:bg-[#C49A3E] hover:scale-105 transition-all duration-200"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;