import { ArrowUpRight, BarChart3, Clock3, FileCheck2, Layers3 } from "lucide-react";
import { assets, portalUrl } from "@/lib/siteData";
import { PageHero, PortalCTA, SectionHeader } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The Platform page should read like a product page with problem, solution, workflow, and efficiency impact.
*/
export default function Platform() {
  const workflow = ["Portfolio intake", "Notice review", "Filing packet", "Hearing prep", "Status reporting", "Portal access"];
  const impact = [
    { icon: Clock3, value: "Fewer handoffs", text: "Centralized intake and status language reduce repeated internal clarification loops." },
    { icon: FileCheck2, value: "Cleaner files", text: "Matter readiness improves when notices, leases, ledgers, and communications are organized at the front end." },
    { icon: BarChart3, value: "Predictable cost", text: "Flat-fee structure supports budget planning for management companies handling recurring volume." },
    { icon: Layers3, value: "Volume compatible", text: "The process supports repeat matters without converting every file into a custom billing project." },
  ];

  return (
    <>
      <PageHero kicker="The Platform" title="A legal operations layer for Washington eviction volume." text="NW Landlord Solutions presents eviction representation as a managed workflow: intake, procedural execution, court-stage coordination, and status visibility for property management companies." image={assets.platform} />
      <section className="section-pad">
        <div className="container platform-sequence">
          <article className="sequence-card problem">
            <p className="eyebrow">Problem</p>
            <h2>Eviction files create operational drag when legal work is treated as ad hoc correspondence.</h2>
            <p>Property managers need predictable matter routing, disciplined documentation, and a direct view into case progression. Traditional hourly communication models create fragmented status tracking and budgeting friction.</p>
          </article>
          <article className="sequence-card solution">
            <p className="eyebrow">Solution</p>
            <h2>A specialized landlord-side workflow with portal access and standardized process language.</h2>
            <p>The firm limits its representation posture to landlords, uses flat-fee engagement logic, and aligns matter execution with the operational needs of professional property managers and portfolio owners.</p>
          </article>
        </div>
      </section>
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container">
          <SectionHeader kicker="How it works" title="From intake to reporting, each step has a defined operating purpose." />
          <div className="workflow-rail">
            {workflow.map((item, index) => (
              <div className="workflow-node" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="platform-visual" style={{ backgroundImage: "url(" + assets.platform + ")" }} aria-hidden="true" />
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeader kicker="Efficiency impact" title="Designed for management companies tracking throughput, not one-off legal narratives." text="Quantification is operational: fewer handoffs, cleaner files, predictable cost structure, and matter visibility in a centralized portal environment." />
          <div className="impact-grid">
            {impact.map((item) => (
              <article className="impact-card" key={item.value}>
                <item.icon size={28} />
                <h3>{item.value}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <a className="portal-button portal-button-large mt-10 inline-flex" href={portalUrl} target="_blank" rel="noreferrer">Access Client Portal <ArrowUpRight size={18} /></a>
        </div>
      </section>
      <PortalCTA />
    </>
  );
}
