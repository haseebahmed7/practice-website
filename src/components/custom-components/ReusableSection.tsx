import { Check } from "lucide-react";

interface ReusableSectionProps {
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  checkColor?: string;
  reverse?: boolean;
  images?: {
    img1: string;
    img2: string;
    img3: string;
    img4?: string;
  };
  img1ClassName?: string;
  img2ClassName?: string;
  img3ClassName?: string;
  img4ClassName?: string;
  sectionClassName?: string;
}

export default function ReusableSection({
  title,
  description,
  features,
  bgColor,
  checkColor = "#ef4444",
  reverse = false,
  images = {
    img1: "/craftwork-bank.jpg",
    img2: "/text.jpg",
    img3: "/moon-fever.jpg",
    img4: "/delia-jim.jpg",
  },
  img1ClassName = "",
  img2ClassName = "",
  img3ClassName = "",
  img4ClassName = "",
  sectionClassName = "",
}: ReusableSectionProps) {
  return (
    <section
      className={`${sectionClassName || "container mx-auto mt-6 px-4 py-20"}`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center 
        ${
          reverse
            ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        {/* === Image section === */}
        <div
          className="relative col-span-1 items-center content-center w-sm h-72 mx-auto"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={images.img1}
            alt="Image 1"
            className={`${
              img1ClassName ||
              "-mt-[80px] -ml-[145px] w-auto rounded-lg shadow-lg"
            }`}
          />
          <img
            src={images.img2}
            alt="Image 2"
            className={` ${
              img2ClassName ||
              "mt-[30px] -ml-[95px] w-auto rounded-lg shadow-lg"
            }`}
          />
          <img
            src={images.img3}
            alt="Image 3"
            className={`${
              img3ClassName ||
              "absolute -mt-[440px] right-0 -mr-[100px] w-auto h-auto rounded-lg shadow-lg"
            }`}
          />
          {images.img4 && (
            <img
              src={images.img4}
              alt="Image 4"
              className={`${
                img4ClassName ||
                "absolute -mt-[230px] right-0 -mr-[50px] w-auto rounded-lg shadow-lg"
              }`}
            />
          )}
        </div>

        {/* === Content === */}
        <div className="col-span-1 p-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.6rem] leading-14 font-sans font-semibold text-gray-700 mb-5">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-600">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="p-1.5 rounded-full"
                  style={{ backgroundColor: bgColor }}
                >
                  <Check className="w-4 h-4" style={{ color: checkColor }} />
                </div>
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
