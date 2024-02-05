import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tra cứu thần số học - Khai phá bản thân",
  description:
    "Bên trong mỗi người là một ánh sáng tuyệt vời đang chờ đợi để tỏa sáng, một linh hồn hùng vĩ đang khao khát được thể hiện.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
