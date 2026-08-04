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
  title: "Success IT Academy | Job-Oriented IT Training",
  description:
    "Success IT Academy offers practical training in Production Support, Incident Management, Major Incident Management, Change & Problem Management, and DevOps / SRE.",
  keywords: [
    "Success IT Academy",
    "DevOps Training",
    "Production Support",
    "Incident Management",
    "SRE Training",
    "AWS",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Linux",
    "Pune",
  ],
  openGraph: {
    title: "Success IT Academy",
    description:
      "Practical IT training, interview preparation and career support.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}