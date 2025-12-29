// SEO Utility Functions for React Components

/**
 * Update page metadata dynamically
 */
export const updateMetaTags = (config: {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}) => {
  if (config.title) {
    document.title = config.title;
    updateMetaTag('og:title', config.title);
    updateMetaTag('twitter:title', config.title);
  }

  if (config.description) {
    updateMetaTag('description', config.description);
    updateMetaTag('og:description', config.description);
    updateMetaTag('twitter:description', config.description);
  }

  if (config.ogImage) {
    updateMetaTag('og:image', config.ogImage);
    updateMetaTag('twitter:image', config.ogImage);
  }

  if (config.url) {
    updateMetaTag('og:url', config.url);
    updateMetaTag('canonical', config.url, 'link');
  }
};

/**
 * Update individual meta tag
 */
const updateMetaTag = (name: string, content: string, type: 'meta' | 'link' = 'meta') => {
  if (type === 'meta') {
    let element = document.querySelector(`meta[name="${name}"]`) ||
                  document.querySelector(`meta[property="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  } else if (type === 'link') {
    let element = document.querySelector(`link[rel="${name}"]`);
    
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('href', content);
  }
};

/**
 * Generate Schema.org JSON-LD markup
 */
export const generateSchemaMarkup = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Structured Data for Projects/Work
 */
export const generateProjectSchema = (project: {
  name: string;
  description: string;
  url: string;
  image?: string;
  technologies?: string[];
  datePublished?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.name,
  "description": project.description,
  "url": project.url,
  "image": project.image,
  "author": {
    "@type": "Person",
    "name": "Aaryan Choudhari"
  },
  "datePublished": project.datePublished
});

/**
 * SEO meta tags for optimal rendering
 */
export const DEFAULT_SEO_CONFIG = {
  siteTitle: "Aaryan Choudhari | Software Engineer & Full Stack Developer",
  siteDescription: "Award-winning Full Stack Developer. SIH 2025 Finalist, multiple hackathon winner. Specializing in React, Node.js, Next.js, and modern web technologies.",
  siteUrl: "https://a-aryan-27.tech",
  siteLogo: "https://a-aryan-27.tech/favicon.svg",
  author: "Aaryan Choudhari",
  ogImage: "https://a-aryan-27.tech/og-image.png"
};

/**
 * Keywords for natural integration in content
 */
export const PRIMARY_KEYWORDS = [
  "Aaryan Choudhari",
  "Software Engineer",
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Web Development",
  "App Development",
  "Hackathon Winner",
  "SIH Finalist"
];

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export default {
  updateMetaTags,
  generateSchemaMarkup,
  generateProjectSchema,
  generateBreadcrumbSchema,
  DEFAULT_SEO_CONFIG,
  PRIMARY_KEYWORDS
};
