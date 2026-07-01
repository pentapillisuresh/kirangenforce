import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, User, Calendar, Instagram, Twitter, Facebook } from 'lucide-react';
import blogData from '../data/blogData.json';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const postId = id ? parseInt(id) : null;
  const post = postId ? blogData.posts.find(p => p.id === postId) : null;

  if (!post) {
    return (
      <>
        <Header />
        <main className="bg-black min-h-screen pt-40 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-serif text-4xl text-white mb-4">Post Not Found</h1>
            <p className="text-white/60 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-[#D9AF58] hover:gap-3 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-[#D9AF58] hover:gap-3 transition-all duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
            <span className="text-[#D9AF58] text-xs font-medium tracking-[0.3em] uppercase mb-4 block">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-serif prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-[#D9AF58] prose-strong:font-semibold
              prose-ul:text-white/70 prose-li:mb-2
              prose-a:text-[#D9AF58] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Share this Article</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/archaidplus/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4267B2] transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogData.posts
                .filter(p => p.id !== post.id)
                .sort((a, b) => {
                  if (a.category === post.category && b.category !== post.category) return -1;
                  if (a.category !== post.category && b.category === post.category) return 1;
                  return 0;
                })
                .slice(0, 2)
                .map(relatedPost => (
                  <div 
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.id}`)}
                    className="group cursor-pointer p-4 rounded-xl border border-white/10 hover:border-[#D9AF58]/40 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <span className="text-[#D9AF58] text-xs font-medium">{relatedPost.category}</span>
                        <h4 className="font-serif text-white font-semibold group-hover:text-[#D9AF58] transition-colors duration-200 line-clamp-2 mt-1">
                          {relatedPost.title}
                        </h4>
                        <p className="text-white/40 text-xs mt-1">{relatedPost.readTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}