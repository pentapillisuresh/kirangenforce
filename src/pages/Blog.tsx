import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, User, ArrowRight } from 'lucide-react';

const posts = [
  { 
    title: 'The Art of Biophilic Design: Bringing Nature Indoors', 
    excerpt: 'Discover how integrating natural elements into interior spaces can transform wellbeing and productivity in both residential and commercial environments.', 
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop', 
    category: 'Interior Design', 
    author: 'Niharika Bhagat', 
    readTime: '5 min read', 
    date: 'Jan 15, 2026' 
  },
  { 
    title: 'Minimalism vs. Maximalism: Finding Your Design Language', 
    excerpt: 'A deep dive into two opposing design philosophies and how to find the perfect balance for your space and personality.', 
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop', 
    category: 'Design Theory', 
    author: 'Arjun Mehta', 
    readTime: '7 min read', 
    date: 'Jan 8, 2026' 
  },
  { 
    title: 'Sustainable Architecture: Building for the Future', 
    excerpt: 'How modern architects are integrating sustainability without compromising on beauty or functionality in landmark projects across India.', 
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop', 
    category: 'Architecture', 
    author: 'Priya Sharma', 
    readTime: '6 min read', 
    date: 'Dec 28, 2025' 
  },
  { 
    title: 'The Psychology of Color in Interior Spaces', 
    excerpt: 'Understanding how color choices affect mood, perception, and behavior — and how to use this knowledge to design better spaces.', 
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop', 
    category: 'Interior Design', 
    author: 'Kavya Singhania', 
    readTime: '4 min read', 
    date: 'Dec 15, 2025' 
  },
  { 
    title: 'Adaptive Reuse: Giving Old Buildings New Life', 
    excerpt: 'Exploring the growing trend of transforming industrial and heritage buildings into vibrant contemporary spaces across Indian cities.', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop', 
    category: 'Architecture', 
    author: 'Rohan Deshmukh', 
    readTime: '8 min read', 
    date: 'Dec 5, 2025' 
  },
  { 
    title: 'Lighting Design: The Invisible Architecture', 
    excerpt: 'How thoughtful lighting design can completely transform a space — from dramatic focal points to subtle ambient layers.', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop', 
    category: 'Design Theory', 
    author: 'Niharika Bhagat', 
    readTime: '5 min read', 
    date: 'Nov 22, 2025' 
  },
  { 
    title: 'Vastu Shastra: Ancient Wisdom for Modern Homes', 
    excerpt: 'Understanding how traditional Vastu principles can be seamlessly integrated into contemporary architecture for harmony and positive energy.', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop', 
    category: 'Vastu Design', 
    author: 'Vikram Rathore', 
    readTime: '6 min read', 
    date: 'Nov 10, 2025' 
  },
  { 
    title: 'The Rise of Indian Contemporary Architecture', 
    excerpt: 'Exploring how Indian architects are blending traditional craftsmanship with modern design to create a unique global identity.', 
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop', 
    category: 'Architecture', 
    author: 'Arjun Mehta', 
    readTime: '9 min read', 
    date: 'Oct 28, 2025' 
  },
  { 
    title: 'Biophilic Design in Urban Indian Homes', 
    excerpt: 'How to bring nature into your apartment or villa — practical tips for incorporating plants, natural light, and organic materials.', 
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop', 
    category: 'Interior Design', 
    author: 'Kavya Singhania', 
    readTime: '5 min read', 
    date: 'Oct 15, 2025' 
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        {/* Hero Section with banner image */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1920&h=600&fit=crop"
              alt="Archaidplus Architects Blog"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Insights & Ideas</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">The Archaidplus Journal</h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Thoughts on design, architecture, Vastu, and the art of creating extraordinary spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-[#D9AF58]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    width={800} 
                    height={500} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#D9AF58]/20 border border-[#D9AF58]/30 text-[#D9AF58] text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#D9AF58] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-[#D9AF58] text-xs font-medium group-hover:gap-2 transition-all duration-200">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Get the latest insights on architecture, interior design, and Vastu delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D9AF58]/50 focus:ring-1 focus:ring-[#D9AF58]/50"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-[#D9AF58] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#D9AF58]/90 transition-all duration-200">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}