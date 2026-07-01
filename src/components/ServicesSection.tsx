import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Building2,
  Zap,
  Gauge,
  RefreshCw,
  Fan,
  FileText,
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
    title: 'Turnkey Projects',
    subtitle: 'Complete Solutions',
    description: 'End-to-end project execution from concept to commissioning with complete turnkey solutions.',
    color: '#EB0133',
    number: '01',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Electrical Panel Services',
    subtitle: 'Power Distribution',
    description: 'Design, manufacturing, and installation of HT & LT electrical panels for all applications.',
    color: '#EB0133',
    number: '02',
  },
  {
    id: 3,
    icon: Gauge,
    title: 'Mahindra Powerol Diesel Genset Services',
    subtitle: 'Generator Expertise',
    description: 'Sales, installation, and maintenance of Mahindra Powerol diesel gensets from 5KVA to 650KVA.',
    color: '#EB0133',
    number: '03',
  },
  {
    id: 4,
    icon: RefreshCw,
    title: 'Generator Buyback and Replacement',
    subtitle: 'Upgrade Solutions',
    description: 'Buyback of old generators and replacement with new, efficient Mahindra Powerol gensets.',
    color: '#EB0133',
    number: '04',
  },
  {
    id: 5,
    icon: Fan,
    title: 'Exhaust System',
    subtitle: 'Emission Control',
    description: 'Design and installation of exhaust systems for generators ensuring compliance with emission norms.',
    color: '#EB0133',
    number: '05',
  },
  {
    id: 6,
    icon: FileText,
    title: 'Annual Maintenance Contract (AMC) for DG Sets',
    subtitle: 'Service Assurance',
    description: 'Comprehensive annual maintenance contracts for diesel generators to ensure optimal performance and longevity.',
    color: '#EB0133',
    number: '06',
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ServicesSection: FC = () => {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-black py-20 mt-20"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#EB0133] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Our Services
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Comprehensive Power
            <br />
            <span className="text-[#EB0133]">Solutions</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            From turnkey projects to annual maintenance, we deliver excellence across all power generation services.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-6xl mx-auto"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-44 h-44 rounded-full bg-white/[0.03] flex flex-col items-center justify-center border border-white/5 shadow-md cursor-pointer transition-all duration-500 hover:bg-[#EB0133] hover:border-[#EB0133]/50 hover:scale-105 hover:shadow-2xl">

                  {/* Outer Glow */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#EB0133]/30 transition-all duration-500" />

                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#EB0133] flex items-center justify-center text-white text-xs font-bold z-20">
                    {service.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <Icon className="w-10 h-10 text-[#EB0133] group-hover:text-white transition-all duration-500 mb-3" />

                    <h3 className="font-serif text-sm font-semibold text-white leading-snug">
                      {service.title}
                    </h3>

                    <p className="font-sans text-[10px] text-white/40 group-hover:text-white/80 mt-2 px-2 transition-all duration-500">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Animated Ring */}
                  <div className="absolute w-full h-full rounded-full border-2 border-transparent scale-110 group-hover:scale-100 group-hover:border-white/20 transition-all duration-700" />
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