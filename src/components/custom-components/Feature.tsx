"use client";
export const Feature = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Responsive margin-top: no negative margin on mobile */}
        <div className="relative w-[95%] max-w-5xl mx-auto mt-0 sm:-mt-[200px] md:-mt-[300px] lg:-mt-[400px]">
          {/* Main Image - Always Visible */}
          <img
            src="/features-image.png"
            alt="Feature preview"
            className="w-full rounded-lg shadow-lg"
          />

          {/* Floating Image 1 */}
          <img
            src="/features-image1.png"
            alt="Decorative Element"
            className="hidden sm:block absolute -mt-[580px] -ml-[100px] w-auto"
          />

          {/* Floating Image 2 */}
          <img
            src="/features-image2.png"
            alt="Star shape"
            className="hidden sm:block absolute -mt-[360px] -ml-[140px] w-auto"
          />

          {/* Floating Image 3 */}
          <img
            src="/features-image3.png"
            alt="Star shape"
            className="hidden sm:block absolute -mt-[512px] right-0 -mr-[100px] w-auto"
          />
        </div>
      </div>
    </section>
  );
};
