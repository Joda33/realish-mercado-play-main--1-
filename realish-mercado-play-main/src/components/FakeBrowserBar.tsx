import { Lock } from "lucide-react";

export function FakeBrowserBar() {
  return (
    <div className="bg-muted border-b border-border px-3 py-2 flex items-center gap-2 text-xs">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-warning" />
        <span className="w-3 h-3 rounded-full bg-success/70" />
      </div>
      <div className="flex-1 mx-2 bg-background rounded-md px-3 py-1 flex items-center gap-2 border border-border">
        <Lock className="w-3 h-3 text-success" />
        <span className="text-muted-foreground truncate">https://mercadolibre.com</span>
      </div>
    </div>
  );
}
