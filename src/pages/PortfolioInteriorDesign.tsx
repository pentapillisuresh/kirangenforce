import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const projects = [
  { title: 'Azure Sky Penthouse', style: 'Contemporary', location: 'Miami, USA', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop' },
  { title: 'The Ivory Loft', style: 'Minimalist', location: 'Paris, France', year: '2024', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop' },
  { title: 'Amber Dining Suite', style: 'Art Deco', location: 'New York, USA', year: '2023', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop' },
  { title: 'The Velvet Study', style: 'Traditional', location: 'London, UK', year: '2023', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop' },
  { title: 'Nordic Master Suite', style: 'Scandinavian', location: 'Stockholm, Sweden', year: '2022', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop' },
  { title: 'The Jade Terrace', style: 'Biophilic', location: 'Singapore', year: '2022', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop' },
];

const styles = ['All', 'Contemporary', 'Minimalist', 'Art Deco', 'Traditional', 'Scandinavian', 'Biophilic'];

export default function PortfolioInteriorDesign() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.style === active);

  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,4%)] to-[hsl(30,20%,6%)]" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Interior Design</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Spaces that tell stories — our interior design portfolio spans styles, scales, and sensibilities.
              </p>
            </motion.div>
          </div>
        </section>

        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setActive(style)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(38,85%,55%)]/50 ${
                  active === style
                    ? 'bg-[hsl(38,85%,55%)] text-[hsl(30,20%,8%)]'
                    : 'border border-white/20 text-white/60 hover:border-[hsl(38,85%,55%)]/50 hover:text-[hsl(38,85%,55%)]'
                }`}
              >
                {style}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,20%,6%)]/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 bg-[hsl(30,20%,8%)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[hsl(38,85%,55%)]/15 text-[hsl(38,85%,55%)] text-xs font-medium">{project.style}</span>
                    <span className="text-white/30 text-xs">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-white/40 text-xs">{project.location}</p>
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