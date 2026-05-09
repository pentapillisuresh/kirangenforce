import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Layers, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  { 
    icon: Search, 
    step: '01', 
    title: 'Discovery', 
    desc: 'We begin with an in-depth consultation to understand your vision, lifestyle, and aspirations for the space.' 
  },
  { 
    icon: PenTool, 
    step: '02', 
    title: 'Concept Design', 
    desc: 'Our designers develop initial concepts, mood boards, and spatial layouts for your review and feedback.' 
  },
  { 
    icon: Layers, 
    step: '03', 
    title: 'Design Development', 
    desc: 'Approved concepts are refined into detailed drawings, material selections, and 3D visualizations.' 
  },
  { 
    icon: Hammer, 
    step: '04', 
    title: 'Construction', 
    desc: 'Our trusted network of contractors brings the design to life with precision craftsmanship and oversight.' 
  },
  { 
    icon: CheckCircle, 
    step: '05', 
    title: 'Handover', 
    desc: 'Final walkthrough, styling, and handover — your dream space, delivered to perfection.' 
  },
];

// Typewriter effect hook
const useTypewriter = (text: string, speed: number = 30, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, started]);

  return displayText;
};

const ProcessTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (inView) {
      // Animate steps one by one
      steps.forEach((_, index) => {
        setTimeout(() => {
          setActiveStep(prev => Math.max(prev, index));
        }, index * 800);
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated Light Orbs */}
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#D9AF58]/3 blur-[120px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D9AF58]" />
            <span className="text-[#D9AF58] text-xs font-mono tracking-[0.2em] uppercase">How We Work</span>
            <div className="w-8 h-px bg-[#D9AF58]" />
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our <span className="text-[#D9AF58]">Process</span>
          </h2>
          
          <div className="w-20 h-px bg-[#D9AF58] mx-auto mb-6" />
          
          <p className="text-white/50 max-w-xl mx-auto font-sans">
            A transparent, collaborative journey from first conversation to final reveal.
          </p>
        </motion.div>

        {/* Timeline with Animated Line */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#D9AF58]/30 md:-translate-x-px overflow-hidden"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
          
          {/* Glow on the line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-px h-full bg-gradient-to-b from-[#D9AF58] via-[#D9AF58]/50 to-transparent md:-translate-x-px"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              const isActive = activeStep >= i;
              const typewriterText = useTypewriter(step.desc, 20, i * 800);

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex items-start gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot with Animation */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#D9AF58] border-4 border-black -translate-x-1/2 mt-6 z-10 shadow-lg shadow-[#D9AF58]/30"
                    initial={{ scale: 0 }}
                    animate={isActive ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#D9AF58]"
                      animate={isActive ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 1, delay: i * 0.15 + 0.3, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 transition-all duration-500 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <motion.div 
                      className={`inline-flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isActive ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    >
                      {/* Icon Container */}
                      <motion.div 
                        className="w-12 h-12 rounded-xl border border-[#D9AF58]/30 bg-[#D9AF58]/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5 text-[#D9AF58]" />
                      </motion.div>
                      
                      {/* Step Number */}
                      <motion.span 
                        className="font-serif text-5xl font-bold text-white/10"
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                      >
                        {step.step}
                      </motion.span>
                    </motion.div>

                    <motion.h3 
                      className="font-serif text-2xl font-bold text-white mb-3"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Typewriter Effect Description */}
                    <motion.p 
                      className="text-white/50 text-sm leading-relaxed font-sans"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.15 + 0.4 }}
                    >
                      {isActive ? typewriterText : ''}
                      {isActive && typewriterText.length < step.desc.length && (
                        <span className="inline-block w-0.5 h-3 bg-[#D9AF58] ml-1 animate-pulse" />
                      )}
                    </motion.p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;