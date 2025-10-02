/*
import { Check } from "lucide-react";
export const Solutions = () => {
  return (
    <section className="container mx-auto mt-14 px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12  ">
        <div className="relative col-span-1 items-center content-center bg-[#f2e2e1] w-sm h-80 mx-auto">
          <img
            src="/craftwork-bank.jpg"
            alt="Bank Credit Card"
            className="-mt-[80px] -ml-[150px] w-auto rounded-lg shadow-lg"
          />

          <img
            src="/text.jpg"
            alt="Goals Image"
            className="mt-[30px] -ml-[100px] w-auto rounded-lg shadow-lg"
          />
          <img
            src="/moon-fever.jpg"
            alt="price"
            className="absolute -mt-[440px] right-0 -mr-[100px] w-auto rounded-lg shadow-lg"
          />
          <img
            src="/delia-jim.jpg"
            alt="client profile"
            className="absolute -mt-[230px] right-0 -mr-[50px] w-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-1 p-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.6rem] leading-14 font-sans font-semibold text-gray-700 mb-5">
            We have considered our solutions to support every stage of growth.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
            Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper
            non nulla non metus auctor fringilla. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-6000">
            {[
              "Aenean quam ornare curabitur blandit consectetur.",
              "Etiam porta euismod malesuada mollis nisl ornare sem.",
              "Nullam quis risus eget urna mollis ornare aenean leo.",
              "Vivamus sagittis lacus augue rutrum maecenas.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-1.5 rounded-full bg-[#f2e2e1]">
                  <Check className="text-red-500 w-4 h-4" />
                </div>
                <span className="text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
*/

import ReusableSection from "@/components/custom-components/ReusableSection";

export default function Solutions() {
  return (
    <>
      {/* SECTION 1 */}
      <ReusableSection
        title="We have considered our solutions to support every stage of growth."
        description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper non nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo."
        features={[
          "Aenean quam ornare curabitur blandit consectetur.",
          "Etiam porta euismod malesuada mollis nisl ornare sem.",
          "Nullam quis risus eget urna mollis ornare aenean leo.",
          "Vivamus sagittis lacus augue rutrum maecenas.",
        ]}
        bgColor="#f2e2e1"
        reverse={false}
      />

      {/* SECTION 2 */}
      <ReusableSection
        title="We make spending stress free so you have the perfect control."
        description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo."
        features={[
          "Flexible budgeting and analysis features.",
          "Live sync with all your devices.",
          "Smart reminders and alerts.",
          "Works great across all devices.",
        ]}
        bgColor="#d1eddf"
        checkColor="#266043"
        reverse={true} // Swaps column layout
        images={{
          img1: "/section-2-img1.jpg",
          img2: "/section-2-img2.jpg",
          img3: "/section-2-img3.jpg",
          img4: "/section-2-img4.jpg",
        }}
        img4ClassName="absolute -mt-[240px] right-0 -mr-[75px] w-auto rounded-lg shadow-lg"
      />
      {/* SECTION 3 */}
      <ReusableSection
        title="We make spending stress free so you have the perfect control."
        description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo."
        features={[
          "Flexible budgeting and analysis features.",
          "Live sync with all your devices.",
          "Smart reminders and alerts.",
          "Works great across all devices.",
        ]}
        bgColor="#f9ebdd"
        checkColor="#266043"
        reverse={false} // Swaps column layout
        images={{
          img1: "/section-3-img1.jpg",
          img2: "/section-3-img2.jpg",
          img3: "/section-3-img3.jpg",
        }}
        img1ClassName="-mt-[50px] -ml-[150px] w-auto h-90 rounded-lg shadow-lg"
        img2ClassName="absolute -mt-[420px] right-0 -mr-[126px] w-auto h-42 rounded-lg shadow-lg"
        img3ClassName="absolute -mt-[220px] right-0 -mr-[72px] w-auto h-70 rounded-lg shadow-lg"
        sectionClassName="container mx-auto mt-6 px-4 py-20 mb-[30rem]"
      />
    </>
  );
}
export { Solutions };
