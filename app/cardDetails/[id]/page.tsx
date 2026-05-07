import Link from "next/link";
type PageProps = {
  params: Promise<{ id: string }>; 
};

export default async function Page({ params }: PageProps) {

  const { id } = await params;

  const res = await fetch("https://hanzo.dxpshift.com/api/projects");
  const json = await res.json();

  
  const items = json.data;

  const item = items.find(
    (project: any) => project.id.toString() === id
  );

  if (!item) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white">
      
      <div className="container mx-auto max-w-[1440px] px-4 md:px-60 ">
        
        
        <Link 
          href="/" 
          className="inline-block mb-4 text-gray-400  hover:text-white "
        >
          ← Back 
        </Link>

        
        <div className="w-full mb-10">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full object-cover" 
          />
        </div>

        
        <div>
          <h1 className="text-4xl md:text-2xl font-bold uppercase text-center">
            {item.title}
          </h1>
          <div className="h-[2px] w-[50px] bg-white my-6" />
          <div className="flex gap-4 mb-6 justify-between">
        <div>
          <p className="text-md">
            {item.description}
          </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm py-4 border-b-1 border-gray-400/25 ">CLIENT: {item.client}</p>
            <p className="text-sm py-4 border-b-1 border-gray-400/25">DIRECTOR: {item.directors}</p>

            <p className="text-sm py-4 border-b-1 border-gray-400/25">DP: {item.cinematographer}</p>

            <p className="text-sm py-4 border-b-1 border-gray-400/25">AGENCY: {item.agency}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
