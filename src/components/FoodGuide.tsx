import SmartRouteButton from "@/components/SmartRouteButton";
import type { CityGuide, FoodBudget, FoodSpot } from "@/types/travel";

type FoodGuideProps = {
  city: CityGuide;
};

const budgetLabels: Record<FoodBudget, string> = {
  cheap: "ئابووری",
  mid: "مامناوەند",
  premium: "گران / تایبەت"
};

const budgetClasses: Record<FoodBudget, string> = {
  cheap: "bg-mk-cyan/16 text-mk-navy",
  mid: "bg-mk-cream text-mk-navy",
  premium: "bg-mk-navy text-white"
};

function FoodCard({ spot, city }: { spot: FoodSpot; city: CityGuide }) {
  const placeholder =
    city.slug === "dubai"
      ? "Dubai Mall، Deira، My hotel in Marina، Dubai Airport"
      : "Taksim Square، Sultanahmet، My hotel in Fatih، Istanbul Airport";

  return (
    <article className="flex h-full flex-col rounded-md border border-mk-line bg-white p-4 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`rounded-md px-3 py-1 text-xs font-bold ${budgetClasses[spot.budget]}`}>
            {budgetLabels[spot.budget]}
          </span>
          <h3 className="mt-3 text-xl font-bold text-mk-navy">{spot.name}</h3>
          <p className="mt-1 text-sm font-bold text-mk-ink/62">{spot.area} - {spot.typeKu}</p>
        </div>
      </div>
      <p className="mt-3 flex-1 text-sm leading-7 text-mk-ink/76">{spot.note}</p>
      <div className="mt-4">
        <SmartRouteButton
          destinationName={spot.destinationName}
          destinationCoordinates={spot.coordinates}
          attractionName={spot.name}
          countryCode={city.countryCode}
          mapCenter={city.mapCenter}
          manualPlaceholder={placeholder}
        />
      </div>
    </article>
  );
}

export default function FoodGuide({ city }: FoodGuideProps) {
  const cheapAndMid = city.foodSpots.filter((spot) => spot.budget !== "premium");
  const premium = city.foodSpots.filter((spot) => spot.budget === "premium");

  return (
    <section className="container-page py-12">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-cyan">کافە و چێشتخانە</p>
          <h2 className="mt-1 text-3xl font-bold text-mk-navy">هەڵبژاردنی ئابووری و گران</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-mk-ink/70">
          ئەمانە هەڵبژاردنی پێشنیارکراون بۆ گەشتیار. پێش چوون کات، حجز و نرخی نوێ چێک بکە.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="mb-3 text-lg font-bold text-mk-navy">ئابووری و مامناوەند</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {cheapAndMid.map((spot) => (
              <FoodCard key={spot.id} spot={spot} city={city} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-bold text-mk-navy">گران / تایبەت</h3>
          <div className="grid gap-4">
            {premium.map((spot) => (
              <FoodCard key={spot.id} spot={spot} city={city} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
