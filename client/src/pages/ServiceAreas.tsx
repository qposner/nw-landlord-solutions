import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function ServiceAreas() {
  useSEO({
    title: "Service Areas | NW Landlord Solutions",
    description: "Currently serving Washington with full-service eviction management. Oregon expansion coming late 2026. Arizona under consideration.",
    keywords: ["service areas", "Washington evictions", "Oregon expansion", "Arizona", "property management"],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Service Areas
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            Tech-enabled eviction services for the modern property manager
          </p>
          <p className="text-base text-slate-500">
            Currently accepting new clients in Washington. Oregon expansion scheduled for Late 2026.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            At NW Landlord Solutions, we provide tech-enabled, flat-fee eviction services designed for the modern property manager. While our long-term vision includes multi-state support, we are currently focused on providing industry-leading service to the Washington market.
          </p>
        </div>

        {/* Service Areas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Washington */}
          <Card className="border-2 border-emerald-200 bg-emerald-50 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">Washington</h2>
            </div>
            <div className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Currently Active
            </div>
            <p className="text-slate-700 mb-6">
              We provide full-service eviction management across the state of Washington. Our platform is fully integrated with Washington's specific landlord-tenant laws, providing real-time tracking and automated notice generation for property managers in Seattle, Tacoma, Spokane, Vancouver, and all other Washington municipalities.
            </p>
            <Link href="/platform">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Get Started in Washington
              </Button>
            </Link>
          </Card>

          {/* Oregon */}
          <Card className="border-2 border-amber-200 bg-amber-50 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-slate-900">Oregon</h2>
            </div>
            <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Coming Late 2026
            </div>
            <p className="text-slate-700 mb-6">
              We are currently building the legal and technical infrastructure to launch our services in Oregon. Due to the complexity of Oregon's tenant-friendly laws, we are taking a meticulous approach to ensure our platform is 100% compliant before we go live.
            </p>
            <div className="text-sm text-slate-600 mb-6">
              <p className="font-semibold">Status:</p>
              <p>Pre-Launch / Development</p>
              <p className="font-semibold mt-2">Target Launch:</p>
              <p>Late 2026</p>
            </div>
            <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-100">
              Join Oregon Waitlist
            </Button>
          </Card>

          {/* Arizona */}
          <Card className="border-2 border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-slate-600" />
              <h2 className="text-2xl font-bold text-slate-900">Arizona</h2>
            </div>
            <div className="inline-block bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Under Consideration
            </div>
            <p className="text-slate-700 mb-6">
              Arizona is currently under consideration as a possible future expansion market. While we do not have a confirmed launch date for Arizona, we are evaluating the needs of property managers in the Phoenix and Tucson areas as part of our long-term roadmap.
            </p>
            <Button variant="outline" className="w-full border-slate-300 text-slate-600 hover:bg-slate-100">
              Express Interest
            </Button>
          </Card>
        </div>

        {/* Expansion Roadmap Section */}
        <Card className="bg-blue-50 border-2 border-blue-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Expansion Roadmap</h3>
          <p className="text-slate-700 mb-6">
            We're building NW Landlord Solutions with a long-term vision of multi-state support. Each market expansion requires careful planning to ensure our platform meets the unique legal requirements and operational needs of that state's property managers.
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Washington:</strong> Fully operational with comprehensive statewide coverage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold">→</span>
              <span><strong>Oregon:</strong> Active development, targeting late 2026 launch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-slate-600 font-bold">?</span>
              <span><strong>Arizona:</strong> Under evaluation for future expansion</span>
            </li>
          </ul>
        </Card>

        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Start in Washington?</h3>
            <p className="mb-6 opacity-90">
              Join property managers across Washington who are streamlining their eviction process with our platform.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold">
                Get Started Today
              </Button>
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Operating in Oregon or Arizona?</h3>
            <p className="mb-6 opacity-90">
              Be the first to know when we expand to your state. Join our expansion waitlist.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-slate-700 hover:bg-slate-100 font-semibold">
                Join Expansion Waitlist
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
