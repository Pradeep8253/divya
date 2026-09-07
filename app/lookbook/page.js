import SectionHeading from "@/components/ui/SectionHeading";
import { looks } from "@/data/testimonials"; // It's stored here from my previous mockup
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getWhatsAppUrl, buildWhatsAppMessage } from "@/lib/whatsapp";

export const metadata = {
  title: "Lookbook | Divya Makeup Artist",
  description: "Explore our curated bridal lookbook. Find your perfect makeup and hairstyle combination.",
};

export default function LookbookPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      <section className="container">
        <SectionHeading number="01" title="THE LOOKBOOK" />
        
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--ivory)', marginBottom: '24px', lineHeight: 1.1 }}>
            Curated styles for the modern bride.
          </h1>
        </div>

        <div className={styles.grid}>
          {looks.map((look) => (
            <div key={look.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className={styles.content}>
                <span className={styles.occasion}>{look.occasion}</span>
                <h2 className={styles.title}>{look.title}</h2>
                
                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.label}>MAKEUP</span>
                    <span className={styles.value}>{look.makeup}</span>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.label}>HAIR</span>
                    <span className={styles.value}>{look.hairstyle}</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi Divya, I am interested in the "${look.title}" look from your Lookbook. Could you share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                  style={{ width: '100%', marginTop: '32px' }}
                >
                  I WANT THIS LOOK
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
