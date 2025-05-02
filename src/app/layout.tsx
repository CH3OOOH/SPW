import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沙坡尾街区 | 文化创意与历史交融的城市港湾",
  description: "沙坡尾街区展示网站 - 展示厦门沙坡尾的历史发展、特色店铺、潮流文化和IP形象",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
