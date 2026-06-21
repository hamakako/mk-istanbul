import type { Attraction, CityGuide, FoodSpot, ItineraryDay, KurdishRouteGuideData, MonthlyTrend } from "@/types/travel";
import istanbulAsianSide from "@/assets/images/places/istanbul-asian-side.jpg";
import istanbulBalat from "@/assets/images/places/istanbul-balat.jpg";
import istanbulBosphorus from "@/assets/images/places/istanbul-bosphorus.jpg";
import istanbulGalata from "@/assets/images/places/istanbul-galata.jpg";
import istanbulSultanahmet from "@/assets/images/places/istanbul-sultanahmet.jpg";
import dubaiDowntown from "@/assets/images/places/dubai-downtown.jpg";
import dubaiJumeirah from "@/assets/images/places/dubai-jumeirah.jpg";
import dubaiMarina from "@/assets/images/places/dubai-marina.jpg";
import dubaiOldDubai from "@/assets/images/places/dubai-old-dubai.jpg";
import dubaiPalm from "@/assets/images/places/dubai-palm.jpg";

function routeGuide(
  overview: string,
  steps: string[],
  badges: string[],
  notes: string[] = [
    "پێش چوون کاتی کردنەوە و قەرەباڵغی ڕێگا چێک بکە.",
    "ئەگەر لەگەڵ خێزانیت، شوێنی کۆبوونەوە پێشتر دیاری بکە."
  ]
): KurdishRouteGuideData {
  return { overview, steps, notes, badges };
}

