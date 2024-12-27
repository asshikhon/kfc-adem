"use client";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("#home");

  console.log(activeLink);

  const handleScroll = () => {
    const sections = ["#home", "#about","#service", "#contact"];
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <menu>
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <ul className="text-xl">
        <li>
          <a href="/" className={`${activeLink==="#home"? "font-semibold underline":""}`}>Home</a>
        </li>
        <li>
          <a href="#about" className={`${activeLink==="#about"? "font-semibold underline":""}`}>About</a>
        </li>
        <li>
          <a href="#service" className={`${activeLink==="#service"? "font-semibold underline":""}`}>Service</a>
        </li>
        <li>
          <a href="#contact" className={`${activeLink==="#contact"? "font-semibold underline":""}`}>Contact</a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
