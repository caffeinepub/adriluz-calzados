import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/584245488229?text=¡Hola%20Adriluz!%20Me%20gustaría%20ver%20su%20catálogo%20de%20calzado."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white pl-3 pr-4 py-3 rounded-full shadow-xl transition-colors"
      data-ocid="whatsapp.button"
    >
      <SiWhatsapp size={22} />
      <span className="font-sans text-sm font-semibold">Chatear</span>
    </motion.a>
  );
}
