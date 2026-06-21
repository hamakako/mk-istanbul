import Image from "next/image";
import KurdishRouteGuide from "@/components/KurdishRouteGuide";
import SmartRouteButton from "@/components/SmartRouteButton";
import type { Attraction, Coordinates, CountryCode } from "@/types/travel";

type AttractionCardProps = {
  attraction: Attraction;
  countryCode?: CountryCode;
  mapCenter?: Coordinates;
  manualPlaceholder?: string;
};

export default function AttractionCard({ attraction, countryCode, mapCenter, manualPlaceholder }: AttractionCardProps) {
  return (
    <article className="print-card flex h-full flex-col overflow-hidden rounded-md border border-mk-line bg-white shadow-soft">
      {attraction.image ? (
        <div className="relative aspect-[16/9] bg-mk-cream">
          <Image
            src={attraction.image}
            alt={attraction.imageAlt || attraction.nameEn}
            fill
            className="object-cover transition duration-500 hover:scale-[1.03]"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mk-navy/72 via-mk-navy/8 to-transparent" />
          <span className="absolute right-4 top-4 rounded-md bg-white/92 px-3 py-1 text-xs font-bold text-mk-navy">
            {attraction.category}
          </span>
          <div className="absolute bottom-0 right-0 p-4 text-white">
            <h2 className="text-2xl font-bold">{attraction.nameKu}</h2>
            <p className="mt-1 text-sm font-bold text-white/76">{attraction.nameEn}</p>
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          {!attraction.image ? (
            <div>
              <span className="rounded-md bg-mk-teal/18 px-3 py-1 text-xs font-bold text-mk-navy">{attraction.category}</span>
              <h2 className="mt-3 text-2xl font-bold text-mk-navy">{attraction.nameKu}</h2>
              <p className="mt-1 text-sm font-bold text-mk-ink/60">{attraction.nameEn}</p>
            </div>
          ) : (
            <div>
              <p className="text-sm font-bold text-mk-cyan">{attraction.area}</p>
              <p className="mt-1 text-xs font-bold text-mk-ink/58">{attraction.category}</p>
            </div>
          )}
          <SmartRouteButton
            destinationName={attraction.destinationName}
            destinationCoordinates={attraction.coordinates}
            attractionName={`${attraction.nameKu} - ${attraction.nameEn}`}
            countryCode={countryCode}
            mapCenter={mapCenter}
            manualPlaceholder={manualPlaceholder}
          />
        </div>

        <p className="mt-4 text-sm leading-7 text-mk-ink/76">{attraction.description}</p>

        <div className="mt-4 grid gap-2 text-sm leading-6 text-mk-ink/72 sm:grid-cols-2">
          <p>
            <span className="font-bold text-mk-navy">کاتی سەردان: </span>
            {attraction.visitTime}
          </p>
          <p>
            <span className="font-bold text-mk-navy">ناوچە: </span>
            {attraction.area}
          </p>
        </div>

        <div className="mt-5">
          <KurdishRouteGuide guide={attraction.routeGuide} />
        </div>
      </div>
    </article>
  );
}
