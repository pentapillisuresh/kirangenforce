import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,4%)] to-[hsl(30,20%,6%)]" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Reach Out</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to start your project? We'd love to hear from you. Let's create something extraordinary together.
              </p>
            </motion.div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}