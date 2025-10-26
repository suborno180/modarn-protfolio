"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Link as ScrollLink } from "react-scroll";

// ক্লায়েন্টের প্রোফাইল অনুযায়ী Relevant Menu Items
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" }, // Process → Experience
  { id: 4, name: "Education", url: "education" }, // Portfolio → Education
  { id: 5, name: "Skills", url: "skills" }, // Blog → Skills
  { id: 6, name: "Certifications", url: "certifications" }, // Services → Certifications
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <ScrollLink
        onClick={() => {
          handleMenuClick();
          setIsMenuOpen(false);
        }}
        to={item.url.toLowerCase()}
        smooth={true}
        duration={1000}
        spy={true}
        offset={-140}
        activeStyle={{
          backgroundColor: "#9929fb",
          color: "white",
        }}
        className={`hover:text-picto-primary px-5 py-3 mx-1 cursor-pointer transition-colors duration-300`}
      >
        {item.name}
      </ScrollLink>
    </li>
  ));

  return (
    <div
      className={`sticky top-0 ${position > 50
          ? "bg-soft-white border-b border-gray-300 backdrop-blur-sm bg-white/95"
          : "bg-white border-white"
        } z-50 transition-all duration-500 shadow-sm`}
    >
      <div className="navbar flex justify-between mx-auto content max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
              >
                {menu}
                <li>
                  <ScrollLink
                    onClick={() => setIsMenuOpen(false)}
                    to="contact"
                    smooth={true}
                    duration={900}
                    className="btn btn-primary mt-2 mx-2"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            )}
          </div>

          {/* Logo - ক্লায়েন্টের নাম ব্যবহার করুন */}
          <ScrollLink
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5 cursor-pointer"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">DF</span>
            </div>
            <p className="text-2xl sm:text-[32px] my-auto ms-3 font-semibold text-gray-900">
              Dinesh Fernando
            </p>
          </ScrollLink>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex items-center hidden">
          <ul className="menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <div className="ml-4">
            <ScrollLink
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary hover:scale-105 transition-transform duration-300 cursor-pointer"
              to="contact"
              smooth={true}
              duration={900}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;