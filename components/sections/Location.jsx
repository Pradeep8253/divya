"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Location.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.locationSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="10" title="LOCATION & TRAVEL" />
        
        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <div className={styles.card} ref={el => elementsRef.current[0] = el}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>The Studio</h3>
                <p className={styles.cardText}>{siteConfig.address}</p>
                <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            <div className={styles.card} ref={el => elementsRef.current[1] = el}>
              <div className={styles.iconWrapper}>
                <Clock size={24} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Hours</h3>
                <p className={styles.cardText}>Weekdays: {siteConfig.hours.weekdays}</p>
                <p className={styles.cardText}>Weekends: {siteConfig.hours.weekends}</p>
              </div>
            </div>

            <div className={styles.card} ref={el => elementsRef.current[2] = el}>
              <div className={styles.iconWrapper}>
                <Navigation size={24} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Service Areas</h3>
                <p className={styles.cardText}>
                  Available for bookings in {siteConfig.serviceAreas.join(", ")}. 
                  <br /><br />
                  For destination weddings, travel and accommodation charges apply as per actuals.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaColumn} ref={el => elementsRef.current[3] = el}>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaTitle}>Ready for your date?</h2>
              <p className={styles.ctaText}>
                Let's discuss your vision and create the perfect look for your special day.
              </p>
              <div className={styles.actions}>
                <Link href="/booking" className="button-primary">
                  BOOK YOUR DATE
                </Link>
                <a 
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Divya, I would like to check your availability.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-secondary"
                >
                  CHECK MY DATE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
