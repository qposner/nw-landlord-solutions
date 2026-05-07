import { Building2, MapPinned, Scale, UsersRound } from "lucide-react";
import { PageHero } from "@/components/SharedSections";
import { assets } from "@/lib/siteData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The About page embeds philosophy through proof points and operating principles, not biography-first storytelling.
*/
export default function About() {
  const facts = [
    { icon: MapPinned, title: "Since 2001", text: "Clark County practice context informs procedural expectations and local court-stage operations." },
    { icon: Building2, title: "Since 2013", text: "Landlord-only representation posture for eviction and unlawful detainer matters." },
    { icon: UsersRound, title: "2019 launch", text: "NW Landlord Solutions was built as a deliberate alternative to the traditional hourly legal model." },
    { icon: Scale, title: "Credibility", text: "The practice is built on clear commitments, repeatable work, and consistent follow-through." },
  ];

  const credentials = [
    "Quinn Posner | Landlord-Side Eviction Counsel",
    "B.A., University of Washington, 1996",
    "J.D., Willamette University College of Law, 2001",
    "M.B.A., Willamette University Atkinson School of Management, 2001",
    "Admitted — Washington State Bar, 2001",
    "Admitted — Oregon State Bar, 2005",
    "Admitted — Arizona State Bar, 2026",
    "Legal Adviser, Clark County Rental Association, 2013–2025",
    "Government Affairs Committee Member, Washington Multifamily Housing Association",
  ];

  return (
    <>
      <PageHero kicker="About" title="The mission came before the model." text="NW Landlord Solutions was built to replace billing-first legal service with clearer systems, predictable pricing, and a stronger operating partnership for property management companies." />
      <section className="section-pad">
        <div className="container about-founder-grid">
          <div className="about-profile-column">
            <figure className="headshot-card about-headshot-card">
              <img src={assets.headshot} alt="Quinn Posner, NW Landlord Solutions" />
              <figcaption>
                <span>Quinn Posner</span>
                <strong>Landlord-side eviction counsel</strong>
              </figcaption>
            </figure>
            <div className="credential-card" aria-label="Quinn Posner credentials">
              {credentials.map((credential, index) => (
                <p className={index === 0 ? "credential-lead" : "credential-line"} key={credential}>{credential}</p>
              ))}
            </div>
          </div>
          <div className="about-copy-panel">
            <p className="eyebrow">Founder story</p>
            <h2 className="large-section-title">A legal practice designed around delivery, not billing.</h2>
            <div className="mission-copy-grid">
              <p>Quinn Posner saw a legal industry still operating on outdated assumptions: hourly billing, slow handoffs, and a culture that often measured activity before client outcomes.</p>
              <p>The turning point was professional, not ornamental. Landlord-tenant work had repeatable patterns, repeatable documents, and repeatable decision points that could be systematized with better technology.</p>
              <p>A brief personal reset gave him room to build the model deliberately. In 2019, he launched NW Landlord Solutions to operate more like a legal technology product than a traditional law firm.</p>
              <p>The firm is built around flat-fee pricing, clear workflows, real-time visibility, and a partnership model. The point is not to be a vendor that sells time. The point is to be an operating partner that helps property managers move work with less uncertainty.</p>
              <p>That mission came first. The business model followed from it: faster communication, predictable legal spend, documented processes, and a client experience designed for property management companies managing volume.</p>
            </div>
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
          <h2>Landlord-only representation creates a clean operating stance for property management clients.</h2>
          <p>The firm’s value is not broad legal identity. It is a defined process layer for Washington State landlords who need efficiency, procedural focus, and predictable coordination.</p>
        </div>
      </section>
    </>
  );
}
