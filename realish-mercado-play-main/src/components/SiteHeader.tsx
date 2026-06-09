import { Link } from "@tanstack/react-router";
import { Search, ShoppingCart, User, Tag } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3 md:gap-6">
        <Link to="/" className="flex items-center shrink-0 py-0 min-w-[180px] md:min-w-[220px]">
          <img
            src="/logo.png.png"
            alt="Logo Mercado Play"
            className="h-28 md:h-36 w-full object-contain"
          />
        </Link>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            className="w-full rounded-md pl-3 pr-10 py-2 text-sm text-foreground bg-white outline-none"
          />
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Link to="/login" className="flex items-center gap-1 text-sm hover:opacity-80">
          <User className="w-5 h-5" />
          <span className="hidden md:inline">Entrar</span>
        </Link>
        <button className="flex items-center gap-1 text-sm hover:opacity-80 relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-1 -right-2 bg-destructive text-destructive-foreground text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </button>
      </div>
    </header>
  );
}
