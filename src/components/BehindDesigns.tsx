import { ArrowRight } from 'lucide-react';
import productHeadphones from '@/assets/product-headphones.jpg';
import projectPackaging from '@/assets/project-packaging.jpg';
import projectAbstract from '@/assets/project-abstract.jpg';

const BehindDesigns = () => {
  const images = [
    productHeadphones,
    projectPackaging,
    projectAbstract,
  ];

  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-section">
            <span className="text-label">Behind the Designs</span>
            
            <h2 className="heading-md text-foreground max-w-md">
              Shaping Experiences That Make Life Simpler
            </h2>

            {/* Image Row */}
            <div className="flex gap-4 pt-6">
              {images.map((img, i) => (
                <div key={i} className="image-container w-32 h-40 rounded-2xl animate-card">
                  <img src={img} alt={`Design ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-section">
            <p className="text-body">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
            </p>

            <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-4">
              <p className="text-foreground font-medium">
                Let's Build Something Meaningful Together
              </p>
              <a href="#contact" className="btn-primary inline-flex text-sm">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindDesigns;
