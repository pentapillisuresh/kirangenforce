import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Building2, Sofa, Ruler, Layers, Camera, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Architecture Design',
    desc: 'From concept to completion, we craft buildings that stand as testaments to human ingenuity and aesthetic vision. Our architectural services encompass residential, commercial, and mixed-use developments.',
    features: ['Concept Development', 'Schematic Design', 'Construction Documents', 'Project Management', 'Site Supervision'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
  },
  {
    icon: Sofa,
    title: 'Interior Design',
    desc: 'Transforming interiors into living works of art. Every material, texture, and light source is considered with intention to create spaces that are both beautiful and deeply functional.',
    features: ['Space Planning', 'Material Selection', 'Furniture Curation', 'Lighting Design', 'Art & Accessories'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    desc: 'Optimizing spatial flow and functionality to create environments that work as beautifully as they look. We analyze traffic patterns, natural light, and usage requirements.',
    features: ['Flow Analysis', 'Zoning Strategy', 'Ergonomic Planning', 'Acoustic Considerations', 'Flexibility Design'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
  },
  {
    icon: Layers,
    title: 'Renovation & Remodel',
    desc: 'Breathing new life into existing structures while preserving their character. We specialize in sensitive renovations that honor architectural heritage while meeting contemporary needs.',
    features: ['Structural Assessment', 'Heritage Preservation', 'Modern Integration', 'Material Matching', 'Phased Delivery'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    icon: Camera,
    title: '3D Visualization',
    desc: 'Photorealistic renders and immersive walkthroughs that bring your vision to life before a single brick is laid. Our visualization team uses cutting-edge technology.',
    features: ['Photorealistic Renders', 'Virtual Walkthroughs', 'VR Experiences', 'Animation', 'Material Studies'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
  },
  {
    icon: MessageSquare,
    title: 'Design Consulting',
    desc: 'Expert guidance at every stage of your project. Whether you need a second opinion or comprehensive strategic advice, our consultants bring decades of experience.',
    features: ['Brief Development', 'Contractor Selection', 'Budget Advisory', 'Quality Review', 'Post-Occupancy'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,4%)] to-[hsl(30,20%,6%)]" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">What We Offer</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive design solutions from initial concept through to final delivery — tailored to your vision, budget, and timeline.
              </p>
            </motion.div>
          </div>
        </section>

        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                      <img src={service.image} alt={service.title} width={600} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,20%,6%)]/40 to-transparent" />
                    </div>
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="w-12 h-12 rounded-xl bg-[hsl(38,85%,55%)]/15 border border-[hsl(38,85%,55%)]/30 flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-[hsl(38,85%,55%)]" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-white/60 leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                          <CheckCircle className="w-4 h-4 text-[hsl(38,85%,55%)] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(38,85%,55%)]/40 text-[hsl(38,85%,55%)] hover:bg-[hsl(38,85%,55%)]/10 transition-all duration-200 text-sm font-medium">
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}