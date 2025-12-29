import { ArrowUpRight } from 'lucide-react';
import projectAbstract from '@/assets/project-abstract.jpg';
import projectPackaging from '@/assets/project-packaging.jpg';

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'Orange Blox',
      description: 'The design shows floating shapes in iridescent hues, creating an ethereal effect.',
      image: projectAbstract,
      color: 'from-orange-600/20',
    },
    {
      id: 2,
      title: 'Nova Scene',
      description: 'The design shows floating shapes in iridescent hues, from deep blues and purples to vibrant pinks and oranges.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      color: 'from-red-500/20',
    },
    {
      id: 3,
      title: 'Arched Pink',
      description: 'The design shows floating shapes in iridescent hues, creating an ethereal effect.',
      image: projectPackaging,
      color: 'from-pink-500/20',
    },
    {
      id: 4,
      title: 'Liquid',
      description: 'The design shows floating shapes in iridescent hues, from deep blues and purples to vibrant pinks.',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80',
      color: 'from-blue-500/20',
    },
  ];

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 animate-section">
          <div>
            <span className="text-label">Featured Work</span>
            <h2 className="heading-lg text-foreground mt-4">
              Latest Projects &<br />
              Collaborations
            </h2>
          </div>
          <p className="text-body max-w-md">
            A look at what I've been working on lately—designs, stories, and creative partnerships.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="group card-portfolio animate-card cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <button className="btn-primary text-xs py-2 px-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
