import { ArrowRight, Palette, PenTool, Layout, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete visual identity systems that capture your brand essence.',
    },
    {
      icon: PenTool,
      title: 'Packaging Design',
      description: 'Eye-catching package designs that stand out on shelves.',
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Intuitive digital experiences that delight users.',
    },
    {
      icon: Megaphone,
      title: 'Brand Strategy',
      description: 'Strategic positioning that sets you apart from competition.',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-section">
            <span className="text-label">Services</span>
            <h2 className="heading-md text-foreground mt-4">
              What I Can Help<br />
              You With
            </h2>
          </div>
          <div className="animate-section flex flex-col justify-end">
            <p className="text-body mb-6">
              From strategy to visuals, I offer tailored services to help your brand grow with clarity and impact.
            </p>
            <a href="#contact" className="btn-primary inline-flex self-start">
              Let's Build Something Meaningful Together
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card-portfolio p-6 animate-card group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
