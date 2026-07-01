import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const phoneNumber = "9959548064";
  const defaultMessage = "Hello! I'm interested in your architectural services. How can you help me with my project?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full overflow-hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/images/whatsapp.png" 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
      {/* <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse" /> */}
    </motion.a>
  );
};

export default FloatingWhatsApp;