import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiCode, FiCpu, FiTerminal, FiZap } from "react-icons/fi";

export default function HeroScene() {
  const scene = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), { stiffness: 90, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), { stiffness: 90, damping: 18 });

  const move = (event) => {
    const box = scene.current?.getBoundingClientRect();
    if (!box) return;
    pointerX.set((event.clientX - box.left) / box.width - 0.5);
    pointerY.set((event.clientY - box.top) / box.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div ref={scene} className="hero-scene" onMouseMove={move} onMouseLeave={reset} aria-label="Interactive ACM technology orbit">
      <div className="scene-halo" />
      <motion.div className="scene-stage" style={{ rotateX, rotateY }}>
        <div className="orbit orbit-one"><span /></div>
        <div className="orbit orbit-two"><span /><span /></div>
        <div className="orbit orbit-three"><span /></div>
        <div className="core-shell">
          <div className="core-grid" />
          <div className="core-mark">ACM<span>AMRITAPURI</span></div>
        </div>
        <motion.div className="float-card card-code" animate={{ y: [0, -12, 0], rotate: [-4, -2, -4] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <FiTerminal /><span>build / create</span><i>●</i>
        </motion.div>
        <motion.div className="float-card card-ai" animate={{ y: [0, 10, 0], rotate: [5, 7, 5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <FiCpu /><span>intelligence</span><i>AI</i>
        </motion.div>
        <motion.div className="mini-node node-code" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 3, repeat: Infinity }}><FiCode /></motion.div>
        <motion.div className="mini-node node-zap" animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 2.6, repeat: Infinity }}><FiZap /></motion.div>
      </motion.div>
      <div className="scene-caption"><span>INTERACTIVE SYSTEM</span><span>MOVE YOUR CURSOR</span></div>
    </div>
  );
}
