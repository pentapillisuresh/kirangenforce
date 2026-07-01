import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Grid, LayoutGrid, Columns, Search, Heart, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ViewMode = 'grid' | 'masonry' | 'compact';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Architecture Images (Exterior - Residential & Commercial)
  const architectureImages: GalleryImage[] = [
    // Modern Residential Architecture
    { id: 1, src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop', title: 'Modern Luxury Villa', category: 'Architecture' },
    { id: 2, src: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop', title: 'Contemporary House Design', category: 'Architecture' },
    { id: 3, src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?w=800&h=600&fit=crop', title: 'Minimalist Residence', category: 'Architecture' },
    { id: 4, src: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?w=800&h=600&fit=crop', title: 'Glass Facade Home', category: 'Architecture' },
    { id: 5, src: 'https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?w=800&h=600&fit=crop', title: 'Beachfront Villa', category: 'Architecture' },
    { id: 6, src: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?w=800&h=600&fit=crop', title: 'Luxury Penthouse', category: 'Architecture' },
    { id: 7, src: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?w=800&h=600&fit=crop', title: 'Mediterranean Villa', category: 'Architecture' },
    { id: 8, src: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?w=800&h=600&fit=crop', title: 'Modern Farmhouse', category: 'Architecture' },
    
    // Commercial Architecture
    { id: 9, src: 'https://images.pexels.com/photos/1366111/pexels-photo-1366111.jpeg?w=800&h=600&fit=crop', title: 'Corporate Office Tower', category: 'Architecture' },
    { id: 10, src: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?w=800&h=600&fit=crop', title: 'Commercial Complex', category: 'Architecture' },
    { id: 11, src: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?w=800&h=600&fit=crop', title: 'Business Center', category: 'Architecture' },
    { id: 12, src: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?w=800&h=600&fit=crop', title: 'Shopping Mall', category: 'Architecture' },
    { id: 13, src: 'https://images.pexels.com/photos/2393823/pexels-photo-2393823.jpeg?w=800&h=600&fit=crop', title: 'High-Rise Building', category: 'Architecture' },
    { id: 14, src: 'https://images.pexels.com/photos/2093070/pexels-photo-2093070.jpeg?w=800&h=600&fit=crop', title: 'Glass Office Building', category: 'Architecture' },
    { id: 15, src: 'https://images.pexels.com/photos/407053/pexels-photo-407053.jpeg?w=800&h=600&fit=crop', title: 'Luxury Hotel Exterior', category: 'Architecture' },
    { id: 16, src: 'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg?w=800&h=600&fit=crop', title: 'Airport Terminal', category: 'Architecture' },
    
    // Residential Architecture (More)
    { id: 17, src: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?w=800&h=600&fit=crop', title: 'Suburban House', category: 'Architecture' },
    { id: 18, src: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?w=800&h=600&fit=crop', title: 'Hilltop Residence', category: 'Architecture' },
    { id: 19, src: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop', title: 'Traditional House', category: 'Architecture' },
    { id: 20, src: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=600&fit=crop', title: 'Eco-Friendly Home', category: 'Architecture' },
    { id: 21, src: 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?w=800&h=600&fit=crop', title: 'City Apartment Building', category: 'Architecture' },
    { id: 22, src: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=800&h=600&fit=crop', title: 'Rooftop Garden Design', category: 'Architecture' },
  ];

  // Interior Design Images
  const interiorImages: GalleryImage[] = [
    // Living Rooms
    { id: 23, src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=600&fit=crop', title: 'Modern Living Room', category: 'Interiors' },
    { id: 24, src: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?w=800&h=600&fit=crop', title: 'Luxury Living Space', category: 'Interiors' },
    { id: 25, src: 'https://images.pexels.com/photos/1178928/pexels-photo-1178928.jpeg?w=800&h=600&fit=crop', title: 'Minimalist Living Room', category: 'Interiors' },
    { id: 26, src: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?w=800&h=600&fit=crop', title: 'Contemporary Living Area', category: 'Interiors' },
    
    // Bedrooms
    { id: 27, src: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?w=800&h=600&fit=crop', title: 'Master Bedroom Design', category: 'Interiors' },
    { id: 28, src: 'https://images.pexels.com/photos/2109132/pexels-photo-2109132.jpeg?w=800&h=600&fit=crop', title: 'Luxury Bedroom', category: 'Interiors' },
    { id: 29, src: 'https://images.pexels.com/photos/7031608/pexels-photo-7031608.jpeg?w=800&h=600&fit=crop', title: 'Cozy Bedroom', category: 'Interiors' },
    
    // Kitchens
    { id: 30, src: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?w=800&h=600&fit=crop', title: 'Modern Kitchen Design', category: 'Interiors' },
    { id: 31, src: 'https://images.pexels.com/photos/2635037/pexels-photo-2635037.jpeg?w=800&h=600&fit=crop', title: 'Luxury Kitchen', category: 'Interiors' },
    { id: 32, src: 'https://images.pexels.com/photos/2739597/pexels-photo-2739597.jpeg?w=800&h=600&fit=crop', title: 'Minimalist Kitchen', category: 'Interiors' },
    
    // Dining Rooms
    { id: 33, src: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?w=800&h=600&fit=crop', title: 'Elegant Dining Room', category: 'Interiors' },
    { id: 34, src: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?w=800&h=600&fit=crop', title: 'Modern Dining Space', category: 'Interiors' },
    
    // Home Office
    { id: 35, src: 'https://images.pexels.com/photos/7972320/pexels-photo-7972320.jpeg?w=800&h=600&fit=crop', title: 'Home Office Setup', category: 'Interiors' },
    { id: 36, src: 'https://images.pexels.com/photos/7112/office-architecture.jpg?w=800&h=600&fit=crop', title: 'Modern Office Interior', category: 'Interiors' },
    
    // Bathrooms
    { id: 37, src: 'https://images.pexels.com/photos/1488464/pexels-photo-1488464.jpeg?w=800&h=600&fit=crop', title: 'Luxury Bathroom', category: 'Interiors' },
    { id: 38, src: 'https://images.pexels.com/photos/2624070/pexels-photo-2624070.jpeg?w=800&h=600&fit=crop', title: 'Modern Bathroom Design', category: 'Interiors' },
    
    // Commercial Interiors
    { id: 39, src: 'https://images.pexels.com/photos/7018998/pexels-photo-7018998.jpeg?w=800&h=600&fit=crop', title: 'Corporate Office', category: 'Interiors' },
    { id: 40, src: 'https://images.pexels.com/photos/2922750/pexels-photo-2922750.jpeg?w=800&h=600&fit=crop', title: 'Conference Room', category: 'Interiors' },
    { id: 41, src: 'https://images.pexels.com/photos/2609164/pexels-photo-2609164.jpeg?w=800&h=600&fit=crop', title: 'Restaurant Interior', category: 'Interiors' },
    { id: 42, src: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?w=800&h=600&fit=crop', title: 'Hotel Lobby', category: 'Interiors' },
    { id: 43, src: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?w=800&h=600&fit=crop', title: 'Retail Store', category: 'Interiors' },
    
    // Additional Interiors
    { id: 44, src: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?w=800&h=600&fit=crop', title: 'Kids Room Design', category: 'Interiors' },
    { id: 45, src: 'https://images.pexels.com/photos/2766258/pexels-photo-2766258.jpeg?w=800&h=600&fit=crop', title: 'Home Theater', category: 'Interiors' },
    { id: 46, src: 'https://images.pexels.com/photos/2092975/pexels-photo-2092975.jpeg?w=800&h=600&fit=crop', title: 'Walk-in Closet', category: 'Interiors' },
    { id: 47, src: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?w=800&h=600&fit=crop', title: 'Open Floor Plan', category: 'Interiors' },
    { id: 48, src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?w=800&h=600&fit=crop', title: 'Scandinavian Interior', category: 'Interiors' },
  ];

  // Combine all images
  const allImages = [...architectureImages, ...interiorImages];

  useEffect(() => {
    setImages(allImages);
    setLoading(false);
  }, []);

  const filteredImages = images.filter(image =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle image load success
  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleLike = (id: number) => {
    setLikedImages(prev => 
      prev.includes(id) ? prev.filter(imgId => imgId !== id) : [...prev, id]
    );
  };

  const handleShare = async (image: GalleryImage, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: `Check out this ${image.category.toLowerCase()} project: ${image.title}`,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(`${image.title} - CCIPL Gallery`);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const getGridLayoutClass = () => {
    switch(viewMode) {
      case 'compact':
        return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3';
      case 'masonry':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6';
    }
  };

  // Skeleton loader component
  const ImageSkeleton = () => (
    <div className="absolute inset-0 bg-gray-800 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D9AF58]/30 border-t-[#D9AF58] rounded-full animate-spin" />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center h-screen pt-20">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-[#D9AF58]/30 border-t-[#D9AF58] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/60">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1920&h=600&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-5xl md:text-6xl font-bold text-white mb-6"
            >
              CCIPL PROJECT GALLERY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            >
              Explore our stunning collection of architecture and interior design projects
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Controls Section */}
      <section className="sticky top-20 z-40 bg-black border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search by title or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D9AF58]/50 focus:border-[#D9AF58] transition-all duration-200 rounded-lg"
              />
            </div>
            
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-[#D9AF58] text-black' : 'text-white/60 hover:bg-white/10'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === 'masonry' ? 'bg-[#D9AF58] text-black' : 'text-white/60 hover:bg-white/10'
                }`}
                aria-label="Masonry view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === 'compact' ? 'bg-[#D9AF58] text-black' : 'text-white/60 hover:bg-white/10'
                }`}
                aria-label="Compact view"
              >
                <Columns className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['All', 'Architecture', 'Interiors'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchTerm(cat === 'All' ? '' : cat)}
                className={`px-3 py-1 rounded-full text-xs border transition-all duration-200 ${
                  (cat === 'All' && searchTerm === '') || (searchTerm === cat)
                    ? 'bg-[#D9AF58] text-black border-[#D9AF58]'
                    : 'border-white/20 text-white/60 hover:border-[#D9AF58]/50 hover:text-[#D9AF58]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-3 text-sm text-white/40 text-center">
            Showing {filteredImages.length} of {images.length} images
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-white/40 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-white/60 text-lg">No images found matching your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-[#D9AF58] text-black hover:bg-[#C49A3E] transition-colors rounded-lg"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <motion.div layout className={`grid ${getGridLayoutClass()}`}>
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <div className="relative bg-black/40 border border-white/10 hover:border-[#D9AF58]/30 transition-all duration-300 rounded-lg overflow-hidden">
                      <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-black/40">
                        {!loadedImages.has(image.id) && <ImageSkeleton />}
                        <img
                          src={image.src}
                          alt={image.title}
                          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                            loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="lazy"
                          onLoad={() => handleImageLoad(image.id)}
                        />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#D9AF58]/20 backdrop-blur-sm text-[#D9AF58] text-xs font-medium border border-[#D9AF58]/30">
                          {image.category}
                        </span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLike(image.id);
                          }}
                          className="bg-black/60 backdrop-blur-sm p-1.5 rounded-lg hover:bg-black/80 transition-colors"
                          aria-label="Like image"
                        >
                          <Heart className={`w-4 h-4 ${likedImages.includes(image.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                        </button>
                        <button
                          onClick={(e) => handleShare(image, e)}
                          className="bg-black/60 backdrop-blur-sm p-1.5 rounded-lg hover:bg-black/80 transition-colors"
                          aria-label="Share image"
                        >
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      
                      {/* Image title overlay on hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{image.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={handleClose}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-[#D9AF58] transition-colors z-10 p-2"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-[#D9AF58] transition-colors z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-[#D9AF58] transition-colors z-10 p-2"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-[90vw] max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 text-white text-sm rounded-full">
                {currentIndex + 1} / {filteredImages.length}
              </div>
              
              {/* Category in lightbox */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-[#D9AF58] text-xs">{selectedImage.category}</span>
              </div>
              
              {/* Title in lightbox */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-xs">{selectedImage.title}</span>
              </div>
              
              {/* Download button in lightbox */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const link = document.createElement('a');
                  link.href = selectedImage.src;
                  link.download = selectedImage.title;
                  link.click();
                }}
                className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm p-2 rounded-full hover:bg-black/90 transition-colors"
                aria-label="Download image"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;