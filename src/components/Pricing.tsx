import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1990',
      description: 'Perfect for early-stage startups',
      features: ['Logo design', 'Basic brand guide', 'Social media kit', '2 revision rounds'],
      highlighted: false,
    },
    {
      name: 'Pro plan',
      price: '$2990',
      description: 'Best for growing brands',
      features: ['Complete identity', 'Extended brand guide', 'Print collateral', 'Priority support', '5 revision rounds'],
      highlighted: true,
    },
    {
      name: 'Enterprise plan',
      price: '$4990',
      description: 'Comprehensive branding solution',
      features: ['Full brand system', 'Brand strategy', 'Website design', 'Ongoing support', 'Unlimited revisions'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-section">
          <span className="text-label">Pricing</span>
          <h2 className="heading-lg text-foreground mt-4">
            Simple Packages for Every Stage
          </h2>
          <p className="text-body mt-4">
            Clear, flexible packages built to fit your brand's stage.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-3xl p-8 animate-card transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 shadow-glow scale-105'
                  : 'card-portfolio'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Popular
                </span>
              )}
              
              <h3 className="font-display font-semibold text-lg text-foreground">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-1 my-4">
                <span className="text-4xl font-display font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">/project</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 ${plan.highlighted ? 'text-primary' : 'text-primary/60'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-medium text-sm transition-all ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
