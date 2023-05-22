import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen max-h-screen max-w-screen overflow-hidden flex-col items-center bg-gray-700 text-gray-200">
          <NavBar />
          <div className="grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

const NavBar: React.FC = () => {
  return <div>Navbar</div>;
};

const Footer: React.FC = () => {
  return <div>Footer</div>;
};
