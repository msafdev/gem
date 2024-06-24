import type { Metadata } from "next";
import { Manrope, Comic_Neue } from "next/font/google";

import { ThemeProvider } from "@/components/theme";
import "./globals.css";

import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "gem | koleksi game asik",
  description:
    "Sebuah koleksi permainan web simple buat kamu yang lagi gabut, made with ❤️ by @msafdev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comicNeue.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_2rem] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 aspect-square h-auto w-full min-w-[500px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border-x border-border bg-[radial-gradient(circle_100px_at_70%_70%,#ffffff36,#fff)] dark:border-zinc-800 dark:bg-[radial-gradient(circle_100px_at_70%_70%,#fbfbfb36,#09090b)] sm:bg-[radial-gradient(circle_150px_at_70%_70%,#ffffff36,#fff)] sm:dark:bg-[radial-gradient(circle_150px_at_70%_70%,#fbfbfb36,#09090b)]"></div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
