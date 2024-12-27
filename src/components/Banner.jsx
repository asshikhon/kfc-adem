import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('https://i.ibb.co/sRJw40J/banner.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to KFC Adem</h1>
        <p className="text-lg mb-8">Enjoy our delicious meals!</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
