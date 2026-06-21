import type { Attraction } from "@/types/travel";

export const attractions: Attraction[] = [
  {
    id: "hagia-sophia",
    nameKu: "ئایاسۆفیا",
    nameEn: "Hagia Sophia",
    description: "یەکێک لە گرنگترین شوێنە مێژووییەکانی ئیستەنبول لە ناوچەی Sultanahmet.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Sultanahmet",
    category: "مێژوویی",
    destinationName: "Hagia Sophia Istanbul",
    coordinates: { lat: 41.0086, lng: 28.9802 },
    routeGuide: {
      overview:
        "ئایاسۆفیا لە ناوچەی Sultanahmet ـە و بۆ کەسێک شارەزایی شار نییە، گەیشتن بە ترام یان تاکسی ئاسانە.",
      steps: [
        "ئەگەر لە Taksim بیت، بە میترۆ و دواتر ترام یان بە تاکسی بچۆ بۆ Sultanahmet.",
        "ئەگەر بە گواستنەوەی گشتی دەچیت، وێستگەی ترام Sultanahmet هەڵبژێرە.",
        "لە وێستگە دابەزە و بە پیادە چەند خولەکێک بڕۆ.",
        "ئەگەر ڕێگاکە نازانیت، دوگمەی ڕێگا پیشان بدە بکە و شوێنی ئێستات بەکاربهێنە."
      ],
      notes: [
        "جلوبەرگی گونجاو لەبەر بکە چونکە شوێنەکە پیرۆزە.",
        "پێش چوون کاتی کردنەوە چێک بکە."
      ],
      badges: ["بە ترام نزیکترە", "بۆ خێزان گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "blue-mosque",
    nameKu: "مزگەوتی شینی",
    nameEn: "Blue Mosque",
    description: "مزگەوتێکی جوان و ناسراو کە بەرامبەر ئایاسۆفیا نزیکە.",
    visitTime: "٤٥ خولەک تا ١ کاتژمێر",
    area: "Sultanahmet",
    category: "مێژوویی",
    destinationName: "Blue Mosque Istanbul",
    coordinates: { lat: 41.0054, lng: 28.9768 },
    routeGuide: {
      overview:
        "مزگەوتی شینی لە هەمان ناوچەی ئایاسۆفیایە. گەیشتن بۆ Sultanahmet و پاشان پیادەڕۆیی باشترین ڕێگایە.",
      steps: [
        "ڕێگا بۆ Sultanahmet Square بکەرەوە.",
        "بە ترام، وێستگەی Sultanahmet نزیکترین خاڵە.",
        "دوای دابەزین، بە پیادە بەرەو مزگەوت بچۆ.",
        "ئەگەر لەگەڵ خێزانیت، لە دەروازەی سەرەکی پێکەوە بمێننەوە."
      ],
      notes: [
        "لە کاتی نوێژ هەندێک بەشی سەردان سنووردار دەبێت.",
        "جلوبەرگ و ئارامی ناو مزگەوت ڕەچاو بکە."
      ],
      badges: ["بە ترام نزیکترە", "بۆ خێزان گونجاوە", "بۆ پیادەڕۆیی گونجاوە"]
    }
  },
  {
    id: "basilica-cistern",
    nameKu: "سیستێرنی باسیلیکا",
    nameEn: "Basilica Cistern",
    description: "ژێرزەمینێکی مێژوویی و سارد و جوان نزیک بە ئایاسۆفیا.",
    visitTime: "٤٥ خولەک تا ١ کاتژمێر",
    area: "Sultanahmet",
    category: "مێژوویی",
    destinationName: "Basilica Cistern Istanbul",
    coordinates: { lat: 41.0084, lng: 28.9778 },
    routeGuide: {
      overview:
        "Basilica Cistern نزیکە لە Hagia Sophia و Blue Mosque. ئەگەر لە Sultanahmet بیت، پێویست بە گواستنەوە نییە.",
      steps: [
        "سەرەتا بگەیتە Sultanahmet.",
        "لەوێ بە پیادە ڕێگا بۆ Basilica Cistern بکەرەوە.",
        "ڕیزەکە چێک بکە چونکە هەندێک کات قەرەباڵغ دەبێت.",
        "دوای دەرچوون دەتوانیت بە پیادە بۆ شوێنەکانی دەوروبەر بچیت."
      ],
      notes: [
        "ناوەوەی شوێنەکە ساردترە؛ جلێکی سووک لەگەڵ بێت.",
        "پێش چوون کاتی کردنەوە چێک بکە."
      ],
      badges: ["بۆ پیادەڕۆیی گونجاوە", "بە ترام نزیکترە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "topkapi-palace",
    nameKu: "کۆشکی تۆپقاپی",
    nameEn: "Topkapi Palace",
    description: "کۆشکی سەردەمی عوسمانی لەسەر دیمەنی جوانی Bosphorus.",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Sultanahmet / Gulhane",
    category: "مێژوویی",
    destinationName: "Topkapi Palace Istanbul",
    coordinates: { lat: 41.0115, lng: 28.9833 },
    routeGuide: {
      overview:
        "کۆشکی تۆپقاپی نزیکە لە Sultanahmet، بەڵام ناوەوەی کۆشک گەورەیە. کات و پێڵاوی ئاسوودە گرنگە.",
      steps: [
        "ڕێگا بۆ Topkapi Palace بکەرەوە.",
        "ئەگەر بە ترام دەچیت، وێستگەی Gulhane یان Sultanahmet بەکاربهێنە.",
        "لە وێستگەوە بە پیادە بەرەو دەروازەی کۆشک بچۆ.",
        "دوای تەواوبوون، دەتوانیت بە پیادە بۆ Gulhane Park بچیت."
      ],
      notes: [
        "پێش چوون کاتی کردنەوە و بلیت چێک بکە.",
        "بۆ منداڵ و کەسانی ماندوو، پشووی ناو پارک باشە."
      ],
      badges: ["بە ترام نزیکترە", "بۆ خێزان گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "grand-bazaar",
    nameKu: "بازاڕی گەورە",
    nameEn: "Grand Bazaar",
    description: "بازاڕێکی مێژوویی و گەورە بۆ کڕین، یادگاری و گەڕان.",
    visitTime: "١ تا ٣ کاتژمێر",
    area: "Beyazit",
    category: "بازاڕ",
    destinationName: "Grand Bazaar Istanbul",
    coordinates: { lat: 41.0107, lng: 28.968 },
    routeGuide: {
      overview:
        "Grand Bazaar زۆر گەورە و قەرەباڵغە. باشترین ڕێگا ئەوەیە لە دەروازەیەکی ناسراو بچیتە ژوورەوە و لەبیرت بێت لە کوێ دەرچوویت.",
      steps: [
        "ڕێگا بۆ Grand Bazaar بکەرەوە.",
        "ئەگەر بە ترام دەچیت، وێستگەی Beyazit-Kapalicarsi نزیکە.",
        "لە دەروازەی سەرەکی دابەزە و هێواش بگەڕێ.",
        "بۆ گەڕانەوە، هەمان دەروازە یان نزیکترین دەروازە لە Google Maps بکەرەوە."
      ],
      notes: [
        "لە ناو بازاڕدا پارە و مۆبایل بە پارێزراوی هەڵگرە.",
        "نرخی شت پێش کڕین بپرسە."
      ],
      badges: ["بە ترام نزیکترە", "شۆپینگ", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "spice-bazaar",
    nameKu: "بازاڕی بۆنوبەهارات",
    nameEn: "Spice Bazaar",
    description: "بازاڕی بەهارات، شیرینی و دیاری نزیک بە Eminonu.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Eminonu",
    category: "بازاڕ",
    destinationName: "Spice Bazaar Istanbul",
    coordinates: { lat: 41.0165, lng: 28.9705 },
    routeGuide: {
      overview:
        "Spice Bazaar لە Eminonu ـە و بە ترام یان فێری ئاسان دەگەیت. شوێنەکە نزیکە بە کەناری دەریا.",
      steps: [
        "ڕێگا بۆ Eminonu یان Spice Bazaar بکەرەوە.",
        "ئەگەر بە ترام دەچیت، وێستگەی Eminonu هەڵبژێرە.",
        "ئەگەر لە لای ئاسیایی بیت، فێری بۆ Eminonu جوان و ئاسانە.",
        "لە وێستگە دابەزە و بە پیادە بەرەو بازاڕ بچۆ."
      ],
      notes: [
        "لە کاتی قەرەباڵغی هێواش بڕۆ و کەلوپەلت لەبەرچاو بێت.",
        "پێش کڕینی بەهارات یان شیرینی، بڕ و نرخ چێک بکە."
      ],
      badges: ["بە ترام نزیکترە", "بە فێری جوانترە", "شۆپینگ"]
    }
  },
  {
    id: "galata-tower",
    nameKu: "تاوەری گەلاتا",
    nameEn: "Galata Tower",
    description: "تاوەرێکی ناسراو بۆ دیمەنی پانۆرامای ئیستەنبول.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Galata / Karakoy",
    category: "مێژوویی",
    destinationName: "Galata Tower Istanbul",
    coordinates: { lat: 41.0256, lng: 28.9741 },
    routeGuide: {
      overview:
        "Galata Tower لە ناوچەیەکی هەورازدارە. ئەگەر لە Karakoy بیت، پیادە دەکرێت بەڵام هەورازە؛ تاکسیش ئاسانە.",
      steps: [
        "ڕێگا بۆ Galata Tower بکەرەوە.",
        "لە Karakoy دەتوانیت بە پیادە بچیت، بەڵام ڕێگا هەورازە.",
        "ئەگەر ماندوویت یان منداڵت لەگەڵە، تاکسی هەڵبژێرە.",
        "لە گەیشتن، ناوچەی دەوروبەر بە پیادە ببینە."
      ],
      notes: [
        "پێڵاوی ئاسوودە لەبەر بکە.",
        "پێش چوون کاتی کردنەوە چێک بکە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ پیادەڕۆیی گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "dolmabahce-palace",
    nameKu: "کۆشکی دۆڵمەباهچە",
    nameEn: "Dolmabahce Palace",
    description: "کۆشکێکی جوان لە کەناری Bosphorus و نزیک بە Besiktas.",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Besiktas",
    category: "مێژوویی",
    destinationName: "Dolmabahce Palace Istanbul",
    coordinates: { lat: 41.0392, lng: 29.0005 },
    routeGuide: {
      overview:
        "Dolmabahce لە کەناری ئاوە و بە تاکسی یان گواستنەوەی گشتی دەگەیت. بۆ خێزان تاکسی ئاسانترە.",
      steps: [
        "ڕێگا بۆ Dolmabahce Palace بکەرەوە.",
        "ئەگەر لە Taksim بیت، تاکسی یان فونیكولەر بۆ Kabatas و پاشان پیادەڕۆیی گونجاوە.",
        "لە گەیشتن، دەروازەی سەردان بە ڕێنمایی تابلووەکان بدۆزەوە.",
        "دوای سەردان، دەتوانیت بۆ Besiktas یان Ortakoy بچیت."
      ],
      notes: [
        "پێش چوون بلیت و کاتی کردنەوە چێک بکە.",
        "ناوەوەی کۆشک بە ڕێنمایی تایبەت دەکرێت، کاتی خۆت بەجێ بهێڵە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "ortakoy-mosque",
    nameKu: "مزگەوتی ئۆرتاکۆی",
    nameEn: "Ortakoy Mosque",
    description: "مزگەوتێکی جوان لە کەناری Bosphorus لەگەڵ دیمەنی پرد.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Ortakoy",
    category: "مێژوویی",
    destinationName: "Ortakoy Mosque Istanbul",
    coordinates: { lat: 41.0472, lng: 29.027 },
    routeGuide: {
      overview:
        "Ortakoy بە تاکسی ئاسانترە، بەتایبەتی ئەگەر لە خێزان یان کەلوپەل لەگەڵتە. کەناری ئاو بۆ پیادەڕۆیی زۆر خۆشە.",
      steps: [
        "ڕێگا بۆ Ortakoy Mosque بکەرەوە.",
        "لە Besiktas دەتوانیت بە تاکسی یان پاس بچیت.",
        "لە گەیشتن، مزگەوت و کەناری ئاو بە پیادە ببینە.",
        "ئەگەر ئێوارە دەچیت، کاتی گەڕانەوە زوو پلان بکە."
      ],
      notes: [
        "شەوانە قەرەباڵغ دەبێت.",
        "لە کەناری ئاو با هەیە، جلێکی گونجاو لەگەڵ بێت."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "بۆ پیادەڕۆیی گونجاوە"]
    }
  },
  {
    id: "bosphorus-cruise",
    nameKu: "گەشتی Bosphorus",
    nameEn: "Bosphorus Cruise",
    description: "گەشتێکی دەریایی بۆ بینینی دوو لای ئیستەنبول و پردەکان.",
    visitTime: "١.٥ تا ٣ کاتژمێر",
    area: "Eminonu / Karakoy",
    category: "کروز",
    destinationName: "Eminonu Ferry Pier Istanbul",
    coordinates: { lat: 41.0179, lng: 28.974 },
    routeGuide: {
      overview:
        "بۆ Bosphorus Cruise، سەرەتا بچۆ بۆ Eminonu یان Karakoy. فێری و کروز بە کات و وێستگەوە دەگۆڕێن.",
      steps: [
        "ڕێگا بۆ Eminonu Ferry Pier بکەرەوە.",
        "لە وێستگەی فێری، کاتی کروز و شوێنی سواربوون بپرسە.",
        "ئەگەر بە ترام دەچیت، وێستگەی Eminonu نزیکە.",
        "دوای کروز، Spice Bazaar یان Galata Bridge نزیکن."
      ],
      notes: [
        "ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت.",
        "لەسەر ئاو با هەیە، جلێکی گەرمت لەگەڵ بێت."
      ],
      badges: ["بە فێری جوانترە", "بە ترام نزیکترە", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "taksim-square",
    nameKu: "گۆڕەپانی تەقسیم",
    nameEn: "Taksim Square",
    description: "گۆڕەپانی ناسراوی ناوەندی شار و دەستپێکی گەڕان لە Istiklal.",
    visitTime: "٣٠ خولەک تا ١ کاتژمێر",
    area: "Taksim",
    category: "گەڕان",
    destinationName: "Taksim Square Istanbul",
    coordinates: { lat: 41.037, lng: 28.985 },
    routeGuide: {
      overview:
        "Taksim خاڵێکی ئاسانە بۆ دەستپێکردن. میترۆ، تاکسی و پیادەڕۆیی بۆ Istiklal لەوێوە گونجاوە.",
      steps: [
        "ڕێگا بۆ Taksim Square بکەرەوە.",
        "ئەگەر بە میترۆ دەچیت، وێستگەی Taksim هەڵبژێرە.",
        "لە دابەزین، بەرەو Istiklal Street بە پیادە بچۆ.",
        "ئەگەر شەو دەگەڕێیتەوە، ڕێگای گەڕانەوە پێشتر بکەرەوە."
      ],
      notes: [
        "ناوچەکە قەرەباڵغە؛ کەلوپەلت ئاگادار بە.",
        "بۆ یەکەم ڕۆژ شوێنێکی ئاسان و ناسراوە."
      ],
      badges: ["بە میترۆ باشە", "بۆ پیادەڕۆیی گونجاوە", "بە تاکسی ئاسانترە"]
    }
  },
  {
    id: "istiklal-street",
    nameKu: "شەقامی ئیستقلال",
    nameEn: "Istiklal Street",
    description: "شەقامێکی درێژ بۆ گەڕان، کافە، کڕین و موزیک.",
    visitTime: "١ تا ٣ کاتژمێر",
    area: "Beyoglu",
    category: "گەڕان",
    destinationName: "Istiklal Street Istanbul",
    coordinates: { lat: 41.0336, lng: 28.9774 },
    routeGuide: {
      overview:
        "Istiklal Street زۆر باشە بۆ پیادەڕۆیی. باشترین دەستپێکردن لە Taksim Square ـە.",
      steps: [
        "ڕێگا بۆ Taksim Square یان Istiklal Street بکەرەوە.",
        "لە Taksim بە پیادە شەقامەکە دەست پێ بکە.",
        "ئەگەر دەتەوێت Galata Tower ببینیت، بەرەو کۆتایی شەقامەکە بڕۆ.",
        "لە هەر کاتێک ماندوو بوویت، تاکسی یان میترۆ نزیکە."
      ],
      notes: [
        "قەرەباڵغی زۆرە؛ ماڵبات با پێکەوە بمێنێتەوە.",
        "پێڵاوی ئاسوودە لەبەر بکە."
      ],
      badges: ["بۆ پیادەڕۆیی گونجاوە", "شۆپینگ", "بە میترۆ باشە"]
    }
  },
  {
    id: "kadikoy",
    nameKu: "کادیکۆی",
    nameEn: "Kadikoy",
    description: "ناوچەیەکی زیندووی لای ئاسیایی بۆ خواردن، بازاڕ و کافە.",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Asian Side",
    category: "خواردن",
    destinationName: "Kadikoy Istanbul",
    coordinates: { lat: 40.9907, lng: 29.029 },
    routeGuide: {
      overview:
        "بۆ Kadikoy، فێری باشترین ئەزموونە ئەگەر لە لای ئەورووپی بیت. لە دابەزین ناوچەکە بە پیادە ئاسانە.",
      steps: [
        "ڕێگا بۆ Kadikoy Ferry Pier بکەرەوە.",
        "لە Eminonu، Karakoy یان Besiktas فێری بۆ Kadikoy هەیە.",
        "لە دابەزین، بازاڕ و کافەکان بە پیادە نزیکن.",
        "بۆ Moda دەتوانیت بە پیادە یان ترام بچیت."
      ],
      notes: [
        "کاتی فێری چێک بکە، بەتایبەتی بۆ گەڕانەوەی شەو.",
        "ناوچەکە بۆ خواردن و گەڕان زۆر گونجاوە."
      ],
      badges: ["بە فێری جوانترە", "بۆ پیادەڕۆیی گونجاوە", "خواردن"]
    }
  },
  {
    id: "moda",
    nameKu: "مۆدا",
    nameEn: "Moda",
    description: "ناوچەیەکی ئارام و جوان لە کادیکۆی بۆ پیادەڕۆیی و کافە.",
    visitTime: "١ تا ٣ کاتژمێر",
    area: "Kadikoy",
    category: "سروشت",
    destinationName: "Moda Istanbul",
    coordinates: { lat: 40.9848, lng: 29.0249 },
    routeGuide: {
      overview:
        "Moda نزیکە لە Kadikoy و بۆ پیادەڕۆیی زۆر گونجاوە. ئەگەر لە فێری دابەزیت، بە ئارامی بەرەو Moda بڕۆ.",
      steps: [
        "سەرەتا ڕێگا بۆ Kadikoy بکەرەوە.",
        "لە Kadikoy بە پیادە یان بە ترامێکی کورتی ناوخۆ بۆ Moda بچۆ.",
        "کەناری دەریا و کافەکان بە پیادە ببینە.",
        "بۆ گەڕانەوە هەمان ڕێگا بۆ Kadikoy Ferry Pier بکەرەوە."
      ],
      notes: [
        "بۆ خێزان و پشوودان ناوچەیەکی ئارامە.",
        "لە کەناری ئاو با هەیە."
      ],
      badges: ["بۆ پیادەڕۆیی گونجاوە", "بە فێری جوانترە", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "uskudar",
    nameKu: "ئوسکودار",
    nameEn: "Uskudar",
    description: "کەناری جوانی لای ئاسیایی بۆ خۆرئاوابوون و دیمەنی Bosphorus.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Asian Side",
    category: "سروشت",
    destinationName: "Uskudar Istanbul",
    coordinates: { lat: 41.0277, lng: 29.0153 },
    routeGuide: {
      overview:
        "Uskudar بە فێری زۆر خۆشە. ئەگەر ئێوارە بچیت، دیمەنی خۆرئاوابوون جوانە.",
      steps: [
        "ڕێگا بۆ Uskudar Ferry Pier بکەرەوە.",
        "لە Eminonu یان Besiktas فێری بۆ Uskudar هەڵبژێرە.",
        "لە دابەزین بە پیادە بەرەو کەناری ئاو بچۆ.",
        "کاتی گەڕانەوەی فێری پێشتر چێک بکە."
      ],
      notes: [
        "ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت.",
        "بۆ وێنە و دانیشتن شوێنێکی جوانە."
      ],
      badges: ["بە فێری جوانترە", "بۆ خێزان گونجاوە", "دیمەنی جوان"]
    }
  },
  {
    id: "balat",
    nameKu: "باڵات",
    nameEn: "Balat",
    description: "ناوچەیەکی ڕەنگاوڕەنگ و مێژوویی بۆ وێنە و کافە.",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Fatih",
    category: "گەڕان",
    destinationName: "Balat Istanbul",
    coordinates: { lat: 41.029, lng: 28.9497 },
    routeGuide: {
      overview:
        "Balat شوێنێکی جوانە بەڵام شەقامەکانی تەنگ و هەورازن. تاکسی بۆ گەیشتن ئاسانترە و ناوخۆی بە پیادە خۆشترە.",
      steps: [
        "ڕێگا بۆ Balat بکەرەوە.",
        "ئەگەر لە Sultanahmet یان Taksim بیت، تاکسی ئاسانترە.",
        "لە ناوچەکە بە پیادە شەقامە ڕەنگاوڕەنگەکان ببینە.",
        "بۆ Eyup Sultan یان Pierre Loti دواتر تاکسی بەکاربهێنە."
      ],
      notes: [
        "پێڵاوی ئاسوودە لەبەر بکە چونکە هەوراز هەیە.",
        "لە وێنەگرتن بەڕێزی دانیشتوان بمێنە."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ پیادەڕۆیی گونجاوە", "دیمەنی جوان"]
    }
  },
  {
    id: "eyup-sultan-mosque",
    nameKu: "مزگەوتی ئەیوپ سوڵتان",
    nameEn: "Eyup Sultan Mosque",
    description: "مزگەوتێکی پیرۆز و گرنگ لە ناوچەی Eyup.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Eyup",
    category: "مێژوویی",
    destinationName: "Eyup Sultan Mosque Istanbul",
    coordinates: { lat: 41.0476, lng: 28.9339 },
    routeGuide: {
      overview:
        "Eyup Sultan کەمێک دوورترە لە ناوەندی گەشتیاری. بۆ خێزان تاکسی یان ڕێگای Google Maps ئاسانترە.",
      steps: [
        "ڕێگا بۆ Eyup Sultan Mosque بکەرەوە.",
        "ئەگەر لە Balat بیت، تاکسی کورت و ئاسانە.",
        "لە گەیشتن، بە ئارامی شوێنەکە ببینە.",
        "دەتوانیت دواتر بۆ Pierre Loti بە تەلەفریک یان تاکسی بچیت."
      ],
      notes: [
        "جلوبەرگی گونجاو بۆ مزگەوت لەبەر بکە.",
        "لە کاتی نوێژ قەرەباڵغ دەبێت."
      ],
      badges: ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "پێش چوون کاتی کردنەوە چێک بکە"]
    }
  },
  {
    id: "pierre-loti-hill",
    nameKu: "گردی پیەر لۆتی",
    nameEn: "Pierre Loti Hill",
    description: "شوێنێکی بەرز بۆ چای و دیمەنی Golden Horn.",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Eyup",
    category: "سروشت",
    destinationName: "Pierre Loti Hill Istanbul",
    coordinates: { lat: 41.0534, lng: 28.9337 },
    routeGuide: {
      overview:
        "Pierre Loti بۆ دیمەن و پشوو زۆر جوانە. لە Eyup Sultan ـەوە بە تەلەفریک یان تاکسی دەگەیت.",
      steps: [
        "ڕێگا بۆ Pierre Loti Hill بکەرەوە.",
        "ئەگەر لە Eyup سلطان بیت، تەلەفریک یان تاکسی بەکاربهێنە.",
        "لە گەیشتن، کافەکان و دیمەنی Golden Horn ببینە.",
        "بۆ گەڕانەوە، ڕێگا بۆ هۆتێل یان شوێنی دواتر بکەرەوە."
      ],
      notes: [
        "ئەگەر تەلەفریک قەرەباڵغ بوو، تاکسی هەڵبژێرە.",
        "کاتی خۆرئاوابوون شوێنەکە جوانترە."
      ],
      badges: ["بە تاکسی ئاسانترە", "دیمەنی جوان", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "nisantasi",
    nameKu: "نیشانتاشی",
    nameEn: "Nisantasi",
    description: "ناوچەی شۆپینگ، مارکە و کافەی پڕ شێواز.",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Sisli",
    category: "شۆپینگ",
    destinationName: "Nisantasi Istanbul",
    coordinates: { lat: 41.0522, lng: 28.9935 },
    routeGuide: {
      overview:
        "Nisantasi بۆ شۆپینگ و کافە گونجاوە. بە تاکسی ئاسانە و بە میترۆش دەتوانیت نزیک ببیتەوە.",
      steps: [
        "ڕێگا بۆ Nisantasi بکەرەوە.",
        "ئەگەر بە میترۆ دەچیت، وێستگەی Osmanbey نزیکە.",
        "لە وێستگە دابەزە و بە پیادە بەرەو شەقامە سەرەکییەکان بچۆ.",
        "ئەگەر کەلوپەلی زۆرت کڕی، تاکسی بۆ گەڕانەوە هەڵبژێرە."
      ],
      notes: [
        "نرخەکان لە هەندێک شوێن بەرزن، پێش کڕین چێک بکە.",
        "بۆ کافە و شۆپینگ ناوچەیەکی ئاسوودەیە."
      ],
      badges: ["بە میترۆ باشە", "شۆپینگ", "بە تاکسی ئاسانترە"]
    }
  },
  {
    id: "cevahir-mall",
    nameKu: "مۆڵی جەواهیر",
    nameEn: "Cevahir Mall",
    description: "مۆڵێکی گەورە و ئاسان بۆ شۆپینگ و خواردن.",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Sisli",
    category: "شۆپینگ",
    destinationName: "Cevahir Mall Istanbul",
    coordinates: { lat: 41.0633, lng: 28.9921 },
    routeGuide: {
      overview:
        "Cevahir Mall بە میترۆ زۆر ئاسانە. بۆ ڕۆژی باراناوی یان خێزان شوێنێکی گونجاوە.",
      steps: [
        "ڕێگا بۆ Cevahir Mall بکەرەوە.",
        "بە میترۆ، وێستگەی Sisli-Mecidiyekoy نزیکترینە.",
        "لە وێستگە بە پیادە بەرەو مۆڵ بچۆ.",
        "دوای شۆپینگ، تاکسی یان میترۆ بۆ گەڕانەوە بەکاربهێنە."
      ],
      notes: [
        "دەرگای چوونە ژوور و دەرچوون لەبیر بکە.",
        "بۆ منداڵ و خێزان مۆڵ ئاسان و پارێزراوە."
      ],
      badges: ["بە میترۆ باشە", "شۆپینگ", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "zorlu-center",
    nameKu: "زۆرلو سەنتەر",
    nameEn: "Zorlu Center",
    description: "مۆڵ و ناوچەی خواردن و شۆپینگ بە شێوازی مۆدێرن.",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Besiktas",
    category: "شۆپینگ",
    destinationName: "Zorlu Center Istanbul",
    coordinates: { lat: 41.0678, lng: 29.0178 },
    routeGuide: {
      overview:
        "Zorlu Center بە میترۆ و تاکسی دەگەیت. ئەگەر لە ناوەندی شار بیت، تاکسی ئاسانترە بەڵام لە کاتژمێری قەرەباڵغی میترۆ باشترە.",
      steps: [
        "ڕێگا بۆ Zorlu Center بکەرەوە.",
        "بە میترۆ، وێستگەی Gayrettepe یان Zincirlikuyu بەکاربهێنە.",
        "لە وێستگەدا تابلووی Zorlu Center ببینە.",
        "دوای شۆپینگ، بە تاکسی یان میترۆ بگەڕێوە."
      ],
      notes: [
        "کاتژمێری قەرەباڵغی ڕێگا درەنگ دەبێت.",
        "ناو مۆڵ بۆ خواردن و پشوو گونجاوە."
      ],
      badges: ["بە میترۆ باشە", "شۆپینگ", "بۆ خێزان گونجاوە"]
    }
  },
  {
    id: "princes-islands",
    nameKu: "دوورگەکانی شازادەکان",
    nameEn: "Princes' Islands",
    description: "دوورگەی ئارام بۆ پشوودان، پیادەڕۆیی و دیمەنی دەریا.",
    visitTime: "نیو ڕۆژ تا ڕۆژێک",
    area: "Büyükada",
    category: "سروشت",
    destinationName: "Buyukada Istanbul",
    coordinates: { lat: 40.8746, lng: 29.1294 },
    routeGuide: {
      overview:
        "بۆ دوورگەکان بە فێری دەچیت. ئەم گەشتە کات دەوێت، بۆیە زوو دەست پێ بکە و کاتی گەڕانەوە چێک بکە.",
      steps: [
        "ڕێگا بۆ وێستگەی فێری نزیکی خۆت بکەرەوە.",
        "فێری بۆ Büyükada یان Princes' Islands هەڵبژێرە.",
        "لە دابەزین، بە پیادە بگەڕێ و شوێنی پشوو هەڵبژێرە.",
        "کاتی فێری گەڕانەوە پێشتر لە وێستگە بپرسە."
      ],
      notes: [
        "ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت.",
        "ئاوی خواردنەوە و پێڵاوی ئاسوودە لەگەڵ بێت."
      ],
      badges: ["بە فێری جوانترە", "بۆ پیادەڕۆیی گونجاوە", "بۆ خێزان گونجاوە"]
    }
  }
];

export const attractionCategories = ["هەموو", ...Array.from(new Set(attractions.map((attraction) => attraction.category)))];
