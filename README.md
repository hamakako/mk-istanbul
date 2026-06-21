# MK Kurdish Travel Guide

ماڵپەڕێکی Next.js + TypeScript + Tailwind CSS بە زمانی کوردی سۆرانی بۆ گەشتیارانی MK Business and Travel.
ئێستا دوو پەڕەی سەرەکی هەیە: ئیستەنبول و دوبەی.

## دامەزراندن

```bash
npm install
```

## کارپێکردنی ناوخۆیی

```bash
npm run dev
```

پاشان ئەم ناونیشانە بکەرەوە:

```text
http://localhost:3000
```

## زیادکردنی Google Maps API key

فایلی `.env.example` بکۆپی بکە بۆ `.env.local` و کلیلی خۆت دابنێ:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_BASE_PATH=
GEMINI_API_KEY=
GEMINI_MODEL=gemini-3.5-flash
```

کاتێک کلیلی Google Maps زیاد دەکرێت:

- Google Places Autocomplete لە شوێنی دەستکرد چالاک دەبێت.
- دیاریکردنی شوێن لەسەر ماپ چالاک دەبێت.
- ماپی شوێنە گرنگەکان بە marker پیشان دەدرێت.

ئەگەر کلیل زیاد نەکرێت، دوگمەی ڕێگا هێشتا کار دەکات و شوێنی دەستکرد ڕاستەوخۆ بۆ Google Maps directions دەنێرێت.

## Gemini AI

ماڵپەڕەکە لە GitHub Pages وەک static site بڵاو دەکرێتەوە، بۆیە کلیلی Gemini نابێت لە کۆدی client یان `NEXT_PUBLIC_*` دابنرێت. بۆ بەکارهێنانی Gemini بە شێوەی پارێزراو:

1. لە GitHub بچۆ بۆ `Settings` → `Secrets and variables` → `Actions`.
2. secret ـێکی نوێ بە ناوی `GEMINI_API_KEY` زیاد بکە.
3. GitHub Actions پێش build ئەم فەرمانە دەکات:

```bash
npm run ai:insights
```

ئەگەر کلیلی Gemini نەبوو یان هەڵە بوو، سایتەکە هێشتا بە fallback ـی کوردی build دەبێت.

## بڵاوکردنەوە بە GitHub Pages بەخۆڕایی

ئەم پرۆژەیە ئامادەکراوە بۆ GitHub Pages و فایلەکەی لێرەیە:

```text
.github/workflows/deploy.yml
```

هەنگاوەکان:

1. لە GitHub ریپۆیەکی نوێ دروست بکە.
2. هەموو فایلەکانی ئەم پرۆژەیە بخەرە ناو ریپۆکە.
3. بچۆ بۆ `Settings` → `Pages`.
4. لە `Build and deployment`، سەرچاوەکە بکە بە `GitHub Actions`.
5. فایلەکان `push` بکە بۆ برانچی `main`.
6. GitHub Actions خۆکارانە `npm ci` و `npm run build` دەکات و فولدەری `out` بڵاو دەکاتەوە.

ئەگەر ناوی ریپۆکەت `username.github.io` بێت، ماڵپەڕەکە لە ڕیشەی دۆمەینەکە دەردەکەوێت. ئەگەر ریپۆیەکی ئاسایی بێت، وەک `mk-istanbul`، ماڵپەڕەکە بە شێوەی `https://username.github.io/mk-istanbul/` دەردەکەوێت.

ئەگەر دۆمەینی تایبەت بەکار دەهێنیت و ناتەوێت ناوی ریپۆ لە URL ـدا بێت، لە GitHub Actions یان `.env.local` ئەمە بەتاڵ بهێڵە:

```bash
NEXT_PUBLIC_BASE_PATH=
```

## گۆڕینی لۆگۆ

لۆگۆی MK لەم شوێنەدایە:

```text
src/assets/images/mk-logo.png
```

فایلەکە بە وێنەی نوێ جێگرەوە بکە و ناوی هەمان بهێڵە.

## فۆنت

فۆنتەکانی UniSIRWAN Noor لە `src/assets/fonts` دانراون و بە `next/font/local` لە `src/app/fonts.ts` بار دەکرێن.

## پێکهاتە گرنگەکان

- `src/components/SmartRouteButton.tsx`
- `src/components/LocationInput.tsx`
- `src/components/RouteModeSelector.tsx`
- `src/components/KurdishRouteGuide.tsx`
- `src/components/CityGuidePage.tsx`
- `src/components/FoodGuide.tsx`
- `src/components/TrendGuide.tsx`
- `src/components/DayCard.tsx`
- `src/components/AttractionCard.tsx`

## پشکنین

```bash
npm run typecheck
npm run build
```
