
import Banner from "@/Components/Banner";
import GridHomePage from "@/Components/GridHomePage";
import ContactUsHero from "@/Components/ContactUsHero";
import TextOverlayImages from "@/Components/TextOverlayImages";
import WhyChooseUsSection from "@/Components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-ink">
      
      <Banner />
      <TextOverlayImages />
      <GridHomePage />
      <ContactUsHero />
      <WhyChooseUsSection />
      
    </main>
     
  );
}