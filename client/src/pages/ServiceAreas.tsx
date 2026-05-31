import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SectionHeader } from "@/components/SharedSections";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/lib/seoData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The Service Areas page communicates Washington as the sole active market with Oregon/Arizona as future expansion considerations.
*/
export default function ServiceAreas() {
  useSEO(seoData.serviceAreas);

  const washingtonCities = [
    "Seattle",
    "Tacoma",
    "Spokane",
    "Vancouver",
    "Bellevue",
    "Kent",
    "Renton",
    "Federal Way",
    "Everett",
    "Kirkland",
  ];

  return (
    <>
      <PageHero
        kicker="Service Areas"
        title="Washington State eviction services. Expansion roadmap for Oregon and Arizona."
        text="NW Landlord Solutions currently provides full-service eviction representation exclusively in Washington State. We are evaluating expansion into Oregon (late 2026) and Arizona (future consideration)."
      />
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Current operations</p>
            <h2 className="large-section-title">Washington State: Fully operational statewide.</h2>
            <p className="section-copy">NW Landlord Solutions provides tech-enabled, flat-fee eviction services to property management companies and portfolio landlords across Washington State. Our platform is fully integrated with Washington's landlord-tenant law, court systems, and procedural requirements.</p>
          </div>
          <div className="model-list">
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>All Washington counties and municipalities</span>
            </div>
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Flat-fee eviction services</span>
            </div>
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Client portal access</span>
            </div>
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Real-time case status</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeader
            kicker="Washington coverage"
            title="Serving property managers across all Washington counties."
            text="From Clark County to the San Juan Islands, our platform supports eviction management for property management companies operating statewide."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {washingtonCities.map((city) => (
              <div key={city} className="p-4 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="font-medium">{city}</span>
                </div>
                <p className="text-xs text-gray-400">Washington</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad border-y border-white/10 bg-white/[0.025]">
        <div className="container philosophy-panel">
          <p className="eyebrow">Expansion roadmap</p>
          <h2>Building multi-state infrastructure with careful planning.</h2>
          <p>While our current focus is delivering industry-leading service to Washington property managers, we are evaluating expansion into adjacent markets. Any expansion into Oregon or Arizona will only proceed when we can guarantee the same level of procedural accuracy, compliance, and service quality that Washington clients have come to expect.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeader
            kicker="Future markets"
            title="Oregon and Arizona: Under evaluation."
            text="We are exploring expansion into these states, but do not currently offer legal services or representation outside Washington."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="border border-gray-800 rounded-lg p-8 bg-gray-900/50">
              <p className="eyebrow mb-2">Oregon</p>
              <h3 className="text-xl font-bold mb-4">Expansion planned for late 2026</h3>
              <p className="text-gray-400 mb-4">We are currently building the legal and technical infrastructure to launch services in Oregon. Due to Oregon's distinct tenant protection framework, we are taking a meticulous approach to ensure full compliance before launch.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Join Oregon Waitlist <ArrowRight size={16} />
              </Link>
            </article>
            <article className="border border-gray-800 rounded-lg p-8 bg-gray-900/50">
              <p className="eyebrow mb-2">Arizona</p>
              <h3 className="text-xl font-bold mb-4">Under consideration</h3>
              <p className="text-gray-400 mb-4">Arizona is currently under evaluation as a possible future expansion market. We are assessing the operational and legal requirements for Phoenix and Tucson markets as part of our long-term roadmap.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Express Interest <ArrowRight size={16} />
              </Link>
            </article>
          </div>
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
