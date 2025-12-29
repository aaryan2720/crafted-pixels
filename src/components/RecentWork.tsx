import { ArrowUpRight } from 'lucide-react';

const RecentWork = () => {
  const works = [
    {
      category: 'Brand Identity Design',
      title: 'Kin Studio',
      description: 'A striking, minimalist identity for an acclaimed wellness brand that combines an Asian soul in vibe.',
      year: '2024',
    },
    {
      category: 'Packaging Design',
      title: 'Field Coffee Co.',
      description: 'Crafted a earthy visual system for a specialty coffee shop blending community and quality.',
      year: '2023',
    },
    {
      category: 'Creative Direction',
      title: 'Nova Scene Gallery',
      description: 'Art direction for a contemporary gallery focusing on emerging digital artists.',
      year: '2023',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-section">
            <span className="text-label">Recent Work</span>
            <h2 className="heading-md text-foreground mt-4">
              Latest Projects &<br />
              Collaborations
            </h2>
          </div>
          <div className="animate-section flex items-end">
            <p className="text-body">
              A look at what I've been working on lately—designs, stories, and creative partnerships.
            </p>
          </div>
        </div>

        {/* Work List */}
        <div className="space-y-6">
          {works.map((work, i) => (
            <article
              key={i}
              className="group card-portfolio p-6 lg:p-8 animate-card cursor-pointer hover:border-primary/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {work.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-xl">
                    {work.description}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-muted-foreground font-medium">{work.year}</span>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
