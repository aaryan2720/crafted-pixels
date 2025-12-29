import { ExternalLink } from 'lucide-react';

const freelanceProjects = [
  {
    id: 1,
    title: 'Giri Tours & Travels',
    client: 'Giri Tours & Travels',
    description:
      'A comprehensive travel booking and tour management website featuring journey packages, booking system, and travel information. Journey Beyond Boundaries.',
    status: 'Live',
    link: 'https://www.giritravels.com',
  },
  {
    id: 2,
    title: 'Resourz Group',
    client: 'Resourz Group',
    description:
      'A government-backed energy efficiency platform delivering ECO4 and Great British Insulation Scheme (GBIS) solutions. Helping homeowners, tenants, and landlords reduce energy bills and transition towards sustainable living.',
    status: 'Live',
    link: 'https://resourzgroup.com',
  },
];


 const Freelance = () => {
  return (
    <section id="freelance" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-section">
            <span className="text-label">Freelance Work</span>
            <h2 className="heading-md text-foreground mt-4">
              Projects Currently<br />
              In Production
            </h2>
          </div>
          <div className="animate-section flex items-end">
            <p className="text-body">
              Real-world applications I’ve built for clients that are actively being used and creating measurable impact.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {freelanceProjects.map((project) => (
            <article
              key={project.id}
              className="group card-portfolio p-8 lg:p-12 animate-card cursor-pointer hover:border-primary/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      for {project.client}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Link */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelance;
