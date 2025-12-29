import { ArrowRight } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  const skills = [
    { id: '01', label: 'React.js' },
    { id: '02', label: 'Node.js' },
    { id: '03', label: 'React Native' },
    { id: '04', label: 'Next.js' },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="hero-label text-label">Hey, I'm Aaryan</p>
            
            <h1 className="hero-title heading-xl text-foreground" style={{ perspective: '1000px' }}>
              <span className="block">Software</span>
              <span className="block">Engineer</span>
            </h1>

            <p className="hero-description text-body max-w-md">
              <span className="text-foreground font-medium">Full Stack & App Developer.</span>{' '}
              Building responsive web applications and intelligent systems with modern technologies.
            </p>

            <div className="hero-cta flex items-center gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hero-image relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 aspect-[4/5] glow-orange">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
              <img
                src={heroPortrait}
                alt="Aaryan Choudhari"
                className="w-full h-full object-cover"
              />
              {/* Floating quote card */}
              <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-4 max-w-[200px] z-20">
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  SIH 2025 Finalist & Multiple Hackathon Winner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Row */}
        <div className="hero-tags mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs text-muted-foreground mr-4">Tech Stack</span>
            {skills.map((skill) => (
              <div key={skill.id} className="pill">
                <span className="text-primary text-xs">●</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
