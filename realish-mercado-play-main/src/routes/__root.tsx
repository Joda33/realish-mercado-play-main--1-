import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FakeBrowserBar } from "../components/FakeBrowserBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Página não encontrada</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Voltar ao início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Tentar novamente</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SuperOfertas Brasil — Simulação de Phishing (Treinamento)" },
      { name: "description", content: "Simulação educativa de phishing para treinamento interno." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "SuperOfertas Brasil — Simulação de Phishing (Treinamento)" },
      { name: "twitter:title", content: "SuperOfertas Brasil — Simulação de Phishing (Treinamento)" },
      { property: "og:description", content: "Simulação educativa de phishing para treinamento interno." },
      { name: "twitter:description", content: "Simulação educativa de phishing para treinamento interno." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/18ff8c73-30bf-4b5e-ae72-125539a45565" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/18ff8c73-30bf-4b5e-ae72-125539a45565" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  // Esconde a barra se a rota for exatamente "/" ou se terminar com "/login"
  const isLoginPage = location.pathname === "/" || /\/login\/?$/i.test(location.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        {/* Renderiza a barra somente se NÃO for a tela de login/inicial */}
        {!isLoginPage && <FakeBrowserBar />}
        <div className="flex-1 flex flex-col"><Outlet /></div>
      </div>
    </QueryClientProvider>
  );
}