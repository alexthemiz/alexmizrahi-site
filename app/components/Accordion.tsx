"use client";

import { useState } from "react";
import { SECTIONS } from "../data/sections";
import PhotoStrip from "./PhotoStrip";

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-auto px-6 pb-16 flex flex-col gap-0" style={{ maxWidth: "1460px" }}>
      {SECTIONS.map((section) => {
        const isOpen = openId === section.id;
        const isActivations = section.id === "activations";

        return (
          <div
            key={section.id}
            className={isActivations && isOpen ? "kazoo-cursor" : ""}
            style={{
              border: "1px solid #c0c0c0",
              backgroundColor: "#000080",
              marginBottom: "4px",
            }}
          >
            {/* Trigger row */}
            <button
              onClick={() => toggle(section.id)}
              className="w-full text-left py-4 px-4 flex items-center justify-between gap-4"
              style={{ backgroundColor: "transparent" }}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span
                  className="font-pixel"
                  aria-hidden="true"
                  style={{ fontSize: "8px", color: "#4a4a7a" }}
                >
                  {section.number}
                </span>
                <span
                  className="font-vt323"
                  style={{
                    fontSize: "28px",
                    color: isOpen ? "#e8c84a" : "#c0c0e0",
                    lineHeight: 1.1,
                  }}
                >
                  {section.title}
                  {section.meta && (
                    <span
                      className="font-vt323 ml-3"
                      style={{ fontSize: "18px", opacity: 0.6 }}
                    >
                      {`// ${section.meta}`}
                    </span>
                  )}
                  {section.url && (
                    <span
                      className="font-vt323 ml-2"
                      style={{ fontSize: "18px", opacity: 0.6 }}
                    >
                      {`// ${section.url}`}
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-vt323 shrink-0"
                style={{ fontSize: "20px", color: isOpen ? "#e8c84a" : "#c0c0e0" }}
              >
                {isOpen ? "▼" : "►"}
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div
                className="py-6 px-4"
                style={{ backgroundColor: section.openColor }}
              >
                {section.meta && (
                  <p
                    className="font-vt323 mb-2"
                    style={{ fontSize: "18px", color: section.accentColor }}
                  >
                    {section.meta}
                  </p>
                )}
                <p
                  className="font-vt323 mb-6 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: "20px", color: "#1a1a2e" }}
                >
                  {section.description}
                </p>

                <PhotoStrip
                  photos={section.photos}
                  photoColor={section.photoColor}
                  accentColor={section.accentColor}
                />

                {section.tag && (
                  <div
                    className="font-vt323 mt-6 inline-block px-3 py-1"
                    style={{
                      fontSize: "20px",
                      color: section.accentColor,
                      border: `1px solid ${section.accentColor}`,
                    }}
                  >
                    {section.tag}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
