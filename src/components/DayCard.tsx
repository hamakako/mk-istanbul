import KurdishRouteGuide from "@/components/KurdishRouteGuide";
import SmartRouteButton from "@/components/SmartRouteButton";
import type { ItineraryDay } from "@/types/travel";

type DayCardProps = {
  day: ItineraryDay;
};

export default function DayCard({ day }: DayCardProps) {
  return (
    <article className="print-card rounded-md border border-mk-line bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-teal">ڕۆژی {day.day}</p>
          <h2 className="mt-1 text-2xl font-bold text-mk-navy">{day.title}</h2>
          <p className="mt-2 text-sm font-bold text-mk-ink/70">{day.area}</p>
        </div>
        <SmartRouteButton
          destinationName={day.destinationName}
          destinationCoordinates={day.destinationCoordinates}
          attractionName={`ڕۆژی ${day.day}: ${day.title}`}
        />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <section className="rounded-md border border-mk-line p-4">
          <h3 className="font-bold text-mk-navy">بەیانی</h3>
          <p className="mt-2 text-sm leading-7 text-mk-ink/76">{day.morning}</p>
        </section>
        <section className="rounded-md border border-mk-line p-4">
          <h3 className="font-bold text-mk-navy">نیوەڕۆ</h3>
          <p className="mt-2 text-sm leading-7 text-mk-ink/76">{day.afternoon}</p>
        </section>
        <section className="rounded-md border border-mk-line p-4">
          <h3 className="font-bold text-mk-navy">ئێوارە</h3>
          <p className="mt-2 text-sm leading-7 text-mk-ink/76">{day.evening}</p>
        </section>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="font-bold text-mk-navy">شوێنە پێشنیارکراوەکان</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {day.attractions.map((attraction) => (
              <span key={attraction} className="rounded-md bg-mk-teal/18 px-3 py-1.5 text-sm font-bold text-mk-navy">
                {attraction}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-sm leading-7 text-mk-ink/76">
          <p>
            <span className="font-bold text-mk-navy">خواردن / شۆپینگ: </span>
            {day.food}
          </p>
          <p>
            <span className="font-bold text-mk-navy">کاتی گەڕان: </span>
            {day.travelTime}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <KurdishRouteGuide guide={day.routeGuide} />
      </div>
    </article>
  );
}
