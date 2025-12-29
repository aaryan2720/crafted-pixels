// Google Search Console Verification & Analytics Setup Guide

/**
 * STEPS TO COMPLETE SEO SETUP:
 * 
 * 1. GOOGLE SEARCH CONSOLE (Critical for "Aaryan Choudhari" ranking)
 *    - Go to: https://search.google.com/search-console
 *    - Add property: https://a-aryan-27.tech
 *    - Verify ownership (DNS/HTML file/Google Analytics method)
 *    - Submit sitemap: /sitemap.xml
 *    - Monitor search appearance and indexed pages
 * 
 * 2. GOOGLE ANALYTICS 4
 *    - Go to: https://analytics.google.com
 *    - Create property for a-aryan-27.tech
 *    - Add measurement ID to index.html: <!-- UPDATE WITH YOUR GA ID -->
 * 
 * 3. BING WEBMASTER TOOLS
 *    - Go to: https://www.bing.com/webmasters
 *    - Add site: https://a-aryan-27.tech
 *    - Submit sitemap and verify
 * 
 * 4. OPEN GRAPH IMAGE
 *    - Create 1200x630px image with your name and tagline
 *    - Save as: /public/og-image.png
 *    - This appears when your link is shared on social media
 * 
 * 5. TWITTER PROFILE
 *    - Update Twitter profile with link to your portfolio
 *    - This helps with social discovery
 */

// Template for Google Analytics 4
export const GOOGLE_ANALYTICS_4 = `
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Note: Replace G-XXXXXXXXXX with your actual Measurement ID from Google Analytics -->
`;

// Key areas to focus on for ranking "Aaryan Choudhari"
export const NAME_RANKING_STRATEGY = {
  onPage: {
    title: "Aaryan Choudhari | Software Engineer & Full Stack Developer",
    h1: "Should include 'Aaryan Choudhari' prominently",
    description: "Start with 'Aaryan Choudhari - ' in meta description",
    content: "Mention your full name naturally throughout the page 3-5 times"
  },

  contentPlacement: {
    hero: "Feature your name prominently in the Hero section",
    about: "Full About section talking about who Aaryan Choudhari is",
    achievements: "Highlight achievements with your name",
    footer: "Copyright with your full name"
  },

  offPageSignals: {
    socialMedia: [
      "Create Twitter profile: @aaryan_choudhari",
      "Create LinkedIn profile with link to portfolio",
      "Create GitHub with prominent bio mentioning your name"
    ],
    backlinks: [
      "Get featured on Dev.to with author profile as Aaryan Choudhari",
      "Write on Medium/Hashnode with your full name",
      "Get mentioned on hackathon winner lists",
      "Get backlinks from company websites of your projects"
    ],
    directoryListings: [
      "LinkedIn - https://linkedin.com",
      "GitHub - https://github.com (optimize bio)",
      "Dev.to - https://dev.to",
      "Hashnode - https://hashnode.com",
      "Stack Overflow - https://stackoverflow.com"
    ]
  },

  monitoring: {
    tools: [
      "Google Search Console - Check impressions for 'Aaryan Choudhari'",
      "Google Analytics - Track organic traffic from your name searches",
      "SEMrush/Ahrefs - Check keyword rankings"
    ],
    targets: [
      "Rank #1 for 'Aaryan Choudhari'",
      "Rank in top 3 for 'Aaryan Choudhari software engineer'",
      "Rank in top 5 for 'Aaryan Choudhari developer'"
    ]
  }
};

export const IMMEDIATE_ACTIONS = [
  {
    task: "Add Google Analytics to index.html",
    file: "index.html",
    priority: "HIGH",
    deadline: "Immediate"
  },
  {
    task: "Create professional OG image (1200x630px)",
    file: "/public/og-image.png",
    priority: "HIGH",
    deadline: "Immediate"
  },
  {
    task: "Submit to Google Search Console",
    url: "https://search.google.com/search-console",
    priority: "CRITICAL",
    deadline: "Within 24 hours"
  },
  {
    task: "Set up social media profiles",
    platforms: ["Twitter", "LinkedIn", "GitHub"],
    priority: "HIGH",
    deadline: "Within 1 week"
  },
  {
    task: "Write comprehensive About section",
    mentions: "Include your name 5+ times naturally",
    priority: "HIGH",
    deadline: "Within 1 week"
  },
  {
    task: "Deploy website to production",
    priority: "CRITICAL",
    deadline: "Immediate"
  }
];

export default {
  GOOGLE_ANALYTICS_4,
  NAME_RANKING_STRATEGY,
  IMMEDIATE_ACTIONS
};
