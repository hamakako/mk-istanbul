import CityGuidePage from "@/components/CityGuidePage";
import { cityGuideBySlug } from "@/data/cities";
import istanbulHero from "@/assets/images/istanbul-hero.png";

export default function IstanbulPage() {
  return <CityGuidePage city={cityGuideBySlug.istanbul} heroImage={istanbulHero} />;
}
