"use client";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("#drinks");

  const handleScroll = () => {
    const sections = ["#drinks", "#additionally"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.querySelector(section);
      if (element) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveLink(section);
        }
      }
    });
  };

  const handleClick = (section) => {
    setActiveLink(section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <menu className="text-black w-64 p-6 rounded-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>

      {/* Navigation Links */}
      <ul className="flex flex-col gap-3">
        <li>
          <a
            href="#drinks"
            onClick={() => handleClick("#drinks")}
            className={`block px-4 py-2 rounded-lg ${
              activeLink === "#drinks"
                ? "bg-gray-300 text-black font-bold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Drinks
          </a>
        </li>
        <li>
          <a
            href="#additionally"
            onClick={() => handleClick("#additionally")}
            className={`block px-4 py-2 rounded-lg ${
              activeLink === "#additionally"
                ? "bg-gray-300 text-black font-bold"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            Additionally
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
