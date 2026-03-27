import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

interface Props {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: Props) {
  const { addToCart, bcvRate, setIsOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  const priceBS = (product.priceUSD * bcvRate).toFixed(2);

  const handleAdd = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    setIsOpen(true);
  };

  return (
    <div
      className="product-card bg-white rounded-sm shadow-sm border border-border overflow-hidden group"
      data-ocid={`catalog.item.${index}`}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-brand-dark text-brand-text-dark text-xs px-2 py-1 font-sans">
            {product.ref}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-serif text-base font-semibold text-foreground mb-1 truncate">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-sans font-bold text-brand-dark text-lg">
            ${product.priceUSD}
          </span>
          <span className="font-sans text-muted-foreground text-sm">
            {Number(priceBS).toLocaleString("es-VE")} Bs
          </span>
        </div>
        <p className="font-sans text-xs text-amber-600 mb-3">
          * Precio Bs. referencial · Confirmar tasa del día
        </p>

        <div className="mb-3">
          <p className="font-sans text-xs text-muted-foreground mb-1">Talla:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSelectedSize(s)}
                data-ocid={`catalog.size_select.${index}`}
                className={`text-xs px-2 py-1 border rounded-sm font-sans transition-colors ${
                  selectedSize === s
                    ? "bg-brand-dark text-white border-brand-dark"
                    : "border-border text-foreground hover:border-brand-dark"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!selectedSize}
          data-ocid={`catalog.add_button.${index}`}
          className={`w-full py-2 text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm transition-all duration-200 ${
            !selectedSize
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : added
                ? "bg-green-600 text-white"
                : "btn-purple hover:opacity-90"
          }`}
        >
          {added ? (
            <>
              <Check size={14} /> Agregado
            </>
          ) : (
            <>
              <ShoppingCart size={14} /> Agregar al Carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
}