const istanbulDays: ItineraryDay[] = [
  {
    day: 1,
    title: "Sultanahmet بە تەواوی",
    area: "Sultanahmet، Hagia Sophia، Blue Mosque، Basilica Cistern",
    clusterNote: "هەموو شوێنەکان لە هەمان ناوچەدان و بە پیادە دەبینرێن.",
    image: istanbulSultanahmet,
    imageAlt: "Sultanahmet، Hagia Sophia و Blue Mosque",
    morning: "دەست پێ بکە بە Hagia Sophia و Blue Mosque چونکە زووترین کات ئارامترە.",
    afternoon: "Basilica Cistern، Hippodrome و Topkapi Palace ببینە.",
    evening: "لە Gulhane Park یان کافەیەکی نزیک Sultanahmet پشوو بدە.",
    attractions: ["Hagia Sophia", "Blue Mosque", "Basilica Cistern", "Topkapi Palace", "Gulhane Park"],
    food: "Tarihi Sultanahmet Köftecisi بۆ نانی ئابووری، Seven Hills بۆ دیمەنی گرانتر.",
    travelTime: "٥ تا ٧ کاتژمێر، زۆرترین بە پیادە.",
    destinationName: "Sultanahmet Square Istanbul",
    destinationCoordinates: { lat: 41.006, lng: 28.9768 },
    routeGuide: routeGuide(
      "بۆ کەسێک ئیستەنبول ناناسێت، Sultanahmet باشترین ڕۆژی دەستپێکردنە چونکە شوێنە گرنگەکان نزیکن و پێویستت بە گواستنەوەی زۆر نییە.",
      [
        "لە هۆتێلەکەتەوە ڕێگا بۆ Sultanahmet Square بکەرەوە.",
        "ئەگەر بە گواستنەوەی گشتی دەچیت، ترام بۆ وێستگەی Sultanahmet ئاسانترینە.",
        "لە وێستگە دابەزە و شوێنەکان بە پیادە ببینە.",
        "ئەگەر شارەزایی شارەکە نیت، دوگمەی ڕێگا پیشان بدە بکە و شوێنی ئێستات بەکاربهێنە."
      ],
      ["بە ترام نزیکترە", "بۆ خێزان گونجاوە", "بۆ پیادەڕۆیی گونجاوە"]
    )
  },
  {
    day: 2,
    title: "Sirkeci، Eminonu و بازاڕەکان",
    area: "Grand Bazaar، Suleymaniye، Spice Bazaar، Eminonu",
    clusterNote: "بازاڕ و کەناری Eminonu نزیکن؛ تاکسی تەنها بۆ گەڕانەوە پێویست دەبێت.",
    image: istanbulSultanahmet,
    imageAlt: "ناوچەی مێژوویی ئیستەنبول نزیک بە Grand Bazaar و Eminonu",
    morning: "Grand Bazaar و Suleymaniye Mosque ببینە.",
    afternoon: "بە ئارامی بچۆ بۆ Spice Bazaar و دەرەوەی Eminonu.",
    evening: "لە Galata Bridge یان کەناری Eminonu دیمەن و خواردنی سووک هەڵبژێرە.",
    attractions: ["Grand Bazaar", "Suleymaniye Mosque", "Spice Bazaar", "Eminonu"],
    food: "Şehzade Cağ Kebap بۆ خواردنی ناوخۆیی، Hafiz Mustafa بۆ شیرینی.",
    travelTime: "٥ تا ٦ کاتژمێر.",
    destinationName: "Grand Bazaar Istanbul",
    destinationCoordinates: { lat: 41.0107, lng: 28.968 },
    routeGuide: routeGuide(
      "ئەم ڕۆژە بۆ بازاڕ و خواردنی ناوخۆییە. باشە سەرەتا بە Grand Bazaar دەست پێ بکەیت و دواتر بەرەو Eminonu دابەزیت.",
      [
        "ڕێگا بۆ Grand Bazaar بکەرەوە.",
        "ئەگەر بە ترام دەچیت، وێستگەی Beyazit-Kapalicarsi نزیکە.",
        "لە بازاڕ دەرگای چوونە ژوورەوەت لەبیر بکە.",
        "بۆ Eminonu و Spice Bazaar دەتوانیت بە پیادە یان ترام بچیت."
      ],
      ["بە ترام نزیکترە", "شۆپینگ", "پێویستی بە ئاگاداری کەلوپەلە"]
    )
  },
  {
    day: 3,
    title: "Galata، Karakoy و Taksim",
    area: "Karakoy، Galata Tower، Istiklal Street، Taksim",
    clusterNote: "ئەم ڕۆژە لە هێڵی یەک پیادەڕۆییە، بەڵام Galata هەورازە.",
    image: istanbulGalata,
    imageAlt: "Galata Tower و Karakoy",
    morning: "لە Karakoy قاوە بخۆ و بەرەو Galata Tower بڕۆ.",
    afternoon: "Istiklal Street بە پیادە ببینە تا Taksim Square.",
    evening: "لە Beyoglu یان Taksim نانی شەوانە بخۆ.",
    attractions: ["Karakoy", "Galata Tower", "Istiklal Street", "Taksim Square"],
    food: "Karaköy Güllüoğlu بۆ بەقلاوە، Mikla یان Neolokal بۆ شەوانەی گرانتر.",
    travelTime: "٤ تا ٦ کاتژمێر.",
    destinationName: "Galata Tower Istanbul",
    destinationCoordinates: { lat: 41.0256, lng: 28.9741 },
    routeGuide: routeGuide(
      "Karakoy، Galata و Taksim لە هەمان لای شارن. باشترین کار ئەوەیە بە یەک ئاراستە بڕۆیت و پاشان بە تاکسی یان میترۆ بگەڕێیتەوە.",
      [
        "ڕێگا بۆ Karakoy یان Galata Tower بکەرەوە.",
        "لە Karakoy بۆ Galata Tower پیادەڕۆیی هەورازە؛ ئەگەر ماندوویت تاکسی هەڵبژێرە.",
        "لە Galata بەرەو Istiklal Street بڕۆ.",
        "کۆتایی گەڕان لە Taksim بێت چونکە میترۆ و تاکسی ئاسانە."
      ],
      ["بۆ پیادەڕۆیی گونجاوە", "بە میترۆ باشە", "بە تاکسی ئاسانترە"]
    )
  },
  {
    day: 4,
    title: "Bosphorus و Ortakoy",
    area: "Dolmabahce، Besiktas، Ortakoy",
    clusterNote: "کەناری Bosphorus بە یەک ئاراستە؛ بۆ خێزان تاکسی نێوان شوێنەکان ئاسانترە.",
    image: istanbulBosphorus,
    imageAlt: "Ortakoy و Bosphorus",
    morning: "Dolmabahce Palace ببینە.",
    afternoon: "لە Besiktas پشووی خواردن بدە و دواتر بۆ Ortakoy بچۆ.",
    evening: "Ortakoy Mosque و کەناری ئاو لە کاتی خۆرئاوابوون ببینە.",
    attractions: ["Dolmabahce Palace", "Besiktas", "Ortakoy Mosque"],
    food: "Ortakoy kumpir بۆ خێرا و ئابووری، رێستورانی کەناری ئاو بۆ گرانتر.",
    travelTime: "٤ تا ٦ کاتژمێر.",
    destinationName: "Dolmabahce Palace Istanbul",
    destinationCoordinates: { lat: 41.0392, lng: 29.0005 },
    routeGuide: routeGuide(
      "ئەم ڕۆژە لە کەناری ئاوە. ئەگەر شارەزا نیت، بۆ گەیشتن بە Dolmabahce و Ortakoy تاکسی یان Google Maps زۆر یارمەتیدەرە.",
      [
        "ڕێگا بۆ Dolmabahce Palace بکەرەوە.",
        "دوای سەردان، بۆ Besiktas بە پیادەی کورتی یان تاکسی بچۆ.",
        "لە Besiktas بۆ Ortakoy تاکسی ئاسانترینە.",
        "لە Ortakoy بە پیادە نزیک بە کەناری ئاو بگەڕێ."
      ],
      ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "دیمەنی Bosphorus"]
    )
  },
  {
    day: 5,
    title: "Kadikoy و Moda",
    area: "Kadikoy، Moda، کەناری لای ئاسیایی",
    clusterNote: "هەردوو ناوچە لە یەک لای ئاسیایی دان و بە فێری گەیشتنەکە خۆشترە.",
    image: istanbulAsianSide,
    imageAlt: "Kadikoy و Moda لە لای ئاسیایی ئیستەنبول",
    morning: "بە فێری بۆ Kadikoy بچۆ و بازاڕی ناوخۆ ببینە.",
    afternoon: "بە پیادە بەرەو Moda و کافەکان بڕۆ.",
    evening: "لە کەناری Moda دیمەنی ئاو و خواردنی سووک هەڵبژێرە.",
    attractions: ["Kadikoy", "Moda", "Kadikoy Market"],
    food: "Çiya Sofrası بۆ خواردنی ناوخۆیی، کافەکانی Moda بۆ پشوو.",
    travelTime: "٥ تا ٧ کاتژمێر.",
    destinationName: "Kadikoy Ferry Pier Istanbul",
    destinationCoordinates: { lat: 40.9907, lng: 29.029 },
    routeGuide: routeGuide(
      "بۆ Kadikoy فێری هەم جوانە هەم ئاسانە. لە دابەزین شوێنەکان بە پیادە نزیکن.",
      [
        "ڕێگا بۆ وێستگەی فێری Eminonu، Karakoy یان Besiktas بکەرەوە.",
        "فێری بۆ Kadikoy هەڵبژێرە.",
        "لە Kadikoy بە پیادە بۆ بازار و دواتر Moda بچۆ.",
        "کاتی فێری گەڕانەوە پێشتر چێک بکە."
      ],
      ["بە فێری جوانترە", "بۆ پیادەڕۆیی گونجاوە", "خواردن و کافە"]
    )
  },
  {
    day: 6,
    title: "Uskudar، Kuzguncuk و Camlica",
    area: "Uskudar، Kuzguncuk، Camlica Hill",
    clusterNote: "ئەم ڕۆژە لای ئاسیاییە و بۆ دیمەنی Bosphorus زۆر گونجاوە.",
    image: istanbulAsianSide,
    imageAlt: "کەناری لای ئاسیایی ئیستەنبول",
    morning: "بە فێری بۆ Uskudar بچۆ.",
    afternoon: "Kuzguncuk بە پیادە و کافە ببینە.",
    evening: "بۆ Camlica Hill تاکسی بگرە بۆ دیمەنی شار.",
    attractions: ["Uskudar", "Kuzguncuk", "Camlica Hill"],
    food: "کافەکانی Kuzguncuk بۆ قاوە، رێستورانی Camlica بۆ دیمەن.",
    travelTime: "٥ تا ٧ کاتژمێر.",
    destinationName: "Uskudar Ferry Pier Istanbul",
    destinationCoordinates: { lat: 41.0277, lng: 29.0153 },
    routeGuide: routeGuide(
      "Uskudar و Kuzguncuk بە فێری و پیادەڕۆیی خۆشن. Camlica بەرزە، بۆیە تاکسی باشترە.",
      [
        "ڕێگا بۆ Uskudar Ferry Pier بکەرەوە.",
        "لە Uskudar بەرەو کەناری ئاو بڕۆ.",
        "بۆ Kuzguncuk تاکسی یان پاس کورت بەکاربهێنە.",
        "بۆ Camlica Hill تاکسی هەڵبژێرە چونکە هەورازە."
      ],
      ["بە فێری جوانترە", "بە تاکسی ئاسانترە", "دیمەنی جوان"]
    )
  },
  {
    day: 7,
    title: "Balat، Fener و Eyup",
    area: "Balat، Fener، Eyup Sultan، Pierre Loti",
    clusterNote: "ناوچەکانی Golden Horn نزیکن؛ شەقامەکان هەندێک هەورازن.",
    image: istanbulBalat,
    imageAlt: "شەقامە ڕەنگاوڕەنگەکانی Balat",
    morning: "Balat و Fener بۆ وێنە و کافە.",
    afternoon: "Eyup Sultan Mosque ببینە.",
    evening: "Pierre Loti Hill بۆ چای و دیمەنی Golden Horn.",
    attractions: ["Balat", "Fener", "Eyup Sultan Mosque", "Pierre Loti Hill"],
    food: "کافەکانی Balat بۆ چای و شیرینی؛ Pierre Loti بۆ دیمەن.",
    travelTime: "٥ تا ٧ کاتژمێر.",
    destinationName: "Balat Istanbul",
    destinationCoordinates: { lat: 41.029, lng: 28.9497 },
    routeGuide: routeGuide(
      "Balat و Fener بۆ پیادەڕۆیی جوانن، بەڵام بۆ گەیشتن تاکسی ئاسانترە. دواتر Eyup و Pierre Loti لە هەمان ناوچەی گشتی دان.",
      [
        "ڕێگا بۆ Balat بکەرەوە.",
        "لە ناوچەکە بە پیادە بگەڕێ و هەورازەکان بە هێواشی بڕۆ.",
        "بۆ Eyup Sultan تاکسی یان پاس بەکاربهێنە.",
        "لە Eyup بۆ Pierre Loti تەلەفریک یان تاکسی هەڵبژێرە."
      ],
      ["بە تاکسی ئاسانترە", "بۆ پیادەڕۆیی گونجاوە", "دیمەنی جوان"]
    )
  },
  {
    day: 8,
    title: "Nisantasi، Sisli و Zorlu",
    area: "Nisantasi، Cevahir Mall، Zorlu Center",
    clusterNote: "ڕۆژی شۆپینگ لە باکووری ناوەندی شار، بە میترۆ و تاکسی ئاسانە.",
    image: istanbulGalata,
    imageAlt: "ناوچەی مۆدێرن و شۆپینگی ئیستەنبول",
    morning: "Nisantasi بۆ مارکە و کافە.",
    afternoon: "Cevahir Mall یان Zorlu Center بۆ شۆپینگ و خواردن.",
    evening: "لە ناو مۆڵ یان ناوچەی هۆتێل نانی شەوانە بخۆ.",
    attractions: ["Nisantasi", "Cevahir Mall", "Zorlu Center"],
    food: "Petra Roasting Co. بۆ قاوە؛ Zorlu بۆ رێستورانی گرانتر.",
    travelTime: "٤ تا ٧ کاتژمێر.",
    destinationName: "Nisantasi Istanbul",
    destinationCoordinates: { lat: 41.0522, lng: 28.9935 },
    routeGuide: routeGuide(
      "بۆ شۆپینگ، میترۆ بۆ Sisli و Zorlu باشە. ئەگەر کەلوپەلی زۆرت هەیە، تاکسی بۆ گەڕانەوە ئاسانترە.",
      [
        "سەرەتا ڕێگا بۆ Nisantasi بکەرەوە.",
        "بۆ Cevahir Mall وێستگەی Sisli-Mecidiyekoy بەکاربهێنە.",
        "بۆ Zorlu Center وێستگەی Gayrettepe یان Zincirlikuyu باشە.",
        "دوای کڕین، تاکسی بۆ هۆتێل ئاسوودەترە."
      ],
      ["بە میترۆ باشە", "شۆپینگ", "بە تاکسی ئاسانترە"]
    )
  },
  {
    day: 9,
    title: "Princes' Islands",
    area: "Büyükada و دوورگەکانی شازادەکان",
    clusterNote: "ڕۆژێکی ئارامە؛ فێری بگرە و هەموو کات لە دوورگە بەسەر ببە.",
    image: istanbulAsianSide,
    imageAlt: "فێری و کەناری ئیستەنبول بۆ گەشتی دوورگەکان",
    morning: "زوو بۆ وێستگەی فێری بچۆ.",
    afternoon: "لە Büyükada پیادەڕۆیی، کافە و دیمەنی ئاو.",
    evening: "پێش درەنگ کاتی فێری گەڕانەوە چێک بکە.",
    attractions: ["Princes' Islands", "Büyükada"],
    food: "خواردنی دەریایی یان کافەی ئارام لە نزیک وێستگە.",
    travelTime: "٧ تا ٩ کاتژمێر.",
    destinationName: "Buyukada Istanbul",
    destinationCoordinates: { lat: 40.8746, lng: 29.1294 },
    routeGuide: routeGuide(
      "دوورگەکان بە فێری دەچیت. چونکە کات دەوێت، ئەم ڕۆژە تەنها بۆ دوورگە دانێ.",
      [
        "ڕێگا بۆ وێستگەی فێری نزیکی خۆت بکەرەوە.",
        "فێری بۆ Büyükada هەڵبژێرە.",
        "لە دابەزین بە پیادە و بە ئارامی بگەڕێ.",
        "کاتی فێری گەڕانەوە لە Google Maps یان وێستگە چێک بکە."
      ],
      ["بە فێری جوانترە", "ڕۆژی پشوودان", "کات زوو دیاری بکە"]
    )
  },
  {
    day: 10,
    title: "ڕۆژی کۆتایی و فڕۆکەخانە",
    area: "ناوچەی هۆتێل، کڕینی کۆتایی، Istanbul Airport",
    clusterNote: "ڕۆژی کۆتایی دوور مەچۆ؛ نزیک هۆتێل بمێنەوە و فڕۆکەخانە زوو پلان بکە.",
    image: istanbulBosphorus,
    imageAlt: "دیمەنی کۆتایی لە ئیستەنبول",
    morning: "کڕینی کۆتایی لە ناوچەی نزیک هۆتێل.",
    afternoon: "جانتا ئامادە بکە و کاتی فڕین چێک بکە.",
    evening: "تاکسی یان شاتڵ بۆ فڕۆکەخانە.",
    attractions: ["Hotel area", "Nearby bazaar", "Istanbul Airport"],
    food: "خواردنی سووک نزیک هۆتێل.",
    travelTime: "٢ تا ٥ کاتژمێر، بە پێی کاتی فڕین.",
    destinationName: "Istanbul Airport",
    destinationCoordinates: { lat: 41.2753, lng: 28.7519 },
    routeGuide: routeGuide(
      "ئەم ڕۆژە بۆ ئارامی و گەیشتن بە فڕۆکەخانەیە. شتێکی دوور لە پلانت دانەنێ.",
      [
        "ناوی فڕۆکەخانە لە بلیتەکەت چێک بکە.",
        "ڕێگا بۆ Istanbul Airport یان Sabiha Gokcen بکەرەوە.",
        "ئەگەر جانتای زۆرت هەیە تاکسی یان گواستنەوەی تایبەت هەڵبژێرە.",
        "لە کاتژمێری قەرەباڵغی زوو دەرچۆ."
      ],
      ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "کاتی فڕین چێک بکە"]
    )
  }
];

