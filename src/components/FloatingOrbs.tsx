import { motion } from "framer-motion";

const orbs = [
  { size: 400, x: "10%", y: "15%", color: "var(--primary)", delay: 0, duration: 20 },
  { size: 300, x: "75%", y: "25%", color: "var(--accent)", delay: 2, duration: 25 },
  { size: 250, x: "50%", y: "60%", color: "var(--glow-warm)", delay: 4, duration: 22 },
  { size: 350, x: "85%", y: "70%", color: "var(--primary)", delay: 1, duration: 18 },
  { size: 200, x: "20%", y: "80%", color: "var(--accent)", delay: 3, duration: 24 },
];

const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-[0.07]"
        style={{
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          background: `radial-gradient(circle, hsl(${orb.color}) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, -20, 15, 0],
          y: [0, -25, 20, -10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: orb.duration,
          repeat: Infinity,
          delay: orb.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingOrbs;
