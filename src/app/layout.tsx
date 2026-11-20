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
  title: "Moisés García Miranda | Ingeniería Biomédica e investigación",
  description:
    "Portafolio de Moisés Alberto García Miranda: investigación en señales neurofisiológicas, dispositivos médicos y desarrollo de software para salud y educación.",
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