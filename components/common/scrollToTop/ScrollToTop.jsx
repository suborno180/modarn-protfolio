"use client";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const options = {
  duration: 500,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsVisible(currentPosition > 200);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-end relative sm:me-10 z-40 transition-all">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-5 sm:bottom-10 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex justify-center items-center rounded-full transition-all duration-500 ease-in-out hover:scale-110 cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white shadow-lg hover:shadow-xl ${
          isVisible 
            ? "scale-100 opacity-100" 
            : "scale-0 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <FaAngleUp className="text-lg sm:text-xl lg:text-2xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;