import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Carousel slides - ONLY titles and subtitles from your images
  const slides = [
    {
      id: 1,
      image: './images/banner1.png',
      title: 'RELIABLE ENERGY',
      subtitle: 'BRIGHTER FUTURE',
    },
    {
      id: 2,
      image: './images/banner2.png',
      title: 'KIRAN GENFORCE PVT LTD',
      subtitle: 'EFFICIENCY MEETS EXCELLENCE IN POWER GENERATION',
    },
    {
      id: 3,
      image: './images/banner3.png',
      title: 'KIRAN GENFORCE PVT.LTD.',
      subtitle: 'GLOBAL REACH, LOCAL TRUST—KIRANGENFORCE DELIVERS POWER ACROSS BORDERS',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section ref={ref} className="relative min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center overflow-hidden bg-black">
      {/* Background Carousel with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay for Premium Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Additional Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#EB0133]/5 via-transparent to-[#EB0133]/5" />
      </motion.div>

      {/* Background Glow Effects - Red theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#EB0133]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#EB0133]/8 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#EB0133]/5 blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ${
              index === currentIndex
                ? 'w-10 h-2 bg-[#EB0133] shadow-lg shadow-[#EB0133]/30'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Title from your image */}
        <motion.div
          key={`title-${currentIndex}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-3"
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] drop-shadow-lg">
            {slides[currentIndex].title}
          </h1>
        </motion.div>

        {/* Subtitle from your image with #EB0133 color */}
        <motion.div
          key={`subtitle-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-xl font-medium tracking-[0.15em] uppercase" style={{ color: '#EB0133' }}>
            {slides[currentIndex].subtitle}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#EB0133]" />
        </div>
      </motion.div>

      {/* Arrow Navigation - Left */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 hover:border-[#EB0133]/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-[#EB0133] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Arrow Navigation - Right */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 hover:border-[#EB0133]/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-[#EB0133] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;