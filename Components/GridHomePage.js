export default function GridHomePage() {
    const items = [
    
        {title: 'Fizz the World', description: 'Pepsi expo 2022 campaign' , image: 'https://mindspace-me.com/storage/Project/images/ZQYgKfuZZ4jPfBId9Z8JJOcg5RaXRYAZcVj2D4Xp.jpg' },
        {title: 'A Display To Inspire The Every Day Chef', description: 'We created our bespoke, modular displays can be arranged in countless configurations' , image: 'https://mindspace-me.com/storage/Project/images/6gNTt5HYqPl7cGfTWMeAK9XCib0tUpglWn4klfDl.jpg' },
        {title: 'The Optimum Nutrition For The Optimum Challenge', description: 'We designed a cardboard sleeve to turn the bottle into a playful superhero, making it appealing to kids aged 6 and over.' , image: 'https://mindspace-me.com/storage/Project/images/6yLhVRQZfn6zEqWkHFlbZzuNzM60zWW3BbYgn9Zr.jpg' },
        {title: 'Biodegradable Product in an Eco-friendly Space', description: 'For Nivea’s new range of biodegradable wipes, we found the perfect balance between highlighting their green credentials without casting any doubt about their make-up removal efficacy.' , image: 'https://mindspace-me.com/storage/Project/images/uCHr4HcezvZr4wzEsL3dxzzh2iTSI56cFIBiwHkm.jpg' },
    ];
    return (
        <div className="bg-black">
            <div className="container mx-auto max-w-[1440px] px-75">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-start">
                    {items.map((item, index) => (
                        <div key={index} className="bg-black cursor-pointer mb-5 height-auto overflow-clip">
                            <div className="w-full h-64 overflow-hidden">
                            <img src={item.image} alt={item.title} className=" object-fit transform ease-in duration-300 hover:scale-125" />
                            </div>
                            <div className="p-4">
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
