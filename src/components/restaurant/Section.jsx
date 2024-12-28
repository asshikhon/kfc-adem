import Image from "next/image";
import React from "react";

const Section = ({ id, items }) => {
  console.log(items);

  return (
    <div id={id}>
      <h2 className="text-xl text-black font-semibold mb-8">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-black">
        {items?.map((item, index) => {
          const isOutOfStock = item?.stock === "out";
          return (
            <div
              key={index}
              className={`flex rounded-xl justify-between flex-col shadow-lg p-3 ${
                isOutOfStock ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-xl"
                  src={item?.image}
                  alt="image"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-start text-xl font-bold">
                ${item?.price}₸
              </p>
              <h3 className="text-sm font-semibold">{item?.name}</h3>

              <button
                className={`btn btn-outline mt-1 ${
                  isOutOfStock ? "cursor-not-allowed" : ""
                }`}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? "Available soon" : "+ Add"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
