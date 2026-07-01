import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Zap, ArrowRight, Eye, Target, Star, Leaf, Building2, Ruler, HardHat, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'CAD Consultants Team',
    role: 'Architecture & Engineering Experts',
    image: './images/niharika.jpg',
    bio: 'With over 20 years of combined experience, our team delivers innovative architectural, structural, and construction solutions.',
    isLead: true,
  },
  {
    name: 'Design Excellence Group',
    role: 'Architecture & Interiors Team',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face',
    bio: 'Specializing in 2D/3D elevations, floor plans, and AR/VR visualization for immersive client experiences.',
  },
  {
    name: 'Engineering & MEP Division',
    role: 'Structural & MEP Specialists',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Experts in structural analysis, MEP services, waterproofing, and construction management.',
  },
];

const projectImages = [
  {
    src: './images/31.jpg',
    title: 'Luxury Residential Villa',
    category: 'Architecture',
  },
  {
    src: '/images/29.JPG',
    title: 'Corporate Office Complex',
    category: 'Commercial',
  },
  {
    src: '/images/7.JPG',
    title: 'Interior Design Project',
    category: 'Interiors',
  },
  {
    src: './images/25.JPG',
    title: 'Structural Engineering',
    category: 'Construction',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop"
              alt="CAD Architecture and Construction"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Welcome to</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4">CAD Consultants India Pvt Ltd</h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                Transforming dreams into reality for over 20 years. Premier design and construction firm delivering tailored solutions in architecture, interiors, and construction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section ref={ref} className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              CAD Consultants India Pvt Ltd (CAD) is a premier design and construction firm based in Visakhapatnam, 
              Andhra Pradesh. With over 20 years of experience, we specialize in delivering tailored solutions in 
              architecture, interiors, and construction.
            </p>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              The <span className="text-[#D9AF58]">CAD Story</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto px-4">
              From a vision to redefine architectural standards to a trusted name in design and construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                CAD Consultants India Pvt Ltd (CAD) was established in 2003 with a vision to redefine architectural 
                standards in India. What began as a boutique architectural practice has grown into a comprehensive 
                design and construction firm serving clients across Andhra Pradesh, Telangana, and beyond.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Our journey is built on a foundation of quality, client satisfaction, and innovation. We take pride 
                in delivering solutions tailored to the unique needs of each project, backed by a guarantee of excellence. 
                Every project we undertake reflects our commitment to creating spaces that inspire and endure.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                In 2010, we expanded our services to include interior design and MEP solutions, recognizing the growing 
                need for integrated design and engineering services. This expansion allowed us to offer our clients a 
                truly comprehensive solution under one roof.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                In 2020, we took a bold step forward by integrating AR, VR, and BIM technologies into our workflow. 
                This technological advancement has revolutionized how we interact with our clients, allowing them to 
                experience their spaces virtually before construction begins.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Today, CAD stands as a trusted name in the industry, with offices in Vijayawada, Visakhapatnam, 
                Amalapuram, and Hyderabad. Our team of architects, interior designers, structural engineers, and 
                construction experts work together to bring our clients' visions to life.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                What sets us apart is our commitment to transparency, quality, and on-time delivery. From initial 
                concept to final handover, we ensure every detail aligns with our clients' expectations. We combine 
                expertise, technology, and craftsmanship to build spaces that inspire.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                Whether you're looking for a cozy home ambiance or a sleek corporate setup, CAD ensures every detail 
                aligns with your expectations. Join us in our mission to transform dreams into reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./images/about2.jpg"
                  alt="CAD architecture and construction team"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
              Our Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Featured <span className="text-[#D9AF58]">Projects</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto px-4">
              Explore some of our finest creations across architecture, interiors, and construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectImages.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative overflow-hidden bg-black/40 h-64 md:h-72 lg:h-80">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="text-[#D9AF58] text-[10px] font-mono tracking-wider uppercase mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lead Team Spotlight - WITH BACKGROUND IMAGE INSTEAD OF PHOTO */}
      {/* Lead Team Spotlight - WITH BACKGROUND IMAGE AND CENTERED CONTENT */}
<section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="relative rounded-2xl overflow-hidden shadow-2xl"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=800&fit=crop"
        alt="Luxury House - CAD Architecture"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/70" />
    </div>
    
    {/* Content Overlay - CENTERED */}
    <div className="relative z-10 p-8 md:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-[#D9AF58] fill-[#D9AF58]" />
          <span className="text-[#D9AF58] text-xs md:text-sm font-medium">20+ Years of Excellence</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">CAD Consultants India Pvt Ltd</h2>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
          Led by a team of experienced architects, structural engineers, and design professionals, CAD has 
          established itself as a trusted name in the industry. Our comprehensive approach combines creative 
          vision with technical expertise to deliver exceptional results.
        </p>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          Our mission is to transform your vision into reality through innovative designs and impeccable execution. 
          We combine expertise, technology, and craftsmanship to build spaces that inspire. With over two decades 
          of experience, we've completed numerous successful projects across residential, commercial, and industrial sectors.
        </p>
      </div>
    </div>
  </motion.div>
</section>

        {/* Vision & Mission Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                To be the most trusted and innovative design and construction firm in India, setting new standards 
                of excellence in architecture, interiors, and construction. We envision a future where every space 
                we create enhances the quality of life for its inhabitants while respecting the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/60 text-sm md:text-base leading-relaxed text-justify">
                To transform your vision into reality through innovative designs and impeccable execution. 
                We are committed to delivering solutions tailored to the unique needs of each project, backed 
                by a guarantee of excellence, quality, and client satisfaction.
              </p>
            </motion.div>
          </div>

          {/* Milestones Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-12 md:mb-16 p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Milestones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">2003</p>
                <p className="text-white/60 text-sm">Established CAD with a vision to redefine architectural standards.</p>
              </div>
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">2010</p>
                <p className="text-white/60 text-sm">Expanded services to include interior design and MEP solutions.</p>
              </div>
              <div className="border-l-2 border-[#D9AF58] pl-4">
                <p className="text-[#D9AF58] font-bold text-xl">2020</p>
                <p className="text-white/60 text-sm">Integrated AR, VR, and BIM technologies into our workflow.</p>
              </div>
            </div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-12 md:mb-16 p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Our Comprehensive Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Ruler className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold">Architecture</h3>
                <p className="text-white/50 text-xs">House plans, elevations, 3D walkthroughs</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Star className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold">Interiors</h3>
                <p className="text-white/50 text-xs">Custom designs with AR/VR visualization</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <HardHat className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold">Structural</h3>
                <p className="text-white/50 text-xs">Analysis, design, compliance</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <Hammer className="w-8 h-8 text-[#D9AF58] mx-auto mb-2" />
                <h3 className="text-white font-semibold">Construction</h3>
                <p className="text-white/50 text-xs">Civil, MEP, waterproofing</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Our Philosophy</h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4 text-justify">
                At CAD, we believe that great design is not a luxury — it is a necessity. Every space we create 
                shapes how people live, work, and interact. Our approach combines innovative design, technical 
                expertise, and sustainable practices to create environments that enhance life in every dimension.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 text-justify">
                From the initial concept to the final handover, we approach every decision with the same level 
                of care, precision, and craftsmanship. Our commitment to quality and client satisfaction is 
                backed by over 20 years of industry experience.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-[#D9AF58] font-medium hover:gap-3 transition-all duration-200"
              >
                Contact Us Today <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-6 md:p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6 text-left">Why Choose CAD?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">20+ Years of Industry Experience</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Comprehensive Services Under One Roof</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">AR/VR & BIM Technology Integration</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Quality & Client Satisfaction Guaranteed</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Vasthu Compliant Designs</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">Sustainable & Eco-friendly Practices</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <span className="text-[#D9AF58] text-lg">✦</span>
                  <span className="text-white/60 text-sm md:text-base">On-time Delivery & Transparent Process</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-12 md:mt-24 p-8 md:p-12 rounded-2xl border border-[#D9AF58]/20 bg-black text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 px-4">
              Ready to Transform Your Vision into Reality?
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-8 px-4">
              Let's bring your dream project to life. Contact us today to discuss your project needs and 
              experience the CAD difference — where quality meets innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Get In Touch Today
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
            <p className="text-white/40 text-xs md:text-sm mt-6 px-4">
              CAD Consultants India Pvt Ltd — Transforming dreams into reality for over 20 years.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}