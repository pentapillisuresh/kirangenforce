import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const topImages = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
];

const bottomImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
];

const InteriorShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth horizontal movement with spring-like easing
  const topX = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const bottomX = useTransform(scrollYProgress, [0, 1], [-250, 0]);

  // Smooth opacity for images
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Smooth heading animation
  const headingY = useTransform(scrollYProgress, [0, 0.3], [30, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      
      {/* Ambient Light Orbs with smooth floating animation */}
      <motion.div 
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10">
        {/* Heading with smooth animation */}
        <motion.div 
          className="max-w-4xl mx-auto text-center px-6 mb-20"
          style={{
            y: headingY,
            opacity: headingOpacity
          }}
        >
          <motion.span 
            className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Interior Showcase
          </motion.span>

          <motion.h2 
            className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Spaces Crafted
            <br />
            <span className="text-[#D9AF58]">With Elegance</span>
          </motion.h2>

          <motion.p 
            className="text-white/50 text-lg leading-relaxed font-sans max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover our curated collection of luxurious interiors,
            premium architecture, and timeless living spaces designed
            with perfection.
          </motion.p>
          
          <motion.div 
            className="w-20 h-px bg-gradient-to-r from-transparent via-[#D9AF58] to-transparent mx-auto mt-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* TOP ROW */}
        <motion.div
          style={{ 
            x: topX,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="flex gap-7 mb-7 w-max px-6"
        >
          {topImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl flex-shrink-0 group ${
                index === 1
                  ? "w-[650px] h-[420px]"
                  : "w-[500px] h-[420px]"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src={image}
                alt="Interior design showcase"
                className="w-full h-full object-cover"
                style={{
                  scale: imageScale,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Dark Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-700 ease-out" />

              {/* Hover Content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-[#D9AF58] uppercase text-[10px] tracking-[0.3em] font-mono">
                  Luxury Interior
                </span>

                <h3 className="font-serif text-3xl font-bold text-white mt-3">
                  Elegant Living Space
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          style={{ 
            x: bottomX,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="flex gap-7 w-max px-6"
        >
          {bottomImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl flex-shrink-0 group ${
                index === 2
                  ? "w-[650px] h-[420px]"
                  : "w-[500px] h-[420px]"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img
                src={image}
                alt="Interior design showcase"
                className="w-full h-full object-cover"
                style={{
                  scale: imageScale,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Dark Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-700 ease-out" />

              {/* Percentage Circle */}
              {index === 3 && (
                <motion.div 
                  className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center shadow-2xl border-[4px] border-[#D9AF58]/30"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 150 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <motion.span 
                      className="text-[#D9AF58] text-2xl font-bold font-mono"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      88%
                    </motion.span>
                    <div className="text-white/50 text-[8px] font-mono tracking-wider">COMPLETED</div>
                  </div>
                </motion.div>
              )}

              {/* Hover Content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-[#D9AF58] uppercase text-[10px] tracking-[0.3em] font-mono">
                  Modern Design
                </span>

                <h3 className="font-serif text-3xl font-bold text-white mt-3">
                  Premium Bedroom
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorShowcase;