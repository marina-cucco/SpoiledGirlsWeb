import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spoiled Girls Club",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
          <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
