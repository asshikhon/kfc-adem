/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession(); // Get the user session
  const router = useRouter();
  const path = usePathname();

  if (path === "/login" || path === "/signup") return null;

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
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="font-bold text-3xl text-yellow-500">GFC KITCHEN</h2>
          </div>

          <div className="hidden md:flex items-center ">
            {/* Search Bar */}
            <div className="flex-1 mx-4">
              <input
                type="text"
                placeholder="Find in..."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Location Indicator */}
            <button className="flex items-center border-2 border-gray-300 px-4 py-2 rounded-md">
              <span className="text-gray-700">Cheremy..., 2</span>
              <IoIosArrowDown className="text-gray-700" />
            </button>
          </div>
        </div>

       <div className="flex items-center space-x-4">
         {/* Language Selector */}
         <div className="flex flex-col items-center justify-center">
          <TbWorld className="text-gray-700 text-2xl" />
          <p className="text-gray-700">English</p>
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
            className="btn rounded-2xl text-black px-4 py-2 text-base hover:bg-yellow-500 hover:text-white"
          >
            Log In
          </Link>
        )}
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
