import DayCard from "@/components/DayCard";
import PrintButton from "@/components/PrintButton";
import { cityGuideBySlug } from "@/data/cities";

export default function ItineraryPage() {
  const city = cityGuideBySlug.istanbul;

  return (
    <main className="container-page py-10">
      <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-teal">پلانی گەشت</p>
          <h1 className="mt-2 text-4xl font-bold text-mk-navy">پلانی ١٠ ڕۆژی ئیستەنبول</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-mk-ink/76">
            ئەم پەڕەیە وەک alias ـی پلانی ئیستەنبول ماوەتەوە. پلانی نوێ هەر ڕۆژ شوێنە نزیکەکان لە پێکەوە دادەنێت.
          </p>
        </div>
        <PrintButton />
      </section>

      <div className="space-y-6">
        {city.days.map((day) => (
          <DayCard
            key={day.day}
            day={day}
            countryCode={city.countryCode}
            mapCenter={city.mapCenter}
            manualPlaceholder="Taksim Square، Sultanahmet، My hotel in Fatih، Istanbul Airport"
          />
        ))}
      </div>
    </main>
  );
}
