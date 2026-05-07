import { ArrowUpRight, CheckCircle2, Cpu, Gauge, Network, ReceiptText } from "lucide-react";
import { portalUrl } from "@/lib/siteData";
import { HowItWorks, MetricStrip, PortalCTA, ServicesOverview, SectionHeader } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The home page should establish landlord-side exclusivity, legal-tech differentiation, and operational credibility immediately.
*/
export default function Home() {
  const why = [
    { icon: Cpu, title: "Technology-first matter visibility", text: "Portal access, structured intake, and standardized status language reduce internal friction for management teams." },
    { icon: Gauge, title: "Built for turnaround discipline", text: "The process model prioritizes complete files, clean sequencing, and rapid movement through known procedural stages." },
    { icon: Network, title: "Local procedural knowledge", text: "Clark County practice since 2001 informs court-stage expectations and property-management operating realities." },
    { icon: ReceiptText, title: "Predictable billing structure", text: "Flat-fee workflows help management teams plan legal spend before a file moves forward." },
  ];

  const problemSolutions = [
    { problem: "Unpredictable legal costs derail your budget", solution: "NW Landlord Solutions operates on a flat-fee model covering every stage of the unlawful detainer process, so your costs are known before the matter opens." },
    { problem: "You need case status without calling your attorney", solution: "The client portal gives your team real-time visibility into every active matter, document, and milestone — day or night." },
    { problem: "Eviction delays create vacancy drag and revenue loss", solution: "The firm runs on defined workflows and structured intake, moving cases forward without the bottlenecks of a traditional practice." },
    { problem: "Your legal vendor doesn't understand property management operations", solution: "NW Landlord Solutions represents landlords only and is built around the operational realities of professional property management companies." },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg hero-bg-clean" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Washington State landlord-side eviction infrastructure</p>
            <h1>Unpredictable legal work slows everything.</h1>
            <p>NW Landlord Solutions provides exclusively landlord-side representation for Washington State property management companies and portfolio landlords, delivered through clear workflows, flat-fee structure, and client portal access.</p>
            <div className="hero-actions">
              <a className="portal-button portal-button-large" href={portalUrl} target="_blank" rel="noreferrer">Start an Eviction <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="dashboard-placeholder dashboard-placeholder-hero" aria-label="Dashboard screenshot placeholder">
            <p className="card-label">[INSERT: Dashboard screenshot]</p>
            <h2>Simple case status and document access.</h2>
            <p>An easy-to-use portal. From intake to reporting, every step has a defined purpose.</p>
          </div>
        </div>
      </section>
      <section className="problem-solution-section">
        <div className="container problem-solution-grid">
          {problemSolutions.map((item) => (
            <article className="problem-card" key={item.problem}>
              <p>{item.problem}</p>
              <h3>{item.solution}</h3>
            </article>
          ))}
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
