import DayCard from "@/components/DayCard";
import PrintButton from "@/components/PrintButton";
import { itineraryDays } from "@/data/itinerary";

export default function ItineraryPage() {
  return (
    <main className="container-page py-10">
      <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-teal">پلانی گەشت</p>
          <h1 className="mt-2 text-4xl font-bold text-mk-navy">پلانی ١٠ ڕۆژی ئیستەنبول</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-mk-ink/76">
            هەر ڕۆژ لەگەڵ ڕێنمایی “چۆن بچیت؟” و دوگمەی “ڕێگا پیشان بدە” هاتووە، بۆ ئەوەی گەشتیار بە
            ئاسانی لە شوێنی ئێستای یان شوێنی دەستکردەوە ڕێگا بکاتەوە.
          </p>
        </div>
        <PrintButton />
      </section>

      <div className="space-y-6">
        {itineraryDays.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </div>
    </main>
  );
}
