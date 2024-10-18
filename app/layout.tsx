import type { Metadata } from "next";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import localFont from "next/font/local";
import "./globals.css";
import Navar from "@/components/Navar-Principal";
import Header from "@/components/header";

const urbanist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-font",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portafolio in Creation....",
  description: "In creation the APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${geistMono.variable} antialiased`}
      >
        <Navar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