const istanbulAttractions: Attraction[] = [
  {
    id: "hagia-sophia",
    nameKu: "ئایاسۆفیا",
    nameEn: "Hagia Sophia",
    description: "شوێنێکی مێژوویی و پیرۆز لە ناوچەی Sultanahmet.",
    image: istanbulSultanahmet,
    imageAlt: "Hagia Sophia لە Sultanahmet",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Sultanahmet",
    category: "مێژوویی",
    destinationName: "Hagia Sophia Istanbul",
    coordinates: { lat: 41.0086, lng: 28.9802 },
    routeGuide: istanbulDays[0].routeGuide
  },
  {
    id: "blue-mosque",
    nameKu: "مزگەوتی شینی",
    nameEn: "Blue Mosque",
    description: "مزگەوتی ناسراو و جوانی Sultanahmet، نزیک بە ئایاسۆفیا.",
    image: istanbulSultanahmet,
    imageAlt: "Blue Mosque لە Sultanahmet",
    visitTime: "٤٥ خولەک تا ١ کاتژمێر",
    area: "Sultanahmet",
    category: "مێژوویی",
    destinationName: "Blue Mosque Istanbul",
    coordinates: { lat: 41.0054, lng: 28.9768 },
    routeGuide: istanbulDays[0].routeGuide
  },
  {
    id: "topkapi-palace",
    nameKu: "کۆشکی تۆپقاپی",
    nameEn: "Topkapi Palace",
    description: "کۆشکی عوسمانی لە نزیک Gulhane Park و Sultanahmet.",
    image: istanbulSultanahmet,
    imageAlt: "Topkapi Palace و ناوچەی Sultanahmet",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Sultanahmet / Gulhane",
    category: "مێژوویی",
    destinationName: "Topkapi Palace Istanbul",
    coordinates: { lat: 41.0115, lng: 28.9833 },
    routeGuide: istanbulDays[0].routeGuide
  },
  {
    id: "grand-bazaar",
    nameKu: "بازاڕی گەورە",
    nameEn: "Grand Bazaar",
    description: "بازاڕێکی مێژوویی بۆ کڕین، دیاری و چانه‌دان.",
    image: istanbulSultanahmet,
    imageAlt: "ناوچەی مێژوویی نزیک Grand Bazaar",
    visitTime: "١ تا ٣ کاتژمێر",
    area: "Beyazit",
    category: "بازاڕ",
    destinationName: "Grand Bazaar Istanbul",
    coordinates: { lat: 41.0107, lng: 28.968 },
    routeGuide: istanbulDays[1].routeGuide
  },
  {
    id: "spice-bazaar",
    nameKu: "بازاڕی بۆنوبەهارات",
    nameEn: "Spice Bazaar",
    description: "بازاڕی بەهارات، شیرینی و دیاری نزیک Eminonu.",
    image: istanbulBosphorus,
    imageAlt: "Eminonu و کەناری Bosphorus",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Eminonu",
    category: "بازاڕ",
    destinationName: "Spice Bazaar Istanbul",
    coordinates: { lat: 41.0165, lng: 28.9705 },
    routeGuide: istanbulDays[1].routeGuide
  },
  {
    id: "galata-tower",
    nameKu: "تاوەری گەلاتا",
    nameEn: "Galata Tower",
    description: "تاوەرێکی ناسراو بۆ دیمەنی پانۆرامای ئیستەنبول.",
    image: istanbulGalata,
    imageAlt: "Galata Tower و Karakoy",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Galata / Karakoy",
    category: "دیمەن",
    destinationName: "Galata Tower Istanbul",
    coordinates: { lat: 41.0256, lng: 28.9741 },
    routeGuide: istanbulDays[2].routeGuide
  },
  {
    id: "dolmabahce-palace",
    nameKu: "کۆشکی دۆڵمەباهچە",
    nameEn: "Dolmabahce Palace",
    description: "کۆشکی جوان لە کەناری Bosphorus و نزیک Besiktas.",
    image: istanbulBosphorus,
    imageAlt: "Bosphorus و Ortakoy",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Besiktas",
    category: "مێژوویی",
    destinationName: "Dolmabahce Palace Istanbul",
    coordinates: { lat: 41.0392, lng: 29.0005 },
    routeGuide: istanbulDays[3].routeGuide
  },
  {
    id: "kadikoy",
    nameKu: "کادیکۆی",
    nameEn: "Kadikoy",
    description: "ناوچەی زیندووی لای ئاسیایی بۆ خواردن، کافە و بازاڕ.",
    image: istanbulAsianSide,
    imageAlt: "Kadikoy و Moda لە کەناری ئاو",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Asian Side",
    category: "خواردن",
    destinationName: "Kadikoy Istanbul",
    coordinates: { lat: 40.9907, lng: 29.029 },
    routeGuide: istanbulDays[4].routeGuide
  },
  {
    id: "balat",
    nameKu: "باڵات",
    nameEn: "Balat",
    description: "ناوچەی ڕەنگاوڕەنگ و مێژوویی بۆ وێنە، پیادەڕۆیی و کافە.",
    image: istanbulBalat,
    imageAlt: "شەقامە ڕەنگاوڕەنگەکانی Balat",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Fatih",
    category: "گەڕان",
    destinationName: "Balat Istanbul",
    coordinates: { lat: 41.029, lng: 28.9497 },
    routeGuide: istanbulDays[6].routeGuide
  },
  {
    id: "princes-islands",
    nameKu: "دوورگەکانی شازادەکان",
    nameEn: "Princes' Islands",
    description: "دوورگەی ئارام بۆ پشوودان و دیمەنی دەریا.",
    image: istanbulAsianSide,
    imageAlt: "فێری و کەناری ئیستەنبول بۆ دوورگەکان",
    visitTime: "نیو ڕۆژ تا ڕۆژێک",
    area: "Büyükada",
    category: "سروشت",
    destinationName: "Buyukada Istanbul",
    coordinates: { lat: 40.8746, lng: 29.1294 },
    routeGuide: istanbulDays[8].routeGuide
  }
];

