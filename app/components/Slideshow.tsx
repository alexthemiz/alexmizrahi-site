"use client";

import { useState, useEffect } from "react";
import { type Photo } from "../data/sections";
import IEFrame from "./IEFrame";

interface SlideshowProps {
  photos: Photo[];
  accentColor: string;
}

export default function Slideshow({ photos, accentColor }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [openPhoto, setOpenPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!openPhoto) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenPhoto(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openPhoto]);

  if (photos.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  const btnStyle: React.CSSProperties = {
    fontFamily: "var(--font-vt323), monospace",
    fontSize: "28px",
    color: "#e8c84a",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0 12px",
    lineHeight: 1,
    userSelect: "none",
    flexShrink: 0,
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <button onClick={prev} style={btnStyle} aria-label="Previous">◄</button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <IEFrame
            photo={photos[index]}
            accentColor={accentColor}
            onClick={() => setOpenPhoto(photos[index])}
          />
          <span style={{ fontFamily: "var(--font-vt323), monospace", fontSize: "16px", color: accentColor }}>
            {index + 1} / {photos.length}
          </span>
        </div>
        <button onClick={next} style={btnStyle} aria-label="Next">►</button>
      </div>

      {openPhoto && (
        <div
          onClick={() => setOpenPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={encodeURI(openPhoto.src)}
            alt={openPhoto.caption ?? ""}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
