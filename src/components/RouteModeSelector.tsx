"use client";

import type { RouteMode } from "@/types/travel";

type RouteModeSelectorProps = {
  selectedMode: RouteMode;
  onChange: (mode: RouteMode) => void;
};

const routeModes: Array<{ mode: RouteMode; label: string; hint: string }> = [
  { mode: "driving", label: "بە ئۆتۆمبێل / تاکسی", hint: "گونجاو بۆ خێزان و جانتا" },
  { mode: "walking", label: "بە پیادە", hint: "باشە بۆ ناوچە نزیکەکان" },
  { mode: "transit", label: "بە گواستنەوەی گشتی", hint: "میترۆ، ترام و پاس" },
  { mode: "ferry", label: "بە فێری", hint: "بۆ Bosphorus و لای ئاسیایی" }
];

export default function RouteModeSelector({ selectedMode, onChange }: RouteModeSelectorProps) {
  return (
    <section aria-labelledby="route-mode-title">
      <h3 id="route-mode-title" className="text-base font-bold text-mk-navy">
        جۆری ڕێگا هەڵبژێرە
      </h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {routeModes.map((item) => {
          const isSelected = item.mode === selectedMode;

          return (
            <button
              key={item.mode}
              type="button"
              onClick={() => onChange(item.mode)}
              className={`rounded-md border p-3 text-right transition focus-visible:focus-ring ${
                isSelected
                  ? "border-mk-navy bg-mk-navy text-white"
                  : "border-mk-line bg-white text-mk-ink hover:border-mk-teal hover:bg-mk-teal/14"
              }`}
              aria-pressed={isSelected}
            >
              <span className="block font-bold">{item.label}</span>
              <span className={`mt-1 block text-xs ${isSelected ? "text-white/78" : "text-mk-ink/64"}`}>
                {item.hint}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