const dubaiDays: ItineraryDay[] = [
  {
    day: 1,
    title: "Downtown Dubai",
    area: "Burj Khalifa، Dubai Mall، Dubai Fountain، Souk Al Bahar",
    clusterNote: "هەموو شوێنەکان لە هەمان ناوچەدان و بۆ ڕۆژی یەکەم زۆر ئاسانن.",
    image: dubaiDowntown,
    imageAlt: "Burj Khalifa و Downtown Dubai",
    morning: "Dubai Mall و Aquarium لە ناو مۆڵ بە ئارامی ببینە.",
    afternoon: "Burj Khalifa و دیمەنی Downtown.",
    evening: "Dubai Fountain و Souk Al Bahar بۆ نانی شەوانە.",
    attractions: ["Burj Khalifa", "Dubai Mall", "Dubai Fountain", "Souk Al Bahar"],
    food: "Time Out Market بۆ چەند هەڵبژاردن؛ At.mosphere یان Armani بۆ گرانتر.",
    travelTime: "٥ تا ٧ کاتژمێر، زۆرترین لە ناوچەی یەک.",
    destinationName: "Burj Khalifa Dubai",
    destinationCoordinates: { lat: 25.1972, lng: 55.2744 },
    routeGuide: routeGuide(
      "Downtown باشترین دەستپێکردنی Dubai ـە، چونکە مۆڵ، بەرزترین بینا و فۆنتان هەموو نزیکن.",
      [
        "لە هۆتێلەکەتەوە ڕێگا بۆ Dubai Mall یان Burj Khalifa بکەرەوە.",
        "ئەگەر میترۆ هەڵبژێریت، وێستگەی Burj Khalifa/Dubai Mall بەکاربهێنە.",
        "لە ناو مۆڵدا تابلووەکان بۆ Burj Khalifa و Fountain شوێن بکە.",
        "بۆ گەڕانەوە، تاکسی یان میترۆ زۆر ئاسانە."
      ],
      ["بە میترۆ باشە", "بۆ خێزان گونجاوە", "هاوین: ناوەوە باشترە"],
      ["لە Dubai Mall زۆر گەورەیە؛ دەرگای چوونە ژوورەوەت لەبیر بکە.", "لە هاوین ئاوی خواردنەوە و کاتی پشوو گرنگە."]
    )
  },
  {
    day: 2,
    title: "Old Dubai و Creek",
    area: "Al Fahidi، Dubai Creek، Gold Souk، Spice Souk",
    clusterNote: "هەموو بەشی مێژوویی Dubai لە دەوروبەری Creek ـە.",
    image: dubaiOldDubai,
    imageAlt: "Old Dubai، Al Fahidi و Dubai Creek",
    morning: "Al Fahidi Historical Neighbourhood و مۆزەخانە/کوچەکان ببینە.",
    afternoon: "بە abra لە Dubai Creek بپەڕەوە بۆ Deira.",
    evening: "Gold Souk و Spice Souk ببینە و زوو بگەڕێوە.",
    attractions: ["Al Fahidi", "Dubai Creek", "Gold Souk", "Spice Souk"],
    food: "Al Ustad Special Kabab یان Al Khayma Heritage Restaurant بۆ خواردنی ناوخۆیی.",
    travelTime: "٤ تا ٦ کاتژمێر.",
    destinationName: "Al Fahidi Historical Neighbourhood Dubai",
    destinationCoordinates: { lat: 25.2634, lng: 55.3007 },
    routeGuide: routeGuide(
      "Old Dubai بۆ کوردانی گەشتیار زۆر خۆشە چونکە بازاڕ، خواردنی ناوخۆیی و نرخەکانی هەندێک شوێن باشترن.",
      [
        "ڕێگا بۆ Al Fahidi Historical Neighbourhood بکەرەوە.",
        "ئەگەر بە میترۆ دەچیت، وێستگەی Sharaf DG یان Al Ghubaiba نزیکە.",
        "لە Creek بە abra بپەڕەوە؛ ئەزموونێکی خۆش و ئابووریە.",
        "لە Gold Souk نرخی شت پێش کڕین بپرسە."
      ],
      ["بە میترۆ باشە", "بە abra جوانترە", "ئابووری"],
      ["لە بازاڕەکان کەلوپەلت نزیک لە خۆت بهێڵە.", "لە نێوەڕۆی گەرم، کاتی پشوو لە کافە یان مۆڵ دانێ."]
    )
  },
  {
    day: 3,
    title: "Jumeirah و ساحل",
    area: "Jumeirah Mosque، Kite Beach، Burj Al Arab View",
    clusterNote: "ساحل و Jumeirah نزیکن؛ بۆ هاوین بەیانی زوو یان ئێوارە باشترە.",
    image: dubaiJumeirah,
    imageAlt: "Jumeirah Beach و Burj Al Arab",
    morning: "Jumeirah Mosque لە دەرەوە یان بە ڕێنمایی ببینە.",
    afternoon: "Kite Beach بۆ پیادەڕۆیی و خواردنی سووک.",
    evening: "Burj Al Arab Viewpoint و کافەیەکی ساحلی.",
    attractions: ["Jumeirah Mosque", "Kite Beach", "Burj Al Arab View"],
    food: "Bu Qtair بۆ ماسی ئابووری، رێستورانی Madinat Jumeirah بۆ گرانتر.",
    travelTime: "٤ تا ٦ کاتژمێر.",
    destinationName: "Kite Beach Dubai",
    destinationCoordinates: { lat: 25.1612, lng: 55.2078 },
    routeGuide: routeGuide(
      "Jumeirah بۆ ساحل و وێنە زۆر جوانە، بەڵام هاوین گەرمە. ئێوارە یان بەیانی زوو باشترین کاتە.",
      [
        "ڕێگا بۆ Jumeirah Mosque یان Kite Beach بکەرەوە.",
        "بۆ خێزان و کەسانی شارەزا نییە، تاکسی ئاسانترینە.",
        "لە Kite Beach بە پیادە لە کەناری ئاو بڕۆ.",
        "بۆ Burj Al Arab Viewpoint تاکسی کورت بەکاربهێنە."
      ],
      ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "بۆ ئێوارە باشترە"]
    )
  },
  {
    day: 4,
    title: "Dubai Marina، JBR و Bluewaters",
    area: "Dubai Marina Walk، JBR Beach، Bluewaters Island",
    clusterNote: "ئەم شوێنانە لە یەک هێڵی کەناری دەریادان و بە ئێوارە جوانترن.",
    image: dubaiMarina,
    imageAlt: "Dubai Marina و JBR",
    morning: "پشووی هۆتێل یان مۆڵی نزیک، چونکە ناوچەکە ئێوارە جوانترە.",
    afternoon: "Dubai Marina Walk و کافەکان.",
    evening: "JBR Beach و Bluewaters Island بۆ دیمەن و نانی شەوانە.",
    attractions: ["Dubai Marina Walk", "JBR Beach", "Bluewaters Island"],
    food: "Common Grounds یان کافەکانی Marina بۆ قاوە؛ رێستورانی JBR بۆ شەوانە.",
    travelTime: "٤ تا ٦ کاتژمێر.",
    destinationName: "Dubai Marina Walk",
    destinationCoordinates: { lat: 25.0814, lng: 55.1398 },
    routeGuide: routeGuide(
      "Marina و JBR بۆ پیادەڕۆیی و شەو زۆر گونجاون. ئەگەر هۆتێلت دوورە، تاکسی یان میترۆ هەڵبژێرە.",
      [
        "ڕێگا بۆ Dubai Marina Mall یان Marina Walk بکەرەوە.",
        "ئەگەر بە میترۆ دەچیت، وێستگەی DMCC یان Sobha Realty بەکاربهێنە.",
        "لە Marina بە پیادە بەرەو JBR بڕۆ.",
        "بۆ Bluewaters دەتوانیت بە پیادەی پل یان تاکسی بچیت."
      ],
      ["بە میترۆ باشە", "بۆ پیادەڕۆیی گونجاوە", "بۆ شەو جوانە"]
    )
  },
  {
    day: 5,
    title: "Palm Jumeirah و Atlantis",
    area: "The View at The Palm، Nakheel Mall، Atlantis، The Pointe",
    clusterNote: "Palm بە یەک ناوچەی گشتیە؛ بۆ خێزان تاکسی نێوان شوێنەکان باشترە.",
    image: dubaiPalm,
    imageAlt: "Palm Jumeirah و Atlantis Dubai",
    morning: "The View at The Palm بۆ دیمەنی Palm.",
    afternoon: "Nakheel Mall یان Atlantis Aquarium.",
    evening: "The Pointe یان کەناری Palm بۆ نانی شەوانە.",
    attractions: ["The View at The Palm", "Nakheel Mall", "Atlantis Dubai"],
    food: "The Pointe بۆ هەڵبژاردنی زۆر؛ Ossiano یان رێستورانی Atlantis بۆ لوکس.",
    travelTime: "٥ تا ٧ کاتژمێر.",
    destinationName: "The View at The Palm Dubai",
    destinationCoordinates: { lat: 25.1136, lng: 55.1392 },
    routeGuide: routeGuide(
      "Palm Jumeirah شوێنی گەورەیە و ناوچەکان پیادە زۆر دوورن. تاکسی بۆ خێزان و هاوین باشترینە.",
      [
        "ڕێگا بۆ The View at The Palm بکەرەوە.",
        "بۆ Atlantis تاکسی یان مونۆرەیل بەکاربهێنە.",
        "لە ناوچەی Palm کاتی گەڕانەوە پێشتر پلان بکە.",
        "ئەگەر مۆڵت پێویست بوو، Nakheel Mall نزیکە."
      ],
      ["بە تاکسی ئاسانترە", "بۆ خێزان گونجاوە", "دیمەنی لوکس"]
    )
  },
  {
    day: 6,
    title: "Desert Safari یان Dubai Frame",
    area: "Dubai Frame، Zabeel، Desert Safari",
    clusterNote: "ئەگەر هاوینە، Desert Safari تەنها ئێوارە باشترە؛ ناوەڕۆ لە ناوەوە بمێنە.",
    image: dubaiOldDubai,
    imageAlt: "Dubai Frame، Old Dubai و گەشتی ئێوارە",
    morning: "Dubai Frame یان مۆڵی نزیک ببینە.",
    afternoon: "پشووی ناوەوە و ئامادەبوون بۆ Desert Safari.",
    evening: "Desert Safari لە ئێوارە، یان نانی شەوانە لە Downtown.",
    attractions: ["Dubai Frame", "Zabeel Park", "Desert Safari"],
    food: "خواردنی ناو گەشتی desert یان رێستورانی نزیک هۆتێل.",
    travelTime: "٣ تا ٦ کاتژمێر بە پێی هەڵبژاردن.",
    destinationName: "Dubai Frame",
    destinationCoordinates: { lat: 25.2355, lng: 55.3003 },
    routeGuide: routeGuide(
      "ئەم ڕۆژە هەڵبژاردنە: ئەگەر گەرمی زۆرە Dubai Frame و مۆڵ باشترە؛ ئەگەر Desert دەچیت، ئێوارە هەڵبژێرە.",
      [
        "ڕێگا بۆ Dubai Frame بکەرەوە بۆ بەشی بەیانی.",
        "بۆ Desert Safari، شوێنی هەڵگرتنت لەگەڵ کۆمپانیا پشتڕاست بکە.",
        "لە ئێوارە جل و پێڵاوی ئاسوودە لەبەر بکە.",
        "ئەگەر منداڵ یان کەسی نەخۆش لەگەڵە، گەشتی ئارامتر هەڵبژێرە."
      ],
      ["بە ئۆتۆمبێل / تاکسی", "هاوین: ئێوارە باشترە", "پێشتر بلیت بکە"]
    )
  },
  {
    day: 7,
    title: "Museum of the Future و Mall of the Emirates",
    area: "Museum of the Future، City Walk، Mall of the Emirates",
    clusterNote: "ڕۆژی ناوەوە و شۆپینگ؛ بۆ هاوینی Dubai زۆر گونجاوە.",
    image: dubaiDowntown,
    imageAlt: "ناوچەی مۆدێرنی Dubai و شوێنە ناوەوەکان",
    morning: "Museum of the Future بە بلیتی پێشوەخت.",
    afternoon: "City Walk یان Mall of the Emirates.",
    evening: "Ski Dubai یان کافە و شۆپینگ لە ناو مۆڵ.",
    attractions: ["Museum of the Future", "City Walk", "Mall of the Emirates"],
    food: "Common Grounds بۆ قاوە و خواردنی مامناوەند؛ رێستورانی مۆڵ بۆ هەموو بودجە.",
    travelTime: "٤ تا ٧ کاتژمێر.",
    destinationName: "Museum of the Future Dubai",
    destinationCoordinates: { lat: 25.2191, lng: 55.2819 },
    routeGuide: routeGuide(
      "بۆ ڕۆژی گەرم، Museum of the Future و مۆڵ زۆر ئاسانن. بلیت پێشتر بکە چونکە قەرەباڵغ دەبێت.",
      [
        "ڕێگا بۆ Museum of the Future بکەرەوە.",
        "ئەگەر بە میترۆ دەچیت، وێستگەی Emirates Towers نزیکە.",
        "دوای سەردان، تاکسی یان میترۆ بۆ Mall of the Emirates بەکاربهێنە.",
        "لە مۆڵدا دەرگای دەرچوون و شوێنی تاکسی لەبیر بکە."
      ],
      ["بە میترۆ باشە", "هاوین: ناوەوە باشترە", "شۆپینگ"]
    )
  }
];

