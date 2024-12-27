import React from "react";
import { HiGift } from "react-icons/hi2";

const Offer = () => {
  return (
    <div className="bg-green-100 p-4 rounded-xl flex items-center space-x-4">
      <div className="bg-green-500 p-4 rounded-full">
      <HiGift className="text-white text-2xl" />
      </div>
      <p className="text-green-400">Free delivery - on any order</p>
    </div>
  );
};

export default Offer;
