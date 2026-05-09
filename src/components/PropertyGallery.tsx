"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  images: string[];
  alt: string;
}

export default function PropertyGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Image principale avec flèches */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <Image
          src={images[activeIndex]}
          alt={`${alt} - Photo ${activeIndex + 1}`}
          width={1200}
          height={675}
          className="w-full h-[60vh] object-cover"
          priority
        />
        {/* Flèches */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          aria-label="Image précédente"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          aria-label="Image suivante"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
        </button>
        {/* Compteur */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Barre de miniatures */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              index === activeIndex
                ? "border-amber-500 scale-105 shadow-md"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={img}
              alt={`${alt} - Miniature ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}