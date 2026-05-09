import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern Living Room",
    category: "Residential",
    type: "Single Home",
    image:
      "/images/project1.png",
    progress: "42%",
  },
  {
    title: "Minimal Staircase",
    category: "Residential",
    type: "Single Home",
    image:
      "./images/project2.png",
    progress: "28%",
  },
  {
    title: "Luxury Interior",
    category: "Residential",
    type: "Single Home",
    image:
      "./images/project3.png",
    progress: "35%",
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#D9AF58] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Portfolio
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Bringing Interior
            <br />
            <span className="text-[#D9AF58]">Designs To Life</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            Our portfolio showcases a diverse range of projects,
            from beautifully crafted residential spaces to
            functional and stylish commercial interiors.
          </p>
        </motion.div>

        {/* Masonry Layout - Equal Heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* First Card - Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0,
            }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer md:mt-0"
          >
            {/* Image Container - Equal Height */}
            <div className="relative overflow-hidden h-[480px]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-500" />
            </div>

            {/* Top Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[0].category}
              </span>

              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[0].type}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {projects[0].title}
                  </h3>

                  <p className="text-white/60 text-xs font-sans">
                    Premium Interior Design
                  </p>
                </div>

               
              </div>
            </div>

            {/* Hover Button */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D9AF58] hover:border-[#D9AF58] group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Second Card - Middle (More Down) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer md:mt-16"
          >
            {/* Image Container - Equal Height */}
            <div className="relative overflow-hidden h-[480px]">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-500" />
            </div>

            {/* Top Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[1].category}
              </span>

              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[1].type}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {projects[1].title}
                  </h3>

                  <p className="text-white/60 text-xs font-sans">
                    Premium Interior Design
                  </p>
                </div>

               
              </div>
            </div>

            {/* Hover Button */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D9AF58] hover:border-[#D9AF58] group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Third Card - Right (Same as First) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer md:mt-0"
          >
            {/* Image Container - Equal Height */}
            <div className="relative overflow-hidden h-[480px]">
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#D9AF58]/0 group-hover:bg-[#D9AF58]/10 transition-all duration-500" />
            </div>

            {/* Top Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[2].category}
              </span>

              <span className="px-3 py-1.5 rounded-full border border-white/40 bg-black/50 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                {projects[2].type}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">
                    {projects[2].title}
                  </h3>

                  <p className="text-white/60 text-xs font-sans">
                    Premium Interior Design
                  </p>
                </div>

               
              </div>
            </div>

            {/* Hover Button */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D9AF58] hover:border-[#D9AF58] group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;