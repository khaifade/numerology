import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProgressBar from "@/components/progressBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  verification: {
    google: "8UaoeAif1vdWk69dhGUQoFFOeQ1j1n7flQxHk_QdnsM",
  },
  title: {
    default: "Tra cứu thần số học - Khai phá bản thân",
    template: `%s | Tra cứu thần số học`,
  },
  description:
    "Bên trong mỗi người là một ánh sáng tuyệt vời đang chờ đợi để tỏa sáng, một linh hồn hùng vĩ đang khao khát được thể hiện. Tra cứu thần số học - Khai phá bản thân.",
  robots: "follow, index",
  openGraph: {
    title: "Tra cứu thần số học - Khai phá bản thân",
    description:
      "Bên trong mỗi người là một ánh sáng tuyệt vời đang chờ đợi để tỏa sáng, một linh hồn hùng vĩ đang khao khát được thể hiện.",
    url: "https://thansohoconline.vercel.app",
    siteName: "KhaiFade",
    images: [
      {
        url: "https://thansohoconline.vercel.app/og-alt.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ProgressBar></ProgressBar>
          <div>{children}</div>
          <Toaster></Toaster>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
