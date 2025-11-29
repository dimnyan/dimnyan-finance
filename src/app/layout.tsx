import React from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import SidebarComponent from "../../components/SidebarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DimFinance",
    template: "%s | DimFinance"
  },
  description: "100% free, high-quality finance courses and tools. Master budgeting, stock investing, cryptocurrency, financial modeling, DCF valuation, accounting, economics. no registration required",
  icons: "/icons/my-icon.png",
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
    <SidebarComponent>
      {children}
    </SidebarComponent>
    </body>
    </html>
  );
}
