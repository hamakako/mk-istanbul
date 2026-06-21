"use client";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory
}: CategoryFilterProps) {
  return (
    <div className="no-print flex flex-wrap gap-2" aria-label="فلتەری پۆل">
      {categories.map((category) => {
        const isActive = category === selectedCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`rounded-md border px-4 py-2 text-sm font-bold transition focus-visible:focus-ring ${
              isActive
                ? "border-mk-navy bg-mk-navy text-white"
                : "border-mk-line bg-white text-mk-navy hover:border-mk-teal hover:bg-mk-teal/16"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
