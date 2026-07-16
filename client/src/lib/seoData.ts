import { contact } from "./siteData";

export const seoData = {
  home: {
    title: "NW Landlord Solutions | Washington Eviction Law Firm",
    description: "Landlord-side eviction representation and legal infrastructure for Washington property management companies and portfolio landlords. Fast intake, flat-fee structure, client portal access.",
    ogDescription: "Predictable landlord-side eviction process infrastructure for Washington property managers and portfolio owners.",
    canonical: "https://waevictions.com/",
  },
  platform: {
    title: "Client Portal & Case Management | NW Landlord Solutions",
    description: "Real-time case tracking, document access, and intake management for Washington eviction matters. Designed for property managers and portfolio operators.",
    ogDescription: "Transparent case management and document portal for Washington landlord-side eviction representation.",
    canonical: "https://waevictions.com/platform",
  },
  services: {
    title: "Eviction Services | Washington Unlawful Detainer & Consultation",
    description: "Landlord-side eviction services including unlawful detainer filings, mobile home act matters, and operational consultation for Washington property managers.",
    ogDescription: "Focused eviction services for Washington property management companies and portfolio landlords.",
    canonical: "https://waevictions.com/services",
  },
  about: {
    title: "About NW Landlord Solutions | Quinn Posner",
    description: "Learn about Quinn Posner and NW Landlord Solutions' approach to landlord-side eviction representation in Washington. Founded on principles of transparency and operational efficiency.",
    ogDescription: "Meet Quinn Posner, founder of NW Landlord Solutions. Focused on predictable, transparent eviction representation.",
    canonical: "https://waevictions.com/about",
  },
  blog: {
    title: "Blog | Eviction Law, Compliance & Operations | NW Landlord Solutions",
    description: "Articles on Washington eviction law, city ordinances, rent stabilization, compliance, and operational best practices for property managers and landlords.",
    ogDescription: "Insights on Washington eviction law, compliance, and property management operations.",
    canonical: "https://waevictions.com/blog",
  },
  contact: {
    title: "Contact NW Landlord Solutions | Eviction Intake Form",
    description: "Submit an intake request for eviction representation, pricing details, or operational consultation. Serving Washington property management companies and portfolio landlords.",
    ogDescription: "Contact NW Landlord Solutions for eviction representation and consultation.",
    canonical: "https://waevictions.com/contact",
  },
  serviceAreas: {
    title: "Service Areas | NW Landlord Solutions - Washington, Oregon, Arizona",
    description: "Currently serving Washington with full-service eviction management. Oregon expansion scheduled for late 2026. Arizona under consideration for future expansion.",
    ogDescription: "Expansion roadmap: Washington (active), Oregon (coming 2026), Arizona (under consideration).",
    canonical: "https://waevictions.com/service-areas",
  },
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Attorney",
        "@id": "https://waevictions.com/#attorney",
        name: "NW Landlord Solutions",
        url: "https://waevictions.com",
        telephone: contact.phone,
        email: contact.email,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Clark County, Washington" },
          { "@type": "AdministrativeArea", name: "Cowlitz County, Washington" },
          { "@type": "City", name: "Camas, Washington" },
          { "@type": "City", name: "Vancouver, Washington" },
          { "@type": "Region", name: "Southwest Washington" },
        ],
        priceRange: "$$",
        description: "Landlord-side eviction representation and property management legal services for Washington State. Flat-fee billing, virtual consultations, and tech-enabled case management.",
        knowsAbout: [
          "Eviction Law",
          "Landlord-Tenant Law",
          "Property Management Law",
          "Residential Tenancy",
          "Unlawful Detainer",
          "Notice Preparation",
          "Eviction Filing",
        ],
        sameAs: [
          "https://www.google.com/maps/place/NW+Landlord+Solutions",
          "https://waevictions.com",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://waevictions.com/#business",
        name: "NW Landlord Solutions",
        url: "https://waevictions.com",
        telephone: contact.phone,
        email: contact.email,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Clark County, Washington" },
          { "@type": "AdministrativeArea", name: "Cowlitz County, Washington" },
          { "@type": "City", name: "Camas, Washington" },
          { "@type": "City", name: "Vancouver, Washington" },
          { "@type": "Region", name: "Southwest Washington" },
        ],
        priceRange: "$$",
        description: "Virtual legal services for property managers and portfolio landlords in Southwest Washington. Specializing in eviction representation and landlord-tenant law.",
        serviceType: "Legal Services",
        sameAs: [
          "https://www.google.com/maps/place/NW+Landlord+Solutions",
          "https://waevictions.com",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://waevictions.com/#organization",
        name: "NW Landlord Solutions",
        url: "https://waevictions.com",
        telephone: contact.phone,
        email: contact.email,
        description: "Landlord-side legal representation and property management services for Southwest Washington. Virtual consultations and flat-fee billing.",
        sameAs: [
          "https://www.google.com/maps/place/NW+Landlord+Solutions",
          "https://waevictions.com",
        ],
      },
    ],
  };
}

export function getBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: post.url,
    image: post.image,
    author: {
      "@type": "Person",
      name: "Quinn Posner",
      url: "https://waevictions.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "NW Landlord Solutions",
      url: "https://waevictions.com",
    },
  };
}
