"use client";
import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${style} border border-base-300 hover:border-primary transition-all duration-300`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          hover ? "bg-primary text-primary-content" : "bg-primary/10 text-primary"
        } transition-colors duration-300`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d={data?.svgPath} fill="currentColor" />
        </svg>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg">{`${data?.id}. ${data?.title}`}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;