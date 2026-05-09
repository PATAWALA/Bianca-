import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // Empêche l'ajout automatique de CSS (pour Next.js)

export const metadata: Metadata = {
  title: "Bianca Despots | Courtier immobilier • Bienveillance - Compétence - Cohérence",
  description:
    "Bianca Despots, courtier immobilier au Québec. Achat, vente, copropriété, immeuble locatif et commercial. Approche humaine et stratégique. 10 ans d'expérience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className="scroll-smooth">
      <body className="bg-[#FEFCF8] text-[#2D2A26] font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}