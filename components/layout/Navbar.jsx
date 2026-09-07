"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "BRIDAL", path: "/bridal" },
  { name: "REVIEWS", path: "/#reviews" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="Divya Makeup Artist" width={160} height={60} style={{ objectFit: 'contain' }} priority />
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          {links.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopAction}>
          <Link href="/booking" className={styles.bookButton}>
            BOOK YOUR DATE
          </Link>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/lookbook" 
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            LOOKBOOK
          </Link>
          <Link 
            href="/faq" 
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            href="/booking" 
            className={styles.mobileBookButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            BOOK YOUR DATE
          </Link>
        </nav>
      </div>
    </header>
  );
}
