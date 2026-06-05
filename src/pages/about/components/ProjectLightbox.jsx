import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ArrowIcon({ direction = "next" }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
        d={direction === "previous" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

function getPreviewSrc(media) {
  if (!media) return "";
  return media.poster || media.src;
}

function MediaFrame({ media, title, location, className = "" }) {
  if (media?.type === "video") {
    return (
      <video
        key={media.src}
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        preload="metadata"
        className={`relative z-10 h-full w-full object-cover drop-shadow-[0_18px_45px_rgba(0,0,0,0.7)] ${className}`}
        aria-label={`${title} video in ${location}`}
      />
    );
  }

  return (
    <motion.img
      key={media?.src}
      src={media?.src}
      alt={`${title} in ${location}`}
      className={`relative z-10 h-full w-full object-cover drop-shadow-[0_18px_45px_rgba(0,0,0,0.7)] ${className}`}
      loading="lazy"
      decoding="async"
      initial={{ opacity: 0, x: 28, scale: 0.985 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

function SliderButton({
  ariaLabel,
  direction = "next",
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-zinc-950/85 text-white shadow-[0_16px_45px_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:scale-105 hover:border-amber-300/65 hover:bg-amber-300 hover:text-red-950 active:scale-95 md:h-14 md:w-14 ${className}`}
    >
      <ArrowIcon direction={direction} />
    </button>
  );
}

function PreviewPanel({ media, label, side }) {
  if (!media) return null;
  const preview = getPreviewSrc(media);

  return (
    <div className="hidden w-28 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:block xl:w-36">
      <p className="mb-2 text-center text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
      <div className="relative h-44 overflow-hidden rounded-2xl bg-black xl:h-56">
        <img
          src={preview}
          alt={`${side} project preview`}
          className="h-full w-full object-cover opacity-65 blur-[0.2px] saturate-90"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/25" />
        {media.type === "video" && (
          <span className="absolute inset-0 m-auto grid h-10 w-10 place-items-center rounded-full bg-black/70 text-xs font-black text-amber-200">
            ▶
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectThumbnailStrip({
  mediaItems,
  currentMediaIndex,
  onSelectMedia,
}) {
  if (mediaItems.length <= 1) return null;

  return (
    <div className="mx-auto mt-5 flex max-w-full items-center justify-start gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/62 p-2 backdrop-blur-md md:justify-center">
      {mediaItems.map((media, index) => {
        const preview = getPreviewSrc(media);

        return (
          <button
            key={`${media.src}-${index}`}
            type="button"
            aria-label={`View project media ${index + 1}`}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition-all duration-200 md:h-18 md:w-28 ${
              index === currentMediaIndex
                ? "border-amber-300 opacity-100 shadow-[0_0_24px_rgba(251,191,36,0.38)]"
                : "border-white/10 opacity-45 hover:border-amber-300/55 hover:opacity-90"
            }`}
            onClick={(event) => {
              event.stopPropagation();
              onSelectMedia(index);
            }}
          >
            <img
              src={preview}
              alt="Project preview thumbnail"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {media.type === "video" && (
              <span className="absolute inset-0 m-auto grid h-7 w-7 place-items-center rounded-full bg-black/70 text-[10px] font-black text-amber-200">
                ▶
              </span>
            )}
            {index === currentMediaIndex && (
              <span className="absolute inset-x-3 bottom-1 h-1 rounded-full bg-amber-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function ProjectLightbox({
  isOpen,
  currentMedia,
  currentMediaIndex,
  currentProject,
  currentProjectMedia,
  prevPreviewMedia,
  nextPreviewMedia,
  closeLightbox,
  nextMedia,
  prevMedia,
  selectMedia,
}) {
  const hasMultipleMedia = currentProjectMedia.length > 1;
  const previewSrc = getPreviewSrc(currentMedia);

  useEffect(() => {
    if (!isOpen || !currentProject || !currentMedia) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (!hasMultipleMedia) return;
      if (event.key === "ArrowRight") nextMedia(event);
      if (event.key === "ArrowLeft") prevMedia(event);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    closeLightbox,
    currentMedia,
    currentProject,
    hasMultipleMedia,
    isOpen,
    nextMedia,
    prevMedia,
  ]);

  if (!isOpen || !currentProject || !currentMedia) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-zinc-950/92 px-3 py-5 backdrop-blur-2xl md:px-8 md:py-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentProject.title} project media viewer`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(220,38,38,0.22),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(245,158,11,0.16),transparent_30%),linear-gradient(135deg,rgba(3,3,3,0.96),rgba(18,2,2,0.94),rgba(42,7,5,0.92),rgba(75,33,5,0.88))]" />
          <img
            src={previewSrc}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover opacity-12 blur-2xl saturate-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62),rgba(18,2,2,0.34),rgba(0,0,0,0.62))]" />

          <button
            type="button"
            className="absolute right-4 top-4 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-black/75 text-3xl font-light text-zinc-200 shadow-xl backdrop-blur-md transition hover:scale-105 hover:border-amber-300/55 hover:bg-red-600 hover:text-white active:scale-95 md:right-8 md:top-6"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close project media viewer"
          >
            ×
          </button>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.975 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex w-full max-w-7xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 grid gap-3 rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-end md:p-5">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-300">
                  Our Recent Work
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-white md:text-4xl">
                  {currentProject.title}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                  {currentProject.location}
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
                {currentMediaIndex + 1} / {currentProjectMedia.length}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <PreviewPanel
                media={prevPreviewMedia}
                label="Previous"
                side="Previous"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/82 shadow-[0_30px_110px_rgba(0,0,0,0.72)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(220,38,38,0.18),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(245,158,11,0.13),transparent_28%),linear-gradient(135deg,rgba(18,2,2,0.52),rgba(24,24,27,0.68),rgba(0,0,0,0.82))]" />
                <div className="relative flex h-[66vh] min-h-[330px] items-center justify-center overflow-hidden md:h-[70vh] md:min-h-[450px]">
                  <motion.img
                    key={`${previewSrc}-blur`}
                    src={previewSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl saturate-125"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.24 }}
                    transition={{ duration: 0.22 }}
                  />
                  <div className="absolute inset-0 bg-black/24" />
                  <MediaFrame
                    media={currentMedia}
                    title={currentProject.title}
                    location={currentProject.location}
                  />
                </div>

                {hasMultipleMedia && (
                  <>
                    <SliderButton
                      ariaLabel="Previous project media"
                      direction="previous"
                      className="absolute left-3 top-1/2 z-20 -translate-y-1/2"
                      onClick={prevMedia}
                    />
                    <SliderButton
                      ariaLabel="Next project media"
                      className="absolute right-3 top-1/2 z-20 -translate-y-1/2"
                      onClick={nextMedia}
                    />
                  </>
                )}
              </div>

              <PreviewPanel media={nextPreviewMedia} label="Next" side="Next" />
            </div>

            <ProjectThumbnailStrip
              mediaItems={currentProjectMedia}
              currentMediaIndex={currentMediaIndex}
              onSelectMedia={selectMedia}
            />
            <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Images and videos supported · Tap arrows or thumbnails to browse ·
              Press Esc to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
