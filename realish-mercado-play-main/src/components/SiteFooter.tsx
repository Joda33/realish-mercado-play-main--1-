import { Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary/95 text-secondary-foreground mt-12">
      {/* Bloco de Links Superiores */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-bold text-lg mb-2">Mercado Play</div>
          <p className="opacity-80">Sua plataforma simulada de vantagens e benefícios digitais.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Sua Conta</div>
          <ul className="space-y-1 opacity-80 cursor-pointer">
            <li className="hover:underline">Central de atendimento</li>
            <li className="hover:underline">Como cuidamos da sua privacidade</li>
            <li className="hover:underline">Termos e condições de simulação</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Institucional</div>
          <ul className="space-y-1 opacity-80 cursor-pointer">
            <li className="hover:underline">Sobre o Mercado Play</li>
            <li className="hover:underline">Trabalhe conosco</li>
            <li className="hover:underline">Programa de Afiliados Laboratoriais</li>
          </ul>
        </div>
      </div>

      {/* Informações de Registro Simuladas (Legalidade e Conformidade) */}
      <div className="border-t border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-[11px] opacity-75 space-y-1.5 leading-relaxed">
          <p>Copyright © 1999-2026 MPlay_Simulacoes.com.br LTDA.</p>
          <p>
            CNPJ n.º 00.000.000/0001-00 / Av. das Nações Unidas, n° 9.999, Bonfim, Osasco/SP - CEP 06233-999 - Ambiente Controlado de Auditoria.
          </p>
        </div>
      </div>

      {/* Alerta do Treinamento de Conscientização */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-2 text-xs">
          <ShieldAlert className="w-4 h-4 text-warning" />
          <Link to="/sucesso" className="underline hover:text-warning transition-colors font-semibold">
            Este é um treinamento de segurança — Clique aqui para saber mais
          </Link>
        </div>
      </div>
    </footer>
  );
}