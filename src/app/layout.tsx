import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer"; // <-- Importamos el Footer
import "./globals.css";

const grotesque = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-grotesque",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Miranda | Soluciones Multidisciplinarias",
  description: "Portafolio de desarrollo web, software y aplicaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${grotesque.variable} font-grotesque antialiased min-h-screen flex flex-col`}>
        
        <Navbar />
        
        {/* flex-grow empuja el footer siempre hacia abajo, incluso si la página tiene poco contenido */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> {/* <-- Lo colocamos al final */}
        
      </body>
    </html>
  );
}