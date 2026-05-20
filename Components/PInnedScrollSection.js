import PinnedScroll from "@/Components/PinnedScroll";

async function getPinnedData() {
  const res = await fetch("https://bcom-api.on-forge.com/api/page/home", {
    cache: "no-store",
  });
  return res.json();
}

export default async function PinnedScrollSection() {
  const home = await getPinnedData();

  const pinnedSection = home.data.sections.find(
    (section) => section.handle === "home-section-list-1"
  );

  const updatedList = await Promise.all(
    pinnedSection.details.list.map(async (item) => {
      const lottieRes = await fetch(item.image);
      const lottieJson = await lottieRes.json();
      return { ...item, lottie: lottieJson };
    })
  );

  pinnedSection.details.list = updatedList;

  return <PinnedScroll data={pinnedSection} />;
}