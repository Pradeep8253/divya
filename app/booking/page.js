import SectionHeading from "@/components/ui/SectionHeading";
import PackageBuilder from "@/components/booking/PackageBuilder";

export const metadata = {
  title: "Book Your Date | Divya Makeup Artist",
  description: "Enquire for your bridal makeup, hairstyling, or event date. Build your custom package and get an estimated quote.",
};

export default function BookingPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)' }}>
      <section className="section">
        <div className="container">
          <SectionHeading number="01" title="BOOK YOUR DATE" />
          
          <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '24px' }}>
              Your beauty story begins here.
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--ivory-soft)', lineHeight: '1.6' }}>
              We're thrilled to be a part of your special day. You can build your custom package below for an estimated quote, or simply fill out the enquiry form if you're just looking to check availability.
            </p>
          </div>
          
          <PackageBuilder />
        </div>
      </section>
    </main>
  );
}
