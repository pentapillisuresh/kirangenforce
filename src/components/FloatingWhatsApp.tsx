import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-7 h-7 text-white fill-white" />
    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse" />
  </motion.a>
);

export default FloatingWhatsApp;