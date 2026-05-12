"use client";

export default function AboutUs({ sections }) {
  const clients =
    sections.find((s) => s.title === "CLIENTS")?.details?.list || [];

  const awards =
    sections.find((s) => s.title === "AWARDS")?.details?.list || [];

  const medals =
    sections.find((s) => s.id === 33)?.details?.list || [];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 md:px-20 py-24">

        
        <SectionTitle title="CLIENTS" />
        <Grid items={clients} imgHeight="h-12" />

        
        <SectionTitle title="AWARDS" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 px-100 place-items-center">
          {awards.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className="h-16 object-contain"
            />
            
          ))}
        </div>

        <Grid items={medals} imgHeight="h-24" />

      </div>
    </div>
  );
}


function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      <div className="w-5 h-[0.5px] bg-white" />
      <h2>{title}</h2>
    </div>
  );
}

function Grid({ items, imgHeight }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 place-items-center">
      {items.map((item) =>
        item?.image ? (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={`${imgHeight} object-contain`}
          />
        ) : null
      )}
    </div>
  );
}