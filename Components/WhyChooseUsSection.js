import WhyChooseUsLotties from "@/Components/WhyChooseUsLotties";

async function getWhyChooseUs() {
  const res = await fetch("https://bcom-api.on-forge.com/api/page/home", {
    cache: "no-store",
  });

  return res.json();
}

export default async function WhyChooseUsSection() {
  const home = await getWhyChooseUs();

  const whyChooseUs = home.data.sections.find(
    (section) => section.handle === "home-section-list-7"
  );


  const updatedList = await Promise.all(
    whyChooseUs.details.list.map(async (item) => {
      const lottieRes = await fetch(item.image);
      const lottieJson = await lottieRes.json();

      return {
        ...item,
        lottie: lottieJson,
      };
    })
  );

  whyChooseUs.details.list = updatedList;

  return (
    <main>
      <WhyChooseUsLotties data={whyChooseUs} />
    </main>
  );
}
