import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Calculator } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export function CurrencyCalculator() {
  const { bcvRate, setBcvRate } = useCart();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "COP">("USD");

  const rates: Record<string, number> = {
    USD: bcvRate,
    EUR: bcvRate * 1.08,
    COP: bcvRate / 4000,
  };

  const resultBS = amount
    ? (Number.parseFloat(amount) * rates[currency]).toFixed(2)
    : null;

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator size={24} className="text-brand-gold" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-2">
            Calculadora de Cambio
          </h2>
          <p className="font-sans text-muted-foreground text-sm">
            Todos los precios se actualizan con la tasa ingresada
          </p>
        </div>

        <div
          className="bg-white rounded-sm shadow-md p-6 md:p-8 border border-border"
          data-ocid="calculator.panel"
        >
          <div className="mb-6 p-4 bg-brand-dark/5 rounded-sm border border-brand-dark/20">
            <Label className="font-sans text-sm font-semibold text-brand-dark mb-2 block">
              Tasa BCV actual (Bs por $)
            </Label>
            <Input
              type="number"
              value={bcvRate}
              onChange={(e) =>
                setBcvRate(Number.parseFloat(e.target.value) || 0)
              }
              className="font-sans text-lg font-bold border-brand-dark/30 focus:border-brand-dark"
              placeholder="Ej: 40.50"
              data-ocid="calculator.bcv_rate.input"
            />
            <p className="font-sans text-xs text-muted-foreground mt-2">
              * Tasa BCV actualizada por la vendedora · Consultar para confirmar
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {(["USD", "EUR", "COP"] as const).map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCurrency(c)}
                data-ocid={`calculator.${c.toLowerCase()}.toggle`}
                className={`py-2 text-sm font-sans font-medium rounded-sm border transition-colors ${
                  currency === c
                    ? "bg-brand-dark text-white border-brand-dark"
                    : "border-border text-foreground hover:border-brand-dark"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Label className="font-sans text-sm text-muted-foreground mb-1 block">
                Monto en {currency}
              </Label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ej: 25"
                className="font-sans text-lg"
                data-ocid="calculator.amount.input"
              />
            </div>
            <div className="flex-1">
              <Label className="font-sans text-sm text-muted-foreground mb-1 block">
                Resultado en Bs
              </Label>
              <div
                className="h-10 flex items-center px-3 bg-muted rounded-sm border border-border font-sans font-bold text-brand-dark text-lg"
                data-ocid="calculator.result.panel"
              >
                {resultBS
                  ? `${Number(resultBS).toLocaleString("es-VE")} Bs`
                  : "—"}
              </div>
            </div>
          </div>

          {resultBS && (
            <p className="mt-3 text-center font-sans text-sm text-muted-foreground">
              {amount} {currency} ={" "}
              <span className="font-bold text-brand-dark">
                {Number(resultBS).toLocaleString("es-VE")} Bs
              </span>{" "}
              (a Bs {bcvRate.toFixed(2)} por $)
            </p>
          )}
        </div>

        {/* Aviso BCV */}
        <div
          className="mt-4 flex gap-3 items-start bg-amber-50 border border-amber-300 rounded-sm p-4 shadow-sm"
          data-ocid="calculator.bcv_notice.panel"
        >
          <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-amber-900 leading-relaxed">
            <span className="font-semibold">Aviso importante:</span> Los precios
            en Bs. se calculan según la tasa BCV vigente del día y pueden
            variar. Confirma el precio final con la vendedora por WhatsApp antes
            de realizar tu pedido.{" "}
            <a
              href="https://wa.me/584245488229"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-700 underline underline-offset-2 hover:text-amber-900 transition-colors"
              data-ocid="calculator.whatsapp.link"
            >
              WhatsApp: +58 424 5488229
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
