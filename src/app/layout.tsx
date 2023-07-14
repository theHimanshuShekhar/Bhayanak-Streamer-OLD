import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Footer from "./footer";
import NavBar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhayanak Streamer",
  description: "Screen sharing platform for the Bhayanak discord server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <main className="flex h-screen w-screen max-h-screen max-w-screen overflow-hidden flex-col items-center bg-blue-950 text-blue-grey-50">
            <NavBar />
            <div className="grow w-full container">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
