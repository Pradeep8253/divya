import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative corners */}
      <div className={styles.floralLeft}>
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
           <path d="M0,200 C30,120 100,80 180,0" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <path d="M0,150 C50,150 90,100 120,0" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <path d="M50,200 C50,130 110,90 200,50" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <circle cx="20" cy="180" r="5" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
           <circle cx="60" cy="120" r="3" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
           <circle cx="140" cy="60" r="8" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
         </svg>
      </div>
      <div className={styles.floralRight}>
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
           <path d="M200,200 C170,120 100,80 20,0" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <path d="M200,150 C150,150 110,100 80,0" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <path d="M150,200 C150,130 90,90 0,50" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.6"/>
           <circle cx="180" cy="180" r="5" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
           <circle cx="140" cy="120" r="3" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
           <circle cx="60" cy="60" r="8" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5"/>
         </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Image src="/logo.png" alt={siteConfig.name} width={240} height={90} style={{ objectFit: 'contain' }} />
          </div>
          <p className={styles.description}>
            We specialize in creating flawless, timeless bridal makeup looks that reflect your authentic beauty. With over a decade of luxury experience, we ensure your special day is beautifully remembered.
          </p>
          
          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/contact">CONTACT US</Link>
            <Link href="/blog">BLOG</Link>
          </nav>
          
          <div className={styles.divider}></div>

          <div className={styles.socials}>
            {/* Facebook */}
            <a href={siteConfig.facebook || "#"} className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* Twitter */}
            <a href="#" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            {/* Pinterest */}
            <a href="#" className={styles.socialIcon}>
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m8 20 4-9"></path><path d="M10.7 14c.4-2.2 2.6-3 4.3-1.8 1.9 1.4 1.1 5.3-1 5.3-1.4 0-2.3-1.1-2-2.5"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Instagram */}
            <a href={siteConfig.instagram || "#"} className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>Copyright © {new Date().getFullYear()}. All rights reserved</p>
          <div className={styles.legal}>
            <Link href="/terms">Terms &amp; Conditions</Link> - <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
