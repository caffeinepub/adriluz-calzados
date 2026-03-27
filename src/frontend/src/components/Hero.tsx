import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToCatalog = () => {
    document.querySelector("#damas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative h-[90vh] min-h-[500px] overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/uploads/img-20260326-wa0191-019d3173-cb2c-73be-8e6d-d1ee69a2f4f8-1.jpg')`,
        }}
      />
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-gold font-sans text-sm font-semibold tracking-widest uppercase mb-3"
            >
              Calzado por Encargo · Caracas, Venezuela
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              Elegancia
              <br />
              <em className="text-brand-gold">en Cada Paso</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-white/80 text-lg mb-8 leading-relaxed"
            >
              Modelos exclusivos para dama, caballero y niños.
              <br />
              Calidad y estilo al precio del BCV.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={scrollToCatalog}
              className="btn-gold px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              data-ocid="hero.primary_button"
            >
              Ver Catálogo
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 cursor-pointer"
        onClick={scrollToCatalog}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
