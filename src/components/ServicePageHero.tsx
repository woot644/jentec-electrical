export default function ServicePageHero({
  overline,
  title,
  description,
  image,
  imagePosition = "center",
}: {
  overline: string;
  title: string;
  description: string;
  image?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden min-h-[420px] flex items-center">
      {image ? (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </>
      )}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
            <span className="text-xs font-bold text-neon uppercase tracking-[3px]">
              {overline}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
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
