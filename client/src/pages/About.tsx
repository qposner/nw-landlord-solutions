import { Building2, MapPinned, Scale, UsersRound } from "lucide-react";
import { PageHero } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The About page embeds philosophy through proof points and operating principles, not biography-first storytelling.
*/
export default function About() {
  const facts = [
    { icon: MapPinned, title: "23 years", text: "Clark County practice context informs procedural expectations and local court-stage operations." },
    { icon: Building2, title: "Since 2013", text: "Exclusive landlord-side representation posture for eviction and unlawful detainer matters." },
    { icon: UsersRound, title: "WMFHA", text: "Government Affairs Committee participation connects practice perspective with housing policy context." },
    { icon: Scale, title: "Focused scope", text: "The firm does not dilute its position with tenant-side representation or broad consumer legal service messaging." },
  ];
  return (
    <>
      <PageHero kicker="About" title="A landlord-side practice designed around procedural control." text="Quinn Posner’s practice history is relevant because it shapes the operating model: local procedural knowledge, landlord-side alignment, and repeatable workflows for professional property operations." />
      <section className="section-pad">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Operating philosophy</p>
            <h2 className="large-section-title">The firm is built for specialization, not general-market positioning.</h2>
          </div>
          <div className="section-copy-stack">
            <p>NW Landlord Solutions serves clients who need eviction representation to integrate with property management operations. The practice model prioritizes file readiness, status clarity, and predictable engagement structure.</p>
            <p>Quinn Posner has practiced in Clark County for 23 years and has represented landlord-side clients exclusively since 2013. The firm’s involvement with the WMFHA Government Affairs Committee reflects a policy-aware view of Washington housing procedure.</p>
          </div>
        </div>
      </section>
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container proof-grid">
          {facts.map((fact) => (
            <article className="proof-card" key={fact.title}>
              <fact.icon size={28} />
              <h3>{fact.title}</h3>
              <p>{fact.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <div className="container philosophy-panel">
          <p className="eyebrow">Practice position</p>
          <h2>Exclusive landlord-side representation creates a clean operating stance for property management clients.</h2>
          <p>The firm’s value is not broad legal identity. It is a defined process layer for Washington landlords who need efficiency, procedural specialization, and predictable coordination.</p>
        </div>
      </section>
    </>
  );
}
