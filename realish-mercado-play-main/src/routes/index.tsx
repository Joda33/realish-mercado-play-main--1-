import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Deixe seu contato — SuperOfertas Brasil" }] }),
  component: ContactForm,
});

function ContactForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");

  const formatarCelular = (value: string) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    
    if (v.length > 7) {
      return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      return `(${v.slice(0,2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      return `(${v}`;
    }
    return "";
  };

  const handleCelularChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelular(formatarCelular(e.target.value));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome.trim() || celular.replace(/\D/g, "").length < 10) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("celular", celular);
      formData.append("_subject", "Novo contato do teste de phishing - SuperOfertas");

      const response = await fetch("https://formspree.io/f/xwvjbwoe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        navigate({ to: "/sucesso" });
      } else {
        alert("Erro ao enviar dados. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-muted/40 py-10 px-4">
        <div className="max-w-md mx-auto bg-card border border-border rounded-2xl shadow-xl p-8">
          
          <h1 className="text-3xl font-bold text-center mb-2">Deixe seu contato</h1>
          <p className="text-center text-muted-foreground mb-8 text-[15px]">
            Preencha os campos abaixo. Seus dados são usados apenas para este teste.
          </p>

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1.5">Nome completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-ring text-base"
                placeholder="Ex: João Silva"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Número de celular</label>
              <input
                type="tel"
                value={celular}
                onChange={handleCelularChange}
                maxLength={15}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-ring text-base"
                placeholder="(21) 99999-9999"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl text-lg shadow transition-all disabled:opacity-70 flex items-center justify-center gap-2 hover:brightness-105"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar contato"
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground">
            <span></span>
            <p className="text-center">
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}