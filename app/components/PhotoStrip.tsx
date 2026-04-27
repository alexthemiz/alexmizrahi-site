"use client";

import { useState, useEffect } from "react";
import { type Photo } from "../data/sections";
import IEFrame from "./IEFrame";

interface PhotoStripProps {
  photos: Photo[];
  photoColor: string;
  accentColor: string;
}

export default function PhotoStrip({ photos, photoColor, accentColor }: PhotoStripProps) {
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

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "12px", paddingBottom: "8px" }}>
        {photos.length === 0 ? (
          <PlaceholderFrame photoColor={photoColor} />
        ) : (
          photos.map((photo) => (
            <IEFrame
              key={photo.src}
              photo={photo}
              accentColor={accentColor}
              onClick={() => setOpenPhoto(photo)}
            />
          ))
        )}
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

function PlaceholderFrame({ photoColor }: { photoColor: string }) {
  return (
    <div
      role="img"
      aria-label="No photos available"
      style={{
        border: "2px solid #c0c0c0",
        flexShrink: 0,
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0000aa, #1084d0)",
          height: "22px",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: "3px",
        }}
      >
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--font-vt323), monospace", fontSize: "10px", color: "#ffffff", marginLeft: "4px" }}>
          (no photos)
        </span>
      </div>
      {/* URL bar */}
      <div
        style={{
          backgroundColor: "#d4d0c8",
          borderBottom: "1px solid #808080",
          borderTop: "1px solid #ffffff",
          padding: "2px 4px",
          fontFamily: "monospace",
          fontSize: "10px",
          color: "#666666",
        }}
      >
        C:\photos\
      </div>
      {/* Photo area + scrollbar */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            height: "160px",
            backgroundColor: photoColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-press-start), monospace",
              fontSize: "8px",
              color: "#1a1a2e",
              opacity: 0.6,
              textAlign: "center",
              padding: "8px",
            }}
          >
            no photos yet
          </span>
        </div>
        <DecorativeScrollbar />
      </div>
    </div>
  );
}

function DecorativeScrollbar() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "16px",
        backgroundColor: "#d4d0c8",
        borderLeft: "1px solid #808080",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1px 0",
      }}
    >
      <div style={{ width: 14, height: 14, backgroundColor: "#c0c0c0", border: "1px solid #808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>▲</div>
      <div style={{ width: 14, height: 14, backgroundColor: "#c0c0c0", border: "1px solid #808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>▼</div>
    </div>
  );
}
