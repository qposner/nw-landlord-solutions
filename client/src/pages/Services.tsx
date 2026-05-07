import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { serviceAreas } from "@/lib/siteData";
import { PageHero, SectionHeader } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The Services page communicates flat-fee predictability without listing specific prices.
*/
export default function Services() {
  const model = [
    "Flat-fee structure for predictable matter economics",
    "Coverage across the unlawful detainer process from notice through trial",
    "Operational fit for recurring property management volume",
    "Pricing details provided through direct qualification and contact",
  ];

  return (
    <>
      <PageHero kicker="Services" title="Flat-fee eviction representation without billing ambiguity." text="NW Landlord Solutions operates on a flat-fee model covering every stage of the unlawful detainer process, from notice review through trial-stage work. Specific pricing is provided directly to qualified management companies and portfolio landlords." />
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Operating model</p>
            <h2 className="large-section-title">Predictability for teams managing matter volume.</h2>
            <p className="section-copy">The model is designed to reduce budgeting uncertainty and avoid hourly billing surprises. The emphasis is procedural efficiency, repeatability, and clear scope alignment across property management portfolios.</p>
          </div>
          <div className="model-list">
            {model.map((item) => (
              <div className="model-item" key={item}><Check size={18} /> <span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeader kicker="Service areas" title="Focused landlord-side coverage." text="The firm does not position itself as a general consumer practice. Work is focused on the procedural needs of landlords, property managers, and portfolio operators." />
          <div className="service-grid">
            {serviceAreas.map((service) => (
              <article className="service-card service-card-tall" key={service.title}>
                <p className="card-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="pricing-cta">
            <div>
              <p className="eyebrow">Pricing details</p>
              <h2>Request flat-fee pricing for your portfolio profile.</h2>
              <p>Share company size, property locations, and matter volume so the firm can provide appropriate pricing details.</p>
            </div>
            <Link href="/contact" className="portal-button portal-button-large">Contact for pricing <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
