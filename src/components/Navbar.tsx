import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-foreground">
          Aaryan<span className="text-primary">.</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#freelance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Freelance
          </a>
        </div>

        {/* CTA Button */}
        <a href="#contact" className="btn-primary text-sm">
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
