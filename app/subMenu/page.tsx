import SubMenuBanner from "@/Components/subMenuBanner";
import SubMenuNav from "@/Components/subMenuNav";
import SubMenuAboutSec from "@/Components/subMenuAboutSec";
import SubMenuPartnersSec from "@/Components/subMenuPartnersSec";
import SubMenuSustainSec from "@/Components/subMenuSustainSec";

export default function subMenuPage() {
  return (
    <main>
      <SubMenuBanner />

      <SubMenuNav />

      <SubMenuAboutSec />
        <SubMenuSustainSec />
        <SubMenuPartnersSec />




        </main>
  );
}