import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import FeaturedWork from '@/components/FeaturedWork';
import Skills from '@/components/Skills';
import Freelance from '@/components/Freelance';
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
      <Achievements />
      <FeaturedWork />
      <Skills />
      <Freelance />
      <Footer />
    </main>
  );
};

export default Index;
