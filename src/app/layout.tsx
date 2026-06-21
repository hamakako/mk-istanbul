import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { noorFont } from "./fonts";

export const metadata: Metadata = {
  title: "MK Istanbul 10-Day Travel Guide",
  description: "پلانی ١٠ ڕۆژی ئیستەنبول بۆ گەشتیارانی MK Business and Travel."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ckb" dir="rtl">
      <body className={noorFont.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
