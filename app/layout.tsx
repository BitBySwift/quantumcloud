import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const logoFavicon =
  "https://github.com/user-attachments/assets/f3ece80f-f5e2-4ac0-bfb1-d74745a88ac1";

export const metadata: Metadata = {
  title: "Quantum Cloud — Beyond Limits",
  description:
    "Quantum Cloud is a private next-generation software development company focused on AI, cloud systems, and advanced digital innovation.",
  icons: {
    icon: [
      { url: logoFavicon, sizes: "16x16", type: "image/png" },
      { url: logoFavicon, sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: logoFavicon, sizes: "180x180", type: "image/png" }],
    shortcut: logoFavicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#05060a] font-sans text-white">
        <CursorGlow />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
