import { ArrowUpRight, ExternalLink } from 'lucide-react';

const Freelance = () => {
  // Placeholder freelance projects - User can add their own
  const freelanceProjects = [
    {
      id: 1,
      title: 'Your Freelance Project 1',
      client: 'Client Name',
      description: 'Add your freelance project description here. Describe what you built and the impact it had.',
      status: 'Live',
      link: '#',
    },
    {
      id: 2,
      title: 'Your Freelance Project 2',
      client: 'Client Name',
      description: 'Add your freelance project description here. Describe what you built and the impact it had.',
      status: 'Live',
      link: '#',
    },
    {
      id: 3,
      title: 'Your Freelance Project 3',
      client: 'Client Name',
      description: 'Add your freelance project description here. Describe what you built and the impact it had.',
      status: 'In Development',
      link: '#',
    },
  ];

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
              Real-world applications I've built for clients that are actively being used and making an impact.
            </p>
          </div>
        </div>

        {/* Freelance Projects */}
        <div className="space-y-6">
          {freelanceProjects.map((project) => (
            <article
              key={project.id}
              className="group card-portfolio p-6 lg:p-8 animate-card cursor-pointer hover:border-primary/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      for {project.client}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note for user */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            💡 Update this section in <code className="text-primary">src/components/Freelance.tsx</code> with your actual freelance projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
