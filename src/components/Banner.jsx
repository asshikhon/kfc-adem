import React from "react";

const Banner = () => {
  return (
    <div
      className="relative h-[35vh] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('https://i.ibb.co/sRJw40J/banner.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-8 left-8 text-white">
        <h1 className="text-3xl font-bold mb-2">KFC Adem</h1>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center bg-black bg-opacity-60 py-1 px-3 rounded-lg">
            <span className="text-lg font-semibold">⭐ 4.6</span>
            <span className="ml-2 text-sm">200+</span>
          </div>
          <div className="flex items-center bg-black bg-opacity-60 py-1 px-3 rounded-lg">
            <span className="text-lg font-semibold">ℹ️</span>
          </div>
        </div>
        <p className="bg-black bg-opacity-60 py-1 px-3 rounded-lg inline-block text-sm">
          Enjoy our delicious meals!
        </p>
      </div>
    </div>
  );
};

export default Banner;
