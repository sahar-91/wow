
import Banner from "@/Components/Banner";
import GridHomePage from "@/Components/GridHomePage";
import ContactUsHero from "@/Components/ContactUsHero";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-ink">
      
      <Banner />
      <GridHomePage />
      <ContactUsHero />
      
    </main>
     
  );
}