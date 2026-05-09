import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[hsl(30,20%,6%)] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-lg"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(38,85%,55%)] to-[hsl(28,90%,45%)] flex items-center justify-center mx-auto mb-8 shadow-xl">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <div className="font-serif text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(38,85%,55%)] to-[hsl(28,90%,65%)] mb-4">404</div>
        <h1 className="font-serif text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-white/50 mb-10 leading-relaxed">
          The space you're looking for doesn't exist — but we'd love to help you find what you need.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[hsl(38,85%,55%)] to-[hsl(28,90%,55%)] text-[hsl(30,20%,8%)] font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}