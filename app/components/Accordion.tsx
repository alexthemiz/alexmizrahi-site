"use client";

import { useState } from "react";
import { SECTIONS } from "../data/sections";
import PhotoStrip from "./PhotoStrip";

function darken(hex: string, amount = 15): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openSubId, setOpenSubId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => {
      if (prev === id) {
        setOpenSubId(null);
        return null;
      }
      return id;
    });
  };

  return (
    <div className="flex flex-col gap-0">
      {SECTIONS.map((section) => {
        const isOpen = openId === section.id;
        const isActivations = section.id === "activations";

        return (
          <div
            key={section.id}
            className={isActivations && isOpen ? "kazoo-cursor" : ""}
            style={{
              border: "1px solid #c0c0c0",
              backgroundColor: "#000040",
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
                  style={{ fontSize: "10px", color: "#4a4a7a" }}
                >
                  {section.number}
                </span>
                <span
                  className="font-vt323"
                  style={{
                    fontSize: "34px",
                    color: isOpen ? "#e8c84a" : "#c0c0e0",
                    lineHeight: 1.1,
                  }}
                >
                  {section.title}
                  {section.meta && (
                    <span
                      className="font-vt323 ml-3"
                      style={{ fontSize: "22px", opacity: 0.6 }}
                    >
                      {`// ${section.meta}`}
                    </span>
                  )}
                  {section.url && (
                    <span
                      className="font-vt323 ml-2"
                      style={{ fontSize: "22px", opacity: 0.6 }}
                    >
                      {`// ${section.url}`}
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-vt323 shrink-0"
                style={{ fontSize: "24px", color: isOpen ? "#e8c84a" : "#c0c0e0" }}
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
                <p
                  className="font-vt323 mb-6 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: "24px", color: "#1a1a2e" }}
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
                      fontSize: "24px",
                      color: section.accentColor,
                      border: `1px solid ${section.accentColor}`,
                    }}
                  >
                    {section.tag}
                  </div>
                )}

                {/* Sub-accordions */}
                {section.subSections && section.subSections.length > 0 && (
                  <div style={{ marginTop: "20px" }}>
                    {section.subSections.map((sub) => {
                      const isSubOpen = openSubId === sub.id;
                      return (
                        <div
                          key={sub.id}
                          style={{
                            border: "1px dashed #c0c0c0",
                            backgroundColor: section.subClosedColor
                              ? isSubOpen
                                ? darken(section.subClosedColor)
                                : section.subClosedColor
                              : "#000040",
                            marginBottom: "4px",
                          }}
                        >
                          <button
                            onClick={() => setOpenSubId(isSubOpen ? null : sub.id)}
                            className="w-full text-left py-3 flex items-center justify-between gap-4"
                            style={{
                              backgroundColor: "transparent",
                              paddingLeft: "32px",
                              paddingRight: "16px",
                            }}
                          >
                            <span
                              className="font-vt323"
                              style={{
                                fontSize: "26px",
                                color: isSubOpen ? "#000040" : "#000060",
                              }}
                            >
                              {sub.title}
                            </span>
                            <span
                              className="font-vt323 shrink-0"
                              style={{ fontSize: "20px", color: isSubOpen ? "#000040" : "#000060" }}
                            >
                              {isSubOpen ? "▼" : "►"}
                            </span>
                          </button>

                          {isSubOpen && (
                            <div
                              style={{
                                backgroundColor: section.openColor,
                                paddingTop: "16px",
                                paddingBottom: "16px",
                                paddingLeft: "32px",
                                paddingRight: "16px",
                              }}
                            >
                              {sub.description && (
                                <p
                                  className="font-vt323 mb-4 leading-relaxed whitespace-pre-line"
                                  style={{ fontSize: "22px", color: "#1a1a2e" }}
                                >
                                  {sub.description}
                                </p>
                              )}
                              <PhotoStrip
                                photos={sub.photos}
                                photoColor={sub.photoColor}
                                accentColor={sub.accentColor}
                              />
                              {sub.tag && (
                                <div
                                  className="font-vt323 mt-4 inline-block px-3 py-1"
                                  style={{
                                    fontSize: "22px",
                                    color: sub.accentColor,
                                    border: `1px solid ${sub.accentColor}`,
                                  }}
                                >
                                  {sub.tag}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
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
