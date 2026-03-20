import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative py-16 px-6 border-t border-border/50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">N</span>
          </div>
          <span className="font-bold text-foreground">NexaApp</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="hover:text-foreground transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 NexaApp. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
