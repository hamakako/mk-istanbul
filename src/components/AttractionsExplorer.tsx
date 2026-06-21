"use client";

import { useMemo, useState } from "react";
import AttractionCard from "@/components/AttractionCard";
import AttractionsMap from "@/components/AttractionsMap";
import CategoryFilter from "@/components/CategoryFilter";
import { attractionCategories, attractions } from "@/data/attractions";

export default function AttractionsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("هەموو");

  const visibleAttractions = useMemo(() => {
    if (selectedCategory === "هەموو") {
      return attractions;
    }

    return attractions.filter((attraction) => attraction.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      <AttractionsMap attractions={attractions} />
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
          <AttractionCard key={attraction.id} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}
