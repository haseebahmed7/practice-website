import React from "react";

export const Hero = () => {
  return (
    <section className="bg-slate-200 min-h-screen py-16 px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[3rem] leading-14 font-sans font-semibold text-gray-800 mb-4">
          Staying on top of your bills <br /> never been this easy
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
          Easily achieve your saving goals. Have all your recurring
          <br className="hidden sm:block" /> and one-time expenses and incomes
          in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button className="bg-[#3f78e0] hover:shadow-lg hover:-translate-y-1 text-white text-base sm:text-lg font-semibold py-3 px-6 rounded-lg shadow-sm transition">
            Get Started
          </button>
          <button className="text-white bg-[#45c4a0] hover:shadow-lg hover:-translate-y-1 text-base sm:text-lg font-semibold py-3 px-6 rounded-lg shadow-sm transition">
            Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};
