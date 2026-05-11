import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rifah Sajida Deya | Backend Developer",
  description:
    "Backend Developer & CSE Graduate specializing in scalable backend systems, RESTful APIs, and production-ready web applications.",
  keywords: [
    "Backend Developer",
    "Node.js",
    "Express JS",
    "NestJS",
    "TypeScript",
    "Rifah Sajida Deya",
  ],
  authors: [{ name: "Rifah Sajida Deya" }],
  openGraph: {
    type: "website",
    title: "Rifah Sajida Deya | Backend Developer",
    description: "Backend Developer & CSE Graduate building scalable systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
