import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AuthProvider } from "@/contexts/AuthContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cefis - Conteúdo",
  description: "Conteúdos CEFIS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <AuthProvider>
        <body className={roboto.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
