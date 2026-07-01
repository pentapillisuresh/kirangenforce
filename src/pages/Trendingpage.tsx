import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, MapPin, Building2, Sofa, HardHat, Hammer } from 'lucide-react';

// Architecture Projects - CCIPL Projects
const architectureProjects = [
  { 
    title: 'Srinivasa Commercial Complex', 
    type: 'Commercial', 
    location: 'Vijayawada, Andhra Pradesh',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Luxury Residential Villa', 
    type: 'Residential', 
    location: 'Visakhapatnam, Andhra Pradesh',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'TechPark Corporate Office', 
    type: 'Commercial', 
    location: 'Hyderabad, Telangana',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Coastal Heritage Resort', 
    type: 'Hospitality', 
    location: 'Visakhapatnam, Andhra Pradesh',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Skyline Penthouse', 
    type: 'Residential', 
    location: 'Vijayawada, Andhra Pradesh',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Amalapuram Township', 
    type: 'Mixed-Use', 
    location: 'Amalapuram, Andhra Pradesh',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Industrial Manufacturing Hub', 
    type: 'Industrial', 
    location: 'Visakhapatnam, Andhra Pradesh',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
  { 
    title: 'Jubilee Hills Residence', 
    type: 'Residential', 
    location: 'Hyderabad, Telangana',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', 
    category: 'architecture'
  },
];

// Interior Design Projects - CCIPL Projects
const interiorProjects = [
  { title: 'Modern Corporate Office', style: 'Contemporary', location: 'Vijayawada, Andhra Pradesh', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Luxury Villa Interiors', style: 'Contemporary', location: 'Visakhapatnam, Andhra Pradesh', year: '2024', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Executive Dining Suite', style: 'Art Deco', location: 'Hyderabad, Telangana', year: '2023', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'HR Executive Office', style: 'Minimalist', location: 'Vijayawada, Andhra Pradesh', year: '2023', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Residential Apartment', style: 'Scandinavian', location: 'Amalapuram, Andhra Pradesh', year: '2023', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Conference Room Design', style: 'Contemporary', location: 'Hyderabad, Telangana', year: '2024', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Showroom Interiors', style: 'Modern', location: 'Visakhapatnam, Andhra Pradesh', year: '2023', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Open Office Layout', style: 'Contemporary', location: 'Vijayawada, Andhra Pradesh', year: '2024', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop', category: 'interior' },
  { title: 'Retail Store Design', style: 'Modern', location: 'Hyderabad, Telangana', year: '2023', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop', category: 'interior' },
];

// Structural Projects - CCIPL Projects (NEW)
const structuralProjects = [
  { title: 'High-Rise Structure', type: 'Structural', location: 'Vijayawada, Andhra Pradesh', year: '2024', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Industrial Shed Design', type: 'Structural', location: 'Visakhapatnam, Andhra Pradesh', year: '2023', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Bridge Structural Analysis', type: 'Structural', location: 'Amalapuram, Andhra Pradesh', year: '2023', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop', category: 'structural' },
  { title: 'Seismic Resistant Design', type: 'Structural', location: 'Hyderabad, Telangana', year: '2024', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop', category: 'structural' },
];

// Combine all projects
const allProjects = [...architectureProjects, ...interiorProjects, ...structuralProjects];

// Filter options
const categoryFilters = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'architecture', label: 'Architecture', icon: Building2 },
  { id: 'interior', label: 'Interior Design', icon: Sofa },
  { id: 'structural', label: 'Structural', icon: HardHat },
];

// Architecture type filters
const architectureTypes = ['All', 'Residential', 'Commercial', 'Mixed-Use', 'Hospitality', 'Industrial'];

// Interior style filters
const interiorStyles = ['All', 'Contemporary', 'Minimalist', 'Art Deco', 'Scandinavian', 'Modern'];

export default function TrendingPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArchitectureType, setActiveArchitectureType] = useState('All');
  const [activeInteriorStyle, setActiveInteriorStyle] = useState('All');

  const getFilteredProjects = () => {
    let filtered = allProjects;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (activeCategory === 'architecture' && activeArchitectureType !== 'All') {
      filtered = filtered.filter(p => 'type' in p && p.type === activeArchitectureType);
    }
    
    if (activeCategory === 'interior' && activeInteriorStyle !== 'All') {
      filtered = filtered.filter(p => 'style' in p && p.style === activeInteriorStyle);
    }
    
    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/exbanner.jpg"
              alt="CCIPL Portfolio"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Our Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Projects</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                A curated selection of our architectural, interior, and structural projects — from residential villas to commercial complexes across Andhra Pradesh & Telangana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8 mt-4">
          {/* Main Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categoryFilters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveCategory(filter.id);
                    setActiveArchitectureType('All');
                    setActiveInteriorStyle('All');
                  }}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === filter.id
                      ? 'bg-[#D9AF58] text-black'
                      : 'border border-white/20 text-white/60 hover:border-[#D9AF58]/50 hover:text-[#D9AF58]'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Architecture Type Filters */}
          {activeCategory === 'architecture' && (
            <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
              {architectureTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveArchitectureType(type)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeArchitectureType === type
                      ? 'bg-[#D9AF58]/20 text-[#D9AF58] border border-[#D9AF58]/40'
                      : 'border border-white/20 text-white/40 hover:border-[#D9AF58]/30 hover:text-[#D9AF58]/70'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Interior Style Filters */}
          {activeCategory === 'interior' && (
            <div className="flex flex-wrap items-center gap-3 mb-12 justify-center">
              {interiorStyles.map((style) => (
                <button
                  key={style}
                  onClick={() => setActiveInteriorStyle(style)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeInteriorStyle === style
                      ? 'bg-[#D9AF58]/20 text-[#D9AF58] border border-[#D9AF58]/40'
                      : 'border border-white/20 text-white/40 hover:border-[#D9AF58]/30 hover:text-[#D9AF58]/70'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${project.category}-${project.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D9AF58]/40 transition-all duration-300 bg-black hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={600} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {(project.category === 'architecture' || project.category === 'structural') ? (
                    // Architecture & Structural Card
                    <>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#D9AF58]/20 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30 backdrop-blur-sm">
                        {'type' in project ? project.type : 'Project'}
                      </span>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-white mt-2 group-hover:text-[#D9AF58] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#D9AF58]" />
                        <span className="text-white/50 text-xs">{'location' in project ? project.location : 'Andhra Pradesh'}</span>
                      </div>
                      {'year' in project && (
                        <span className="text-white/40 text-[10px] mt-1 block">{project.year}</span>
                      )}
                    </>
                  ) : (
                    // Interior Design Card
                    <>
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded-full bg-[#D9AF58]/20 text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30 backdrop-blur-sm">
                          {'style' in project && project.style}
                        </span>
                        <span className="text-white/60 text-xs font-mono backdrop-blur-sm">{'year' in project && project.year}</span>
                      </div>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-white mt-2 group-hover:text-[#D9AF58] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#D9AF58]" />
                        <span className="text-white/50 text-xs">{'location' in project && project.location}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D9AF58]/20 backdrop-blur-sm border border-[#D9AF58]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9AF58]" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40">No projects found in this category.</p>
            </div>
          )}

          {/* Call to Action */}
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
              Let's bring your vision to life. Our team of expert architects, interior designers, and structural engineers is ready to create something extraordinary for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}