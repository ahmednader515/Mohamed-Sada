import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { Providers } from "@/components/providers";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = localFont({
  src: '../public/fonts/cairo-variableFont_slnt,wght.ttf',
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "منصة الشهاب",
  description: "منصة تعليمية متكاملة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable}`}>
      <body suppressHydrationWarning className="font-cairo overflow-x-hidden">
        <Providers>
          <div className="min-h-screen flex flex-col overflow-x-hidden">
            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
