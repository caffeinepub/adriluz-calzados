import { Clock, MapPin, Package, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Contacto
          </h2>
          <p className="font-sans text-muted-foreground">
            Estamos para atenderte con gusto
          </p>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-brand-dark text-brand-text-dark rounded-sm p-6">
              <h3 className="font-serif text-2xl font-bold text-brand-gold mb-1">
                Adriluz
              </h3>
              <p className="font-sans text-sm text-brand-text-dark/80 mb-4">
                Vendedora Independiente
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-brand-text-dark/60">
                      Vendedora
                    </p>
                    <p className="font-sans font-semibold">Luz María Adriani</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <SiWhatsapp size={14} className="text-green-400" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-brand-text-dark/60">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/584245488229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold hover:text-brand-gold transition-colors"
                      data-ocid="contact.whatsapp.link"
                    >
                      +58 424 548 8229
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-brand-text-dark/60">
                      Ubicación
                    </p>
                    <p className="font-sans font-semibold">
                      Caracas, Venezuela
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-brand-text-dark/60">
                      Atención
                    </p>
                    <p className="font-sans font-semibold">
                      Lun - Sáb, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-white rounded-sm border border-border p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Package
                  size={20}
                  className="text-brand-dark mt-0.5 flex-shrink-0"
                />
                <div>
                  <h4 className="font-serif font-bold text-brand-dark mb-1">
                    Pedidos por Encargo
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    Todos nuestros zapatos son <strong>por encargo</strong>.
                    Consulta disponibilidad, tallas y colores disponibles
                    directamente con la vendedora.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/584245488229?text=¡Hola%20Adriluz!%20Me%20gustaría%20consultar%20sobre%20sus%20zapatos."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm font-sans font-semibold text-sm transition-colors"
                data-ocid="contact.whatsapp_cta.button"
              >
                <SiWhatsapp size={18} />
                Escribir por WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-sm border border-border p-5 shadow-sm">
              <h4 className="font-serif font-bold text-brand-dark mb-3">
                Nuestros Precios
              </h4>
              <ul className="font-sans text-sm text-muted-foreground space-y-2">
                <li className="flex justify-between">
                  <span>Damas Elegantes</span>{" "}
                  <strong className="text-foreground">$30 - $42</strong>
                </li>
                <li className="flex justify-between">
                  <span>Damas Casuales</span>{" "}
                  <strong className="text-foreground">$25 - $33</strong>
                </li>
                <li className="flex justify-between">
                  <span>Caballeros</span>{" "}
                  <strong className="text-foreground">$32 - $40</strong>
                </li>
                <li className="flex justify-between">
                  <span>Niños y Niñas</span>{" "}
                  <strong className="text-foreground">$15 - $22</strong>
                </li>
              </ul>
              <p className="font-sans text-xs text-muted-foreground mt-3 border-t border-border pt-2">
                * Precios en USD · Pagos al cambio del BCV
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/584245488229"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-sm font-sans text-sm font-medium hover:bg-green-700 transition-colors"
                data-ocid="contact.social_whatsapp.link"
              >
                <SiWhatsapp size={16} /> WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-br from-purple-600 to-pink-500 text-white py-2 rounded-sm font-sans text-sm font-medium hover:opacity-90 transition-opacity"
                data-ocid="contact.social_instagram.link"
              >
                <SiInstagram size={16} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
