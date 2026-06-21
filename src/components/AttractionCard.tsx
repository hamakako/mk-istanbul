import KurdishRouteGuide from "@/components/KurdishRouteGuide";
import SmartRouteButton from "@/components/SmartRouteButton";
import type { Attraction } from "@/types/travel";

type AttractionCardProps = {
  attraction: Attraction;
};

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <article className="print-card flex h-full flex-col rounded-md border border-mk-line bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="rounded-md bg-mk-teal/18 px-3 py-1 text-xs font-bold text-mk-navy">{attraction.category}</span>
          <h2 className="mt-3 text-2xl font-bold text-mk-navy">{attraction.nameKu}</h2>
          <p className="mt-1 text-sm font-bold text-mk-ink/60">{attraction.nameEn}</p>
        </div>
        <SmartRouteButton
          destinationName={attraction.destinationName}
          destinationCoordinates={attraction.coordinates}
          attractionName={`${attraction.nameKu} - ${attraction.nameEn}`}
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
    </article>
  );
}
