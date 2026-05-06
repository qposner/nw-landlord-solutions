import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { assets, portalUrl, serviceAreas } from "@/lib/siteData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Reusable sections use product cards, metrics, process labels, and restrained blue glow.
*/
export function SectionHeader({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function MetricStrip() {
  const metrics = [
    ["Since 2001", "Clark County practice"],
    ["Since 2013", "Landlord-side only"],
    ["Flat-fee model", "Predictable matter economics"],
    ["Coverage", "Pacific Northwest"],
  ];
  return (
    <section className="container -mt-8 relative z-20">
      <div className="metrics-strip">
        {metrics.map(([value, label]) => (
          <div className="metric-cell" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { code: "01", title: "Intake", text: "Matter facts, tenant data, notices, lease records, and property documentation are organized before court-stage action begins." },
    { code: "02", title: "Execution", text: "The firm handles landlord-side procedure across notice review, filing, hearing preparation, and court coordination." },
    { code: "03", title: "Reporting", text: "Property management teams receive status clarity through structured communications and portal-based matter access." },
  ];
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeader kicker="How it works" title="A procedural workflow for high-volume property operations." text="The engagement model is built around intake discipline, repeatable matter execution, and status visibility." />
        <div className="process-wrap">
          <div className="process-image" style={{ backgroundImage: "url(" + assets.process + ")" }} aria-hidden="true" />
          <div className="process-cards">
            {steps.map((step) => (
              <article className="process-card" key={step.code}>
                <span>{step.code}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.025]">
      <div className="container">
        <SectionHeader kicker="Services" title="Landlord-side eviction work, structured for operational predictability." text="The firm uses a flat-fee model across the unlawful detainer process. Pricing details are handled directly with qualified property management and portfolio landlord clients." />
        <div className="service-grid">
          {serviceAreas.map((service) => (
            <article className="service-card" key={service.title}>
              <p className="card-label">{service.label}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/services" className="card-link">Review service model <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortalCTA() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="portal-cta" style={{ backgroundImage: "linear-gradient(90deg, rgba(10,15,30,.96), rgba(10,15,30,.66)), url(" + assets.portal + ")" }}>
          <div className="max-w-2xl">
            <p className="eyebrow">Client portal</p>
            <h2>Centralized access for matter status and document workflow.</h2>
            <p>Property management teams can access the portal directly for active matter coordination and platform-based workflow visibility.</p>
          </div>
          <a className="portal-button portal-button-large" href={portalUrl} target="_blank" rel="noreferrer">Open Client Portal <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ kicker, title, text, image }: { kicker: string; title: string; text: string; image?: string }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {image && <div className="page-hero-art" style={{ backgroundImage: "url(" + image + ")" }} aria-hidden="true" />}
      </div>
    </section>
  );
}
