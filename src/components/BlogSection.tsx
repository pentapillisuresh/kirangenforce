import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  User,
  Calendar,
  ChevronRight,
} from 'lucide-react';

const posts = [
  {
    title: 'The Art of Biophilic Design: Bringing Nature Indoors',
    excerpt:
      'Discover how integrating natural elements into interior spaces can transform wellbeing and productivity.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    category: 'Interior Design',
    author: 'Elena Vasquez',
    readTime: '5 min read',
    date: 'Jan 15, 2026',
  },
  {
    title: 'Minimalism vs. Maximalism: Finding Your Design Language',
    excerpt:
      'A deep dive into two opposing design philosophies and how to find the perfect balance for your space.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    category: 'Design Theory',
    author: 'James Okafor',
    readTime: '7 min read',
    date: 'Jan 8, 2026',
  },
  {
    title: 'Sustainable Architecture: Building for the Future',
    excerpt:
      'How modern architects are integrating sustainability without compromising on beauty or functionality.',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
    category: 'Architecture',
    author: 'Priya Sharma',
    readTime: '6 min read',
    date: 'Dec 28, 2025',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // ease: 'easeOut',
    },
  },
};

const BlogSection = () => {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D9AF58' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Light Orbs */}
        <motion.div
          className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute -right-48 bottom-1/3 h-96 w-96 rounded-full bg-[#D9AF58]/5 blur-[120px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#D9AF58]" />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D9AF58]">
                Insights
              </span>
            </div>

            <h2 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
              From Our
              <br />
              <span className="text-[#D9AF58]">Journal</span>
            </h2>

            <div className="h-px w-20 bg-[#D9AF58]" />
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 transition-all duration-300 hover:border-[#D9AF58]/50 hover:bg-[#D9AF58]/5"
          >
            <span className="font-mono text-sm tracking-wider text-white/80 transition-colors duration-300 group-hover:text-[#D9AF58]">
              VIEW ALL ARTICLES
            </span>

            <ArrowRight className="h-4 w-4 text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D9AF58]" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-[#D9AF58]/30">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full border border-[#D9AF58]/30 bg-black/60 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#D9AF58] backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="flex h-12 w-12 scale-0 items-center justify-center rounded-full bg-[#D9AF58] transition-transform duration-300 group-hover:scale-100">
                      <ChevronRight className="h-5 w-5 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-6">
                  <h3 className="line-clamp-2 font-serif text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#D9AF58]">
                    {post.title}
                  </h3>

                  <p className="line-clamp-2 text-sm leading-relaxed text-white/50">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author.split(' ')[0]}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="translate-x-[-5px] font-mono text-xs tracking-wider text-[#D9AF58] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D9AF58] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
};

export default BlogSection;