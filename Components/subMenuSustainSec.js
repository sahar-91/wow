export default function subMenuSustainSec() {
  return (
    <section
      id="sustainability"
      className="min-h-screen bg-[#f7f9fa] px-6 py-28"
    >
       <div className="container mx-auto px-6 md:px-20">
        <p className="text-cyan-500 text-sm font-bold tracking-[3px] mb-5">
          SUSTAINABILITY
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0b3558] leading-tight mb-8">
              Building products with long-term impact
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-10">
              Sustainability is part of our design process. We focus
              on performance, accessibility, and scalable architecture
              that grows with your business.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-2">
                  Eco-friendly workflow
                </h3>

                <p className="text-gray-600">
                  We optimize digital systems to reduce waste and
                  improve efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-xl mb-2">
                  Accessible products
                </h3>

                <p className="text-gray-600">
                  Every product is designed with usability and
                  inclusivity in mind.
                </p>
              </div>
            </div>
          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}