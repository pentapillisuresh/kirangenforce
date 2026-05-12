import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="./images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,6%)]/60 via-[hsl(30,20%,6%)]/40 to-[hsl(30,20%,6%)]" /> */}
      </motion.div>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(38,85%,55%)]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[hsl(28,90%,45%)]/5 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
       

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.3] mb-6"
        >
          Architecturally aiding the
          <br />
          society with refreshed ideas 
          <br />
          and functional measures
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We design extraordinary spaces that transcend the ordinary — blending architectural precision with interior artistry to create environments that inspire.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;