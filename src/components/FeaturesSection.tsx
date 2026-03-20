import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, Globe, Lock, BarChart3 } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Instant responses with edge computing. No lag, no wait.", color: "var(--accent)" },
  { icon: Shield, title: "Bank-Grade Security", desc: "End-to-end encryption keeps your data safe at all times.", color: "var(--primary)" },
  { icon: Smartphone, title: "Native Experience", desc: "Feels like a native app with silky smooth animations.", color: "var(--glow-warm)" },
  { icon: Globe, title: "Works Everywhere", desc: "Seamless sync across all your devices, everywhere you go.", color: "var(--accent)" },
  { icon: Lock, title: "Privacy First", desc: "Your data stays yours. Zero tracking, zero compromises.", color: "var(--primary)" },
  { icon: BarChart3, title: "Smart Insights", desc: "AI-powered analytics that help you make better decisions.", color: "var(--glow-warm)" },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="text-sm text-accent font-medium uppercase tracking-widest">Features</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
          Why You'll <span className="text-gradient-warm">Love It</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Built with cutting-edge technology and designed for humans.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group glass rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
              style={{ background: `hsl(${feature.color} / 0.12)` }}
            >
              <feature.icon className="w-6 h-6" style={{ color: `hsl(${feature.color})` }} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
