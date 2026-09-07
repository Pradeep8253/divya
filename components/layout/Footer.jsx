import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Image src="/logo.png" alt={siteConfig.name} width={180} height={70} style={{ objectFit: 'contain', marginBottom: '16px' }} />
            <p className={styles.tagline}>Beauty, beautifully remembered.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Explore</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/bridal">Bridal</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Connect</h3>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={`tel:${siteConfig.phone}`}>Call Us</a>
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Info</h3>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Location</Link>
              <Link href="/booking">Book Your Date</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.giantCta}>
            <h2>MAKE YOUR DATE <br /><span className="text-champagne">BEAUTIFUL.</span></h2>
            <Link href="/booking" className="button-primary" style={{ marginTop: '40px' }}>
              BOOK YOUR DATE
            </Link>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
