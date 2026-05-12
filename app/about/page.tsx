import AboutUs from "@/Components/AboutUs";

export default async function AboutPage() {
  const res = await fetch(
    "https://hanzo.dxpshift.com/api/page/our-story",
    { cache: "no-store" }
  );

  const json = await res.json();

  return <AboutUs sections={json.data.sections} />;
}