import React from "react";
import { FaWalking, FaArrowLeft } from "react-icons/fa";
import Menu from "./Menu";

const SideNav = () => {
  return (
    <aside className="sticky top-0 left-0">
      <button className="btn w-full mb-14">
        <FaArrowLeft />
        All restaurants
      </button>



      <Menu />
    </aside>
  );
};

export default SideNav;
