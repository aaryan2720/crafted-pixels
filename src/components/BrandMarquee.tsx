const BrandMarquee = () => {
  const technologies = [
    'React.js',
    'Node.js',
    'Next.js',
    'React Native',
    'MongoDB',
    'PostgreSQL',
    'Express.js',
    'Python',
    'AWS',
    'GSAP',
  ];

  return (
    <section className="py-12 border-y border-border/30 overflow-hidden bg-card/30">
      <div className="marquee">
        <div className="marquee-content flex items-center gap-16 px-8">
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-primary">✦</span>
              <span className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
