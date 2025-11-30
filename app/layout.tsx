import type { Metadata } from "next";
import Aurora from "@/components/Aurora";
import { Footer } from "@/components/footer/footer";
import { GlassmorphismNav } from "@/components/Navbar/glassmorphism-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narxu - AI-Powered Business Solutions",
  description: "AI automation solutions for modern businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black overflow-hidden">
          {/* Aurora Background - Fixed across all pages */}
          <div className="fixed inset-0 w-full h-full">
            <Aurora
              colorStops={["#180a45", "#5e1b96", "#180a45"]}
              amplitude={1.2}
              blend={0.9}
              speed={0.4}
            />
          </div>

          {/* Navbar - Appears on all pages */}
          <GlassmorphismNav />

          {/* Page Content */}
          <main className="relative z-10">{children}</main>

          {/* Footer - Appears on all pages */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
