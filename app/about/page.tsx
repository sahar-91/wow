import AboutUs from "@/Components/AboutUs";
import WhatMoviesAreOnWow from "@/Components/WhatMoviesAreOnWow";

export default async function AboutPage() {
  const res = await fetch(
    "https://hanzo.dxpshift.com/api/page/our-story",
    { cache: "no-store" }
  );

  const json = await res.json();

  return (
    <div className="overflow-x-clip">
      <WhatMoviesAreOnWow />
      <AboutUs sections={json.data.sections} />
      
    </div>
  );
}