const dubaiAttractions: Attraction[] = [
  {
    id: "burj-khalifa",
    nameKu: "بوردجی خەلیفە",
    nameEn: "Burj Khalifa",
    description: "بەرزترین بینای جیهان و خاڵی سەرەکی Downtown Dubai.",
    image: dubaiDowntown,
    imageAlt: "Burj Khalifa و Downtown Dubai",
    visitTime: "١.٥ تا ٢.٥ کاتژمێر",
    area: "Downtown",
    category: "دیمەن",
    destinationName: "Burj Khalifa Dubai",
    coordinates: { lat: 25.1972, lng: 55.2744 },
    routeGuide: dubaiDays[0].routeGuide
  },
  {
    id: "dubai-mall",
    nameKu: "Dubai Mall",
    nameEn: "Dubai Mall",
    description: "مۆڵێکی گەورە بۆ شۆپینگ، خواردن، Aquarium و Fountain.",
    image: dubaiDowntown,
    imageAlt: "Dubai Mall و Downtown Dubai",
    visitTime: "٢ تا ٥ کاتژمێر",
    area: "Downtown",
    category: "شۆپینگ",
    destinationName: "Dubai Mall",
    coordinates: { lat: 25.1985, lng: 55.2796 },
    routeGuide: dubaiDays[0].routeGuide
  },
  {
    id: "al-fahidi",
    nameKu: "گەڕەکی مێژوویی ئەلفەهیدی",
    nameEn: "Al Fahidi Historical Neighbourhood",
    description: "بەشی کۆنی Dubai بۆ کولتوور، کوچەی تەنگ و کافەی ناوخۆیی.",
    image: dubaiOldDubai,
    imageAlt: "Al Fahidi و Dubai Creek",
    visitTime: "١.٥ تا ٣ کاتژمێر",
    area: "Bur Dubai",
    category: "مێژوویی",
    destinationName: "Al Fahidi Historical Neighbourhood Dubai",
    coordinates: { lat: 25.2634, lng: 55.3007 },
    routeGuide: dubaiDays[1].routeGuide
  },
  {
    id: "gold-souk",
    nameKu: "بازاڕی زێڕی Dubai",
    nameEn: "Gold Souk",
    description: "بازاڕی زێڕ و دیاری لە Deira.",
    image: dubaiOldDubai,
    imageAlt: "Old Dubai و Dubai Creek",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Deira",
    category: "بازاڕ",
    destinationName: "Dubai Gold Souk",
    coordinates: { lat: 25.2706, lng: 55.2973 },
    routeGuide: dubaiDays[1].routeGuide
  },
  {
    id: "kite-beach",
    nameKu: "Kite Beach",
    nameEn: "Kite Beach",
    description: "ساحلێکی خاوێن بۆ پیادەڕۆیی، وێنە و خواردنی سووک.",
    image: dubaiJumeirah,
    imageAlt: "Kite Beach و Jumeirah",
    visitTime: "١ تا ٣ کاتژمێر",
    area: "Jumeirah",
    category: "ساحل",
    destinationName: "Kite Beach Dubai",
    coordinates: { lat: 25.1612, lng: 55.2078 },
    routeGuide: dubaiDays[2].routeGuide
  },
  {
    id: "dubai-marina",
    nameKu: "Dubai Marina",
    nameEn: "Dubai Marina Walk",
    description: "ناوچەی کەناری دەریا بۆ پیادەڕۆیی و شەوانە.",
    image: dubaiMarina,
    imageAlt: "Dubai Marina و JBR",
    visitTime: "٢ تا ٤ کاتژمێر",
    area: "Marina",
    category: "گەڕان",
    destinationName: "Dubai Marina Walk",
    coordinates: { lat: 25.0814, lng: 55.1398 },
    routeGuide: dubaiDays[3].routeGuide
  },
  {
    id: "palm-jumeirah",
    nameKu: "Palm Jumeirah",
    nameEn: "Palm Jumeirah",
    description: "ناوچەی لوکس بۆ The View، Atlantis و دیمەنی دەریا.",
    image: dubaiPalm,
    imageAlt: "Palm Jumeirah و Atlantis Dubai",
    visitTime: "٣ تا ٥ کاتژمێر",
    area: "Palm Jumeirah",
    category: "دیمەن",
    destinationName: "The View at The Palm Dubai",
    coordinates: { lat: 25.1136, lng: 55.1392 },
    routeGuide: dubaiDays[4].routeGuide
  },
  {
    id: "dubai-frame",
    nameKu: "Dubai Frame",
    nameEn: "Dubai Frame",
    description: "شوێنی دیمەن و وێنە لە نێوان Dubai کۆن و نوێ.",
    image: dubaiOldDubai,
    imageAlt: "Old Dubai و دیمەنی heritage",
    visitTime: "١ تا ٢ کاتژمێر",
    area: "Zabeel",
    category: "دیمەن",
    destinationName: "Dubai Frame",
    coordinates: { lat: 25.2355, lng: 55.3003 },
    routeGuide: dubaiDays[5].routeGuide
  },
  {
    id: "museum-future",
    nameKu: "Museum of the Future",
    nameEn: "Museum of the Future",
    description: "مۆزەخانەی مۆدێرن بۆ ئەزموونی ناوەوە، بۆ هاوین زۆر باشە.",
    image: dubaiDowntown,
    imageAlt: "Downtown Dubai و شوێنە مۆدێرنەکان",
    visitTime: "٢ تا ٣ کاتژمێر",
    area: "Trade Centre",
    category: "ناوەوە",
    destinationName: "Museum of the Future Dubai",
    coordinates: { lat: 25.2191, lng: 55.2819 },
    routeGuide: dubaiDays[6].routeGuide
  }
];

