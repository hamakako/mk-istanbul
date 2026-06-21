import { cityGuideBySlug, getAttractionCategories } from "@/data/cities";

export const attractions = cityGuideBySlug.istanbul.attractions;
export const attractionCategories = getAttractionCategories(attractions);
