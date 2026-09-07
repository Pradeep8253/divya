import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export const metadata = {
  title: "Portfolio | Divya Makeup Artist",
  description: "Explore our diverse portfolio of bridal makeup and hairstyling.",
};

export default function PortfolioPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <section className="container">
        <SectionHeading number="01" title="THE PORTFOLIO" />
        
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '24px', lineHeight: 1.1 }}>
            A gallery of unforgettable moments.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--ivory-soft)', lineHeight: '1.6' }}>
            Filter by occasion to explore our versatile artistry, from soft daylight engagement looks to glamorous evening receptions.
          </p>
        </div>

        <PortfolioGallery />
      </section>
    </main>
  );
}
