import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export function generateMetadata({ params }) {
  const service = services.find(s => s.id === params.id);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.name} | Divya Makeup Artist` };
}

export default function ServiceDetail({ params }) {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    notFound();
  }

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Image */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden' }}>
            <Image
              src={service.image}
              alt={service.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <SectionHeading number="01" title="SERVICE DETAIL" />
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '32px', lineHeight: 1.1 }}>
              {service.name}
            </h1>
            
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--ivory-soft)', lineHeight: 1.7, marginBottom: '48px' }} dangerouslySetInnerHTML={{ __html: service.fullDesc }} />
            
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--ivory)', marginBottom: '24px' }}>What's Included:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {service.includes.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', fontFamily: 'var(--font-sans)', color: 'var(--muted)', lineHeight: 1.5 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--champagne)', marginTop: '10px', flexShrink: 0 }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/booking" className="button-primary">
                BOOK THIS SERVICE
              </Link>
              <Link href="/portfolio" className="button-secondary">
                VIEW PORTFOLIO
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
