export type Coordinates = {
  lat: number;
  lng: number;
};

export type RouteMode = "driving" | "walking" | "transit" | "ferry";

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
  visitTime: string;
  area: string;
  category: string;
  destinationName: string;
  coordinates?: Coordinates;
  routeGuide: KurdishRouteGuideData;
};
