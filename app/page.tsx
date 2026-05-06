import NavBar from "@/Components/NavBar";
import Banner from "@/Components/Banner";
import GridHomePage from "@/Components/GridHomePage";
import ContactUsHero from "@/Components/ContactUsHero";
import Footer from "@/Components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-ink">
      <NavBar />
      <Banner />
      <GridHomePage />
      <ContactUsHero />
      <Footer />
    </main>
     
  );
}