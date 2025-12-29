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
              Developer.<br />
              Problem Solver.<br />
              Hackathon<br />
              Champion.
            </h2>

            <p className="text-body max-w-lg">
              I'm a B-Tech Computer Science student at Deogiri Institute of Engineering and Management Studies, Chhatrapati Sambhajinagar (2023-2027). I specialize in full-stack development and building intelligent systems that solve real-world problems.
            </p>

            <p className="text-body max-w-lg">
              With experience in React.js, Node.js, Next.js, React Native, and cloud technologies like AWS, I've led teams and built platforms ranging from citizen-government communication systems to AI-powered deepfake detection tools.
            </p>

            <a href="#contact" className="btn-primary inline-flex">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="animate-section">
            <div className="image-container aspect-[3/4] rounded-3xl">
              <img
                src={aboutPortrait}
                alt="Aaryan Choudhari"
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
