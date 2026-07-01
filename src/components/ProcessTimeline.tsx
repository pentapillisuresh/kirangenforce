import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, PenTool, Layers, Hammer, CheckCircle, Zap, Settings, Shield, Users, Award } from 'lucide-react';

const steps = [
  { icon: Search, step: '01', title: 'Consultation', desc: 'Understanding your power requirements and application needs.' },
  { icon: PenTool, step: '02', title: 'Solution Design', desc: 'Designing the optimal power solution for your specific needs.' },
  { icon: Layers, step: '03', title: 'Product Selection', desc: 'Selecting the right generator from 5KVA to 650KVA range.' },
  { icon: Hammer, step: '04', title: 'Installation', desc: 'Professional installation by our expert technical team.' },
  { icon: CheckCircle, step: '05', title: 'Service Support', desc: 'Comprehensive after-sales service and maintenance support.' },
];

const useTypewriter = (text: string, speed: number = 20, delay: number = 0) => {
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

const AlternatingTimeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (isInView) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setActiveStep(prev => Math.max(prev, index));
        }, index * 800);
      });
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-40 bg-black overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Subtitle Section - Same style as Services/About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#EB0133] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Our Process
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            How We Deliver <span className="text-[#EB0133]">Power</span>
          </h2>
          
          <p className="text-white/50 text-base leading-relaxed font-sans">
            A seamless journey from consultation to service support, ensuring reliable power solutions at every step.
          </p>
        </motion.div>
        
        <div className="relative min-h-[400px] flex flex-col justify-center">
          
          {/* Central Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#EB0133] origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 3, ease: "linear" }}
              style={{ width: '100%' }}
            />
          </div>

          {/* Steps Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-5 relative z-10">
            {steps.map((item, idx) => {
              const isActive = activeStep >= idx;
              const isAbove = idx % 2 === 0;
              const typewriterDesc = useTypewriter(item.desc, 20, idx * 800);

              return (
                <div key={item.step} className="relative flex flex-col items-center">
                  
                  {/* Content Box - Alternating Position */}
                  <motion.div 
                    initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : {}}
                    className={`absolute w-full px-4 text-center hidden md:block ${
                      isAbove ? 'bottom-[calc(50%+30px)]' : 'top-[calc(50%+30px)]'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 rounded-full bg-[#EB0133]/10 mb-2">
                        <item.icon className="w-5 h-5 text-[#EB0133]" />
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold">{item.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed max-w-[160px]">
                        {isActive ? typewriterDesc : ""}
                        {isActive && typewriterDesc.length < item.desc.length && (
                          <span className="inline-block w-1 h-3 ml-1 bg-[#EB0133] animate-pulse" />
                        )}
                      </p>
                    </div>
                  </motion.div>

                  {/* The Center Dot */}
                  <div className="relative flex items-center justify-center h-full">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={isActive ? { scale: 1 } : {}}
                      className="w-4 h-4 rounded-full bg-black border-2 border-[#EB0133] z-20"
                    >
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-full bg-[#EB0133]"
                          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Mobile Only Content (Standard List) */}
                    <div className="md:hidden ml-10 w-full py-8">
                       <h3 className="text-white font-bold">{item.title}</h3>
                       <p className="text-white/40 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={isActive ? { opacity: 1 } : {}}
                    className={`absolute font-mono text-[10px] text-[#EB0133] tracking-widest hidden md:block ${
                      isAbove ? 'top-[calc(50%+15px)]' : 'bottom-[calc(50%+15px)]'
                    }`}
                  >
                    STEP {item.step}
                  </motion.span>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingTimeline;