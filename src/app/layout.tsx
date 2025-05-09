// src/app/layout.tsx
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground p-6">
        <nav className="mb-8 flex gap-4 text-lg font-medium">
          <Link href="/dashboard" className="hover:underline">🏠 Inicio</Link>
          <Link href="/proyectos" className="hover:underline">📁 Proyectos</Link>
          <Link href="/recursos" className="hover:underline">👥 Recursos</Link>
          <Link href="/planificacion" className="hover:underline">🧠 Planificación</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
