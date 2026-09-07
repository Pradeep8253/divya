"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LookbookPreview.module.css";
import { looks } from "@/data/testimonials"; // Actually looks is in testimonials mock data

export default function LookbookPreview() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        gsap.fromTo(
          img,
          { scale: 1.1, filter: "blur(10px)" },
          {
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.lookbookSection}`} ref={containerRef}>
      <div className={styles.textureBg}></div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <span className={styles.eyebrow}>THE LOOKBOOK</span>
            <h2 className={styles.title}>Find Your<br/>Bridal Style.</h2>
            <p className={styles.description}>
              Explore our curated editorial collections of signature bridal styles. From traditional royal glam to modern minimalist chic, find the look that speaks to your soul.
            </p>
            <div style={{ marginTop: '40px' }}>
              <Link href="/lookbook" className="button-primary">
                EXPLORE LOOKBOOK
              </Link>
            </div>
          </div>
          
          <div className={styles.imageGrid}>
            {looks.slice(0, 3).map((look, i) => (
              <div 
                className={`${styles.imageWrapper} ${styles[`image${i + 1}`]}`} 
                key={look.id}
                ref={el => imagesRef.current[i] = el}
              >
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
