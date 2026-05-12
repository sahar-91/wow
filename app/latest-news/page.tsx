import LatestNews from "@/Components/LatestNews";

async function getNews() {
  const res = await fetch("https://hanzo.dxpshift.com/api/page/news", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const response = await getNews();

  return <LatestNews data={response.data} />;
}