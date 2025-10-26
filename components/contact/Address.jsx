"use client"
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-xl bg-white hover:scale-105 duration-300 cursor-pointer hover:shadow-lg border border-base-300 max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        if (item.href) {
          window.open(item.href, '_blank');
        }
      }}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? "bg-primary" : "bg-primary/10"
        } center rounded-lg transition-colors duration-300`}
      >
        <item.icon
          className={`text-lg md:text-xl ${
            hover ? "text-white" : "text-primary"
          } transition-colors duration-300`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-gray-500 font-normal">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-gray-900 font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;