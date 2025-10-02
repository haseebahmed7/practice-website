import React from "react";

export const VideoScreen = () => {
  return (
    <section className="bg-slate-200 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <img src="/video-screen.jpg" alt="video" className=" lg:-mt-[340px]" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[3rem] leading-14 font-sans font-semibold text-gray-800 mt-20 mb-4">
          Find out everything you need to know <br /> about creating a business
          process model
        </h1>

        <img src="/section-preview.png" alt="preview image" className="mb-20" />
      </div>
    </section>
  );
};
