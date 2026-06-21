import type { ItineraryDay } from "@/types/travel";

export const itineraryDays: ItineraryDay[] = [
  {
    day: 1,
    title: "گەیشتن و ناسینی ناوەندی شار",
    area: "Taksim، Istiklal Street، Galata Tower",
    morning: "گەیشتن بۆ ئیستەنبول، گواستنەوە بۆ هۆتێل و وەرگرتنی ژوور.",
    afternoon: "گەڕانێکی ئارام لە Taksim و سەرەتای Istiklal Street.",
    evening: "چوون بۆ Galata Tower و دواتر نانخواردنی شەوانە لە ناوچەکە.",
    attractions: ["Taksim Square", "Istiklal Street", "Galata Tower"],
    food: "کافە یان چێشتخانەیەکی نزیک بە Istiklal هەڵبژێرە بۆ ڕۆژی یەکەم.",
    travelTime: "٢ تا ٤ کاتژمێر گەڕان، بە پێی کاتی گەیشتن.",
    destinationName: "Taksim Square Istanbul",
    destinationCoordinates: { lat: 41.037, lng: 28.985 },
    routeGuide: {
      overview:
        "ئەگەر تازە گەیشتوویت، ڕۆژی یەکەم بە ناوچەی Taksim دەست پێ بکە چونکە ناسراو و ئاسانە. ئەگەر شتت لەگەڵە، سەرەتا بچۆ هۆتێل و پاشان ڕێگا بکەرەوە.",
      steps: [
        "لە هۆتێل یان فڕۆکەخانەوە دوگمەی ڕێگا پیشان بدە بکە.",
        "بۆ خێزان یان کەسانی ماندوو، تاکسی ئاسانترە.",
        "لە Taksim دابەزە و بە پیادە بچۆ بۆ Istiklal Street.",
        "لە کۆتایی گەڕان، بۆ Galata Tower بە پیادە یان تاکسی بچۆ."
      ],
      notes: [
        "لە Istiklal شەقامەکە قەرەباڵغە، کەلوپەلت نزیک لە خۆت بهێڵە.",
        "پێش چوون بۆ Galata Tower کاتی کردنەوە چێک بکە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ پیادەڕۆیی گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    day: 2,
    title: "مێژووی کۆنی ئیستەنبول",
    area: "Sultanahmet، Hagia Sophia، Blue Mosque",
    morning: "سەردانی Hagia Sophia و Blue Mosque بە ئارامی.",
    afternoon: "گەڕان لە Hippodrome و Basilica Cistern.",
    evening: "دانیشتن لە کافەیەکی نزیک Sultanahmet و گەڕانێکی کورتی شەوانە.",
    attractions: ["Hagia Sophia", "Blue Mosque", "Hippodrome", "Basilica Cistern"],
    food: "چێشتی تورکی نزیک بە Sultanahmet یان گەڕان بۆ Sirkeci.",
    travelTime: "٤ تا ٦ کاتژمێر، زۆرترین بە پیادە.",
    destinationName: "Sultanahmet Square Istanbul",
    destinationCoordinates: { lat: 41.006, lng: 28.9768 },
    routeGuide: {
      overview:
        "بۆ کەسێک شارەزایی ئیستەنبول نییە، باشترین ڕێگا ئەوەیە بگەیتە ناوچەی Sultanahmet و لەوێ بە پیادە شوێنەکان ببینیت.",
      steps: [
        "لە شوێنی مانەوەتەوە ڕێگا بۆ Sultanahmet Square بکەرەوە.",
        "ئەگەر بە گواستنەوەی گشتی دەچیت، وێستگەی ترام Sultanahmet زۆر نزیکە.",
        "دوای گەیشتن، Hagia Sophia و Blue Mosque بە پیادە نزیکن.",
        "Basilica Cisternیش لە هەمان ناوچەدایە و پێویست بە تاکسی نییە."
      ],
      notes: [
        "جلوبەرگی گونجاو بۆ مزگەوت لەبەر بکە.",
        "لە کاتی قەرەباڵغی، ماڵباتەکان با پێکەوە بمێننەوە."
      ],
      badges: ["بە ترام نزیکترە", "بۆ خێزان گونجاوە", "بۆ پیادەڕۆیی گونجاوە"]
    }
  },
  {
    day: 3,
    title: "کۆشک، پارک و بازاڕی گەورە",
    area: "Topkapi Palace، Gulhane Park، Grand Bazaar",
    morning: "سەردانی Topkapi Palace و بینینی حەوشە و مۆزەخانەکان.",
    afternoon: "پشوویەکی ئارام لە Gulhane Park و پاشان چوون بۆ Grand Bazaar.",
    evening: "گەڕان و کڕین لە بازاڕ، دواتر گەڕانەوە بۆ هۆتێل.",
    attractions: ["Topkapi Palace", "Gulhane Park", "Grand Bazaar"],
    food: "خواردنی خێرا یان چای لە ناوچەی Grand Bazaar.",
    travelTime: "٥ تا ٧ کاتژمێر، پێویستی بە پێڵاوی ئاسوودە هەیە.",
    destinationName: "Topkapi Palace Istanbul",
    destinationCoordinates: { lat: 41.0115, lng: 28.9833 },
    routeGuide: {
      overview:
        "Topkapi و Gulhane نزیکن، بەڵام Grand Bazaar لە کۆتایی ڕۆژ باشترە چونکە دەتوانیت شۆپینگ بکەیت و دواتر بگەڕێیتەوە.",
      steps: [
        "ڕێگا بۆ Topkapi Palace بکەرەوە و سەرەتا ئەوێ ببینە.",
        "دوای کۆشک بە پیادە بچۆ Gulhane Park.",
        "بۆ Grand Bazaar دەتوانیت بە ترام یان تاکسی بچیت.",
        "لە بازاڕ، دەرگای نزیک بە شوێنی هاتنە ژوورەوەت لەبیر بکە."
      ],
      notes: [
        "بازاڕ قەرەباڵغە؛ پارە و پاسپۆرت لە جێگای پارێزراو دابنێ.",
        "پێش چوون بۆ کۆشک کاتی کردنەوە چێک بکە."
      ],
      badges: ["بە ترام نزیکترە", "شۆپینگ", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    day: 4,
    title: "کروز و بازاڕی بۆنوبەهارات",
    area: "Bosphorus Cruise، Eminonu، Spice Bazaar، Karakoy",
    morning: "چوون بۆ Eminonu و ئامادەبوون بۆ Bosphorus Cruise.",
    afternoon: "سەردانی Spice Bazaar و گەڕان لە دەرەوەی Galata Bridge.",
    evening: "چوون بۆ Karakoy بۆ کافە و خواردنی شەوانە.",
    attractions: ["Bosphorus Cruise", "Eminonu", "Spice Bazaar", "Karakoy"],
    food: "ماسی یان خواردنی دەریایی لە ناوچەی Eminonu/Karakoy.",
    travelTime: "٤ تا ٦ کاتژمێر، بە کاتی کروزەکەوە دەگۆڕێت.",
    destinationName: "Eminonu Ferry Pier Istanbul",
    destinationCoordinates: { lat: 41.0179, lng: 28.974 },
    routeGuide: {
      overview:
        "ئاسانترین خاڵ بۆ دەستپێکردن Eminonu ـە. لەوێ فێری و کروز هەن و Spice Bazaarیش نزیکە.",
      steps: [
        "لە شوێنی خۆتەوە ڕێگا بۆ Eminonu Ferry Pier بکەرەوە.",
        "ئەگەر بە گواستنەوەی گشتی دەچیت، ترام بۆ Eminonu زۆر گونجاوە.",
        "کاتی کروز و دەرگای سواربوون پرسیار بکە.",
        "دوای کروز بە پیادە بچۆ Spice Bazaar و پاشان بەرەو Karakoy."
      ],
      notes: [
        "ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت.",
        "لە کەناری ئاو، جلێکی گەرمت لەگەڵ بێت چونکە با هەیە."
      ],
      badges: ["بە فێری جوانترە", "بە ترام نزیکترە", "بۆ خێزان گونجاوە"]
    }
  },
  {
    day: 5,
    title: "کۆشکی دۆڵمەباهچە و Ortakoy",
    area: "Dolmabahce Palace، Besiktas، Ortakoy",
    morning: "سەردانی Dolmabahce Palace و گەڕان لە دەوروبەری کەناری دەریا.",
    afternoon: "چوون بۆ Besiktas بۆ نانخواردن و کافە.",
    evening: "گەڕان لە Ortakoy و بینینی مزگەوتی Ortakoy.",
    attractions: ["Dolmabahce Palace", "Besiktas", "Ortakoy Mosque"],
    food: "کومپیر یان خواردنی خێرا لە Ortakoy.",
    travelTime: "٤ تا ٦ کاتژمێر، بە تاکسی ئاسانترە.",
    destinationName: "Dolmabahce Palace Istanbul",
    destinationCoordinates: { lat: 41.0392, lng: 29.0005 },
    routeGuide: {
      overview:
        "ئەم ڕۆژە لە کەناری Bosphorus ـە. ئەگەر شارەزا نیت، بۆ گواستنەوەی نێوان Dolmabahce و Ortakoy تاکسی ئاسانترە.",
      steps: [
        "ڕێگا بۆ Dolmabahce Palace بکەرەوە.",
        "دوای سەردان، بۆ Besiktas بە پیادەی کورتی یان تاکسی بچۆ.",
        "لە Besiktas بۆ Ortakoy تاکسی یان پاس هەیە؛ تاکسی بۆ خێزان ئاسانترە.",
        "لە Ortakoy بە پیادە نزیک بە کەناری ئاو بگەڕێ."
      ],
      notes: [
        "پێش چوون بۆ کۆشک کاتی کردنەوە و بلیت چێک بکە.",
        "Ortakoy شەوانە قەرەباڵغ دەبێت، کاتی گەڕانەوە پلان بکە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    day: 6,
    title: "لای ئاسیایی ئیستەنبول",
    area: "Kadikoy، Moda، Uskudar",
    morning: "چوون بە فێری بۆ Kadikoy و گەڕان لە بازاڕ و کافەکان.",
    afternoon: "پیادەڕۆیی لە Moda و کەناری دەریا.",
    evening: "چوون بۆ Uskudar و بینینی خۆرئاوابوون.",
    attractions: ["Kadikoy", "Moda", "Uskudar"],
    food: "خواردنی ناوخۆیی لە Kadikoy یان کافەیەک لە Moda.",
    travelTime: "٦ تا ٨ کاتژمێر، بە فێری و پیادەڕۆیی.",
    destinationName: "Kadikoy Ferry Pier Istanbul",
    destinationCoordinates: { lat: 40.9907, lng: 29.029 },
    routeGuide: {
      overview:
        "بۆ لای ئاسیایی، فێری هەم جوانە هەم ئاسانە. سەرەتا بگەیتە کەناری فێری، پاشان Google Maps ڕێگای وێستگەکە پیشان دەدات.",
      steps: [
        "ڕێگا بۆ Kadikoy Ferry Pier یان وێستگەی فێری نزیکی خۆت بکەرەوە.",
        "ئەگەر لە Eminonu یان Karakoy بیت، فێری بۆ Kadikoy هەڵبژێرە.",
        "لە Kadikoy دابەزە و بە پیادە بۆ Moda بچۆ.",
        "بۆ Uskudar دەتوانیت بە فێری یان تاکسی بچیت."
      ],
      notes: [
        "کاتی فێری بە ڕۆژ و کات دەگۆڕێت.",
        "ئەگەر منداڵت لەگەڵە، کاتی گەڕانەوە زوو دیاری بکە."
      ],
      badges: ["بە فێری جوانترە", "بۆ پیادەڕۆیی گونجاوە", "بۆ خێزان گونجاوە"]
    }
  },
  {
    day: 7,
    title: "ڕەنگ و مێژووی Balat",
    area: "Balat، Fener، Eyup Sultan، Pierre Loti",
    morning: "گەڕان لە Balat و Fener و بینینی شەقامە ڕەنگاوڕەنگەکان.",
    afternoon: "چوون بۆ Eyup Sultan Mosque.",
    evening: "چای و دیمەنی شار لە Pierre Loti Hill.",
    attractions: ["Balat", "Fener", "Eyup Sultan Mosque", "Pierre Loti Hill"],
    food: "چای و شیرینی لە Balat یان Pierre Loti.",
    travelTime: "٥ تا ٧ کاتژمێر، بە تاکسی و پیادەڕۆیی.",
    destinationName: "Balat Istanbul",
    destinationCoordinates: { lat: 41.029, lng: 28.9497 },
    routeGuide: {
      overview:
        "Balat شەقامە بچووک و هەوراز و نشێوی هەیە. بۆ گەیشتن بە تاکسی ئاسانترە، بەڵام ناوخۆی ناوچەکە بە پیادە خۆشترە.",
      steps: [
        "ڕێگا بۆ Balat بکەرەوە و لە شوێنێکی ناسراو دابەزە.",
        "لە Balat و Fener بە پیادە بگەڕێ، چونکە شەقامەکان تەنگن.",
        "بۆ Eyup Sultan تاکسی یان پاس بەکاربهێنە.",
        "لە Eyup Sultan دەتوانیت بۆ Pierre Loti بە تەلەفریک یان تاکسی بچیت."
      ],
      notes: [
        "پێڵاوی ئاسوودە لەبەر بکە، هەندێک شەقام هەورازە.",
        "لە گرتنی وێنە لە ناوچەی نیشتەجێبوون بەڕێز بمێنە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ پیادەڕۆیی گونجاوە", "دیمەنی جوان"]
    }
  },
  {
    day: 8,
    title: "ڕۆژی شۆپینگ",
    area: "Nisantasi، Cevahir Mall، Zorlu Center",
    morning: "گەڕان لە Nisantasi بۆ مارکە و کافەکان.",
    afternoon: "چوون بۆ Cevahir Mall یان Zorlu Center.",
    evening: "نانخواردن و گەڕانەوە بۆ هۆتێل.",
    attractions: ["Nisantasi", "Cevahir Mall", "Zorlu Center"],
    food: "کافە یان خواردنی ناو مۆڵ بۆ پشووی ئاسان.",
    travelTime: "٤ تا ٧ کاتژمێر، بە میترۆ یان تاکسی.",
    destinationName: "Nisantasi Istanbul",
    destinationCoordinates: { lat: 41.0522, lng: 28.9935 },
    routeGuide: {
      overview:
        "بۆ شۆپینگ، تاکسی ئاسانە بەڵام میترۆ بۆ Cevahir و Zorlu باشە. ئەگەر کەلوپەلی زۆرت کڕی، تاکسی بۆ گەڕانەوە باشترە.",
      steps: [
        "سەرەتا ڕێگا بۆ Nisantasi بکەرەوە.",
        "بۆ Cevahir Mall، وێستگەی Sisli-Mecidiyekoy نزیکە.",
        "بۆ Zorlu Center، وێستگەی Gayrettepe یان Zincirlikuyu بەکاربهێنە.",
        "دوای شۆپینگ، تاکسی بۆ هۆتێل ئاسوودەترە."
      ],
      notes: [
        "کاتی گەڕانەوە لە کاتژمێری قەرەباڵغی، تاکسی درەنگتر دەگات.",
        "کەلوپەلی گرنگت لە دەستەوە بەجێ مەهێڵە."
      ],
      badges: ["بە میترۆ باشە", "شۆپینگ", "بە تاکسی ئاسانترە"]
    }
  },
  {
    day: 9,
    title: "دوورگەکان یان ڕۆژی پشوودان",
    area: "Princes' Islands یان ڕۆژی ئازاد",
    morning: "ئەگەر وزەت هەیە، بە فێری بچۆ Princes' Islands.",
    afternoon: "پیادەڕۆیی و پشوو لە Büyükada یان هەڵبژاردنی ڕۆژی ئازاد.",
    evening: "گەڕانەوە بە فێری و خواردنی سووک.",
    attractions: ["Princes' Islands", "Büyükada"],
    food: "خواردنی دەریایی یان کافەیەکی ئارام لە دوورگە.",
    travelTime: "٧ تا ٩ کاتژمێر بۆ دوورگە؛ ڕۆژی ئازاد بە پێی هەڵبژاردن.",
    destinationName: "Buyukada Istanbul",
    destinationCoordinates: { lat: 40.8746, lng: 29.1294 },
    routeGuide: {
      overview:
        "دوورگەکان بە فێری دەچیت. ئەگەر شارەزا نیت، سەرەتا ڕێگا بۆ وێستگەی فێری بکەرەوە و کاتی گەڕانەوە پێشتر چێک بکە.",
      steps: [
        "لە Google Maps ڕێگا بۆ وێستگەی فێری نزیکی خۆت بکەرەوە.",
        "فێری بۆ Büyükada یان Princes' Islands هەڵبژێرە.",
        "لە دوورگە بە پیادە بگەڕێ و کاتی پشوودان بدە.",
        "پێش ئێوارە کاتی فێری گەڕانەوە چێک بکە."
      ],
      notes: [
        "ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت.",
        "ئەگەر منداڵ یان کەسی ماندوو لەگەڵە، ڕۆژی پشوو هەڵبژێرە."
      ],
      badges: ["بە فێری جوانترە", "بۆ پیادەڕۆیی گونجاوە", "ڕۆژی پشوو"]
    }
  },
  {
    day: 10,
    title: "کڕینی کۆتایی و گواستنەوە بۆ فڕۆکەخانە",
    area: "Final shopping، packing، airport transfer",
    morning: "کڕینی کۆتایی لە ناوچەی نزیک بە هۆتێل.",
    afternoon: "پاککردنەوەی ژوور، ئامادەکردنی جانتا و چێککردنی کاتی فڕین.",
    evening: "گواستنەوە بۆ فڕۆکەخانە بە تاکسی یان شاتڵ.",
    attractions: ["هۆتێل", "بازاڕی نزیک", "Istanbul Airport"],
    food: "خواردنی سووک نزیک هۆتێل، بۆ ئەوەی کاتی فڕۆکەخانە لەدەست نەچێت.",
    travelTime: "٢ تا ٥ کاتژمێر، بە پێی کاتی فڕین و قەرەباڵغی ڕێگا.",
    destinationName: "Istanbul Airport",
    destinationCoordinates: { lat: 41.2753, lng: 28.7519 },
    routeGuide: {
      overview:
        "ڕۆژی کۆتایی ڕێگای دوور مەگرە. باشترین کار ئەوەیە نزیک هۆتێل بمێنیتەوە و زوو ڕێگای فڕۆکەخانە بکەیتەوە.",
      steps: [
        "کاتی فڕین و کاتی پێویست بۆ گەیشتن بە فڕۆکەخانە چێک بکە.",
        "ڕێگا بۆ Istanbul Airport یان Sabiha Gokcen بە پێی بلیتی فڕینەکەت بکەرەوە.",
        "ئەگەر جانتای زۆرت هەیە، تاکسی یان گواستنەوەی تایبەت ئاسانترە.",
        "لە هۆتێل زوو دەرچۆ، چونکە قەرەباڵغی ڕێگا لە ئیستەنبول دەگۆڕێت."
      ],
      notes: [
        "ناوی فڕۆکەخانەکە لە بلیتەکەت چێک بکە.",
        "پاسپۆرت و بلیت و مۆبایل لە شوێنی ئاسان دابنێ."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "کات زوو دیاری بکە"]
    }
  }
];
