export default function subMenuPartnersSec() {
  const partners = [
    "Google",
    "Spotify",
    "Netflix",
    "Airbnb",
    "Adobe",
    "Slack",
  ];

  return (
    <section
      id="partners"
      className="min-h-screen bg-white px-6 py-28"
    >
      <div className="container mx-auto">
        <p className="text-cyan-500 text-sm font-bold tracking-[3px] mb-5">
          PARTNERS
        </p>

        <h2 className="text-xl md:text-4xl font-bold text-[#0b3558] leading-tight mb-16">
          Trusted by global brands
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-[#0b3558] mb-4">
                {partner}
              </h3>

              <p className="text-gray-600 leading-7">
                Collaborating on modern digital solutions and
                innovative customer experiences worldwide.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}