import { ArrowUpRight, CheckCircle2, Cpu, Gauge, Network } from "lucide-react";
import { Link } from "wouter";
import { assets, portalUrl } from "@/lib/siteData";
import { HowItWorks, MetricStrip, PortalCTA, ServicesOverview, SectionHeader } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The home page should establish landlord-side exclusivity, legal-tech differentiation, and operational credibility immediately.
*/
export default function Home() {
  const why = [
    { icon: Cpu, title: "Technology-first matter visibility", text: "Portal access, structured intake, and standardized status language reduce internal friction for management teams." },
    { icon: Gauge, title: "Built for turnaround discipline", text: "The process model prioritizes complete files, clean sequencing, and rapid movement through known procedural stages." },
    { icon: Network, title: "Local procedural knowledge", text: "Clark County practice since 2001 informs court-stage expectations and property-management operating realities." },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: "linear-gradient(90deg, rgba(10,15,30,1) 0%, rgba(10,15,30,.88) 38%, rgba(10,15,30,.28) 100%), url(" + assets.hero + ")" }} />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Pacific Northwest landlord-side eviction infrastructure</p>
            <h1>Exclusive landlord representation, delivered like a legal technology product.</h1>
            <p>NW Landlord Solutions serves professional property management companies and portfolio landlords across the Pacific Northwest with efficient, landlord-side eviction process management.</p>
            <div className="hero-actions">
              <a className="portal-button portal-button-large" href={portalUrl} target="_blank" rel="noreferrer">Start an Eviction <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Operational summary">
            <p className="card-label">Matter operating model</p>
            <div className="status-row"><span>Client profile</span><strong>PM companies + portfolio landlords</strong></div>
            <div className="status-row"><span>Tenant clients</span><strong>0</strong></div>
            <div className="status-row"><span>Pricing system</span><strong>Flat-fee model</strong></div>
            <div className="status-row"><span>Coverage</span><strong>Pacific Northwest</strong></div>
          </div>
        </div>
      </section>
      <MetricStrip />
      <HowItWorks />
      <ServicesOverview />
      <section className="section-pad">
        <div className="container">
          <SectionHeader kicker="Why NW Landlord Solutions" title="Legal process infrastructure for property managers that measure time, cost, and status." text="The firm is structured around repeatable landlord-side workflows, not broad consumer legal services." />
          <div className="why-grid">
            {why.map((item) => (
              <article className="why-card" key={item.title}>
                <item.icon size={28} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <CheckCircle2 className="check-mark" size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <PortalCTA />
    </>
  );
}
