import React from "react";
import { FaWalking, FaArrowLeft } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import Menu from "./Menu";

const SideNav = () => {
  return (
    <aside className="sticky top-0 left-0">
      <button className="btn w-full">
        <FaArrowLeft />
        All restaurants
      </button>

      <div className="flex items-center my-8 w-full ">
        <FaWalking className="text-2xl" />
        <div className="text-sm ml-6">
          <p className="font-medium text-green-500 text-wrap leading-4">
            Free delivery from 1000 T 30-40 min
          </p>
          <p className="text-gray-400">Detailed conditions</p>
        </div>
        <IoInformationCircleOutline className="text-2xl text-gray-400" />
      </div>

      <Menu />
    </aside>
  );
};

export default SideNav;
