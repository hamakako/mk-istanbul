"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/lib/googleMaps";
import type { Coordinates, CountryCode } from "@/types/travel";

type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
  onCoordinateSelect: (coordinates?: Coordinates) => void;
  countryCode?: CountryCode;
  mapCenter?: Coordinates;
  placeholder?: string;
};

const istanbulCenter: Coordinates = { lat: 41.0082, lng: 28.9784 };

function formatCoordinates(coordinates: Coordinates) {
  return `${coordinates.lat.toFixed(6)},${coordinates.lng.toFixed(6)}`;
}

export default function LocationInput({
  value,
  onChange,
  onCoordinateSelect,
  countryCode = "tr",
  mapCenter = istanbulCenter,
  placeholder = "Taksim Square، Sultanahmet، My hotel in Fatih، Istanbul Airport"
}: LocationInputProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const inputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);
  const [placesReady, setPlacesReady] = useState(false);
  const [showMapPicker, setShowMapPicker] = useState(false);
  const [mapStatus, setMapStatus] = useState("");

  useEffect(() => {
    if (!apiKey || !inputRef.current) {
      return;
    }

    let active = true;
    let listener: { remove: () => void } | undefined;

    loadGoogleMaps(apiKey)
      .then((google) => {
        if (!active || !inputRef.current || !google?.maps?.places) {
          return;
        }

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: countryCode },
          fields: ["formatted_address", "geometry", "name"]
        });

        listener = autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          const label = place.formatted_address || place.name || "";

          if (label) {
            onChange(label);
          }

          const location = place.geometry?.location;
          if (location) {
            onCoordinateSelect({ lat: location.lat(), lng: location.lng() });
          }
        });

        setPlacesReady(true);
      })
      .catch(() => {
        setPlacesReady(false);
      });

    return () => {
      active = false;
      listener?.remove();
    };
  }, [apiKey, countryCode, onChange, onCoordinateSelect]);

  useEffect(() => {
    if (!apiKey || !showMapPicker || !mapRef.current) {
      return;
    }

    let active = true;

    loadGoogleMaps(apiKey)
      .then((google) => {
        if (!active || !mapRef.current) {
          return;
        }

        const map = new google.maps.Map(mapRef.current, {
          center: mapCenter,
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        });

        const marker = new google.maps.Marker({
          map,
          position: mapCenter,
          draggable: true
        });

        markerRef.current = marker;

        const commitLocation = (latLng: any) => {
          const coordinates = { lat: latLng.lat(), lng: latLng.lng() };
          marker.setPosition(coordinates);
          onCoordinateSelect(coordinates);
          onChange(formatCoordinates(coordinates));
          setMapStatus("شوێنەکەت لەسەر ماپ دیاری کرا.");
        };

        map.addListener("click", (event: any) => {
          if (event.latLng) {
            commitLocation(event.latLng);
          }
        });

        marker.addListener("dragend", (event: any) => {
          if (event.latLng) {
            commitLocation(event.latLng);
          }
        });

        setMapStatus("لەسەر ماپ کلیک بکە یان نیشانەکە بجوڵێنە.");
      })
      .catch(() => {
        setMapStatus("ناتوانرێت ماپ بار بکرێت. تکایە شوێنەکەت بە دەست بنووسە.");
      });

    return () => {
      active = false;
      markerRef.current = null;
    };
  }, [apiKey, showMapPicker, mapCenter, onChange, onCoordinateSelect]);

  const handleTextChange = (nextValue: string) => {
    onChange(nextValue);
    onCoordinateSelect(undefined);
  };

  return (
    <div className="rounded-md border border-mk-line bg-white p-4">
      <label htmlFor="manual-start-location" className="block text-sm font-bold text-mk-navy">
        شوێنی خۆت بنووسە یان لەسەر ماپ دیاری بکە
      </label>
      <input
        ref={inputRef}
        id="manual-start-location"
        type="text"
        value={value}
        onChange={(event) => handleTextChange(event.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-mk-line bg-white px-4 py-3 text-right text-sm text-mk-ink outline-none transition placeholder:text-mk-ink/42 focus:border-mk-teal focus:ring-4 focus:ring-mk-teal/22"
      />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setShowMapPicker((current) => !current)}
          disabled={!apiKey}
          className="rounded-md border border-mk-navy px-4 py-2 text-sm font-bold text-mk-navy transition hover:bg-mk-cream focus-visible:focus-ring disabled:cursor-not-allowed disabled:border-mk-line disabled:text-mk-ink/42"
        >
          لەسەر ماپ شوێن دیاری بکە
        </button>
        <span className="text-xs text-mk-ink/62">
          {apiKey
            ? placesReady
              ? "گەڕانی شوێن بە ماپ چالاکە."
              : "ماپ ئامادە دەکرێت..."
            : "ئەگەر کلیلی ماپ زیاد بکرێت، گەڕان و دیاریکردنی شوێن چالاک دەبێت."}
        </span>
      </div>

      {showMapPicker && apiKey ? (
        <div className="mt-4 overflow-hidden rounded-md border border-mk-line">
          <div ref={mapRef} className="h-64 w-full" aria-label="ماپی دیاریکردنی شوێن" />
          {mapStatus ? <p className="bg-mk-cream px-3 py-2 text-xs text-mk-navy">{mapStatus}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
