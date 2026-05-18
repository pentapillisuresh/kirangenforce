import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, ArrowRight } from 'lucide-react';

const projects = [
  { 
    title: 'The Meridian Residence', 
    location: 'Mumbai, India', 
    year: '2024', 
    type: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', 
    area: '4,200 sqft' 
  },
  { 
    title: 'Verdant Office Complex', 
    location: 'Bangalore, India', 
    year: '2023', 
    type: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop', 
    area: '28,000 sqft' 
  },
  { 
    title: 'The Golden Crest Tower', 
    location: 'Hyderabad, India', 
    year: '2023', 
    type: 'Mixed-Use', 
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', 
    area: '120,000 sqft' 
  },
  { 
    title: 'Coastal Villa Retreat', 
    location: 'Goa, India', 
    year: '2022', 
    type: 'Residential', 
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop', 
    area: '6,800 sqft' 
  },
  { 
    title: 'The Glass Pavilion', 
    location: 'Pune, India', 
    year: '2022', 
    type: 'Cultural', 
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', 
    area: '15,000 sqft' 
  },
  { 
    title: 'Skyline Penthouse', 
    location: 'Delhi, India', 
    year: '2021', 
    type: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop', 
    area: '3,500 sqft' 
  },
  { 
    title: 'Riverside Cultural Center', 
    location: 'Kolkata, India', 
    year: '2023', 
    type: 'Cultural', 
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop', 
    area: '22,000 sqft' 
  },
  { 
    title: 'Tech Innovation Hub', 
    location: 'Chennai, India', 
    year: '2024', 
    type: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop', 
    area: '45,000 sqft' 
  },
  { 
    title: 'Luxury Boutique Hotel', 
    location: 'Jaipur, India', 
    year: '2022', 
    type: 'Mixed-Use', 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', 
    area: '35,000 sqft' 
  },
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
      <main className="bg-black min-h-screen">
        {/* Hero Section with banner image */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&h=600&fit=crop"
              alt="Archaidplus Architects Portfolio"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Architecture</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                A curated selection of our architectural projects — from intimate residences to landmark commercial developments across India.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8 mt-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 ${
                  active === filter
                    ? 'bg-[#D9AF58] text-black'
                    : 'border border-white/20 text-white/60 hover:border-[#D9AF58]/50 hover:text-[#D9AF58]'
                }`}
              >
                {filter}
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
                </div>
                
                {/* Content */}
                <div className="p-5 bg-gradient-to-t from-black via-black to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#D9AF58]/15 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/20">
                      {project.type}
                    </span>
                    <span className="text-white/30 text-xs font-mono">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#D9AF58] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-white/50 text-xs">
                      <MapPin className="w-3 h-3 text-[#D9AF58]" />
                      {project.location}
                    </div>
                    <span className="text-white/30 text-xs">{project.area}</span>
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
              Have a Project in Mind?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let's bring your vision to life. Our team of expert architects is ready to create something extraordinary for you.
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