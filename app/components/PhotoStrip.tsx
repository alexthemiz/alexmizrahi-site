"use client";

import { useState, useEffect } from "react";
import { type Photo } from "../data/sections";
import IEFrame from "./IEFrame";

interface PhotoStripProps {
  photos: Photo[];
  photoColor: string;
  accentColor: string;
}

export default function PhotoStrip({ photos, accentColor }: PhotoStripProps) {
  const [openPhoto, setOpenPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!openPhoto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPhoto(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openPhoto]);

  if (photos.length === 0) return null;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px", paddingBottom: "8px" }}>
        {photos.map((photo) => (
          <IEFrame
            key={photo.src}
            photo={photo}
            accentColor={accentColor}
            onClick={() => setOpenPhoto(photo)}
          />
        ))}
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
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={encodeURI(openPhoto.src)}
            alt={openPhoto.caption ?? ""}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