const istanbulFood: FoodSpot[] = [
  {
    id: "sultanahmet-kofte",
    name: "Tarihi Sultanahmet Köftecisi",
    typeKu: "کۆفتە / خواردنی ئابووری",
    area: "Sultanahmet",
    budget: "cheap",
    note: "نزیک بە شوێنە مێژووییەکان و بۆ خێزان ئاسانە.",
    destinationName: "Tarihi Sultanahmet Köftecisi Istanbul",
    coordinates: { lat: 41.0084, lng: 28.9769 }
  },
  {
    id: "sehzade",
    name: "Şehzade Cağ Kebap",
    typeKu: "کەباب / مامناوەند",
    area: "Sirkeci",
    budget: "mid",
    note: "باشە بۆ ڕۆژی بازاڕ و Eminonu.",
    destinationName: "Şehzade Cağ Kebap Istanbul"
  },
  {
    id: "karakoy-gulluoglu",
    name: "Karaköy Güllüoğlu",
    typeKu: "شیرینی / بەقلاوە",
    area: "Karakoy",
    budget: "mid",
    note: "ناسرە بۆ بەقلاوە و پشووی خێرا.",
    destinationName: "Karaköy Güllüoğlu Istanbul"
  },
  {
    id: "ciya",
    name: "Çiya Sofrası",
    typeKu: "خواردنی ناوخۆیی",
    area: "Kadikoy",
    budget: "mid",
    note: "هەڵبژاردنی باش بۆ خواردنی تورکی و ناوچەیی.",
    destinationName: "Çiya Sofrası Kadıköy Istanbul"
  },
  {
    id: "mikla",
    name: "Mikla",
    typeKu: "رێستورانی لوکس",
    area: "Beyoglu",
    budget: "premium",
    note: "بۆ شەوانەی تایبەت و دیمەنی شار؛ پێشتر حجز بکە.",
    destinationName: "Mikla Restaurant Istanbul"
  },
  {
    id: "neolokal",
    name: "Neolokal",
    typeKu: "رێستورانی لوکس / هاوچەرخ",
    area: "Karakoy",
    budget: "premium",
    note: "بۆ ئەوانەی خواردنی تایبەت و شێوازی مۆدێرن دەوێت.",
    destinationName: "Neolokal Istanbul"
  },
  {
    id: "mandabatmaz",
    name: "Mandabatmaz",
    typeKu: "قاوەی تورکی",
    area: "Beyoglu",
    budget: "cheap",
    note: "شوێنی بچووک و بەناوبانگ بۆ قاوەی تورکی.",
    destinationName: "Mandabatmaz Istanbul"
  },
  {
    id: "petra",
    name: "Petra Roasting Co.",
    typeKu: "کافە / specialty coffee",
    area: "Gayrettepe",
    budget: "mid",
    note: "باشە بۆ قاوەی باش لە ڕۆژی شۆپینگ.",
    destinationName: "Petra Roasting Co Istanbul"
  }
];

