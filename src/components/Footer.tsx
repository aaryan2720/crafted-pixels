import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/aaryan-choudhari' },
    { name: 'GitHub', href: 'https://github.com/aaryan-choudhari' },
    { name: 'Portfolio', href: 'https://a-aryan-27.tech' },
  ];

  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left - CTA */}
          <div className="space-y-6 animate-section">
            <span className="text-label">Let's Connect</span>
            <h2 className="heading-lg text-foreground">
              Have a project<br />
              in mind?
            </h2>
            <p className="text-body max-w-md">
              I'm always open to discussing new projects, freelance opportunities, or collaborating on innovative solutions.
            </p>
            <a href="mailto:aryan1234choudhari1983@gmail.com" className="btn-primary inline-flex">
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8 animate-section">
            <div>
              <span className="text-label">Email</span>
              <a href="mailto:aryan1234choudhari1983@gmail.com" className="block text-xl font-display font-semibold text-foreground hover:text-primary transition-colors mt-2">
                aryan1234choudhari1983@gmail.com
              </a>
            </div>

            <div>
              <span className="text-label">Phone</span>
              <a href="tel:+918446144948" className="block text-xl font-display font-semibold text-foreground hover:text-primary transition-colors mt-2">
                +91 8446144948
              </a>
            </div>

            <div>
              <span className="text-label">Location</span>
              <p className="text-xl font-display font-semibold text-foreground mt-2">
                Chhatrapati Sambhajinagar, India
              </p>
            </div>

            <div>
              <span className="text-label">Connect</span>
              <div className="flex flex-wrap gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill hover:border-primary hover:text-primary"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aaryan Choudhari. All rights reserved.
          </p>
          <a href="#" className="font-display text-xl font-bold text-foreground">
            Aaryan<span className="text-primary">.</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
