// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "Planificador Inteligente",
  description: "Optimización de proyectos con estilo Itecam",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans p-6">
        <nav className="mb-8 flex gap-4 text-lg font-medium">
          {/* enlaces */}
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
