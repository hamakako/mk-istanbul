import type { StaticImageData } from "next/image";
import Image from "next/image";
import AttractionsExplorer from "@/components/AttractionsExplorer";
import DayCard from "@/components/DayCard";
import FoodGuide from "@/components/FoodGuide";
import PrintButton from "@/components/PrintButton";
import SmartRouteButton from "@/components/SmartRouteButton";
import TrendGuide from "@/components/TrendGuide";
import type { CityGuide } from "@/types/travel";

type CityGuidePageProps = {
  city: CityGuide;
  heroImage: StaticImageData;
};

export default function CityGuidePage({ city, heroImage }: CityGuidePageProps) {
  const firstDay = city.days[0];
  const placeholder =
    city.slug === "dubai"
      ? "Dubai Mall، Deira، My hotel in Marina، Dubai Airport"
      : "Taksim Square، Sultanahmet، My hotel in Fatih، Istanbul Airport";

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden">
        <Image src={heroImage} alt={city.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-l from-mk-navy/90 via-mk-navy/62 to-mk-navy/12" />
        <div className="container-page relative flex min-h-[560px] items-center py-14">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-bold text-mk-cyan">MK Business and Travel</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.25] sm:text-5xl">{city.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-white/86">{city.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#plan"
                className="rounded-md bg-mk-cyan px-5 py-3 text-sm font-bold text-mk-navy transition hover:bg-white focus-visible:focus-ring"
              >
                پلانی ڕۆژانە
              </a>
              <a
                href="#food"
                className="rounded-md border border-white/72 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-mk-navy focus-visible:focus-ring"
              >
                کافە و رێستوران
              </a>
              <SmartRouteButton
                destinationName={firstDay.destinationName}
                destinationCoordinates={firstDay.destinationCoordinates}
                attractionName={firstDay.title}
                countryCode={city.countryCode}
                mapCenter={city.mapCenter}
                manualPlaceholder={placeholder}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {city.quickTips.map((tip) => (
            <div key={tip} className="rounded-md border border-mk-line bg-white p-4 shadow-soft">
              <p className="text-sm font-bold leading-7 text-mk-navy">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plan" className="container-page scroll-mt-24 py-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-mk-cyan">پلانی نزیک بەیەک</p>
            <h2 className="mt-2 text-4xl font-bold text-mk-navy">{city.subtitle}</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-mk-ink/76">
              هەر ڕۆژ لە یەک ناوچە یان شوێنە نزیکەکانە، بۆ ئەوەی کات و پارە لە تاکسی و گواستنەوە زیاد نەخەرج بکرێت.
            </p>
          </div>
          <PrintButton />
        </div>

        <div className="space-y-6">
          {city.days.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              countryCode={city.countryCode}
              mapCenter={city.mapCenter}
              manualPlaceholder={placeholder}
            />
          ))}
        </div>
      </section>

      <div id="food" className="scroll-mt-24">
        <FoodGuide city={city} />
      </div>

      <TrendGuide city={city} />

      <section className="container-page py-12">
        <div className="mb-8">
          <p className="text-sm font-bold text-mk-cyan">شوێنە گرنگەکان</p>
          <h2 className="mt-2 text-4xl font-bold text-mk-navy">گەشتی {city.nameKu} بە ڕێنمایی کوردی</h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-mk-ink/76">
            هەر کارت وەسف، کاتی سەردان، ناوچە، “چۆن بچیت؟” و دوگمەی Google Maps هەیە.
          </p>
        </div>
        <AttractionsExplorer city={city} />
      </section>
    </main>
  );
}
