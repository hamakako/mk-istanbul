import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import dubaiHero from "@/assets/images/dubai-hero.png";
import istanbulHero from "@/assets/images/istanbul-hero.png";
import { cityGuides } from "@/data/cities";

const heroImages: Record<string, StaticImageData> = {
  istanbul: istanbulHero,
  dubai: dubaiHero
};

export default function HomePage() {
  return (
    <main>
      <section className="bg-mk-cream/45 py-12 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-mk-cyan">MK Business and Travel</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.25] text-mk-navy sm:text-5xl">
              ڕێنمای گەشتی کوردی بۆ ئیستەنبول و دوبەی
            </h1>
            <p className="mt-5 text-base leading-8 text-mk-ink/76">
              پلانی ڕۆژانە بە ناوچەی نزیک، ڕێنمایی “چۆن بچیت؟”، ڕێگای Google Maps، کافە و رێستوران بۆ
              بودجەی جیاواز، و زانیاری گونجاو بۆ گەشتیارانی کورد.
            </p>
            <p className="mt-4 inline-flex rounded-md border border-mk-cyan bg-white px-4 py-2 text-sm font-bold text-mk-navy">
              نوێ: پەڕەی دوبەی زیاد کراوە و پلانی ئیستەنبولیش بە شوێنە نزیکەکان ڕێکخراوە.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/istanbul"
                className="rounded-md bg-mk-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-mk-cyan hover:text-mk-navy focus-visible:focus-ring"
              >
                پلانی ئیستەنبول
              </Link>
              <Link
                href="/dubai"
                className="rounded-md bg-mk-cyan px-5 py-3 text-sm font-bold text-mk-navy transition hover:bg-white focus-visible:focus-ring"
              >
                پلانی دوبەی
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {cityGuides.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group overflow-hidden rounded-md border border-mk-line bg-white shadow-soft transition hover:-translate-y-1 hover:border-mk-cyan"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={heroImages[city.slug]} alt={city.heroAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-mk-navy/82 via-mk-navy/12 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-5 text-white">
                    <p className="text-sm font-bold text-mk-cyan">{city.nameEn}</p>
                    <h2 className="mt-1 text-2xl font-bold">{city.nameKu}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-7 text-mk-ink/72">{city.subtitle}</p>
                  <span className="mt-4 inline-flex rounded-md bg-mk-cream px-4 py-2 text-sm font-bold text-mk-navy">
                    بینینی پلانی گەشت
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "ناوچە بە ناوچە", text: "هەر ڕۆژ شوێنە نزیکەکان لە پێکەوە دانراون." },
            { title: "ڕێگای زیرەک", text: "GPS، شوێنی دەستکرد و جۆری ڕێگا لە Google Maps." },
            { title: "خواردن و قاوە", text: "هەڵبژاردنی ئابووری، مامناوەند و گران بۆ هەر شار." }
          ].map((item) => (
            <article key={item.title} className="rounded-md border border-mk-line bg-white p-5 shadow-soft">
              <h2 className="text-xl font-bold text-mk-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-mk-ink/72">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
