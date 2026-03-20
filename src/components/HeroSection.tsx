import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
      >
        <Sparkles className="w-4 h-4 text-accent" />
        <span className="text-sm text-muted-foreground">Coming Soon — Early Access 2026</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
      >
        <span className="text-foreground">The Future of</span>
        <br />
        <span className="text-gradient-primary">Smart Living</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Experience seamless connectivity, intelligent automation, and beautiful design
        — all in one app that adapts to your lifestyle.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px -10px hsl(var(--primary) / 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-base flex items-center gap-2 glow-primary transition-all duration-300"
        >
          Join the Waitlist
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-2xl glass text-foreground font-semibold text-base hover:bg-secondary/50 transition-all duration-300"
        >
          Watch Preview
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex items-center justify-center gap-8 md:gap-16 mt-16"
      >
        {[
          { value: "12K+", label: "Waitlist" },
          { value: "4.9★", label: "Beta Rating" },
          { value: "99.9%", label: "Uptime" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gradient-primary">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
