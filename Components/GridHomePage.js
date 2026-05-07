export default async function GridHomePage() {
    const data = await fetch('https://hanzo.dxpshift.com/api/projects');
    const project = await data.json();
    const items = project.data
    
    return (
        <div className="bg-black">
            <div className="container mx-auto max-w-[1440px] px-4 md:px-60">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 items-start">
                    {items.map((item) => (
                        <div key={item.id} className="bg-black cursor-pointer mb-5 h-auto overflow-clip">
                            <div className="w-full h-full overflow-hidden">
                            <img src={item.image} alt={item.title} className=" object-cover transform ease-in duration-300 hover:scale-125" />
                            </div>
                            <div className="py-4">
                        <h5 className="text-xl font-bold text-white">{item.title}</h5>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
    );
}
