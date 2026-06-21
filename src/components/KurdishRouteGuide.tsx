import type { KurdishRouteGuideData } from "@/types/travel";

type KurdishRouteGuideProps = {
  guide: KurdishRouteGuideData;
};

export default function KurdishRouteGuide({ guide }: KurdishRouteGuideProps) {
  return (
    <section className="rounded-md border border-mk-line bg-mk-cream/42 p-4" aria-label="چۆن بچیت؟">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-mk-navy">
          چۆن بچیت؟
        </h3>
        <div className="flex flex-wrap gap-2">
          {guide.badges.map((badge) => (
            <span key={badge} className="rounded-md bg-white px-2.5 py-1 text-xs font-bold text-mk-navy">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-mk-ink/78">{guide.overview}</p>
      <ol className="mt-3 space-y-2 text-sm leading-7 text-mk-ink/82">
        {guide.steps.map((step) => (
          <li key={step} className="flex gap-2">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-mk-teal" />
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-3 space-y-1 border-t border-mk-line pt-3 text-xs leading-6 text-mk-ink/68">
        {guide.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </section>
  );
}
