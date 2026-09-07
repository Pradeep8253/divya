"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      // Cursor moves instantly
      cursorX = mouseX;
      cursorY = mouseY;
      gsap.set(cursor, { x: cursorX, y: cursorY });

      // Follower has a slight delay/easing
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      gsap.set(follower, { x: followerX, y: followerY });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    // Hover effects for links and buttons
    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(217, 178, 124, 0.2)', duration: 0.3 });
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
      }
    };

    const handleMouseOut = () => {
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles.follower} ref={followerRef}></div>
    </>
  );
}
