"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/lib/googleMaps";
import type { Attraction } from "@/types/travel";

type AttractionsMapProps = {
  attractions: Attraction[];
};

export default function AttractionsMap({ attractions }: AttractionsMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!apiKey || !mapRef.current) {
      return;
    }

    let active = true;

    loadGoogleMaps(apiKey)
      .then((google) => {
        if (!active || !mapRef.current) {
          return;
        }

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 41.0186, lng: 28.985 },
          zoom: 11,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        });

        const infoWindow = new google.maps.InfoWindow();

        attractions
          .filter((attraction) => attraction.coordinates)
          .forEach((attraction) => {
            const marker = new google.maps.Marker({
              map,
              position: attraction.coordinates,
              title: `${attraction.nameKu} - ${attraction.nameEn}`
            });

            marker.addListener("click", () => {
              infoWindow.setContent(
                `<div dir="rtl" style="font-family: Arial, sans-serif; min-width: 160px;"><strong>${attraction.nameKu}</strong><br/><span>${attraction.area}</span></div>`
              );
              infoWindow.open({ anchor: marker, map });
            });
          });

        setStatus("شوێنە گرنگەکان لەسەر ماپ پیشان دەدرێن.");
      })
      .catch(() => {
        setStatus("ناتوانرێت ماپ بار بکرێت. لیستی شوێنەکان لە خوارەوە بەردەستە.");
      });

    return () => {
      active = false;
    };
  }, [apiKey, attractions]);

  return (
    <section className="rounded-md border border-mk-line bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold text-mk-teal">Google Maps</p>
          <h2 className="mt-1 text-2xl font-bold text-mk-navy">ماپی شوێنە گرنگەکان</h2>
        </div>
        <p className="text-sm text-mk-ink/68">
          {apiKey ? status || "ماپ ئامادە دەکرێت..." : "بۆ نیشاندانی مارکەرەکان کلیلی Google Maps API زیاد بکە."}
        </p>
      </div>

      {apiKey ? (
        <div className="mt-4 overflow-hidden rounded-md border border-mk-line">
          <div ref={mapRef} className="h-[420px] w-full" aria-label="ماپی شوێنە گرنگەکانی ئیستەنبول" />
        </div>
      ) : (
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.slice(0, 12).map((attraction) => (
            <div key={attraction.id} className="rounded-md border border-mk-line bg-mk-cream/36 px-3 py-2 text-sm text-mk-ink/76">
              <span className="font-bold text-mk-navy">{attraction.nameKu}</span> - {attraction.area}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
