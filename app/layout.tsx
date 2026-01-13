import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Steph — Data + Software Portfolio",
  description:
    "Hybrid Data Analyst + Software Developer. I build data-driven products, dashboards, and scalable systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Steph — Data + Software Portfolio",
    description:
      "Hybrid Data Analyst + Software Developer. Case studies, dashboards, and engineered products.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}