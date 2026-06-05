import { useCallback, useMemo, useState } from "react";

const normalizeMedia = (media) => {
  if (typeof media === "string") return { type: "image", src: media };
  return { type: media.type || "image", ...media };
};

export function useProjectLightbox(projects) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const currentProject = projects[currentProjectIndex] || projects[0];

  const currentProjectMedia = useMemo(
    () =>
      (currentProject?.media || currentProject?.images || []).map(
        normalizeMedia,
      ),
    [currentProject],
  );

  const mediaState = useMemo(() => {
    if (!currentProjectMedia.length) {
      return {
        currentMedia: undefined,
        prevPreviewMedia: undefined,
        nextPreviewMedia: undefined,
      };
    }

    const safeMediaIndex = Math.min(
      currentMediaIndex,
      currentProjectMedia.length - 1,
    );
    const prevMediaIndex =
      (safeMediaIndex - 1 + currentProjectMedia.length) %
      currentProjectMedia.length;
    const nextMediaIndex = (safeMediaIndex + 1) % currentProjectMedia.length;

    return {
      currentMedia: currentProjectMedia[safeMediaIndex],
      prevPreviewMedia: currentProjectMedia[prevMediaIndex],
      nextPreviewMedia: currentProjectMedia[nextMediaIndex],
    };
  }, [currentMediaIndex, currentProjectMedia]);

  const openLightbox = useCallback((index) => {
    setCurrentProjectIndex(index);
    setCurrentMediaIndex(0);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setIsOpen(false), []);

  const nextMedia = useCallback(
    (e) => {
      e?.stopPropagation?.();
      if (!currentProjectMedia.length) return;
      setCurrentMediaIndex(
        (prevIndex) => (prevIndex + 1) % currentProjectMedia.length,
      );
    },
    [currentProjectMedia.length],
  );

  const prevMedia = useCallback(
    (e) => {
      e?.stopPropagation?.();
      if (!currentProjectMedia.length) return;
      setCurrentMediaIndex((prevIndex) =>
        prevIndex === 0 ? currentProjectMedia.length - 1 : prevIndex - 1,
      );
    },
    [currentProjectMedia.length],
  );

  const selectMedia = useCallback((index) => {
    setCurrentMediaIndex(index);
  }, []);

  return {
    isOpen,
    currentProject,
    currentProjectMedia,
    currentMediaIndex,
    ...mediaState,
    openLightbox,
    closeLightbox,
    nextMedia,
    prevMedia,
    selectMedia,
  };
}
