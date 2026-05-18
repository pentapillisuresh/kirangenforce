import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Zap, ArrowRight, Eye, Target, Star, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Niharika Bhagat',
    role: 'Lead Principal Architect',
    image: './images/niharika.jpg',
    bio: 'Visionary architect with unwavering commitment to innovation, timeless design, and Vastu compliance.',
    isLead: true,
  },
  {
    name: 'Arjun Mehta',
    role: 'Senior Architect',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face',
    bio: 'IIM Ahmedabad-trained architect with 12 years of experience in luxury residential and commercial design.',
  },
  {
    name: 'Kavya Singhania',
    role: 'Head of Interior Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Award-winning interior designer known for blending cultural heritage with contemporary aesthetics.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Section with clearly visible banner image */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop"
              alt="Archaidplus Architects office"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Welcome to</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Archaidplus Architects</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Where visionary design and Vastu compliance converge to create extraordinary spaces that surpass your expectations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section ref={ref} className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Are you ready to experience architectural excellence that surpasses your expectations?
              Welcome to Archaid Plus Architects, where visionary design and Vastu compliance converge
              to create extraordinary spaces.
            </p>
          </motion.div>
        </section>

      

        {/* Lead Architect Spotlight */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-black rounded-2xl border border-[#D9AF58]/20 p-8 lg:p-12"
          >
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#D9AF58]/40">
                <img
                  src="./images/niharika.jpg"
                  alt="Niharika Bhagat - Lead Principal Architect"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#D9AF58] text-black px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                Lead Architect
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-[#D9AF58] fill-[#D9AF58]" />
                <span className="text-[#D9AF58] text-sm font-medium">Leadership</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-white mb-4">Niharika Bhagat</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Led by the exceptionally talented lead architect, Niharika Bhagat, our firm is driven by her
                unwavering commitment to innovation and timeless design. With a wealth of experience and a
                keen eye for detail, Niharika brings a unique perspective to each project, ensuring unparalleled results.
              </p>
              <p className="text-white/60 leading-relaxed">
                At Archaid Plus Architects, we believe that architecture has the power to transform lives.
                Our team of skilled architects and designers, under Niharika's expert guidance, create spaces
                that not only reflect your unique vision but also harmonize with the principles of Vastu,
                enhancing positive energy flow and well-being.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-white/60 leading-relaxed text-justify">
                A vision and thought behind your architecture is our aim to lifestyle measures. Adding all bits of desire with perfection to make the daily life easier. A dreamer like his dream comes perfect as in reality life will help you bring out the dreamer in you making it your life line. Its personal touch, comforts and values to ensure your not living in non living spaces but with a thoughtful and created place developed by the creativity of your head and executed by us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#D9AF58]" />
                <h2 className="font-serif text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-white/60 leading-relaxed text-justify">
                Know the mission behind doing architecture and taking it up as a profession is to dedicate and give our clients and society the importance of planning & execution with confidence! Dream big and make your dream come true. Architecture is mindful creation of thoughts into spaces and it gives us the upper hand of creation. If god created the world and humans, we as architects create space for you to live a comfortable life on this planet. Give and learn things from each other believe in coexistence and the ecology better systems. Our major driving force to my vision is the trust I have in the ability of a man brain to possibly do anything and everything that it can.
              </p>
            </motion.div>
          </div>

          {/* Sustainability Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-16 p-8 rounded-2xl border border-[#D9AF58]/20 bg-black"
          >
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-8 h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-3xl font-bold text-white">Commitment to Sustainability</h2>
            </div>
            <p className="text-white/60 leading-relaxed mb-4">
              Our expertise doesn't stop at exceptional design. We are staunch advocates of sustainability and
              environmental consciousness. By integrating cutting-edge technology, energy-efficient systems,
              and eco-friendly materials, we create spaces that are as environmentally responsible as they are awe-inspiring.
            </p>
            <p className="text-white/60 leading-relaxed">
              Don't settle for the ordinary. Let Niharika Bhagat and her team redefine what's possible for your space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="font-serif text-4xl font-bold text-white mb-6">Our Philosophy</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We believe that great architecture is not a luxury — it is a necessity. Every space we inhabit shapes
                how we think, feel, and interact with the world. Our approach combines innovative design, Vastu principles,
                and sustainable practices to create environments that enhance life in every dimension.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                From the grandest architectural statement to the smallest material detail, we approach every decision
                with the same level of care, curiosity, and craftsmanship.
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
              className="p-8 rounded-2xl border border-[#D9AF58]/20 bg-black text-center"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-[#D9AF58]">✦</span> Visionary Design Excellence
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-[#D9AF58]">✦</span> Vastu Compliant Spaces
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-[#D9AF58]">✦</span> Sustainable & Eco-friendly
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-[#D9AF58]">✦</span> Client-Centric Approach
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Team Section - 3 Members Only */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
                The Team
              </span>
              <h2 className="font-serif text-4xl font-bold text-white">Meet Our Experts</h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Under Niharika's expert guidance, our team of skilled architects and designers
                creates spaces that inspire, uplift, and leave a lasting legacy.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group p-6 rounded-2xl border transition-all duration-300 text-center ${
                    member.isLead
                      ? 'border-[#D9AF58]/40 bg-[#D9AF58]/5 hover:border-[#D9AF58]'
                      : 'border-[#D9AF58]/20 bg-black hover:border-[#D9AF58]/40'
                  } hover:-translate-y-1`}
                >
                  <div className={`relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 transition-colors duration-300 ${
                    member.isLead
                      ? 'border-[#D9AF58]'
                      : 'border-[#D9AF58]/30 group-hover:border-[#D9AF58]/60'
                  }`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className={`text-xs font-medium mb-3 ${
                    member.isLead ? 'text-[#D9AF58]' : 'text-[#D9AF58]/80'
                  }`}>
                    {member.role}
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-24 p-12 rounded-2xl border border-[#D9AF58]/20 bg-black text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience Extraordinary Architecture?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Explore our portfolio and witness the seamless fusion of beauty and functionality.
              Whether you're dreaming of a stunning home or envisioning a groundbreaking development,
              we are here to turn your aspirations into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200"
              >
                Explore Our Portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#D9AF58]/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Contact Us Today
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-6">
              Embark on a transformative architectural journey with ArchaidPlus Architects.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}