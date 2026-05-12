import Image from "next/image";

export default async function AboutPage({clients, awards, medals}) {
  const res = await fetch("https://hanzo.dxpshift.com/api/page/our-story");

  const data = await res.json();
  const page = data.data;

  return (
    <div className="bg-black text-white min-h-screen">

     
      <div className="container mx-auto px-6 md:px-20 py-24">

        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-5 h-[0.5px] bg-white" />
          <h2 className="text-white text-l">
            CLIENTS
          </h2>
        </div>

       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12 place-items-center">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt || "client logo"}
              className="w-full object-contain h-12"
            />
          ))}
        </div>
      



       <div className="flex items-center justify-center gap-1 mb-10">
          <div className="w-5 h-[0.5px] bg-white" />
          <h2 className="text-white text-l">
            AWARDS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 px-100 mb-1 place-items-center">
        
          {awards.map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt || "client logo"}
              className="w-full object-contain h-12"
            />
          ))}
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12 place-items-center">
        
          {medals.map((client, index) => (
            <img
              key={index}
              src={client.src}
              alt={client.alt || "client logo"}
              className="w-full object-contain h-50"
            />
          ))}
        </div>

          
    </div>

    </div>
  );
}