const dubaiFood: FoodSpot[] = [
  {
    id: "al-ustad",
    name: "Al Ustad Special Kabab",
    typeKu: "کەباب / ئابووری",
    area: "Bur Dubai",
    budget: "cheap",
    note: "بۆ گەشتیارانی کورد زۆر گونجاوە: خواردنی ناسراو، نرخەکانی باشتر.",
    destinationName: "Al Ustad Special Kabab Dubai"
  },
  {
    id: "ravi",
    name: "Ravi Restaurant",
    typeKu: "خواردنی ئابووری",
    area: "Satwa",
    budget: "cheap",
    note: "بۆ نانی خێرا و نرخێکی باش؛ تاکسی ئاسانترە.",
    destinationName: "Ravi Restaurant Dubai Satwa"
  },
  {
    id: "al-khayma",
    name: "Al Khayma Heritage Restaurant",
    typeKu: "خواردنی ئیماراتی",
    area: "Al Fahidi",
    budget: "mid",
    note: "نزیک بە Old Dubai و باشە بۆ خواردنی ناوخۆیی.",
    destinationName: "Al Khayma Heritage Restaurant Dubai"
  },
  {
    id: "bu-qtair",
    name: "Bu Qtair",
    typeKu: "ماسی / ساحل",
    area: "Jumeirah",
    budget: "mid",
    note: "هەڵبژاردنی ناسراو بۆ ماسی، باشترە ئێوارە بچیت.",
    destinationName: "Bu Qtair Dubai"
  },
  {
    id: "orfali",
    name: "Orfali Bros",
    typeKu: "رێستورانی تایبەت",
    area: "Jumeirah",
    budget: "premium",
    note: "بۆ خواردنی هاوچەرخ و حجزکردن پێشتر باشە.",
    destinationName: "Orfali Bros Dubai"
  },
  {
    id: "tresind",
    name: "Tresind Studio",
    typeKu: "لوکس / tasting menu",
    area: "Palm Jumeirah",
    budget: "premium",
    note: "بۆ شەوانەی تایبەت و بودجەی گران.",
    destinationName: "Tresind Studio Dubai"
  },
  {
    id: "espresso-lab",
    name: "The Espresso Lab",
    typeKu: "specialty coffee",
    area: "Dubai Design District",
    budget: "mid",
    note: "باشە بۆ ئەوانەی قاوەی تایبەت دەویست.",
    destinationName: "The Espresso Lab Dubai"
  },
  {
    id: "brix",
    name: "BRIX Cafe",
    typeKu: "کافە / دیمەن",
    area: "Jumeirah Fishing Harbour",
    budget: "mid",
    note: "کافەی مۆدێرن و باش بۆ پشووی ئێوارە.",
    destinationName: "BRIX Cafe Dubai"
  }
];

