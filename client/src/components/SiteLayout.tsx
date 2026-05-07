import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { assets, contact, navItems, portalUrl } from "@/lib/siteData";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. This layout keeps navigation stable, sharp, and product-like with a persistent glowing Client Portal action.
*/
function LogoMark() {
  return (
    <Link href="/" className="brand-mark brand-mark-logo" aria-label="NW Landlord Solutions home">
      <span className="brand-logo-plate">
        <img src={assets.logo} alt="NW Landlord Solutions" />
      </span>
      <span className="brand-text-fallback">NW Landlord Solutions</span>
    </Link>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white selection:bg-blue-500/30 selection:text-white">
      <div className="site-grid-bg" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0f1e]/82 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-6">
          <LogoMark />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  location === item.href
                    ? "nav-link nav-link-active"
                    : "nav-link"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a className="portal-button" href={portalUrl} target="_blank" rel="noreferrer">
              Client Portal <ArrowUpRight size={16} />
            </a>
          </div>
          <button className="mobile-menu-button lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-[#0a0f1e] lg:hidden">
            <div className="container grid gap-2 py-5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={location === item.href ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"}>
                  {item.label}
                </Link>
              ))}
              <a className="portal-button mt-3 justify-center" href={portalUrl} target="_blank" rel="noreferrer">
                Client Portal <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="relative z-10 pt-20">{children}</main>
      <footer className="relative z-10 border-t border-white/10 bg-[#070b16]">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">Landlord-side Washington State eviction representation structured for property management companies and portfolio operators.</p>
          </div>
          <div>
            <p className="eyebrow">Office</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{contact.address}</p>
            <a className="mt-3 inline-block text-sm text-white transition hover:text-blue-300" href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <div>
            <p className="eyebrow">Access</p>
            <a className="portal-button mt-4 inline-flex" href={portalUrl} target="_blank" rel="noreferrer">Client Portal <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
