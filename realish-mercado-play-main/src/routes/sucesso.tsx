import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CheckCircle2, ShieldAlert, Clock, TrendingDown, Globe, MousePointerClick } from "lucide-react";

export const Route = createFileRoute("/sucesso")({
  head: () => ({ meta: [{ title: "Treinamento de Segurança — SuperOfertas Brasil" }] }),
  component: Success,
});

const deals = [
  { name: "iPhone Ultra Pro Max", price: 499, img: "📱" },
  { name: 'Smart TV 65" OLED', price: 899, img: "📺" },
  { name: "Notebook Gamer RTX", price: 1199, img: "💻" },
  { name: "AirPods Pro", price: 89, img: "🎧" },
];

const redFlags = [
  { icon: Clock, title: "Urgência artificial", desc: "Contagens regressivas e prazos curtos fazem você agir sem pensar." },
  { icon: TrendingDown, title: "Oferta boa demais", desc: "Descontos de 70–90% em produtos caros quase sempre são falsos." },
  { icon: Globe, title: "Domínio suspeito", desc: "‘superofertas-brasil.com’ não é um domínio oficial. Verifique sempre a URL." },
  { icon: MousePointerClick, title: "Pressão para logar", desc: "Pop-ups exigindo login imediato para 'resgatar prêmio' são clássicos de phishing." },
];

function Success() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-success/20 to-primary/10 py-12 px-4 text-center">
          <CheckCircle2 className="w-16 h-16 text-success mx-auto" />
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">Desconto resgatado com sucesso!</h1>
          <p className="mt-2 text-muted-foreground">Aproveite suas ofertas exclusivas abaixo</p>
          <button className="mt-6 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg hover:opacity-90 shadow-lg">
            Ver minhas ofertas
          </button>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deals.map((d) => (
              <div key={d.name} className="bg-card border border-border rounded-xl p-3">
                <div className="text-7xl text-center py-4 bg-muted rounded-lg">{d.img}</div>
                <h3 className="text-sm mt-3">{d.name}</h3>
                <div className="text-xl font-bold text-secondary mt-1">R$ {d.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Awareness banner */}
        <section className="bg-warning/95 border-y-4 border-warning-foreground/20 py-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-warning-foreground">
            <ShieldAlert className="w-16 h-16 mx-auto" />
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold uppercase">
              ⚠️ Este foi um simulado de phishing para treinamento interno
            </h2>
            <p className="mt-3 text-lg font-medium">
              Você <strong>não perdeu nenhum dado</strong>. Este site foi criado apenas para fins educativos.
            </p>
            <p className="mt-2 text-sm opacity-80">
              Nenhuma senha foi enviada nem armazenada. O formulário de login é fictício.
            </p>
          </div>
        </section>

        {/* Red flags */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Principais sinais de alerta deste phishing</h2>
          <p className="text-center text-muted-foreground mt-2">Aprenda a identificar esses padrões em ataques reais</p>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {redFlags.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-5 flex gap-4">
                <div className="bg-destructive/10 text-destructive p-3 rounded-lg shrink-0">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-secondary/5 border border-secondary/20 rounded-xl p-6">
            <h3 className="font-bold text-secondary">Boas práticas</h3>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Sempre confira o domínio na barra de endereço antes de digitar credenciais.</li>
              <li>Desconfie de ofertas com urgência, prêmios inesperados ou descontos extremos.</li>
              <li>Ative autenticação de dois fatores (2FA) em todas as contas importantes.</li>
              <li>Em caso de dúvida, abra o site oficial digitando a URL diretamente, nunca via link de e-mail.</li>
              <li>Reporte e-mails suspeitos ao time de Segurança da Informação.</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-secondary hover:underline">← Voltar ao início do simulado</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
