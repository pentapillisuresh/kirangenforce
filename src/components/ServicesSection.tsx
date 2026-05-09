import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Building2, 
  Sofa, 
  Ruler, 
  Layers, 
  Camera, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: number;
  icon: FC<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  number: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Building2,
    title: 'Architecture',
    subtitle: 'Visionary Structures',
    description: 'Creating iconic buildings that harmonize form, function, and environmental consciousness.',
    color: '#D9AF58',
    number: '01'
  },
  {
    id: 2,
    icon: Sofa,
    title: 'Interiors',
    subtitle: 'Spatial Poetry',
    description: 'Curating immersive environments where every element tells a story of refined taste.',
    color: '#D9AF58',
    number: '02'
  },
  {
    id: 3,
    icon: Ruler,
    title: 'Planning',
    subtitle: 'Precision Layouts',
    description: 'Optimizing spatial dynamics to enhance flow, functionality, and human experience.',
    color: '#D9AF58',
    number: '03'
  },
  {
    id: 4,
    icon: Layers,
    title: 'Renovation',
    subtitle: 'Adaptive Reuse',
    description: 'Transforming existing spaces into contemporary masterpieces while preserving soul.',
    color: '#D9AF58',
    number: '04'
  },
  {
    id: 5,
    icon: Camera,
    title: 'Visualization',
    subtitle: 'Digital Reality',
    description: 'Bringing concepts to life through photorealistic renders and virtual experiences.',
    color: '#D9AF58',
    number: '05'
  },
  {
    id: 6,
    icon: MessageSquare,
    title: 'Consulting',
    subtitle: 'Expert Guidance',
    description: 'Strategic advisory services from concept through completion for discerning clients.',
    color: '#D9AF58',
    number: '06'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const ServicesSection: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="w-full bg-black py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading with Original Font Styles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
            What We Do
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D9AF58] to-transparent mx-auto mb-5" />

          <p className="text-white/50 max-w-xl mx-auto font-sans text-sm">
            Comprehensive design solutions tailored to your vision, budget, and timeline.
          </p>
        </motion.div>

        {/* Circle Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group flex flex-col items-center text-center"
              >
                {/* Circular Card */}
                <div className="relative w-44 h-44 rounded-full bg-white/[0.03] flex flex-col items-center justify-center transition-all duration-500 hover:bg-[#D9AF58] hover:scale-105 shadow-md hover:shadow-2xl cursor-pointer border border-white/5 hover:border-[#D9AF58]/50">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#D9AF58]/30 transition-all duration-500"></div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#D9AF58] flex items-center justify-center text-black text-xs font-bold font-sans">
                    {service.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <Icon className="w-10 h-10 text-[#D9AF58] group-hover:text-white transition-all duration-500 mb-3" />
                    
                    <h3 className="font-serif text-sm font-semibold leading-snug text-white group-hover:text-white transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-[10px] text-white/40 group-hover:text-white/80 mt-2 px-2 transition-all duration-500">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute w-full h-full rounded-full border-2 border-transparent group-hover:border-white/20 scale-110 group-hover:scale-100 transition-all duration-700"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      
      </div>
    </section>
  );
};

export default ServicesSection;