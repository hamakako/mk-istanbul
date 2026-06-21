import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { noorFont } from "./fonts";

export const metadata: Metadata = {
  title: "MK Kurdish Travel Guide",
  description: "پلانی گەشتی کوردی بۆ ئیستەنبول و دوبەی لەگەڵ ڕێنمای Google Maps."
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
