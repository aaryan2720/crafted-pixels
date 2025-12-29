import { ArrowRight, Award, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    { title: 'SIH Finalist', event: '@2025', highlight: true },
    { title: '1st Prize', event: 'CIH 2.0, Nagpur' },
    { title: '1st Prize', event: 'MKD Spark, Nandurbar' },
    { title: '1st Prize', event: 'TechLegion, Ch. Sambhajinagar' },
    { title: '2nd Prize', event: 'IDEA Hackathon, Mumbai' },
    { title: '2nd Prize', event: 'DIPEX 2025, Pune' },
    { title: '2nd Prize', event: 'WINGS 2025, Ch. Sambhajinagar' },
    { title: '3rd Prize', event: 'Ideathon 2.0, Mumbai' },
    { title: '2nd Runner Up', event: 'Hack The Gap, Ch. Sambhajinagar' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Internship */}
          <div className="space-y-8 animate-section">
            <span className="text-label">Experience</span>
            
            <h2 className="heading-md text-foreground">
              Internship &<br />
              Leadership
            </h2>

            <div className="card-portfolio p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    Backend Lead – Web Development Intern
                  </h3>
                  <p className="text-primary text-sm font-medium mt-1">Nish E Service</p>
                  <p className="text-muted-foreground text-sm mt-1">May 2025 - September 2025</p>
                  <p className="text-body mt-3">
                    Led a small team in building responsive web applications and ensuring timely project delivery. Contributed to full-stack development while guiding peers in implementation and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="space-y-8 animate-section">
            <span className="text-label">Achievements</span>
            
            <h2 className="heading-md text-foreground">
              Hackathon<br />
              Victories
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all ${
                    achievement.highlight
                      ? 'bg-primary/10 border-primary/50 col-span-2'
                      : 'bg-card border-border/50 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Award className={`w-4 h-4 ${achievement.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`font-medium text-sm ${achievement.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {achievement.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
