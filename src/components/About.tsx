import { ArrowRight } from 'lucide-react';
import aboutPortrait from '@/assets/about-portrait.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-section">
            <span className="text-label">About me</span>
            
            <h2 className="heading-lg text-foreground">
              Designer.<br />
              Strategist.<br />
              Creative<br />
              partner.
            </h2>

            <p className="text-body max-w-lg">
              Blending clarity and creativity to build brands with purpose. I'm a freelance brand designer with 12+ years of experience helping startups, creatives, and growing businesses build identities that feel clear.
            </p>

            <p className="text-body max-w-lg">
              With skills spanning brand strategy, design, marketing, art direction, and brand strategy, I bring a balance of strategy and style to every project. Whatever it is you need, I'm here to guide you every step of the way.
            </p>

            <a href="#contact" className="btn-primary inline-flex">
              Read more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="animate-section">
            <div className="image-container aspect-[3/4] rounded-3xl">
              <img
                src={aboutPortrait}
                alt="Designer Portrait"
                className="parallax-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
