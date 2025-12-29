import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import About from '@/components/About';
import BehindDesigns from '@/components/BehindDesigns';
import FeaturedWork from '@/components/FeaturedWork';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import RecentWork from '@/components/RecentWork';
import Footer from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const Index = () => {
  // Initialize smooth scrolling and animations
  useLenis();
  useGsapAnimations();

  return (
    <main className="relative bg-background bg-noise min-h-screen">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <About />
      <BehindDesigns />
      <FeaturedWork />
      <Services />
      <Pricing />
      <RecentWork />
      <Footer />
    </main>
  );
};

export default Index;
