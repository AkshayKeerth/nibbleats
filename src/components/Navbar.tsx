import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
  >
    <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">N</span>
        </div>
        <span className="font-bold text-lg tracking-tight text-foreground">NexaApp</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {["Features", "Preview", "Notify Me"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-foreground transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold glow-primary transition-all duration-300 hover:brightness-110"
      >
        Get Notified
      </motion.button>
    </div>
  </motion.nav>
);

export default Navbar;
