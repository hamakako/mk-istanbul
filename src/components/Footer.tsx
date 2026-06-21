export default function Footer() {
  return (
    <footer className="mt-16 border-t border-mk-line bg-mk-navy text-white">
      <div className="container-page grid gap-6 py-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">MK Business and Travel</h2>
          <p className="mt-2 text-sm leading-7 text-white/78">
            ڕێنماییەکی ساده و ڕوون بۆ ئەو گەشتیارانەی دەیانەوێت ئیستەنبول بە ئاسانی بگەڕێن.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-mk-teal">ناونیشان</h3>
          <p className="mt-2 text-sm leading-7 text-white/82">Grand Swiss Hotel, Ground Floor, Pirmam</p>
        </div>
        <div>
          <h3 className="font-bold text-mk-teal">پەیوەندی</h3>
          <a className="mt-2 inline-block text-lg font-bold" href="tel:07500229292">
            07500229292
          </a>
        </div>
      </div>
    </footer>
  );
}
