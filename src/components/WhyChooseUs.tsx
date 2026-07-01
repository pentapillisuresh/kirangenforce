import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Low noise level",
    image: "./images/icon1.webp",
  },
  {
    id: 2,
    title: "Fuel efficient",
    image: "./images/icon2.webp",
  },
  {
    id: 3,
    title: "Better power to weight ratio",
    image: "./images/icon3.webp",
  },
  {
    id: 4,
    title: "Easy maintenance",
    image: "./images/icon4.webp",
  },
  {
    id: 5,
    title: "More than 200 service points for immediate service",
    image: "./images/icon5.webp",
  },
  {
    id: 6,
    title: "Compact size",
    image: "./images/icon6.webp",
  },
  {
    id: 7,
    title: "Robust design for durability",
    image: "./images/icon7.webp",
  },
  {
    id: 8,
    title: "Robust design for durability",
    image: "./images/icon8.webp",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black overflow-hidden mt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER - Single Title Only */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Features of Mahindra Powerol Genset
          </h2>
        </motion.div>

        {/* Two Column Layout - Left: Features, Right: Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
          
          {/* LEFT - Features Grid with Row and Column Lines */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="pr-0 lg:pr-12"
          >
            <div className="grid grid-cols-2 border border-white/10">
              {features.map((item, index) => {
                const isLastInRow = (index + 1) % 2 === 0;
                const isLastRow = index >= features.length - 2;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className={`
                      group relative p-4 flex flex-col items-center text-center gap-3
                      ${!isLastInRow ? 'border-r border-white/10' : ''}
                      ${!isLastRow ? 'border-b border-white/10' : ''}
                      hover:bg-[#EB0133]/5 transition-all duration-500 cursor-pointer
                      overflow-hidden
                    `}
                  >
                    {/* Left to Right Hover Animation - Single Color #EB0133 */}
                    <div className="absolute inset-0 w-full h-full bg-[#EB0133] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-10" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center gap-2">
                      {/* Image */}
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-xs font-medium text-white/80 group-hover:text-[#EB0133] transition-colors duration-500 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT - Video with Reduced Height */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pl-0 lg:pl-12 mt-10 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 aspect-[3/2] group">
              {/* Video Element - Auto Play */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/video-thumb.jpg"
                playsInline
                muted
                loop
                autoPlay
              >
                <source src="./images/ai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className="w-16 h-16 rounded-full bg-[#EB0133]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#EB0133] shadow-2xl">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" />
                  )}
                </div>
              </button>

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/80 text-xs font-medium tracking-wide">
                  Mahindra Powerol — Powering Progress
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BUSINESS ENQUIRY Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            BUSINESS ENQUIRY
          </h3>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            We're happy to answer any questions you have about Mahindra Powerol. Please complete the form and we'll be in touch with you.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;