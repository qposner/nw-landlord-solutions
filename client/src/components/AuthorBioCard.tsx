import { Mail, Phone } from "lucide-react";
import { useLocation } from "wouter";

export function AuthorBioCard() {
  const [, navigate] = useLocation();

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 my-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Author info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">Quinn Posner</h3>
          <p className="text-blue-400 font-semibold mb-4">Principal Attorney, NW Landlord Solutions</p>

          <div className="space-y-3 mb-6 text-gray-300 text-sm leading-relaxed">
            <p>
              Quinn Posner specializes in landlord-side eviction law and property management litigation across Washington State. With deep expertise in RCW compliance, notice requirements, and county-specific procedures, Quinn helps property management companies and portfolio landlords navigate Washington's complex eviction landscape with speed and precision.
            </p>
            <p>
              <strong>Practice Focus:</strong> Unlawful detainer proceedings, notice drafting, procedural compliance, and operational efficiency for residential property management.
            </p>
            <p>
              <strong>Credentials:</strong> Licensed to practice in Washington State. Focused exclusively on landlord-side representation and operational legal strategy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              <Mail size={18} />
              Contact for Consultation
            </button>
            <a
              href="tel:(360)695-0770"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-400 font-semibold rounded hover:bg-blue-600/10 transition-colors"
            >
              <Phone size={18} />
              (360) 695-0770
            </a>
          </div>
        </div>

        {/* Visual accent */}
        <div className="hidden md:block w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-lg border border-blue-600/30 flex-shrink-0" />
      </div>
    </div>
  );
}
