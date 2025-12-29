import { ArrowUpRight } from 'lucide-react';
import projectAbstract from '@/assets/project-abstract.jpg';
import projectPackaging from '@/assets/project-packaging.jpg';
import productHeadphones from '@/assets/product-headphones.jpg';

const FeaturedWork = () => {
  const projects = [
    {
      id: 1,
      title: 'Community Pulse',
      subtitle: 'Citizen-Government Communication Platform',
      date: 'Aug 2025',
      description: 'Built a comprehensive issue reporting system connecting citizens with government officials to provide real-time grievance resolution and community feedback. Enabled automated issue routing and transparent status tracking with role-based dashboards.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      image: projectAbstract,
      color: 'from-orange-600/20',
    },
    {
      id: 2,
      title: 'EchoBreaker',
      subtitle: 'AI-Powered Deepfake Detection System',
      date: 'Nov 2025',
      description: 'Developed an intelligent agentic system to help journalists detect coordinated deepfake and propaganda operations. Enabled real-time monitoring, multimodal analysis, and network mapping of misinformation campaigns.',
      tech: ['Python', 'Next.js', 'PostgreSQL', 'AWS'],
      image: projectPackaging,
      color: 'from-blue-500/20',
    },
    {
      id: 3,
      title: 'HAWK',
      subtitle: 'OEM Vulnerability Detection & Alerting Tool',
      date: 'Jan 2025',
      description: 'Built HAWK, a web scraping tool to detect vulnerabilities in OEM platforms. Enhanced cybersecurity risk management through automated vulnerability detection and alerting system.',
      tech: ['Python', 'Node.js', 'Express.js', 'MongoDB'],
      image: productHeadphones,
      color: 'from-green-500/20',
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 animate-section">
          <div>
            <span className="text-label">Featured Projects</span>
            <h2 className="heading-lg text-foreground mt-4">
              Building Solutions<br />
              That Matter
            </h2>
          </div>
          <p className="text-body max-w-md">
            From civic tech to AI-powered security tools — projects that solve real-world problems and win hackathons.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`group card-portfolio animate-card cursor-pointer ${
                index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[400px]' : 'aspect-[16/9]'}`}>
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="pill text-xs">{project.date}</span>
                </div>
              </div>
              <div className={`p-6 lg:p-8 space-y-4 ${index === 0 ? 'flex flex-col justify-center' : ''}`}>
                <div>
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="btn-primary text-sm py-2 px-5 mt-4 inline-flex self-start opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
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
