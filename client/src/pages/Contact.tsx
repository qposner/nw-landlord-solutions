import { FormEvent, useState } from "react";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/siteData";
import { PageHero } from "@/components/SharedSections";

/*
Design philosophy reminder: Swiss International Typographic Style translated into a dark enterprise SaaS command center. The Contact page uses a structured intake form and no live chat or chatbot pattern.
*/
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero kicker="Contact" title="Start with a structured intake request." text="Use the form for pricing details, matter routing, or portfolio-level eviction workflow questions. No live chat. No chatbot." />
      <section className="section-pad">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>Name<input required name="name" autoComplete="name" /></label>
              <label>Company<input required name="company" autoComplete="organization" /></label>
              <label>Phone<input required name="phone" autoComplete="tel" /></label>
              <label>Email<input required type="email" name="email" autoComplete="email" /></label>
            </div>
            <label>Message<textarea required name="message" rows={7} /></label>
            <button className="portal-button portal-button-large" type="submit">Submit intake request</button>
            {submitted && <p className="form-success"><CheckCircle2 size={18} /> Request captured in this preview. Connect a form endpoint before production use.</p>}
          </form>
          <aside className="contact-card">
            <p className="eyebrow">Office</p>
            <div className="contact-line"><MapPin size={20} /><span>{contact.address}</span></div>
            <a className="contact-line" href={contact.phoneHref}><Phone size={20} /><span>{contact.phone}</span></a>
            <div className="contact-note">
              <p className="card-label">Intake scope</p>
              <p>For professional property management companies and portfolio landlords seeking Washington landlord-side eviction representation.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
