import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background Image with Dark Overlay for Text Visibility */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&h=500&fit=crop"
              alt="Luxury interior design inspiration"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay to make text visible */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              {/* Premium Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-3 h-3 text-[#D9AF58]" />
                <span className="text-[#D9AF58] text-[10px] font-mono tracking-[0.2em] uppercase">
                  Limited Availability
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Ready to Transform
                <br />
                <span className="text-[#D9AF58]">Your Space?</span>
              </motion.h2>

              {/* Description - Better contrast */}
              <motion.p 
                className="text-white/80 text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Schedule a free consultation with our design team today.
              </motion.p>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D9AF58] text-black font-mono text-xs font-semibold hover:bg-[#C49A3E] transition-all duration-300 hover:scale-105"
                >
                  Book Free Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm text-white font-mono text-xs font-semibold hover:border-[#D9AF58]/50 hover:bg-[#D9AF58]/10 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.p 
                className="text-white/50 text-[10px] mt-5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                No obligation. Cancel anytime. 100% confidential.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;