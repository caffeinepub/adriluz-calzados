import {
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    totalUSD,
    bcvRate,
  } = useCart();

  const totalBS = (totalUSD * bcvRate).toFixed(2);

  const handleWhatsApp = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (i) =>
        `• ${i.product.name} (Ref: ${i.product.ref}) - Talla: ${i.size} - Cant: ${i.quantity} - $${i.product.priceUSD * i.quantity}`,
    );
    const msg = [
      "¡Hola Adriluz! Me interesa hacer un pedido:",
      "",
      ...lines,
      "",
      `*Total: $${totalUSD.toFixed(2)} USD / ${Number(totalBS).toLocaleString("es-VE")} Bs*`,
      "",
      "Por favor confirmar disponibilidad y tallas. ¡Gracias!",
    ].join("\n");
    const url = `https://wa.me/584245488229?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            data-ocid="cart.sheet"
          >
            <div className="bg-brand-dark text-brand-text-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-gold" />
                <h2 className="font-serif text-xl">Mi Carrito</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
                data-ocid="cart.close_button"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-16" data-ocid="cart.empty_state">
                  <ShoppingBag
                    size={48}
                    className="text-muted-foreground mx-auto mb-4"
                  />
                  <p className="font-sans text-muted-foreground">
                    Tu carrito está vacío
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 btn-purple px-6 py-2 text-sm font-sans rounded-sm"
                  >
                    Ver Catálogo
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-3 p-3 border border-border rounded-sm"
                      data-ocid={`cart.item.${idx + 1}`}
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm font-semibold truncate">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-muted-foreground">
                          Talla: {item.size}
                        </p>
                        <p className="font-sans text-sm font-bold text-brand-dark mt-1">
                          ${item.product.priceUSD * item.quantity}
                          <span className="text-xs font-normal text-muted-foreground ml-1">
                            /{" "}
                            {(
                              item.product.priceUSD *
                              item.quantity *
                              bcvRate
                            ).toLocaleString("es-VE", {
                              maximumFractionDigits: 0,
                            })}{" "}
                            Bs
                          </span>
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1,
                              )
                            }
                            className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted"
                            data-ocid={`cart.minus_button.${idx + 1}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1,
                              )
                            }
                            className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted"
                            data-ocid={`cart.plus_button.${idx + 1}`}
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(item.product.id, item.size)
                            }
                            className="ml-auto text-destructive hover:opacity-70 transition-opacity"
                            data-ocid={`cart.delete_button.${idx + 1}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-4 bg-muted/30">
                <div className="flex justify-between mb-1">
                  <span className="font-sans font-semibold text-brand-dark">
                    Total USD:
                  </span>
                  <span className="font-sans font-bold text-brand-dark text-lg">
                    ${totalUSD.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-sans text-sm text-muted-foreground">
                    Total Bs:
                  </span>
                  <span className="font-sans text-sm font-medium">
                    {Number(totalBS).toLocaleString("es-VE")} Bs
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm font-sans font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                  data-ocid="cart.confirm_button"
                >
                  <MessageCircle size={18} />
                  Confirmar Pedido por WhatsApp
                </button>
                <p className="font-sans text-xs text-center text-muted-foreground mt-2">
                  Zapatos por encargo · Consulta disponibilidad y tallas
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
