import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import InteriorShowcase from '../components/InteriorShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessTimeline from '../components/ProcessTimeline';
// import AchievementsCounter from '../components/AchievementsCounter';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import CTABanner from '../components/CTABanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedProjects />
        <InteriorShowcase />
        <WhyChooseUs />
        <ProcessTimeline />
        {/* <AchievementsCounter /> */}
        <TestimonialsSection />
        <BlogSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}