import Services from "@/Components/Services";

async function getData() {
  const res = await fetch("https://bcom-api.on-forge.com/api/page/home", { cache: "no-store" });
  return res.json();
}

export default async function ServicesSection() {
  const home = await getData();
  const sections = home.data.sections;

  const textSection = sections.find(s => s.handle === "home-section-image-3");
  const statSection = sections.find(s => s.handle === "home-section-image-4");
  const leftList = sections.find(s => s.handle === "home-section-list-64");
  const rightList = sections.find(s => s.handle === "home-section-list-5");

  return (
    <div className="overflow-hidden">
    <Services
      textSection={textSection}
      statSection={statSection}
      leftImages={leftList.details.list}
      rightImages={rightList.details.list}
    />
    </div>
  );
}