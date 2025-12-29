import { ExternalLink } from 'lucide-react';

const Freelance = () => {
  const freelanceProject = {
    id: 1,
    title: 'Giri Tours & Travels',
    client: 'Giri Tours & Travels',
    description: 'A comprehensive travel booking and tour management website featuring journey packages, booking system, and travel information. Journey Beyond Boundaries.',
    status: 'Live',
    link: 'https://www.giritravels.com',
  };

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

        {/* Featured Freelance Project */}
        <article className="group card-portfolio p-8 lg:p-12 animate-card cursor-pointer hover:border-primary/50">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  {freelanceProject.status}
                </span>
                <span className="text-sm text-muted-foreground">
                  for {freelanceProject.client}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {freelanceProject.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
                {freelanceProject.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={freelanceProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
              >
                <ExternalLink className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Freelance;