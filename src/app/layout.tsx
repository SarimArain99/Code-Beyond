import type { Metadata } from "next";
import "./globals.css";
import logo from "../../public/Logo.png"

export const metadata: Metadata = {
  title: "CODE AND BEYOND",
  description:
    "Code and Beyond is a tech blog that goes beyond programming, diving into the latest trends, tools, and insights in software development and technology. Perfect for developers and tech enthusiasts looking to stay informed and inspired!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
