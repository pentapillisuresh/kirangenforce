import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Clock, User, ArrowRight, Instagram, Search } from 'lucide-react';

// Sample blog data for CCIPL
const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Vasthu Compliance in Modern Architecture',
    category: 'Architecture',
    author: 'CCIPL Team',
    readTime: '6 min read',
    excerpt: 'Discover how ancient Vasthu principles can enhance positive energy flow and well-being in modern architectural designs...',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 2,
    title: 'AR/VR Technology: The Future of Interior Design Visualization',
    category: 'Technology',
    author: 'CCIPL Team',
    readTime: '5 min read',
    excerpt: 'Explore how Augmented Reality and Virtual Reality are revolutionizing the way clients experience their spaces before construction...',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 3,
    title: '20 Years of Excellence: The CCIPL Journey',
    category: 'Company News',
    author: 'CCIPL Team',
    readTime: '8 min read',
    excerpt: 'From our establishment in 2003 to becoming a premier design and construction firm, celebrating two decades of transforming dreams into reality...',
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 4,
    title: 'Sustainable Practices in Modern Construction',
    category: 'Sustainability',
    author: 'CCIPL Team',
    readTime: '7 min read',
    excerpt: 'Learn about eco-friendly materials, energy-efficient designs, and green building principles that minimize environmental impact...',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 5,
    title: 'Structural Engineering: Ensuring Safety and Durability',
    category: 'Structural',
    author: 'CCIPL Team',
    readTime: '6 min read',
    excerpt: 'Understanding the critical role of structural analysis, innovative materials, and compliance with safety standards in construction...',
    image: 'https://images.pexels.com/photos/1546870/pexels-photo-1546870.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 6,
    title: 'MEP Solutions: The Backbone of Modern Buildings',
    category: 'Engineering',
    author: 'CCIPL Team',
    readTime: '5 min read',
    excerpt: 'How integrated Mechanical, Electrical, and Plumbing solutions enhance functionality and efficiency in residential and commercial spaces...',
    image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 7,
    title: 'Trending Interior Design Styles for 2024',
    category: 'Interiors',
    author: 'CCIPL Team',
    readTime: '6 min read',
    excerpt: 'From minimalist Scandinavian to bold Art Deco, discover the latest interior design trends shaping residential and commercial spaces...',
    image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 8,
    title: 'Waterproofing Solutions for Long-lasting Structures',
    category: 'Construction',
    author: 'CCIPL Team',
    readTime: '5 min read',
    excerpt: 'Protecting structures from water damage with advanced waterproofing techniques and materials...',
    image: 'https://images.pexels.com/photos/1178928/pexels-photo-1178928.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 9,
    title: 'The Art of 3D Walkthroughs in Architecture',
    category: 'Technology',
    author: 'CCIPL Team',
    readTime: '4 min read',
    excerpt: 'How 3D walkthrough videos help clients visualize their dream spaces before construction begins...',
    image: 'https://images.pexels.com/photos/2766258/pexels-photo-2766258.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 10,
    title: 'Residential vs Commercial Architecture: Key Differences',
    category: 'Architecture',
    author: 'CCIPL Team',
    readTime: '7 min read',
    excerpt: 'Understanding the unique requirements, regulations, and design considerations for residential and commercial projects...',
    image: 'https://images.pexels.com/photos/2093070/pexels-photo-2093070.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 11,
    title: 'BIM Technology: Revolutionizing Construction Planning',
    category: 'Technology',
    author: 'CCIPL Team',
    readTime: '6 min read',
    excerpt: 'How Building Information Modeling streamlines planning, execution, and collaboration in construction projects...',
    image: 'https://images.pexels.com/photos/1366111/pexels-photo-1366111.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  },
  {
    id: 12,
    title: 'Choosing the Right Materials for Your Dream Home',
    category: 'Construction',
    author: 'CCIPL Team',
    readTime: '8 min read',
    excerpt: 'A comprehensive guide to selecting premium materials that balance aesthetics, durability, and cost-effectiveness...',
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?w=800&h=500&fit=crop',
    content: 'Full content here...'
  }
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visiblePosts, setVisiblePosts] = useState(6);

  useEffect(() => {
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setVisiblePosts(6);
  }, [searchTerm]);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1920&h=600&fit=crop"
              alt="CCIPL Blog"
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Insights & Updates</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
                CCIPL Journal
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Thoughts on architecture, interior design, structural engineering, construction, and the art of creating extraordinary spaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search articles by title, category, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D9AF58]/50 focus:ring-1 focus:ring-[#D9AF58]/50"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section ref={ref} className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/60">No posts found. Try a different search term.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.slice(0, visiblePosts).map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.5) }}
                    className="group rounded-2xl border border-white/10 bg-black overflow-hidden hover:border-[#D9AF58]/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    <Link to={`/blog/${post.id}`}>
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
                        <h2 className="font-serif text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#D9AF58] transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-1 text-[#D9AF58] text-xs font-medium group-hover:gap-2 transition-all duration-200">
                          Read Article <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {visiblePosts < filteredPosts.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9AF58]/40 text-[#D9AF58] hover:bg-[#D9AF58]/10 transition-all duration-300 text-sm font-medium"
                  >
                    Load More Articles
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Instagram Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 p-8 md:p-12 rounded-2xl border border-[#D9AF58]/20 bg-gradient-to-br from-black to-[#D9AF58]/5 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#D9AF58]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Follow CCIPL on Instagram</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto mb-6">
              Get daily inspiration, behind-the-scenes content, and updates on our latest architecture, interior, and construction projects.
            </p>
            <a
              href="https://www.instagram.com/ccipl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              @ccipl
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}