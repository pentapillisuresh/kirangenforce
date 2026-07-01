import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Building2, Sofa, HardHat, Hammer, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Building2,
    number: '01',
    title: 'Architecture',
    subtitle: 'Innovative Designs & Vasthu Compliance',
    desc: 'We combine creativity with functionality to craft architectural designs that inspire and endure. Our comprehensive architectural services include house plans, floor plans, 2D & 3D elevation designs, and 3D walkthrough videos.',
    features: ['House Plans & Floor Plans', '2D & 3D Elevation Designs', '3D Walkthrough Videos', 'Land & Site Surveying', 'Vasthu Compliance'],
    image: './images/arc.avif',
  },
  {
    icon: Sofa,
    number: '02',
    title: 'Interior Designs',
    subtitle: 'Tailored Elegance & Functionality',
    desc: 'Transform your spaces into a blend of functionality and elegance with our bespoke interior design services. We cater to residential, office, and commercial needs with designs that reflect your personality and purpose.',
    features: ['Custom Designs', 'AR/VR Technology Visualization', 'Premium Materials & Finishes', 'Residential Interiors', 'Office & Commercial Interiors'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop',
  },
  {
    icon: HardHat,
    number: '03',
    title: 'Structural Solutions',
    subtitle: 'Precision Engineering & Safety',
    desc: 'Our structural design services prioritize precision, safety, and durability to ensure your projects stand the test of time. We deliver solutions that blend innovation with engineering excellence.',
    features: ['Structural Analysis & Design', 'Innovative Materials & Methods', 'Regulatory Compliance', 'Residential & Commercial', 'Industrial Buildings'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'Construction Services',
    subtitle: 'End-to-End Construction Solutions',
    desc: 'We offer end-to-end construction solutions, ensuring every project is executed with precision, quality, and on-time delivery. From foundations to finishes, we bring your visions to life.',
    features: ['Civil Construction', 'MEP Services', 'Waterproofing Services', 'Permits & Approvals', 'Quality & On-time Delivery'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="./images/servicebanner.jpg"
              alt="CCIPL Architecture and Construction Services"
              width={1920}
              height={800}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">What We Offer</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive design and construction solutions tailored to your vision, budget, and timeline.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Section */}
                  <div className={`${!isEven ? 'lg:order-2' : ''} group`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-[#D9AF58]/20">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-[#D9AF58]/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {service.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#D9AF58]/10 border border-[#D9AF58]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D9AF58]" />
                      </div>
                      <span className="text-[#D9AF58]/60 font-mono text-4xl font-bold">{service.number}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-[#D9AF58] text-sm font-medium mb-4 tracking-wide">{service.subtitle}</p>
                    <p className="text-white/60 leading-relaxed mb-6">{service.desc}</p>
                    
                    {/* Features List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#D9AF58] shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link 
                      to="/contact" 
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9AF58]/40 text-[#D9AF58] hover:bg-[#D9AF58]/10 transition-all duration-300 text-sm font-medium"
                    >
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-24 p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Let's discuss your vision and turn it into reality. Our team of experts is ready to guide you through every step of architecture, interiors, structural, and construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Get In Touch Today
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}