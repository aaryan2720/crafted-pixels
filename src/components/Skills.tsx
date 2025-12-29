import { Code2, Server, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React.js', 'React Native', 'JavaScript', 'Next.js', 'GSAP'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'Java'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'SQL'],
    },
    {
      icon: Smartphone,
      title: 'Other Technologies',
      skills: ['AWS', 'Git/GitHub', 'Postman', 'DSA'],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-section">
          <span className="text-label">Skills</span>
          <h2 className="heading-lg text-foreground mt-4">
            Technical Expertise
          </h2>
          <p className="text-body mt-4">
            Full-stack development skills honed through real projects and hackathon victories.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="card-portfolio p-6 animate-card group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span key={j} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
