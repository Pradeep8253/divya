import SectionHeading from "@/components/ui/SectionHeading";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Contact Us | Divya Makeup Artist",
  description: "Get in touch for bookings, studio locations, and answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <section className="container" style={{ marginBottom: '80px' }}>
        <SectionHeading number="01" title="CONTACT & FAQ" />
        
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '24px', lineHeight: 1.1 }}>
            We'd love to hear from you.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--ivory-soft)', lineHeight: '1.6' }}>
            Whether you are ready to book your date or just have a few questions, our team is here to help you begin your bridal journey.
          </p>
        </div>
      </section>

      <div style={{ marginBottom: '80px' }}>
        <Location />
      </div>

      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '80px' }}>
        <FAQ />
      </div>
    </main>
  );
}
