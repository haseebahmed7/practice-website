"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-slate-200 text-gray-700 font-medium">
      <div className="container mx-auto flex items-center justify-between px-4 py-6 md:px-9">
        {/* Logo */}
        <div>
          <img
            src="/sandbox-logo.png"
            alt="Sandbox Logo"
            width={140}
            height={70}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
          {[
            "Demos",
            "Pages",
            "Projects",
            "Blog",
            "Blocks",
            "Documentation",
          ].map((item, i) => (
            <div className="flex items-center gap-1" key={i}>
              <a
                href="#"
                className={
                  item === "Demos" ? "text-[#54a8c7]" : "hover:text-blue-500"
                }
              >
                {item}
              </a>
              <ChevronDown className="w-4 h-4 text-[#54a8c7]" />
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <button className="hover:text-blue-600 font-semibold">Sign In</button>
          <button className="bg-[#3f78e0] hover:shadow-lg hover:-translate-y-1 text-white font-semibold py-3 px-6 rounded-lg transition ">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-[16px]">
          {[
            "Demos",
            "Pages",
            "Projects",
            "Blog",
            "Blocks",
            "Documentation",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-2"
            >
              <a
                href="#"
                className={
                  item === "Demos" ? "text-[#54a8c7]" : "hover:text-blue-500"
                }
              >
                {item}
              </a>
              <ChevronDown className="w-4 h-4 text-[#54a8c7]" />
            </div>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t mt-4">
            <button className="hover:text-blue-600 text-left font-semibold">
              Sign In
            </button>
            <button className="bg-[#3f78e0] hover:bg-blue-700 text-white text-[16px] font-semibold py-2.5 px-5 rounded-lg transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
