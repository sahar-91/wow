export default function subMenuAboutSec() {
  return (
    <section
      id="about"
      className=" bg-white py-28"
    >
       <div className="container mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-cyan-500 text-sm font-bold tracking-[3px] mb-5">
            ABOUT
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-[#0b3558] leading-tight mb-8">
            We started with a simple mission
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-8">
            We create modern digital experiences focused on quality,
            creativity, and long-term impact. Our team works closely
            with brands to build products that feel elegant and useful.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#f4f7f8] p-8 rounded-2xl">
            <h3 className="text-4xl font-bold text-[#0b3558] mb-3">
              10+
            </h3>

            <p className="text-gray-600">
              Years building digital experiences
            </p>
          </div>

          <div className="bg-[#f4f7f8] p-8 rounded-2xl mt-10">
            <h3 className="text-4xl font-bold text-[#0b3558] mb-3">
              150+
            </h3>

            <p className="text-gray-600">
              Successful projects completed
            </p>
          </div>

          <div className="bg-[#f4f7f8] p-8 rounded-2xl -mt-6">
            <h3 className="text-4xl font-bold text-[#0b3558] mb-3">
              40+
            </h3>

            <p className="text-gray-600">
              Creative developers and designers
            </p>
          </div>

          <div className="bg-[#f4f7f8] p-8 rounded-2xl">
            <h3 className="text-4xl font-bold text-[#0b3558] mb-3">
              24/7
            </h3>

            <p className="text-gray-600">
              Support and maintenance services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}