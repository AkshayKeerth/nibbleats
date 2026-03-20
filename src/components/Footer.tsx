import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

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
            <Leaf className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground">NibbleEats</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="hover:text-foreground transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 NibbleEats. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
