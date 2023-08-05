import Navbar from "@/components/(bars)/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stifler - logs viewer",
  description: "Logs viewer for Caddy server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-wbg overflow-y-hidden antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
