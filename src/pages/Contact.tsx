import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Section with banner image */}
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&h=600&fit=crop"
              alt="Contact Archaidplus Architects"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Reach Out</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to start your project? We'd love to hear from you. Let's create something extraordinary together.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Section Component */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}