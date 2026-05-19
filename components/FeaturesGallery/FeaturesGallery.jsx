"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const FEATURES = [
  { image: "/app-images/app-image (1).webp" },
  { image: "/app-images/app-image (2).webp" },
  { image: "/app-images/app-image (3).webp" },
  { image: "/app-images/app-image (4).webp" },
  { image: "/app-images/app-image (5).webp" },
  { image: "/app-images/app-image (6).webp" },
  { image: "/app-images/app-image (7).webp" },
  { image: "/app-images/app-image (8).webp" },
];

function FeatureCard({ feature, index, isActive, onCardClick }) {
  return (
    <article
      className={`
        group relative shrink-0 rounded-3xl overflow-hidden
        transition-all duration-500 ease-out border border-gray-100 shadow-sm
        h-[600px]
        ${isActive ? "w-[300px] md:w-[340px]" : "w-[260px] md:w-[300px]"}
        cursor-zoom-in bg-gray-50
      `}
      onClick={() => onCardClick(feature.image)}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={feature.image}
          alt={`App Screenshot ${index + 1}`}
          fill
          sizes="340px"
          className="object-contain p-4"
          draggable={false}
        />
      </div>

      {/* Index number */}
      <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/40 backdrop-blur-md border border-gray-200 flex items-center justify-center">
        <span className="text-brand-navy/70 text-xs ">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}

export default function FeaturesGallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    const cardWidth = el.scrollWidth / FEATURES.length;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState]);

  // ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const scrollTo = (index) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / FEATURES.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / FEATURES.length;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    dragScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const delta = (x - dragStartX.current) * 1.4;
    trackRef.current.scrollLeft = dragScrollLeft.current - delta;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#e6f9f2] border border-[#a3ecd0] text-[#0a7a52] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00c881] animate-pulse" />
            Explore the Remitium App
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy leading-tight">
            Your Fast, Secure and <br /> Convenient Transfer Solution
          </h2>
        </div>

        {/* Arrow controls */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => nudge(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy transition-all
                       hover:border-brand-primary hover:bg-brand-primary hover:text-white
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M11 4L6 9l5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => nudge(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy transition-all
                       hover:border-brand-primary hover:bg-brand-primary hover:text-white
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M7 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <span className="ml-2 text-sm text-gray-400 tabular-nums">
            <span className="text-brand-navy font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(FEATURES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="flex gap-5 overflow-x-auto scroll-smooth
                   px-6 md:px-[calc((100vw-80rem)/2+1.5rem)]
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   cursor-grab select-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={i}
            feature={feature}
            index={i}
            isActive={i === activeIndex}
            onCardClick={setSelectedImage}
          />
        ))}

        {/* Trailing spacer */}
        <div className="shrink-0 w-6 md:w-[calc((100vw-80rem)/2-1rem)]" />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-2xl" />

          {/* Close button */}
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-md h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/20 bg-[#0b1727]">
              <Image
                src={selectedImage}
                alt="Feature Preview"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {FEATURES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to feature ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-brand-primary"
                : "w-1.5 bg-gray-200 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
