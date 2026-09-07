"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageTransition.module.css";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} style={{ display: "contents" }}>
        
        {/* The actual page content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>

        {/* Exit Overlay: Slides up from bottom to cover screen on exit */}
        <motion.div
          className={styles.transitionOverlay}
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: "0%" }}
          transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <Image src="/logo.png" alt="Divya Makeup Artist" width={200} height={80} style={{ objectFit: 'contain' }} priority />
        </motion.div>

        {/* Enter Overlay: Slides up from center to top to reveal page on enter */}
        <motion.div
          className={styles.transitionOverlay}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
        >
          <Image src="/logo.png" alt="Divya Makeup Artist" width={200} height={80} style={{ objectFit: 'contain' }} priority />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}
