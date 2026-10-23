import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/navigation/Sidebar";
import { BottomNav } from "@/components/navigation/BottomNav";

export const metadata: Metadata = {
  title: "VibeHost - Trợ lý lên thực đơn & Đi chợ thông minh",
  description: "Giải quyết triệt để nỗi đau Hôm nay ăn gì và quản lý tủ lạnh, ngân sách đi chợ thông minh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased flex min-h-screen bg-slate-50">
        <Sidebar />
        <main className="flex-1 pb-20 md:pb-8 max-w-6xl mx-auto px-4 md:px-8 pt-6">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
