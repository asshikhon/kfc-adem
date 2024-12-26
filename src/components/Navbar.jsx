/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { data: session } = useSession(); // Get the user session
    const router = useRouter();
  
  console.log(session);
  
  
    const handleSignOut = async () => {
      try {
        await signOut();
        router.push("/login"); // Redirect to login after sign out
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

  return (
    <nav className="bg-white shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
<Image src={`https://i.ibb.co.com/37BQtvz/logo.png`} alt="logo" width={200} height={200} />        </div>
        
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Find in..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Location Indicator */}
        <div className="flex items-center">
          <span className="text-gray-700">Cheremy..., 2</span>
          <button className="ml-1">
            <svg
              className="h-4 w-4 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        {/* Language Selector */}
        <div className="flex items-center mx-4">
          <svg
            className="h-6 w-6 text-gray-700 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="text-gray-700">English</span>
        </div>
        
          {/* Conditional Sign In / Sign Out */}
          {session ? (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/login"
              className="btn btn-outline rounded-2xl text-black px-4 py-2 text-base"
            >
              Log In
            </Link>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
