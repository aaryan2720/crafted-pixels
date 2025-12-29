import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Dribbble', href: '#' },
    { name: 'Behance', href: '#' },
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
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="mailto:hello@yourname.com" className="btn-primary inline-flex">
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Contact & Social */}
          <div className="space-y-8 animate-section">
            <div>
              <span className="text-label">Email</span>
              <a href="mailto:hello@yourname.com" className="block text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors mt-2">
                hello@yourname.com
              </a>
            </div>

            <div>
              <span className="text-label">Social</span>
              <div className="flex flex-wrap gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
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
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <a href="#" className="font-display text-xl font-bold text-foreground">
            Folioblox<span className="text-primary">®</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
