import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafael Caferati",
  description: "Full-stack web developer and UI/UX specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
