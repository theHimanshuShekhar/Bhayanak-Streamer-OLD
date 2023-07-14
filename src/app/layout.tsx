import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Footer from "./footer";

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
          <main className="flex h-screen w-screen max-h-screen max-w-screen overflow-hidden flex-col items-center bg-gray-700 text-gray-200 ">
            <NavBar />
            <div className="grow w-full container">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

const NavBar: React.FC = () => {
  return (
    <div className="flex container py-3 justify-between">
      <div className="text-xl font-bold">Bhayanak Streamer</div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton showName />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};
