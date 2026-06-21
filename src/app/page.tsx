import Image from "next/image";
import Link from "next/link";
import SmartRouteButton from "@/components/SmartRouteButton";
import istanbulHero from "@/assets/images/istanbul-hero.png";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src={istanbulHero}
          alt="دیمەنی ئیستەنبول و Bosphorus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-mk-navy/88 via-mk-navy/64 to-mk-navy/18" />
        <div className="container-page relative flex min-h-[620px] items-center py-16">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-bold text-mk-teal">MK Business and Travel</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.25] sm:text-5xl">پلانێکی ١٠ ڕۆژی ئیستەنبول</h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-white/86">
              ئەم ڕێنماییە یارمەتیت دەدات ئیستەنبول بە ئاسانی بگەڕێیت: پلانی ڕۆژانە، شوێنە گرنگەکان،
              ڕێنمایی بە زمانی کوردی و ڕێگای Google Maps بۆ هەر شوێنێک.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/itinerary"
                className="rounded-md bg-mk-teal px-5 py-3 text-sm font-bold text-mk-navy transition hover:bg-white focus-visible:focus-ring"
              >
                بینینی پلانی گەشت
              </Link>
              <Link
                href="/attractions"
                className="rounded-md border border-white/72 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-mk-navy focus-visible:focus-ring"
              >
                شوێنە گرنگەکان
              </Link>
              <a
                href="tel:07500229292"
                className="rounded-md border border-mk-teal px-5 py-3 text-sm font-bold text-mk-teal transition hover:bg-mk-teal hover:text-mk-navy focus-visible:focus-ring"
              >
                پەیوەندی بە MK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "پلانی ڕۆژانە", text: "هەر ڕۆژ بە بەیانی، نیوەڕۆ و ئێوارە ڕێکخراوە." },
            { title: "ڕێنمایی چۆن بچیت", text: "بۆ هەر شوێن ڕێنمایی سادهی کوردی هەیە." },
            { title: "ڕێگای زیرەک", text: "شوێنی ئێستات یان شوێنی دەستکرد بەکاربهێنە." }
          ].map((item) => (
            <article key={item.title} className="rounded-md border border-mk-line bg-white p-5 shadow-soft">
              <h2 className="text-xl font-bold text-mk-navy">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-mk-ink/72">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mk-cream/60 py-12">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-mk-teal">ڕێگای خێرا</p>
            <h2 className="mt-2 text-3xl font-bold text-mk-navy">سەرەتا هەڵبژێرە لە کوێوە دەست پێ دەکەیت</h2>
            <p className="mt-4 text-base leading-8 text-mk-ink/78">
              گەشتیار دەتوانێت شوێنی ئێستای بە GPS بەکاربهێنێت، یان شوێنی خۆی بە دەست بنووسێت و دواتر
              Google Maps باشترین ڕێگا پیشان دەدات.
            </p>
          </div>
          <div className="rounded-md border border-mk-line bg-white p-5 shadow-soft">
            <h3 className="text-xl font-bold text-mk-navy">نموونە: ڕێگا بۆ Sultanahmet</h3>
            <p className="mt-2 text-sm leading-7 text-mk-ink/72">
              ئەگەر تازە لە ئیستەنبولیت، دوگمەکە بکە و جۆری ڕێگا هەڵبژێرە.
            </p>
            <div className="mt-4">
              <SmartRouteButton
                destinationName="Sultanahmet Square Istanbul"
                destinationCoordinates={{ lat: 41.006, lng: 28.9768 }}
                attractionName="Sultanahmet"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="rounded-md border border-mk-line bg-white p-6 shadow-soft">
          <p className="text-sm font-bold text-mk-teal">زانیاری کۆمپانیا</p>
          <h2 className="mt-1 text-2xl font-bold text-mk-navy">MK Business and Travel</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-mk-ink/76 md:grid-cols-3">
            <p>
              <span className="font-bold text-mk-navy">ناونیشان: </span>
              Grand Swiss Hotel, Ground Floor, Pirmam
            </p>
            <p>
              <span className="font-bold text-mk-navy">تەلەفۆن: </span>
              07500229292
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Grand%20Swiss%20Hotel%20Ground%20Floor%20Pirmam"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-mk-navy underline decoration-mk-teal decoration-2 underline-offset-4"
            >
              ناونیشان لە Google Maps بکەرەوە
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
