import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import WhyDivya from "@/components/sections/WhyDivya";

export const metadata = {
  title: "About Divya | Premium Bridal Makeup Artist",
  description: "Learn about Divya's journey, philosophy, and dedication to crafting unforgettable bridal looks.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      
      <section className="container">
        <SectionHeading number="01" title="THE ARTIST" />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', marginBottom: '120px' }}>
          
          <div style={{ maxWidth: '900px' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--ivory)', marginBottom: '32px', lineHeight: 1.1 }}>
              Crafting beauty that feels <span className="text-champagne" style={{ fontStyle: 'italic' }}>authentically yours.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: 'var(--ivory-soft)', lineHeight: 1.8, marginBottom: '24px' }}>
              With over a decade of experience in the luxury beauty industry, Divya has cultivated a signature style that balances timeless elegance with modern sophistication. She believes that bridal makeup should never mask who you are, but rather elevate your natural features to make you feel like the most beautiful version of yourself.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
              Trained internationally and having worked with hundreds of brides across the globe, Divya brings a calming presence, meticulous attention to detail, and unparalleled technical skill to every wedding morning. Her approach goes beyond just applying makeup; it's about curating an experience that makes you feel confident, relaxed, and radiant before you even walk down the aisle.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ position: 'relative', aspectRatio: '4/5', width: '100%', overflow: 'hidden' }}>
              <Image 
                src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800"
                alt="Divya working on a bride"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', width: '100%', overflow: 'hidden', transform: 'translateY(40px)' }}>
              <Image 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
                alt="Bridal details"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Reusing the Philosophy Grid from Homepage */}
      <div style={{ marginBottom: '120px' }}>
        <WhyDivya />
      </div>

      <section className="container" style={{ textAlign: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '120px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ivory)', marginBottom: '32px' }}>
          Ready to begin your journey?
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <Link href="/booking" className="button-primary">
            BOOK YOUR DATE
          </Link>
          <Link href="/portfolio" className="button-secondary">
            VIEW PORTFOLIO
          </Link>
        </div>
      </section>
      
    </main>
  );
}
