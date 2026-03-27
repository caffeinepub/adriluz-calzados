import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-darker text-brand-text-dark py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="logo-gold text-3xl mb-2">Adriluz</h3>
            <p className="font-sans text-sm text-brand-text-dark/60 leading-relaxed">
              Calzado exclusivo por encargo para toda la familia. Caracas,
              Venezuela.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://wa.me/584245488229"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-ocid="footer.whatsapp.link"
              >
                <SiWhatsapp size={14} className="text-green-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-ocid="footer.instagram.link"
              >
                <SiInstagram size={14} className="text-pink-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                data-ocid="footer.facebook.link"
              >
                <SiFacebook size={14} className="text-blue-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Catálogo
            </h4>
            <ul className="space-y-2">
              {["#damas", "#caballeros", "#ninos"].map((href) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => handleNav(href)}
                    className="font-sans text-sm text-brand-text-dark/60 hover:text-brand-gold transition-colors"
                  >
                    {href === "#damas"
                      ? "Damas"
                      : href === "#caballeros"
                        ? "Caballeros"
                        : "Niños y Niñas"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Información
            </h4>
            <ul className="space-y-2">
              {["#blog", "#contacto"].map((href) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => handleNav(href)}
                    className="font-sans text-sm text-brand-text-dark/60 hover:text-brand-gold transition-colors"
                  >
                    {href === "#blog" ? "Blog" : "Contacto"}
                  </button>
                </li>
              ))}
              <li>
                <span className="font-sans text-sm text-brand-text-dark/60">
                  Zapatos por encargo
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <div className="space-y-2">
              <p className="font-sans text-sm text-brand-text-dark/60">
                Luz María Adriani
              </p>
              <a
                href="https://wa.me/584245488229"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-green-400 hover:text-green-300 transition-colors block"
              >
                +58 424 548 8229
              </a>
              <p className="font-sans text-sm text-brand-text-dark/60">
                Caracas, Venezuela
              </p>
              <p className="font-sans text-xs text-brand-text-dark/40 mt-3">
                Pagos al cambio del BCV
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-brand-text-dark/40">
            © {year} Adriluz · Caracas, Venezuela · Todos los derechos
            reservados
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-brand-text-dark/40 hover:text-brand-gold transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
