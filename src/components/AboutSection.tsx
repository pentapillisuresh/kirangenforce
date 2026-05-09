import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#D9AF58]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">About archaidplus</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Designing the Future,
              <br />
              <span className="text-[#D9AF58]">Honoring the Past</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 text-justify">
              Founded in 2012, archaidplus Studio has grown from a boutique design practice into an internationally recognized architecture and interior design firm. We believe that great design is not just about aesthetics — it's about creating spaces that enhance human experience.
            </p>
            <p className="text-white/60 leading-relaxed mb-10 text-justify">
              Our multidisciplinary team of architects, interior designers, and spatial thinkers collaborate to deliver projects that are both visually stunning and functionally exceptional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="/images/about-img-1.png"
                alt="archaidplus Studio design team at work"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,20%,6%)]/60 to-transparent" />
            </div>

            

          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;