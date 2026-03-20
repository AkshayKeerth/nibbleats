import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screenshot1 from "@/assets/screenshot1.jpeg";
import screenshot2 from "@/assets/screenshot2.jpeg";
import screenshot3 from "@/assets/screenshot3.jpeg";

const phones = [
  { img: screenshot2, rotate: -8, y: 40 },
  { img: screenshot1, rotate: 0, y: 0 },
  { img: screenshot3, rotate: 8, y: 40 },
];

const ScreenshotShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="preview" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-accent font-medium uppercase tracking-widest">Preview</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
            Beautifully <span className="text-gradient-primary">Crafted</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Every pixel designed with purpose. Every interaction feels natural and delightful.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="flex items-center justify-center gap-4 md:gap-8">
          {phones.map((phone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: phone.rotate }}
              whileInView={{ opacity: 1, y: phone.y, rotate: phone.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: phone.y - 12, scale: 1.03, rotate: 0 }}
              className="relative group cursor-pointer"
            >
              <div className="relative w-48 md:w-64 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden glass-strong p-1.5 shadow-2xl transition-shadow duration-500 group-hover:shadow-primary/20 group-hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-full z-20" />
                <div className="rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden bg-background">
                  <img
                    src={phone.img}
                    alt={`NibbleEats app screenshot ${i + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
