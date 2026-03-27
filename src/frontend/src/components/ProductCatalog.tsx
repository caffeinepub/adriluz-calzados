import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useState } from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";

function SectionHeader({
  title,
  subtitle,
}: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-muted-foreground">{subtitle}</p>
      )}
      <div className="gold-divider mt-4" />
    </div>
  );
}

function ProductGrid({
  products,
  startIndex,
}: { products: typeof PRODUCTS; startIndex: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <ProductCard product={product} index={startIndex + i} />
        </motion.div>
      ))}
    </div>
  );
}

function NinosSection({
  ninos,
  ninas,
}: { ninos: typeof PRODUCTS; ninas: typeof PRODUCTS }) {
  const [tab, setTab] = useState<"ninos" | "ninas">("ninos");
  return (
    <div>
      <div className="flex gap-2 mb-8 justify-center">
        <button
          type="button"
          onClick={() => setTab("ninos")}
          data-ocid="ninos.ninos.tab"
          className={`px-6 py-2 text-sm font-sans font-medium rounded-sm transition-colors ${
            tab === "ninos"
              ? "bg-brand-dark text-white"
              : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          👦 Niños
        </button>
        <button
          type="button"
          onClick={() => setTab("ninas")}
          data-ocid="ninos.ninas.tab"
          className={`px-6 py-2 text-sm font-sans font-medium rounded-sm transition-colors ${
            tab === "ninas"
              ? "bg-brand-dark text-white"
              : "bg-muted text-foreground hover:bg-muted/80"
          }`}
        >
          👧 Niñas
        </button>
      </div>
      {tab === "ninos" ? (
        <ProductGrid products={ninos} startIndex={16} />
      ) : (
        <ProductGrid products={ninas} startIndex={19} />
      )}
    </div>
  );
}

export function ProductCatalog() {
  const damaElegantes = PRODUCTS.filter(
    (p) => p.category === "damas-elegantes",
  );
  const damaCasuales = PRODUCTS.filter((p) => p.category === "damas-casuales");
  const damaDeportivos = PRODUCTS.filter(
    (p) => p.category === "damas-deportivos",
  );
  const caballeros = PRODUCTS.filter((p) => p.category === "caballeros");
  const ninos = PRODUCTS.filter((p) => p.category === "ninos");
  const ninas = PRODUCTS.filter((p) => p.category === "ninas");

  return (
    <>
      <section
        id="damas"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <SectionHeader
          title="Colección Damas"
          subtitle="Modelos exclusivos por encargo · Tallas 35 al 40"
        />
        <Tabs defaultValue="elegantes" data-ocid="damas.tab">
          <TabsList className="mx-auto flex justify-center mb-8 bg-muted h-auto p-1 rounded-sm">
            <TabsTrigger
              value="elegantes"
              className="font-sans text-sm px-6 py-2 rounded-sm"
              data-ocid="damas.elegantes.tab"
            >
              Elegantes
            </TabsTrigger>
            <TabsTrigger
              value="casuales"
              className="font-sans text-sm px-6 py-2 rounded-sm"
              data-ocid="damas.casuales.tab"
            >
              Casuales
            </TabsTrigger>
            <TabsTrigger
              value="deportivos"
              className="font-sans text-sm px-6 py-2 rounded-sm"
              data-ocid="damas.deportivos.tab"
            >
              Deportivos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="elegantes">
            <ProductGrid products={damaElegantes} startIndex={1} />
          </TabsContent>
          <TabsContent value="casuales">
            <ProductGrid products={damaCasuales} startIndex={8} />
          </TabsContent>
          <TabsContent value="deportivos">
            <ProductGrid products={damaDeportivos} startIndex={11} />
          </TabsContent>
        </Tabs>
      </section>

      <div className="bg-brand-dark text-brand-text-dark py-16 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl italic text-brand-gold mb-2"
        >
          Diseñado para el Confort
        </motion.h2>
        <p className="font-sans text-brand-text-dark/70 text-sm tracking-widest uppercase">
          El lujo se siente en cada paso
        </p>
      </div>

      <section
        id="caballeros"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <SectionHeader
          title="Colección Caballeros"
          subtitle="Elegancia y distinción · Tallas 40 al 45"
        />
        <ProductGrid products={caballeros} startIndex={13} />
      </section>

      <div className="bg-brand-dark text-brand-text-dark py-16 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl italic text-brand-gold mb-2"
        >
          El Estilo se Encuentra con el Lujo
        </motion.h2>
        <p className="font-sans text-brand-text-dark/70 text-sm tracking-widest uppercase">
          Calzado exclusivo para toda la familia
        </p>
      </div>

      <section
        id="ninos"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <SectionHeader
          title="Niños y Niñas"
          subtitle="Comodidad y diversión · Tallas 28 al 34"
        />
        <NinosSection ninos={ninos} ninas={ninas} />
      </section>
    </>
  );
}
