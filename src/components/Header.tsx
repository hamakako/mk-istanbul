import Image from "next/image";
import Link from "next/link";
import mkLogo from "@/assets/images/mk-logo.png";

const navItems = [
  { href: "/", label: "سەرەکی" },
  { href: "/istanbul", label: "ئیستەنبول" },
  { href: "/dubai", label: "دوبەی" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-mk-line/80 bg-white/92 backdrop-blur">
      <div className="container-page flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-md border border-mk-line bg-white">
            <Image
              src={mkLogo}
              alt="MK Business and Travel"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
          </span>
          <span>
            <span className="block text-lg font-bold text-mk-navy">MK Business and Travel</span>
            <span className="block text-sm text-mk-ink/72">ڕێنمای گەشتی کوردی</span>
          </span>
        </Link>

        <nav aria-label="پەڕەکان" className="flex flex-wrap items-center gap-2 text-sm font-bold text-mk-navy">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-transparent px-3 py-2 transition hover:border-mk-teal hover:bg-mk-teal/16 focus-visible:focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
