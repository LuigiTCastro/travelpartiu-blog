import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: {
    default: "Blog TravelPartiu — Dicas, Roteiros e Planejamento de Viagem",
    template: "%s | Blog TravelPartiu",
  },
  description:
    "Dicas práticas, roteiros detalhados e guias completos para planejar sua próxima viagem. Tudo o que você precisa para viajar melhor.",
  metadataBase: new URL("https://www.blogtravelpartiu.com.br"),
  openGraph: {
    siteName: "Blog TravelPartiu",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/favicon.ico" />
        {/* ADSENSE — substituir ca-pub-XXXXXXXXXX pelo Publisher ID real após aprovação
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZL756F4BQ" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6ZL756F4BQ');
        `}} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-bg text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
