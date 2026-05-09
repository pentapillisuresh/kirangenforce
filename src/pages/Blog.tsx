import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, User, ArrowRight } from 'lucide-react';

const posts = [
  { title: 'The Art of Biophilic Design: Bringing Nature Indoors', excerpt: 'Discover how integrating natural elements into interior spaces can transform wellbeing and productivity in both residential and commercial environments.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop', category: 'Interior Design', author: 'Elena Vasquez', readTime: '5 min read', date: 'Jan 15, 2026' },
  { title: 'Minimalism vs. Maximalism: Finding Your Design Language', excerpt: 'A deep dive into two opposing design philosophies and how to find the perfect balance for your space and personality.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop', category: 'Design Theory', author: 'James Okafor', readTime: '7 min read', date: 'Jan 8, 2026' },
  { title: 'Sustainable Architecture: Building for the Future', excerpt: 'How modern architects are integrating sustainability without compromising on beauty or functionality in landmark projects worldwide.', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=500&fit=crop', category: 'Architecture', author: 'Priya Sharma', readTime: '6 min read', date: 'Dec 28, 2025' },
  { title: 'The Psychology of Color in Interior Spaces', excerpt: 'Understanding how color choices affect mood, perception, and behavior — and how to use this knowledge to design better spaces.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop', category: 'Interior Design', author: 'Marcus Chen', readTime: '4 min read', date: 'Dec 15, 2025' },
  { title: 'Adaptive Reuse: Giving Old Buildings New Life', excerpt: 'Exploring the growing trend of transforming industrial and heritage buildings into vibrant contemporary spaces.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop', category: 'Architecture', author: 'Elena Vasquez', readTime: '8 min read', date: 'Dec 5, 2025' },
  { title: 'Lighting Design: The Invisible Architecture', excerpt: 'How thoughtful lighting design can completely transform a space — from dramatic focal points to subtle ambient layers.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop', category: 'Design Theory', author: 'Priya Sharma', readTime: '5 min read', date: 'Nov 22, 2025' },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <Header />
      <main className="bg-[hsl(30,20%,6%)] min-h-screen">
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30,20%,4%)] to-[hsl(30,20%,6%)]" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[hsl(38,85%,55%)] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Insights & Ideas</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">The archaidplus Journal</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Thoughts on design, architecture, and the art of creating extraordinary spaces.
              </p>
            </motion.div>
          </div>
        </section>

        <section ref={ref} className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-[hsl(38,85%,55%)]/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img src={post.image} alt={post.title} width={800} height={500} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[hsl(38,85%,55%)]/20 border border-[hsl(38,85%,55%)]/30 text-[hsl(38,85%,55%)] text-xs font-medium backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[hsl(38,85%,55%)] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-white/30 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[hsl(38,85%,55%)] text-xs font-medium group-hover:gap-2 transition-all duration-200">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}