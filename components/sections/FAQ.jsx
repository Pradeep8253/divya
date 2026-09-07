"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FAQ.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/testimonials"; // Actually it's in testimonials.js according to my previous mock creation

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faqSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="09" title="FAQ" align="center" />
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
              ref={el => itemsRef.current[index] = el}
            >
              <button 
                className={styles.question} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={styles.answerWrapper}
                style={{ height: activeIndex === index ? 'auto' : '0px' }}
              >
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
