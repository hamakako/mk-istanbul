"use client";

import { useMemo, useState } from "react";
import AttractionCard from "@/components/AttractionCard";
import AttractionsMap from "@/components/AttractionsMap";
import CategoryFilter from "@/components/CategoryFilter";
import { getAttractionCategories } from "@/data/cities";
import type { CityGuide } from "@/types/travel";

type AttractionsExplorerProps = {
  city: CityGuide;
};

export default function AttractionsExplorer({ city }: AttractionsExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("هەموو");
  const attractionCategories = useMemo(() => getAttractionCategories(city.attractions), [city.attractions]);

  const visibleAttractions = useMemo(() => {
    if (selectedCategory === "هەموو") {
      return city.attractions;
    }

    return city.attractions.filter((attraction) => attraction.category === selectedCategory);
  }, [city.attractions, selectedCategory]);

  const placeholder =
    city.slug === "dubai"
      ? "Dubai Mall، Deira، My hotel in Marina، Dubai Airport"
      : "Taksim Square، Sultanahmet، My hotel in Fatih، Istanbul Airport";

  return (
    <div className="space-y-8">
      <AttractionsMap
        attractions={city.attractions}
        center={city.mapCenter}
        zoom={city.mapZoom}
        title={`ماپی شوێنە گرنگەکانی ${city.nameKu}`}
        cityName={city.nameKu}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-teal">فلتەر</p>
          <h2 className="mt-1 text-2xl font-bold text-mk-navy">شوێنەکان بە پۆل هەڵبژێرە</h2>
        </div>
        <CategoryFilter
          categories={attractionCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleAttractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            countryCode={city.countryCode}
            mapCenter={city.mapCenter}
            manualPlaceholder={placeholder}
          />
        ))}
      </div>
    </div>
  );
}
