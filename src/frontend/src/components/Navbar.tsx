import { Menu, MessageCircle, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Damas", href: "#damas" },
  { label: "Caballeros", href: "#caballeros" },
  { label: "Niños", href: "#ninos" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const { totalItems, setIsOpen, bcvRate } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top utility strip */}
      <div className="bg-brand-darker text-brand-text-dark text-xs py-2 px-4 text-center">
        <span className="font-sans">
          Adriluz | Calzado Exclusivo por Encargo | Caracas, Venezuela
        </span>
        <span className="ml-4 text-brand-gold font-semibold">
          Tasa BCV: {bcvRate.toFixed(2)} Bs/$
        </span>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-brand-dark text-brand-text-dark shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#inicio")}
              className="logo-gold text-3xl tracking-wide flex-shrink-0 cursor-pointer bg-transparent border-0 p-0"
            >
              Adriluz
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-6"
              data-ocid="nav.panel"
            >
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  className="text-sm font-medium text-brand-text-dark hover:text-brand-gold transition-colors duration-200 font-sans tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>

              <a
                href="https://wa.me/584245488229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-green-400"
                aria-label="WhatsApp"
                data-ocid="nav.whatsapp.link"
              >
                <MessageCircle size={18} />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Carrito"
                data-ocid="nav.cart.button"
              >
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-darker text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menú"
                data-ocid="nav.mobile_menu.button"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="md:hidden pb-4 pt-2 border-t border-white/10">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2 px-2 text-brand-text-dark hover:text-brand-gold font-sans text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
