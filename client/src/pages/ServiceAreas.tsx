import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SectionHeader } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The Service Areas page communicates expansion roadmap with clear status indicators and operational positioning.
*/
export default function ServiceAreas() {
  useSEO(seoData.serviceAreas);

  const areas = [
    {
      state: "Washington",
      status: "Currently Active",
      statusClass: "active",
      description: "Full-service eviction management across the state of Washington. Our platform is fully integrated with Washington's specific landlord-tenant laws, providing real-time tracking and automated notice generation for property managers in Seattle, Tacoma, Spokane, Vancouver, and all other Washington municipalities.",
      cta: "Get Started in Washington",
      ctaHref: "/platform",
    },
    {
      state: "Oregon",
      status: "Coming Late 2026",
      statusClass: "pending",
      description: "We are currently building the legal and technical infrastructure to launch our services in Oregon. Due to the complexity of Oregon's tenant-friendly laws, we are taking a meticulous approach to ensure our platform is 100% compliant before we go live.",
      cta: "Join Oregon Waitlist",
      ctaHref: "/contact",
    },
    {
      state: "Arizona",
      status: "Under Consideration",
      statusClass: "future",
      description: "Arizona is currently under consideration as a possible future expansion market. While we do not have a confirmed launch date for Arizona, we are evaluating the needs of property managers in the Phoenix and Tucson areas as part of our long-term roadmap.",
      cta: "Express Interest",
      ctaHref: "/contact",
    },
  ];

  return (
    <>
      <PageHero
        kicker="Service Areas"
        title="Expansion roadmap for multi-state landlord representation."
        text="Currently accepting new clients in Washington. Oregon expansion is scheduled for Late 2026. Arizona is under consideration as a possible future expansion market."
      />
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Market positioning</p>
            <h2 className="large-section-title">Building landlord infrastructure state by state.</h2>
            <p className="section-copy">At NW Landlord Solutions, we provide tech-enabled, flat-fee eviction services designed for the modern property manager. While our long-term vision includes multi-state support, we are currently focused on providing industry-leading service to the Washington market.</p>
          </div>
          <div className="model-list">
            <div className="model-item">
              <MapPin size={18} /> <span>Washington: Fully operational statewide</span>
            </div>
            <div className="model-item">
              <MapPin size={18} /> <span>Oregon: Active development, targeting late 2026</span>
            </div>
            <div className="model-item">
              <MapPin size={18} /> <span>Arizona: Under evaluation for future expansion</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeader
            kicker="Geographic coverage"
            title="Clear status for each market."
            text="Each state expansion requires careful planning to ensure our platform meets the unique legal requirements and operational needs of that state's property managers."
          />
          <div className="service-grid">
            {areas.map((area) => (
              <article className="service-card service-card-tall" key={area.state}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <p className="card-label">{area.state}</p>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.25rem 0.75rem",
                      borderRadius: "0.25rem",
                      backgroundColor:
                        area.statusClass === "active"
                          ? "rgba(16, 185, 129, 0.2)"
                          : area.statusClass === "pending"
                            ? "rgba(245, 158, 11, 0.2)"
                            : "rgba(107, 114, 128, 0.2)",
                      color:
                        area.statusClass === "active"
                          ? "#10b981"
                          : area.statusClass === "pending"
                            ? "#f59e0b"
                            : "#9ca3af",
                    }}
                  >
                    {area.status}
                  </span>
                </div>
                <h3>{area.state} Eviction Services</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container philosophy-panel">
          <p className="eyebrow">Strategic approach</p>
          <h2>Each market expansion is built on legal compliance and operational readiness.</h2>
          <p>We do not expand into new states until we can guarantee the same level of procedural accuracy, compliance, and service quality that Washington clients have come to expect. This measured approach ensures that property managers in each state receive the same predictable, flat-fee eviction infrastructure regardless of jurisdiction.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="pricing-cta">
            <div>
              <p className="eyebrow">Ready to move forward?</p>
              <h2>Start with Washington or join the expansion waitlist.</h2>
              <p>Whether you are managing properties in Washington or want to be first in line when we expand to Oregon or Arizona, we can help you streamline your eviction process.</p>
            </div>
            <Link href="/contact" className="portal-button portal-button-large">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
