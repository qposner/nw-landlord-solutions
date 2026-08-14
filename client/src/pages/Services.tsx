import { ArrowRight, Check, Scale, Shield, Building2, Gavel } from "lucide-react";
import { Link } from "wouter";
import { serviceAreas } from "@/lib/siteData";
import { PageHero, SectionHeader } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. Optimized with targeted H1/H2 structures for Washington Landlord Tenant Law and Unlawful Detainer statutory compliance under RCW 59.18.
*/
export default function Services() {
  useSEO(seoData.services);
  const model = [
    "Flat-fee structure for predictable matter economics across all Washington filings",
    "Full legal coverage for RCW 59.18 Unlawful Detainer proceedings from notice through writ",
    "Operational fit for high-volume property management companies and portfolio operators",
    "Transparent case tracking and document access via secure client portal",
  ];

  const corePractices = [
    {
      icon: Scale,
      title: "Washington Landlord Tenant Representation",
      description:
        "Dedicated legal counsel for landlords and property management companies navigating RCW 59.18 compliance, lease enforcement, and statutory notice protocols in Southwest Washington courts.",
    },
    {
      icon: Gavel,
      title: "Unlawful Detainer Action Execution",
      description:
        "End-to-end management of residential and commercial eviction filings, summons & complaint preparation, show cause hearings, and writ of restitution enforcement.",
    },
    {
      icon: Shield,
      title: "Statutory Notice Compliance",
      description:
        "Precision notice drafting for 14-Day Pay or Vacate, 10-Day Comply or Vacate, and 3-Day Waste notices, ensuring total procedural immunity under strict Washington statutory guidelines.",
    },
    {
      icon: Building2,
      title: "Property Management Operations & Portfolio Support",
      description:
        "Standardized legal workflows for PM companies operating across Clark, Cowlitz, and Skamania counties. Seamless electronic matter intake and real-time status reporting.",
    },
  ];

  return (
    <>
      <PageHero
        kicker="Eviction Services & Unlawful Detainer"
        title="Washington Landlord Tenant Lawyer & Eviction Representation."
        text="NW Landlord Solutions provides specialized landlord-side eviction representation and statutory compliance across Washington State. Operating on a predictable flat-fee model, the firm manages unlawful detainer filings from initial notice review through court representation and writ execution."
      />

      {/* Core Practice Areas Section */}
      <section className="section-pad">
        <div className="container">
          <SectionHeader
            kicker="Legal Practice Areas"
            title="Comprehensive landlord-side legal representation."
            text="Tailored exclusively for residential property managers, commercial portfolio operators, and individual landlords seeking procedural precision under Washington State eviction law."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {corePractices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div key={practice.title} className="service-card flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{practice.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{practice.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Model Section */}
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Flat-Fee Predictability</p>
            <h2 className="large-section-title">Predictable matter economics for landlord-tenant litigation.</h2>
            <p className="section-copy">
              Traditional hourly billing creates budgeting friction for property managers handling tenant noncompliance. NW Landlord Solutions eliminates billing surprises with transparent flat-fee pricing tailored to recurring matter volume across Southwest Washington.
            </p>
          </div>
          <div className="model-list">
            {model.map((item) => (
              <div className="model-item" key={item}>
                <Check size={18} /> <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus Section */}
      <section className="section-pad">
        <div className="container">
          <SectionHeader
            kicker="Regional Coverage"
            title="Clark County Eviction Attorney & SW Washington Practice."
            text="Focused representation tailored to local court calendars, sheriff procedures, and judicial expectations in Clark, Cowlitz, and Skamania counties."
          />
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
              <p className="eyebrow">Intake & Qualification</p>
              <h2>Request flat-fee eviction representation for your portfolio.</h2>
              <p>
                Submit your portfolio size and property locations to receive flat-fee rate sheets and matter intake access.
              </p>
            </div>
            <Link href="/contact" className="portal-button portal-button-large">
              Contact for pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
