export const Solutions = () => {
  return (
    <section className="container mx-auto px-4 text-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center content-center">
        <div className="relative col-span-1 bg-pink-100 w-md h-80 mx-auto">
          <div className="">
            <img
              src="/craftwork-bank.jpg"
              alt="Decorative Element"
              className="hidden sm:block absolute -mt-[580px] -ml-[100px] w-auto"
            />
          </div>
        </div>
        <div className="col-span-1 p-6 bg-amber-300 h-24">Item 2</div>
        {/* Add more items here */}
      </div>
    </section>
  );
};
