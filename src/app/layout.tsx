import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-2971f0b6.vercel.app"),
  title: "Ebook Sales Operating System",
  description:
    "Proven launch playbooks, automations, and templates that help creators sell their ebook from idea to recurring revenue.",
  openGraph: {
    title: "Ebook Sales Operating System",
    description:
      "Validate, launch, and scale your ebook with ready-to-use messaging, marketing automation, and promo calendars.",
    url: "https://agentic-2971f0b6.vercel.app",
    siteName: "Ebook Sales OS",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ebook Sales OS preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebook Sales Operating System",
    description:
      "A launch blueprint for selling your ebook in 30 days—templates, automations, KPIs, and promotion scripts included.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
