import { motion } from "framer-motion";
import { Shield, Zap, Smartphone, Salad, Brain, BarChart3 } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Meal Plans", desc: "Smart recommendations tailored to your nutritional needs and preferences.", color: "var(--primary)" },
  { icon: Salad, title: "500+ Recipes", desc: "Healthy, delicious recipes with full nutritional breakdowns.", color: "var(--glow-accent)" },
  { icon: BarChart3, title: "Live Metrics", desc: "Track calories, BMI, protein and more with real-time dashboards.", color: "var(--primary)" },
  { icon: Zap, title: "Lightning Fast", desc: "Instant meal suggestions and seamless browsing experience.", color: "var(--glow-accent)" },
  { icon: Shield, title: "Diet Safe", desc: "Vegetarian, vegan, gluten-free — filters for every lifestyle.", color: "var(--primary)" },
  { icon: Smartphone, title: "Native Experience", desc: "Feels like a native app with silky smooth animations.", color: "var(--glow-accent)" },
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
          Built for health-conscious people who love great food.
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
