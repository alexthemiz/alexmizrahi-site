import type { Metadata } from "next";
import { VT323, Press_Start_2P } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Alex Mizrahi",
  description: "Experiential producer. Communications strategist. Ideas man.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${pressStart2P.variable}`}>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4D4XVMVXQ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4D4XVMVXQ1');
          `}
        </Script>
      </body>
    </html>
  );
}
