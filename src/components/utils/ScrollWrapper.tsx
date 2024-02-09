import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollWrapper({ children }: any) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, -600]);
  return (
    <motion.section style={{ opacity }} ref={targetRef}>
      <motion.div style={{ x: scale }}>{children}</motion.div>
    </motion.section>
  );
}