const istanbulTrends: MonthlyTrend[] = [
  {
    title: "هاوینی ٢٠٢٦: Bosphorus و کافەی شەوانە",
    text: "لە مانگی حوزەیران و تەمموز، باشترە شوێنە مێژووییەکان بەیانی ببینیت و ئێوارە بۆ Bosphorus، Karakoy یان Galata دانێیت.",
    badges: ["بەیانی بۆ مێژوو", "ئێوارە بۆ کافە", "حجز بۆ رێستورانی گران"]
  },
  {
    title: "بۆ خێزانی کورد",
    text: "Sultanahmet، Kadikoy و مۆڵەکان ئاسانترینن. لە شەقامە قەرەباڵغەکان شوێنی کۆبوونەوە دیاری بکەن.",
    badges: ["خێزان", "پێڵاوی ئاسوودە", "Google Maps بەکاربهێنە"]
  }
];

const dubaiTrends: MonthlyTrend[] = [
  {
    title: "هاوینی ٢٠٢٦: ناوەوە و ئێوارە",
    text: "لە Dubai گەرمی زۆرە، بۆیە Downtown، Museum of the Future و مۆڵەکان لە ڕۆژدا باشن؛ ساحل و Marina بۆ ئێوارە باشترن.",
    badges: ["ناوەوە", "ئاوی خواردنەوە", "ئێوارە بۆ ساحل"]
  },
  {
    title: "کافە و رێستورانی ترێند",
    text: "Specialty coffee لە Dubai Design District و Jumeirah بەردەوام بەهێزە. بۆ رێستورانی لوکس پێشتر حجز بکە.",
    badges: ["specialty coffee", "حجز پێشتر", "بودجە دیاری بکە"]
  }
];

export const cityGuides: CityGuide[] = [
  {
    slug: "istanbul",
    nameKu: "ئیستەنبول",
    nameEn: "Istanbul",
    title: "پلانی ١٠ ڕۆژی ئیستەنبول بە ناوچەی نزیک",
    subtitle: "هەر ڕۆژ لە یەک ناوچە یان شوێنە نزیکەکانە.",
    description:
      "پلانی ئیستەنبول نوێ کراوەتەوە بۆ ئەوەی گەشتیار بە پێی ناوچە بگەڕێت، نەک هەر ڕۆژ لە دوورترین شوێنەکان بڕوات.",
    heroAlt: "دیمەنی ئیستەنبول و Bosphorus",
    countryCode: "tr",
    mapCenter: { lat: 41.0082, lng: 28.9784 },
    mapZoom: 11,
    days: istanbulDays,
    attractions: istanbulAttractions,
    foodSpots: istanbulFood,
    monthlyTrends: istanbulTrends,
    quickTips: [
      "Sultanahmet بۆ یەکەم ڕۆژ باشترینە چونکە شوێنەکان نزیکن.",
      "لە بازاڕ و Istiklal کەلوپەلت ئاگادار بە.",
      "بۆ Bosphorus و لای ئاسیایی فێری هەم جوانە هەم ئاسانە.",
      "بۆ رێستورانی گران، شەوانە پێشتر حجز بکە."
    ]
  },
  {
    slug: "dubai",
    nameKu: "دوبەی",
    nameEn: "Dubai",
    title: "پلانی دوبەی بە ناوچەی نزیک",
    subtitle: "Downtown، Old Dubai، Jumeirah، Marina و Palm بە ڕۆژی جیا.",
    description:
      "پلانی دوبەی بۆ گەشتیاری کوردی ڕێکخراوە: گەرمی هاوین، مۆڵ، ساحل، خواردن و ڕێگای ئاسان هەموو ڕەچاو کراوە.",
    heroAlt: "دیمەنی دوبەی و Burj Khalifa لە کەناری ئاو",
    countryCode: "ae",
    mapCenter: { lat: 25.2048, lng: 55.2708 },
    mapZoom: 10,
    days: dubaiDays,
    attractions: dubaiAttractions,
    foodSpots: dubaiFood,
    monthlyTrends: dubaiTrends,
    quickTips: [
      "لە هاوین، شوێنە ناوەوە و مۆڵ لە ڕۆژدا باشترن.",
      "بۆ ساحل و Marina، ئێوارە کاتێکی خۆشترە.",
      "Old Dubai بۆ خواردنی ئابووری و کولتوور زۆر گونجاوە.",
      "تاکسی لە Dubai بۆ خێزان زۆر ئاسانە، بەڵام میترۆ بۆ Downtown و Marina باشە."
    ]
  }
];

export const cityGuideBySlug = Object.fromEntries(cityGuides.map((city) => [city.slug, city])) as Record<
  CityGuide["slug"],
  CityGuide
>;

export function getAttractionCategories(attractions: Attraction[]) {
  return ["هەموو", ...Array.from(new Set(attractions.map((attraction) => attraction.category)))];
}
