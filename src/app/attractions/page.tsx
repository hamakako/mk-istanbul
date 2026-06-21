import AttractionsExplorer from "@/components/AttractionsExplorer";

export default function AttractionsPage() {
  return (
    <main className="container-page py-10">
      <section className="mb-8">
        <p className="text-sm font-bold text-mk-teal">شوێنە گرنگەکان</p>
        <h1 className="mt-2 text-4xl font-bold text-mk-navy">گەشتی ئیستەنبول بە ڕێنمایی کوردی</h1>
        <p className="mt-3 max-w-3xl text-base leading-8 text-mk-ink/76">
          هەر کارتی شوێنەکان وەسف، کاتی سەردان، ناوچە، ڕێنمایی “چۆن بچیت؟” و دوگمەی ڕێگا پیشان دەدات.
        </p>
      </section>

      <AttractionsExplorer />
    </main>
  );
}
