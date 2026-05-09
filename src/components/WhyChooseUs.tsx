import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Clock3,
  Gem,
  Leaf,
  Users,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Concepts",
    desc: "Creative and modern architectural solutions.",
    number: "01",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    desc: "Premium execution with refined detailing.",
    number: "02",
  },
  {
    icon: Clock3,
    title: "Timely Delivery",
    desc: "Efficient project completion with precision.",
    number: "03",
  },
  {
    icon: Gem,
    title: "Luxury Finishes",
    desc: "Elegant materials and timeless interiors.",
    number: "04",
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    desc: "Eco-conscious architecture for modern living.",
    number: "05",
  },
  {
    icon: Users,
    title: "Client Focused",
    desc: "Collaborative approach from concept to completion.",
    number: "06",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black overflow-hidden"
    >
  
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER - Updated Font Styles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Why Choose Us
          </span>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Excellence In
            <br />
            <span className="text-[#D9AF58]">Every Detail</span>
          </h2>

          <p className="max-w-2xl mx-auto text-white/50 text-base leading-relaxed font-sans">
            Timeless architecture and premium interiors crafted
            with innovation, precision, and luxury aesthetics.
          </p>
        </motion.div>

        {/* SMALLER CARDS - Updated Font Styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group"
              >
                <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-[26px] p-7 hover:border-[#D9AF58]/40 transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Number */}
                  <div className="absolute top-5 right-5 text-5xl font-serif font-bold text-white/[0.04] group-hover:text-[#D9AF58]/10 transition-all duration-500">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D9AF58] transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#D9AF58] group-hover:text-black transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/45 leading-relaxed text-sm mb-8 font-sans">
                    {item.desc}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-[1px] bg-[#D9AF58]" />

                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D9AF58] group-hover:border-[#D9AF58] transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;