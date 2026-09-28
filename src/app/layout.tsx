import type { Metadata } from "next";
import "./globals.css";
import NodeNetwork from "@/components/NodeNetwork";

export const metadata: Metadata = {
  title: "IAmantum — CRM y WhatsApp, Automatizaciones, Agentes IA y Páginas Web",
  description:
    "Centralizamos tus contactos, automatizamos seguimientos y conectamos WhatsApp, CRM e inteligencia artificial para que tu equipo responda mejor y venda con más orden.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}",
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NodeNetwork />
        {children}
      </body>
    </html>
  );
}
