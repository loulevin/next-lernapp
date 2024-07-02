import type { Metadata } from "next";
import {
  Inter,
  Habibi,
  Noto_Sans_JP,
  Noto_Sans,
} from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const habibi = Habibi({ subsets: ["latin"], weight: ["400"] });
const notoSansJapanese = Noto_Sans_JP({ subsets: ["cyrillic", "vietnamese"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Jinrai 仁雷",
  description: "Japanese language learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJapanese.className} ${notoSans.className} ${inter.className} ${habibi.className} `}
      >
        {children}
      </body>
    </html>
  );
}
