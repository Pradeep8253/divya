import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services | Divya Makeup Artist",
  description: "Explore our range of premium bridal makeup, hairstyling, and draping services.",
};

export default function ServicesIndex() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <section className="container">
        <SectionHeading number="01" title="ALL SERVICES" />
        
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '24px', lineHeight: 1.1 }}>
            Artistry for every occasion.
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
          {services.map(service => (
            <Link href={`/services/${service.id}`} key={service.id} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }} className="group">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', marginBottom: '24px' }}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="hover:scale-105"
                />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--ivory)', marginBottom: '12px' }}>{service.name}</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                {service.shortDesc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.8 }}>
                <div className="gold-line" style={{ width: '40px' }}></div>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--champagne)', textTransform: 'uppercase' }}>EXPLORE</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
