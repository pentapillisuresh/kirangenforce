import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, ArrowRight } from 'lucide-react';

const projects = [
  { title: 'The Meridian Residence', location: 'New York, USA', year: '2024', type: 'Residential', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', area: '4,200 sqft' },
  { title: 'Verdant Office Complex', location: 'London, UK', year: '2023', type: 'Commercial', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop', area: '28,000 sqft' },
  { title: 'The Obsidian Tower', location: 'Dubai, UAE', year: '2023', type: 'Mixed-Use', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', area: '120,000 sqft' },
  { title: 'Coastal Villa Retreat', location: 'Amalfi, Italy', year: '2022', type: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop', area: '6,800 sqft' },
  { title: 'The Glass Pavilion', location: 'Tokyo, Japan', year: '2022', type: 'Cultural', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', area: '15,000 sqft' },
  { title: 'Skyline Penthouse', location: 'Singapore', year: '2021', type: 'Residential', image: 'https://placehold.co/800x600', area: '3,500 sqft' },
];

const filters = ['All', 'Residential', 'Commercial', 'Mixed-Use', 'Cultural'];

export default function PortfolioArchitecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,4%)] to-[hsl(30,20%,6%)]" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Architecture</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                A curated selection of our architectural projects — from intimate residences to landmark commercial developments.
              </p>
            </motion.div>
          </div>
        </section>

        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(38,85%,55%)]/50 ${
                  active === filter
                    ? 'bg-[hsl(38,85%,55%)] text-[hsl(30,20%,8%)]'
                    : 'border border-white/20 text-white/60 hover:border-[hsl(38,85%,55%)]/50 hover:text-[hsl(38,85%,55%)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/8 hover:border-[hsl(38,85%,55%)]/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 bg-[hsl(30,20%,8%)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[hsl(38,85%,55%)]/15 text-[hsl(38,85%,55%)] text-xs font-medium">{project.type}</span>
                    <span className="text-white/30 text-xs">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <span className="text-white/30 text-xs">{project.area}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}