/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession(); // Get the user session
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // Track if the user has initiated a search
  const router = useRouter();
  const path = usePathname();

  const products = [
    {
      "name": "Water Asu 0.5",
      "image": "https://i.ibb.co/xfS7Yf2/asu.jpg",
      "price": 400,
      "stock": "in"
    },
    {
      "name": "Pepsi 0.5 bottle",
      "image": "https://i.ibb.co/4Ny5jcT/pepsi.jpg",
      "price": 650,
      "stock": "out"
    },
    {
      "name": "Juice Da-DA 0.2",
      "image": "https://i.ibb.co/C8mtCcj/dada.jpg",
      "price": 450,
      "stock": "in"
    },
    {
      "name": "Cold Tea Lipton Ice-Tea 0.5",
      "image": "https://i.ibb.co/HY3XNBf/coldtea.jpg",
      "price": 650,
      "stock": "in"
    },
    {
      "name": "Cheese",
      "image": "https://i.ibb.co/9snrKBM/chese.jpg",
      "price": 150,
      "stock": "in"
    },
    {
      "name": "Ketchup sauce",
      "image": "https://i.ibb.co/8xTQKB0/sauce2.jpg",
      "price": 165,
      "stock": "out"
    },
    {
      "name": "Bun",
      "image": "https://i.ibb.co/DKmQ9Qs/bun.jpg",
      "price": 200,
      "stock": "in"
    },
    {
      "name": "Barbecue sauce",
      "image": "https://i.ibb.co/ZLpdD35/barbecue.jpg",
      "price": 165,
      "stock": "in"
    },
    {
      "name": "Cheese sauce",
      "image": "https://i.ibb.co/ckSJ382/sauce.jpg",
      "price": 165,
      "stock": "in"
    },
    {
      "name": "Garlic sauce",
      "image": "https://i.ibb.co/gS1H9Fm/garlic.jpg",
      "price": 165,
      "stock": "in"
    },
    {
      "name": "Teriyaki sauce",
      "image": "https://i.ibb.co/0CyHZQL/teriyaki.jpg",
      "price": 165,
      "stock": "in"
    },
    {
      "name": "Sweet and sour sauce",
      "image": "https://i.ibb.co/JpS5XVR/sweet.jpg",
      "price": 165,
      "stock": "in"
    },
    {
      "name": "Beef Slice",
      "image": "https://i.ibb.co/9Y1WWMF/beef.png",
      "price": 250,
      "stock": "out"
    },
    {
      "name": "Jalapeno",
      "image": "https://i.ibb.co/BnT9ND8/jalapeno.png",
      "price": 150,
      "stock": "in"
    }
  ];
  if (path === "/login" || path === "/signup") return null;

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/login"); // Redirect to login after sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSearch = () => {
    setHasSearched(true); // Mark that a search was performed
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center">
              <h2 className="font-bold text-3xl text-orange-500">Яндекс @ Еда</h2>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center mx-4">
                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-yellow-500 focus:outline-none"
                >
                  <FaSearch size={20} />
                </button>

                <input
                  type="text"
                  placeholder="Find in..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <button className="flex items-center border-2 border-gray-300 px-4 py-2 rounded-md">
                <span className="text-gray-700">Cheremy..., 2</span>
                <IoIosArrowDown className="text-gray-700" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center justify-center">
              <TbWorld className="text-gray-700 text-2xl" />
              <p className="text-gray-700">English</p>
            </div>

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

      {/* Display Filtered Products */}
      {hasSearched && filteredProducts.length === 0 ? (
        <div className="container mx-auto mt-6">
          <p className="text-gray-700">No search results found. Please try a different search term.</p>
        </div>
      ) : (
        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col items-center bg-white border ${product.stock === "out" ? "opacity-50 pointer-events-none" : ""} p-4 rounded-lg shadow-lg`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-orange-500 font-bold">${product.price}</p>
                {product.stock === "in" ? (
                  <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                    + Add to Cart
                  </button>
                ) : (
                  <p className="mt-2 text-red-500 font-semibold">Available soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
