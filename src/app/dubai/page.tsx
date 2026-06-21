import CityGuidePage from "@/components/CityGuidePage";
import { cityGuideBySlug } from "@/data/cities";
import dubaiHero from "@/assets/images/dubai-hero.png";

export default function DubaiPage() {
  return <CityGuidePage city={cityGuideBySlug.dubai} heroImage={dubaiHero} />;
}
