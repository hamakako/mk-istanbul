import AttractionsExplorer from "@/components/AttractionsExplorer";
import { cityGuideBySlug } from "@/data/cities";

export default function AttractionsPage() {
  const city = cityGuideBySlug.istanbul;

  return (
    <main className="container-page py-10">
      <section className="mb-8">
        <p className="text-sm font-bold text-mk-teal">شوێنە گرنگەکان</p>
        <h1 className="mt-2 text-4xl font-bold text-mk-navy">گەشتی ئیستەنبول بە ڕێنمایی کوردی</h1>
        <p className="mt-3 max-w-3xl text-base leading-8 text-mk-ink/76">
          ئەم پەڕەیە وەک alias ـی شوێنە گرنگەکانی ئیستەنبول ماوەتەوە؛ پەڕەی نوێی سەرەکی `/istanbul` ـە.
        </p>
      </section>

      <AttractionsExplorer city={city} />
    </main>
  );
}
