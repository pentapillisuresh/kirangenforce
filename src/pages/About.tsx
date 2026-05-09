import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Elena Vasquez',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Harvard-trained architect with 15 years of experience in luxury residential and commercial design.',
  },
  {
    name: 'James Okafor',
    role: 'Head of Interior Design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Award-winning interior designer known for blending cultural influences with contemporary aesthetics.',
  },
  {
    name: 'Priya Sharma',
    role: 'Sustainability Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Pioneer in sustainable architecture with LEED certification and a passion for biophilic design.',
  },
  {
    name: 'Marcus Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Visionary creative with a background in fine arts and a decade of luxury brand collaborations.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
              alt="archaidplus Studio office"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,6%)]/80 to-[hsl(30,20%,6%)]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Our Story</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">About archaidplus Studio</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Founded in 2012, we are a multidisciplinary design practice dedicated to creating spaces that inspire, endure, and elevate the human experience.
              </p>
            </motion.div>
          </div>
        </section>

        <section ref={ref} className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">Our Philosophy</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                We believe that great design is not a luxury — it is a necessity. Every space we inhabit shapes how we think, feel, and interact with the world. Our mission is to create environments that enhance life in every dimension.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                From the grandest architectural statement to the smallest material detail, we approach every decision with the same level of care, curiosity, and craftsmanship.
              </p>
              <Link to="/contact" className="group inline-flex items-center gap-2 text-[hsl(38,85%,55%)] font-medium hover:gap-3 transition-all duration-200">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, value: '18+', label: 'Awards Won' },
                  { icon: Users, value: '340+', label: 'Clients Served' },
                  { icon: Globe, value: '24', label: 'Countries' },
                  { icon: Zap, value: '250+', label: 'Projects' },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="p-6 rounded-2xl border border-white/8 bg-white/3 text-center">
                    <Icon className="w-5 h-5 text-[hsl(38,85%,55%)] mx-auto mb-3" />
                    <div className="font-serif text-3xl font-bold text-white">{value}</div>
                    <div className="text-white/40 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">The Team</span>
              <h2 className="font-serif text-4xl font-bold text-white">Meet Our Designers</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-[hsl(38,85%,55%)]/30 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[hsl(38,85%,55%)]/20 group-hover:border-[hsl(38,85%,55%)]/50 transition-colors duration-300">
                    <img src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <div className="text-[hsl(38,85%,55%)] text-xs font-medium mb-3">{member.role}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}