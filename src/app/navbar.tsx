import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <div className="flex container py-3 justify-between">
      <div className="text-xl font-bold hover:bg-gray-500 rounded-full px-2 py-1 cursor-pointer hover:animate-pulse">
        Bhayanak Streamer
      </div>
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

export default NavBar;
