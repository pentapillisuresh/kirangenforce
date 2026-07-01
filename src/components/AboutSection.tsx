import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Zap, Shield, Building, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EB0133]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#EB0133]/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#EB0133] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            About Us
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Powering Progress
            <br />
            <span className="text-[#EB0133]">For Over 24 Years</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            KIRANGENFORCE is a Authorized dealer for Mahindra Powerol, offering reliable, 
            efficient, and innovative power solutions to customers worldwide.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-white/60 leading-relaxed text-justify">
              KIRANGENFORCE is a Authorized dealer for Mahindra Powerol, offering a wide range of power solutions for various applications. With over 24 years of experience in the power generation industry, KIRANGENFORCE is committed to providing reliable, efficient, and innovative power solutions to its customers.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Carrying out operations with OEM Recon Technologies Pvt Ltd state-of-the-art manufacturing facility in Gagilapur Hyderabad India, we are equipped with the latest technology and equipment that ensures high-quality products. The company's range of 5KVA to 650KVA diesel generators, gas gensets, Electrical panels, Synchronizing HT & LT Panels for all designed to meet the needs of different industries and applications.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Mahindra Powerol has a strong network of over 400 dealers and service touch points across India that provide excellent after-sales service and support to its customers. And with exports to over 42 countries, it is needless to say that Powerol has a global presence in the power generation industry.
            </p>

            <p className="text-white/60 leading-relaxed text-justify">
              Our commitment to sustainability through various initiatives empowers us to play a part Reliable generators and power solutions by Kiran Genforce.
            </p>

            {/* Authorised Dealer Certificate */}
            <div className="mt-8 p-6 border border-[#EB0133]/30 rounded-xl bg-[#EB0133]/5 backdrop-blur-sm">
              <h3 className="text-[#EB0133] font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                AUTHORISED DEALER CERTIFICATE
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                This is to certify that
              </p>
              <p className="text-white font-semibold text-base my-2">
                M/s. KIRAN GENFORCE PRIVATE LIMITED, HYDERABAD (TELANGANA)
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                is an authorized Sales Dealer for Mahindra Powerol brand of Generator Sets.
              </p>
            
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl w-full">
              <img
                src="/images/certificate.webp"
                alt="KIRANGENFORCE - Power Solutions"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 w-full mt-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Award className="w-6 h-6 text-[#EB0133] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">24+ Years</p>
                <p className="text-white/40 text-xs">of Excellence</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Building className="w-6 h-6 text-[#EB0133] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">5-650 KVA</p>
                <p className="text-white/40 text-xs">Generator Range</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Users className="w-6 h-6 text-[#EB0133] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">400+</p>
                <p className="text-white/40 text-xs">Dealer Network</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                <Globe className="w-6 h-6 text-[#EB0133] mx-auto mb-2" />
                <p className="text-white text-sm font-medium">42+</p>
                <p className="text-white/40 text-xs">Countries Exported</p>
              </div>
            </div>

            {/* Key Features Tags */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <CheckCircle className="w-3 h-3 text-[#EB0133]" />
                <span>Reliable Power Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <CheckCircle className="w-3 h-3 text-[#EB0133]" />
                <span>Latest Technology</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <CheckCircle className="w-3 h-3 text-[#EB0133]" />
                <span>After-Sales Service</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <CheckCircle className="w-3 h-3 text-[#EB0133]" />
                <span>Global Presence</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full"
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-[#EB0133] to-[#CC0022] text-white font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch With Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </Link>
              <div className="absolute inset-0 rounded-full bg-[#EB0133] opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;