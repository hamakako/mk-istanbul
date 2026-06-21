import type { StaticImageData } from "next/image";

export type Coordinates = {
  lat: number;
  lng: number;
};

export type RouteMode = "driving" | "walking" | "transit" | "ferry";

export type CountryCode = "tr" | "ae";

export type FoodBudget = "cheap" | "mid" | "premium";

export type KurdishRouteGuideData = {
  overview: string;
  steps: string[];
  notes: string[];
  badges: string[];
};

export type ItineraryDay = {
  day: number;
  title: string;
  area: string;
  clusterNote?: string;
  image?: StaticImageData;
  imageAlt?: string;
  morning: string;
  afternoon: string;
  evening: string;
  attractions: string[];
  food: string;
  travelTime: string;
  destinationName: string;
  destinationCoordinates?: Coordinates;
  routeGuide: KurdishRouteGuideData;
};

export type Attraction = {
  id: string;
  nameKu: string;
  nameEn: string;
  description: string;
  image?: StaticImageData;
  imageAlt?: string;
  visitTime: string;
  area: string;
  category: string;
  destinationName: string;
  coordinates?: Coordinates;
  routeGuide: KurdishRouteGuideData;
};

export type FoodSpot = {
  id: string;
  name: string;
  typeKu: string;
  area: string;
  budget: FoodBudget;
  note: string;
  destinationName: string;
  coordinates?: Coordinates;
};

export type MonthlyTrend = {
  title: string;
  text: string;
  badges: string[];
};

export type CityGuide = {
  slug: "istanbul" | "dubai";
  nameKu: string;
  nameEn: string;
  title: string;
  subtitle: string;
  description: string;
  heroAlt: string;
  countryCode: CountryCode;
  mapCenter: Coordinates;
  mapZoom: number;
  days: ItineraryDay[];
  attractions: Attraction[];
  foodSpots: FoodSpot[];
  monthlyTrends: MonthlyTrend[];
  quickTips: string[];
};
