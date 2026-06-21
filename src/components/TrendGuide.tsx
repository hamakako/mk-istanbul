import type { CityGuide } from "@/types/travel";
import aiInsights from "@/data/ai-insights.json";

type TrendGuideProps = {
  city: CityGuide;
};

export default function TrendGuide({ city }: TrendGuideProps) {
  const generatedTrends = aiInsights[city.slug as keyof typeof aiInsights];
  const trends = generatedTrends.length > 0 ? generatedTrends : city.monthlyTrends;

  return (
    <section className="bg-mk-cream/55 py-12">
      <div className="container-page">
        <div className="mb-6">
          <p className="text-sm font-bold text-mk-cyan">ترێندی نوێ</p>
          <h2 className="mt-1 text-3xl font-bold text-mk-navy">ترێندی ئەم مانگە بۆ {city.nameKu}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-mk-ink/72">
            ئەم بەشە بە شێوەی ڕێنمایی زیرەک ڕێکخراوە بۆ گەشتیاری کورد. کات و نرخ و حجز هەمیشە لە Google Maps
            یان شوێنی فەرمی چێک بکە.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {trends.map((trend) => (
            <article key={trend.title} className="rounded-md border border-mk-line bg-white p-5 shadow-soft">
              <h3 className="text-xl font-bold text-mk-navy">{trend.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mk-ink/76">{trend.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trend.badges.map((badge) => (
                  <span key={badge} className="rounded-md bg-mk-cyan/16 px-3 py-1.5 text-xs font-bold text-mk-navy">
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
