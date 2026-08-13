import { useEffect } from "react";

export interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | null;
  canonical?: string;
  type?: string;
  publishedTime?: Date | null;
  schema?: Record<string, unknown>;
}

export function useSEO(config?: SEOConfig) {
  useEffect(() => {
    if (!config) return;
    // Update page title
    document.title = config.title;

    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", config.description);

    // Update OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", config.ogTitle || config.title);

    // Update OG description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", config.ogDescription || config.description);

    // Update OG image if provided
    if (config.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute("content", config.ogImage);
    }

    // Update canonical URL if provided
    if (config.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonical);
    }

    // Add structured data if provided
    if (config.schema) {
      let existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(config.schema);
      document.head.appendChild(script);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [config]);
}
