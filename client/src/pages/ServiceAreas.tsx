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

  const activeCounties = [
    { name: "Clark County", description: "Vancouver, Camas, Washougal" },
    { name: "Cowlitz County", description: "Longview, Kelso, Woodland" },
    { name: "Skamania County", description: "Stevenson, White Salmon" },
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
            <h2 className="large-section-title">Southwest Washington: Clark, Cowlitz, and Skamania counties.</h2>
            <p className="section-copy">NW Landlord Solutions currently provides tech-enabled, flat-fee eviction services exclusively in Southwest Washington. We serve property management companies and portfolio landlords across Clark, Cowlitz, and Skamania counties with full integration into local court systems and procedural requirements.</p>
          </div>
          <div className="model-list">
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Clark County (Vancouver, Camas, Washougal)</span>
            </div>
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Cowlitz County (Longview, Kelso, Woodland)</span>
            </div>
            <div className="model-item">
              <CheckCircle2 size={18} className="text-green-500" /> <span>Skamania County (Stevenson, White Salmon)</span>
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
            kicker="Southwest Washington coverage"
            title="Serving three core counties in Southwest Washington."
            text="Our current operations focus on Clark, Cowlitz, and Skamania counties, where we maintain deep expertise in local court procedures and landlord-tenant requirements."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeCounties.map((county) => (
              <div key={county.name} className="p-6 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-green-500" />
                  <span className="font-bold text-lg">{county.name}</span>
                </div>
                <p className="text-sm text-gray-400">{county.description}</p>
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
            kicker="Future expansion"
            title="Oregon and Rest of Washington: Coming soon."
            text="We are building infrastructure for strategic expansion while maintaining our commitment to excellence in Southwest Washington."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="border border-gray-800 rounded-lg p-8 bg-gray-900/50">
              <p className="eyebrow mb-2">Oregon</p>
              <h3 className="text-xl font-bold mb-4">Launching late 2026</h3>
              <p className="text-gray-400 mb-4">We are building the legal and technical infrastructure to launch services in Oregon. Due to Oregon's distinct tenant protection framework, we are taking a meticulous approach to ensure full compliance before launch.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 text-sm font-medium">
                Join Oregon Waitlist <ArrowRight size={16} />
              </Link>
            </article>
            <article className="border border-gray-800 rounded-lg p-8 bg-gray-900/50">
              <p className="eyebrow mb-2">Rest of Washington State</p>
              <h3 className="text-xl font-bold mb-4">Launching 2027</h3>
              <p className="text-gray-400 mb-4">After establishing our foundation in Southwest Washington and launching in Oregon, we plan to expand to serve additional Washington counties. This phased approach ensures we maintain service quality across all markets.</p>
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
