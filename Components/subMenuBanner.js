export default function subMenuBanner() {
  return (
    <section
      className="relative h-[350px] bg-cover bg-center  "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >

      <div className="absolute inset-0 bg-black/20" />
     

      <div className="relative z-10 flex items-center h-full container mx-auto px-6 md:px-20">
        <h1 className="text-white text-6xl font-bold">
        Company Page
        </h1>
      </div>
    </section>
  );
}