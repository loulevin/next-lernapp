import type { Metadata } from "next";
import { Inter, Habibi } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const habibi = Habibi({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Lernapp",
  description: "Tutorial from edward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${habibi.className}`}>{children}</body>
    </html>
  );
}
