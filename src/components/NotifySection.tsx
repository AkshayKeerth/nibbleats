import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";

const NotifySection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section id="notify-me" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm text-accent font-medium uppercase tracking-widest">Stay Updated</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
            Be the <span className="text-gradient-primary">First</span> to Know
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto mb-10">
            Drop your email and we'll notify you the moment we launch. No spam, just one email.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 w-full px-5 py-4 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-sm"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 glow-primary transition-all duration-300 whitespace-nowrap"
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" /> Subscribed!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Notify Me
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground"
        >
          {["🔒 No spam", "⚡ Instant alert", "🎁 Early access perks"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NotifySection;
