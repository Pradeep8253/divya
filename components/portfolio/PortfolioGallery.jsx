"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./PortfolioGallery.module.css";
import { portfolio } from "@/data/portfolio";

const categories = ["All", "Bridal", "Reception", "Engagement", "Party"];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolio);
  const gridRef = useRef(null);

  useEffect(() => {
    // Animate out
    const ctx = gsap.context(() => {
      gsap.to(".portfolio-item", {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.4,
        stagger: 0.05,
        onComplete: () => {
          // Change data
          if (filter === "All") {
            setFilteredItems(portfolio);
          } else {
            setFilteredItems(portfolio.filter(item => item.category === filter));
          }
        }
      });
    }, gridRef);

    return () => ctx.revert();
  }, [filter]);

  useEffect(() => {
    // Animate in after data change
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <div>
      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid} ref={gridRef}>
        {filteredItems.map(item => (
          <div key={item.id} className={`portfolio-item ${styles.item} ${styles[item.span] || ''}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className={styles.emptyState}>
          No images found for this category.
        </div>
      )}
    </div>
  );
}
