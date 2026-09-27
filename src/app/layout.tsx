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
  title: "DimnyanFinance — Free Financial Planning",
  description: "Free, AI-assisted financial planning built for people earning under $50k/year.",
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
