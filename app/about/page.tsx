import AboutUs from "@/Components/AboutUs";

export default function about() {
      const clients = [
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970779sab_logo.svg", alt: "sab logo" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970810dp_world.svg", alt: "dp world" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970836mcdonalds.svg", alt: "mcdonalds" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970858ethihad.svg", alt: "ethihad" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970913dalmia.svg", alt: "dalmia" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716970948careem.svg", alt: "careem" },
  ];
  const awards = [
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716971923award_1.svg", alt: "award 1" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716971969award_2.svg", alt: "award 2" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716971977award_3.svg", alt: "award 3" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/1716971987award_4.svg", alt: "award 4" },
];
    const medals = [
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169721221_grand_pix.svg", alt: "medal 1" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169721582_silver_dubai_lynx.svg", alt: "medal 2" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169722253_gold_loeries_2020_ikea.svg", alt: "medal 3" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169722424_gold_loeries_2020_apsara_pearl.svg", alt: "medal 4" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169722605_bronze_lynx_best_cinematography_bridgestone.svg", alt: "medal 5" },
    { src: "https://hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com/sections/gallery/en/17169722796_sliver_lynx_2020_best_direction_bridgestone.svg", alt: "medal 6" },
]
  return <AboutUs clients={clients} awards={awards} medals={medals}/>;
}