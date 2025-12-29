import { useState, useRef } from 'react';
import { ArrowUpRight, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/aaryan-choudhari' },
    { name: 'GitHub', href: 'https://github.com/aaryan-choudhari' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        'template_gusk9za',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'aryan1234choudhari1983@gmail.com',
        },
        'iFfwxF4YkLwA0g10z'
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left - Contact Form */}
          <div className="space-y-6 animate-section">
            <span className="text-label">Let's Connect</span>
            <h2 className="heading-lg text-foreground">
              Have a project<br />
              in mind?
            </h2>
            <p className="text-body max-w-md">
              I'm always open to discussing new projects, freelance opportunities, or collaborating on innovative solutions.
            </p>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
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