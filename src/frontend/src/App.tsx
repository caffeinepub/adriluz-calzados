import { BlogSection } from "./components/BlogSection";
import { CartDrawer } from "./components/CartDrawer";
import { ContactSection } from "./components/ContactSection";
import { CurrencyCalculator } from "./components/CurrencyCalculator";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductCatalog } from "./components/ProductCatalog";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <CurrencyCalculator />
          <ProductCatalog />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <CartDrawer />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}
