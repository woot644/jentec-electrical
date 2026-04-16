export default function ServicePageHero({
  overline,
  title,
  description,
}: {
  overline: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
            <span className="text-xs font-bold text-neon uppercase tracking-[3px]">
              {overline}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
