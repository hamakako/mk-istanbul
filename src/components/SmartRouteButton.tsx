"use client";

import { useCallback, useMemo, useState } from "react";
import LocationInput from "@/components/LocationInput";
import RouteModeSelector from "@/components/RouteModeSelector";
import type { Coordinates, CountryCode, RouteMode } from "@/types/travel";

type SmartRouteButtonProps = {
  destinationName: string;
  destinationCoordinates?: Coordinates;
  attractionName?: string;
  countryCode?: CountryCode;
  mapCenter?: Coordinates;
  manualPlaceholder?: string;
};

type StartChoice = "current" | "manual" | null;

function formatCoordinates(coordinates: Coordinates) {
  return `${coordinates.lat},${coordinates.lng}`;
}

function buildMapsUrl(destination: string, origin?: string, mode?: RouteMode) {
  const travelMode = mode === "ferry" ? "transit" : mode;

  if (!origin) {
    const params = new URLSearchParams({
      api: "1",
      query: destination
    });

    return `https://www.google.com/maps/search/?${params.toString()}`;
  }

  const params = new URLSearchParams({
    api: "1",
    origin,
    destination
  });

  if (travelMode) {
    params.set("travelmode", travelMode);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function openPreparedTab() {
  const tab = window.open("about:blank", "_blank");

  if (tab) {
    tab.opener = null;
  }

  return tab;
}

function navigateToMaps(url: string, tab?: Window | null) {
  if (tab) {
    tab.location.href = url;
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

export default function SmartRouteButton({
  destinationName,
  destinationCoordinates,
  attractionName,
  countryCode = "tr",
  mapCenter,
  manualPlaceholder
}: SmartRouteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<RouteMode>("driving");
  const [startChoice, setStartChoice] = useState<StartChoice>(null);
  const [manualStart, setManualStart] = useState("");
  const [manualCoordinates, setManualCoordinates] = useState<Coordinates | undefined>();
  const [isLocating, setIsLocating] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const destination = useMemo(
    () => (destinationCoordinates ? formatCoordinates(destinationCoordinates) : destinationName),
    [destinationCoordinates, destinationName]
  );

  const displayName = attractionName || destinationName;

  const resetMessages = () => {
    setStatusMessage("");
    setErrorMessage("");
  };

  const openMaps = useCallback(
    (origin?: string, preparedTab?: Window | null) => {
      const url = buildMapsUrl(destination, origin, selectedMode);

      if (!origin) {
        setStatusMessage("ئەگەر شوێنی ئێستات دیاری نەکەیت، Google Maps تەنها شوێنی مەبەستەکە پیشان دەدات.");
      } else {
        setStatusMessage("Google Maps دەکرێتەوە بۆ پیشاندانی باشترین ڕێگا.");
      }

      navigateToMaps(url, preparedTab);
    },
    [destination, selectedMode]
  );

  const handleCurrentLocation = () => {
    resetMessages();
    setStartChoice("current");

    if (!navigator.geolocation) {
      setErrorMessage("ناتوانین شوێنی ئێستات ببینین. تکایە شوێنەکەت بە دەست بنووسە.");
      setStartChoice("manual");
      return;
    }

    const preparedTab = openPreparedTab();
    setIsLocating(true);
    setStatusMessage("شوێنی ئێستات دەدۆزرێتەوە...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = formatCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

        setIsLocating(false);
        openMaps(origin, preparedTab);
      },
      () => {
        preparedTab?.close();
        setIsLocating(false);
        setStartChoice("manual");
        setErrorMessage("ناتوانین شوێنی ئێستات ببینین. تکایە شوێنەکەت بە دەست بنووسە.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 60000,
        timeout: 12000
      }
    );
  };

  const handleManualRoute = () => {
    resetMessages();

    const origin = manualCoordinates ? formatCoordinates(manualCoordinates) : manualStart.trim();
    openMaps(origin || undefined);
  };

  const handleManualChange = useCallback((value: string) => {
    setManualStart(value);
  }, []);

  const handleManualCoordinateSelect = useCallback((coordinates?: Coordinates) => {
    setManualCoordinates(coordinates);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          resetMessages();
          setIsOpen(true);
        }}
        className="no-print inline-flex items-center justify-center rounded-md bg-mk-navy px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-mk-cyan hover:text-mk-navy focus-visible:focus-ring"
      >
        ڕێگا پیشان بدە
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-mk-ink/58 p-4" role="dialog" aria-modal="true">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-md bg-white shadow-soft">
            <div className="border-b border-mk-line bg-mk-cream/70 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-mk-navy/70">Google Maps</p>
                  <h2 className="mt-1 text-xl font-bold text-mk-navy">لە کوێوە دەتەوێت دەست پێ بکەیت؟</h2>
                  <p className="mt-2 text-sm leading-6 text-mk-ink/72">
                    مەبەست: <span className="font-bold text-mk-ink">{displayName}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-mk-line bg-white px-3 py-2 text-sm font-bold text-mk-navy transition hover:bg-mk-cream focus-visible:focus-ring"
                >
                  داخستن
                </button>
              </div>
            </div>

            <div className="space-y-5 p-4 sm:p-5">
              <RouteModeSelector selectedMode={selectedMode} onChange={setSelectedMode} />

              {selectedMode === "ferry" ? (
                <p className="rounded-md border border-mk-teal bg-mk-teal/16 p-3 text-sm leading-6 text-mk-navy">
                  هەڵبژاردنی فێری لە Google Maps وەک گواستنەوەی گشتی دەکرێتەوە. ڕێگای فێری بە کات و وێستگەکانەوە دەگۆڕێت،
                  بۆیە پێش سواربوون کاتی فێری چێک بکە.
                </p>
              ) : null}

              <section>
                <h3 className="text-base font-bold text-mk-navy">لە کوێوە دەتەوێت دەست پێ بکەیت؟</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleCurrentLocation}
                    disabled={isLocating}
                    className={`rounded-md border p-4 text-right transition focus-visible:focus-ring ${
                      startChoice === "current"
                        ? "border-mk-navy bg-mk-navy text-white"
                        : "border-mk-line bg-white text-mk-navy hover:border-mk-teal hover:bg-mk-teal/16"
                    } disabled:cursor-wait disabled:opacity-75`}
                  >
                    <span className="block font-bold">شوێنی ئێستام بەکاربهێنە</span>
                    <span className={`mt-1 block text-xs ${startChoice === "current" ? "text-white/78" : "text-mk-ink/62"}`}>
                      GPS ـی مۆبایل یان وێبگەڕ بەکاربهێنە.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      resetMessages();
                      setStartChoice("manual");
                    }}
                    className={`rounded-md border p-4 text-right transition focus-visible:focus-ring ${
                      startChoice === "manual"
                        ? "border-mk-navy bg-mk-navy text-white"
                        : "border-mk-line bg-white text-mk-navy hover:border-mk-teal hover:bg-mk-teal/16"
                    }`}
                  >
                    <span className="block font-bold">شوێن بە دەست بنووسە</span>
                    <span className={`mt-1 block text-xs ${startChoice === "manual" ? "text-white/78" : "text-mk-ink/62"}`}>
                      وەک Taksim Square یان My hotel in Fatih.
                    </span>
                  </button>
                </div>
              </section>

              {startChoice === "manual" ? (
                <div className="space-y-3">
                  <LocationInput
                    value={manualStart}
                    onChange={handleManualChange}
                    onCoordinateSelect={handleManualCoordinateSelect}
                    countryCode={countryCode}
                    mapCenter={mapCenter}
                    placeholder={manualPlaceholder}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleManualRoute}
                      className="rounded-md bg-mk-navy px-4 py-3 text-sm font-bold text-white transition hover:bg-mk-cyan hover:text-mk-navy focus-visible:focus-ring"
                    >
                      ڕێگا پیشان بدە
                    </button>
                    <button
                      type="button"
                      onClick={() => openMaps(undefined)}
                      className="rounded-md border border-mk-line px-4 py-3 text-sm font-bold text-mk-navy transition hover:bg-mk-cream focus-visible:focus-ring"
                    >
                      تەنها شوێنی مەبەست بکەرەوە
                    </button>
                  </div>
                </div>
              ) : null}

              {isLocating ? <p className="rounded-md bg-mk-cream p-3 text-sm text-mk-navy">شوێنی ئێستات دەدۆزرێتەوە...</p> : null}

              {errorMessage ? (
                <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">{errorMessage}</p>
              ) : null}

              {statusMessage ? (
                <p className="rounded-md border border-mk-teal bg-mk-teal/14 p-3 text-sm leading-6 text-mk-navy">{statusMessage}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
