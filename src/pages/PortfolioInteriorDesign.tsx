import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, MapPin } from 'lucide-react';

const projects = [
  { title: 'Azure Sky Penthouse', style: 'Contemporary', location: 'Mumbai, India', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop' },
  { title: 'The Ivory Loft', style: 'Minimalist', location: 'Delhi, India', year: '2024', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop' },
  { title: 'Amber Dining Suite', style: 'Art Deco', location: 'Bangalore, India', year: '2023', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop' },
  { title: 'The Velvet Study', style: 'Traditional', location: 'Hyderabad, India', year: '2023', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop' },
  { title: 'Nordic Master Suite', style: 'Scandinavian', location: 'Pune, India', year: '2022', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop' },
  { title: 'The Jade Terrace', style: 'Biophilic', location: 'Goa, India', year: '2022', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop' },
  { title: 'Royal Heritage Villa', style: 'Traditional', location: 'Jaipur, India', year: '2023', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop' },
  { title: 'Urban Sanctuary', style: 'Contemporary', location: 'Chennai, India', year: '2024', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop' },
  { title: 'Tranquil Waters', style: 'Minimalist', location: 'Kolkata, India', year: '2023', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop' },
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
      <main className="bg-black min-h-screen">
        {/* Hero Section with banner image */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=600&fit=crop"
              alt="Archaidplus Architects Interior Design Portfolio"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Interior Design</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Spaces that tell stories — our interior design portfolio spans styles, scales, and sensibilities across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8 mt-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setActive(style)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 ${
                  active === style
                    ? 'bg-[#D9AF58] text-black'
                    : 'border border-white/20 text-white/60 hover:border-[#D9AF58]/50 hover:text-[#D9AF58]'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D9AF58]/40 transition-all duration-300 bg-black"
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#D9AF58]/20 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30 backdrop-blur-sm">
                      {project.style}
                    </span>
                    <span className="text-white/40 text-xs font-mono backdrop-blur-sm">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-1 group-hover:text-[#D9AF58] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-white/50 text-xs">
                    <MapPin className="w-3 h-3 text-[#D9AF58]" />
                    {project.location}
                  </div>
                </div>
                
                {/* Hover Overlay Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#D9AF58]/20 backdrop-blur-sm border border-[#D9AF58]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-[#D9AF58]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No projects found in this category.</p>
            </div>
          )}

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let's create an interior that reflects your personality and enhances your lifestyle. Our design experts are here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}