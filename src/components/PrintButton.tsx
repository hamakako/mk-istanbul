"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-md border border-mk-navy bg-white px-4 py-3 text-sm font-bold text-mk-navy transition hover:bg-mk-cream focus-visible:focus-ring"
    >
      چاپکردن / پاشەکەوتکردنی پلان
    </button>
  );
}
