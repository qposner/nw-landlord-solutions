import { withBase } from "./base";

export const portalUrl = "https://app2.ixfoundry.co/sign-in";

export const assets = {
  hero: withBase("/images/hero.webp"),
  platform: withBase("/images/platform.webp"),
  process: withBase("/images/process.webp"),
  portal: withBase("/images/portal.webp"),
  portalSmall: withBase("/images/portal-small.png"),
  dashboard: withBase("/images/portal-small.png"),
  dashboardList: withBase("/images/dashboard-list.png"),
  headshot: withBase("/images/headshot.png"),
  logo: withBase("/images/logo.png"),
};

export const contact = {
  address: "PO Box 1008, Camas, WA 98607",
  phone: "(360) 699-0770",
  phoneHref: "tel:+13606990770",
  email: "info@waevictions.com",
  serviceArea: "Serving Property Managers & Portfolio Landlords throughout Southwest Washington | Virtual Consultations & Tech-Enabled Case Management",
  disclaimer: "The information provided on this website is for general informational purposes only and does not constitute formal legal advice or create an attorney-client relationship.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "The Platform", href: "/platform" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const serviceAreas = [
  {
    title: "Evictions",
    label: "Portfolio enforcement",
    description: "Process management for landlord-side possession matters across high-volume property operations.",
  },
  {
    title: "Unlawful Detainer",
    label: "Court-stage execution",
    description: "Washington unlawful detainer filings, hearings, case tracking, and procedural coordination from notice through resolution.",
  },
  {
    title: "Mobile Home Act",
    label: "Focused statutory path",
    description: "Landlord-side support for matters involving Washington mobile home tenancy requirements and related procedural constraints.",
  },
  {
    title: "Consultation",
    label: "Operational guidance",
    description: "Focused consultation for property managers and portfolio landlords seeking procedural clarity before initiating action.",
  },
];

export const blogPosts = [
  {
    title: "The 14-Day Pay or Vacate Notice: A Compliance Checklist Before the Rules Change Again",
    category: "Process",
    excerpt: "This article is a working compliance checklist for Washington's 14-day pay or vacate notice. It covers every element the notice must contain under RCW 59.18.057, current service rules, what changes on June 11 with HB 2664, and the most common errors that get nonpayment cases dismissed.",
    date: "May 26, 2026",
    read: "11 min",
    url: "https://www.linkedin.com/pulse/14-day-pay-vacate-notice-compliance-checklist-before-rules-posner-dlfvc/",
    image: withBase("/blog-images/14_day_pay_vacate_cover_bd15e7ac.webp"),
  },
  {
    title: "Right to Counsel: What Landlords Need to Know About Opposing Funded Attorneys",
    category: "Jurisdiction",
    excerpt: "This article explains how Washington's Right to Counsel program works, who qualifies for representation, what it means for your timeline, and how to adjust your case strategy when opposing a funded defense attorney. It covers the practical realities of eviction practice under RCW 59.18.640.",
    date: "May 18, 2026",
    read: "10 min",
    url: "https://www.linkedin.com/pulse/right-counsel-what-landlords-need-know-opposing-funded-quinn-posner-vpiic/",
    image: withBase("/blog-images/right_to_counsel_cover_cf97e8f3.webp"),
  },
  {
    title: "City-Specific Ordinance Landmines: Seattle, Tacoma, and Beyond",
    category: "Jurisdiction",
    excerpt: "This article maps out the city-specific ordinance overlays that go well beyond Washington state law. Seattle, Tacoma, and Vancouver each have requirements that differ significantly from RCW 59.18. Getting them wrong can kill an eviction case or trigger significant penalties. Written for landlords and property managers operating across multiple Washington cities.",
    date: "May 11, 2026",
    read: "8 min",
    url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7459632380937543681/",
    image: withBase("/blog-images/city_ordinance_landmines_cover_de155849.webp"),
  },
  {
    title: "Submit an Eviction at 9 PM. We'll Have It Open by Morning.",
    category: "Technology",
    excerpt: "This article explains how a system-driven intake process reduces the delay between a property manager submitting an eviction and the firm opening the file. It covers master fee agreements, self-service portal intake, same-business-day matter opening, and document access for active cases.",
    date: "May 4, 2026",
    read: "7 min",
    url: "https://www.linkedin.com/pulse/submit-eviction-9-pm-well-have-open-morning-quinn-posner-b8wic/",
    image: withBase("/blog-images/submit-eviction-9pm_a7e5ace1.jpg"),
  },
  {
    title: "Managing Evictions Across Three Southwest Washington Counties: What PM Companies Get Wrong",
    category: "Jurisdiction",
    excerpt: "This article explains why Clark, Cowlitz, and Skamania County eviction matters cannot be managed as if they use the same local process. It focuses on court calendars, filing expectations, sheriff procedures, and the operational cost of applying one county's assumptions to another.",
    date: "Apr 20, 2026",
    read: "8 min",
    url: "https://www.linkedin.com/pulse/managing-evictions-across-three-southwest-washington-counties-posner-chdhc/",
    image: withBase("/blog-images/three-counties_84087874.jpg"),
  },
  {
    title: "Why Your Eviction Firm Should Feel Like a Software Company",
    category: "Technology",
    excerpt: "This article explains why property management companies need legal counsel that operates through workflows, not phone calls and scattered email updates. It covers automated intake, real-time case status, flat-fee billing, document access, and the operational value of portal-based visibility.",
    date: "Apr 13, 2026",
    read: "7 min",
    url: "https://www.linkedin.com/pulse/why-your-eviction-firm-should-feel-like-software-company-quinn-posner-kxjyc/",
    image: withBase("/blog-images/software-company_c448c4d5.jpg"),
  },
  {
    title: "The 2026 Rent Cap: What 9.683% Actually Means for Your Portfolio",
    category: "Compliance",
    excerpt: "This article breaks down Washington's 2026 rent cap calculation, the first-year rent increase freeze, 90-day notice timing, exemptions, and enforcement exposure. It is written for portfolio operators who need to translate rent stabilization rules into renewal calendars, notices, and internal compliance records.",
    date: "Apr 6, 2026",
    read: "8 min",
    url: "https://www.linkedin.com/pulse/2026-rent-cap-what-9683-actually-means-your-portfolio-quinn-posner-qlmmc/",
    image: withBase("/blog-images/rent-cap-2026_14d24a69.jpg"),
  },
  {
    title: "The Certified Mail Fix Is Here: What HB 2664 Means for Your Eviction Notices",
    category: "Process",
    excerpt: "This article explains the HB 2664 change that eliminates the certified mail requirement for certain Washington unlawful detainer notice mailing after the effective date. It focuses on what changes, what stays the same, and what property managers should update in their notice procedures and documentation habits.",
    date: "Mar 30, 2026",
    read: "6 min",
    url: "https://www.linkedin.com/pulse/certified-mail-fix-here-what-hb-2664-means-your-eviction-quinn-posner-crkxc/",
    image: withBase("/blog-images/certified-mail-fix-fallback_e448ee14.jpg"),
  },
];
