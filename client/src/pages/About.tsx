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
  return (
    <>
      <PageHero kicker="About" title="A legal practice built for better delivery." text="NW Landlord Solutions exists to make landlord legal services faster, clearer, and more practical for professional property management companies." />
      <section className="section-pad">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Founder story</p>
            <h2 className="large-section-title">The mission came before the model.</h2>
          </div>
          <div className="about-profile-grid">
            <figure className="headshot-card">
              <img src={assets.headshot} alt="Quinn Posner, NW Landlord Solutions" />
              <figcaption>
                <span>Quinn Posner</span>
                <strong>Landlord-side eviction counsel</strong>
              </figcaption>
            </figure>
            <div className="section-copy-stack">
              <p>Quinn Posner has been a lawyer since 2001, but his frustration was never with the law itself. It was with the way legal services were delivered: hourly billing, inefficient handoffs, and clients paying too much for processes that should have been more practical and predictable.</p>
              <p>After a major personal reset following his divorce, he had the freedom to build something different. In 2013, he took over a landlord-tenant practice and saw the opportunity clearly: repeatable cases, repeatable workflows, and a field where better systems could create real value for property managers.</p>
              <p>In 2019, he launched NW Landlord Solutions with a deliberate mission: build a firm that operates like a legal technology product, not a traditional law firm. Flat-fee pricing, clear workflows, real-time visibility, and a partnership model replaced the old billing model.</p>
              <p>His credibility comes from consistency. Judges trust what he says. Opposing counsel trust him to do what he says he will do. Property managers who have worked with him at one company seek him out again when they move to another.</p>
              <p>The goal is straightforward: prove that landlord legal services can be faster, clearer, and more client-focused than the industry believes is possible.</p>
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
