import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

const POSTS = [
  {
    id: 1,
    title: "5 Consejos para Cuidar tus Zapatos de Cuero",
    excerpt:
      "El cuero genuino es una inversión que, con el cuidado adecuado, puede durar años. Aprende cómo limpiar, hidratar y almacenar tu calzado correctamente.",
    date: "Marzo 20, 2026",
    imageUrl:
      "/assets/uploads/img-20260326-wa0178-019d3173-cf8c-747b-844d-56fceffc08e0-13.jpg",
    tag: "Cuidado del Calzado",
  },
  {
    id: 2,
    title: "Tendencias de Moda en Calzado para Este 2026",
    excerpt:
      "Descubre los estilos que marcarán la temporada: desde stilettos con plataformas hasta sneakers de lujo con acabados premium que están conquistando las pasarelas.",
    date: "Marzo 15, 2026",
    imageUrl:
      "/assets/uploads/img-20260326-wa0196-019d3173-ccf6-76fb-afe9-a4fd63b58af3-5.jpg",
    tag: "Tendencias",
  },
  {
    id: 3,
    title: "Cómo Elegir el Calzado Perfecto para tus Hijos",
    excerpt:
      "El calzado infantil debe combinar durabilidad, comodidad y estilo. Te damos las claves para escoger el modelo ideal según la edad y actividad de tu pequeño.",
    date: "Marzo 10, 2026",
    imageUrl:
      "/assets/uploads/img-20260326-wa0193-019d3173-cfc2-77ce-acfc-832b12217304-17.jpg",
    tag: "Calzado Infantil",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-3">
          Nuestro Blog
        </h2>
        <p className="font-sans text-muted-foreground">
          Consejos de moda, cuidado y tendencias en calzado
        </p>
        <div className="gold-divider mt-4" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {POSTS.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow product-card"
            data-ocid={`blog.item.${i + 1}`}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="inline-block bg-brand-dark/10 text-brand-dark text-xs font-sans font-semibold px-2 py-1 rounded-sm mb-3">
                {post.tag}
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2 leading-tight">
                {post.title}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={12} />
                  <span className="font-sans text-xs">{post.date}</span>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-brand-dark hover:text-brand-gold transition-colors font-sans text-xs font-semibold"
                >
                  Leer más <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
