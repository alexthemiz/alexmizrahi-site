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
    <div className="max-w-4xl mx-auto px-6 pb-16">
      {SECTIONS.map((section) => {
        const isOpen = openId === section.id;
        const isActivations = section.id === "activations";

        return (
          <div
            key={section.id}
            className={isActivations && isOpen ? "kazoo-cursor" : ""}
          >
            {/* Trigger row */}
            <button
              onClick={() => toggle(section.id)}
              className="w-full text-left py-4 border-b flex items-start justify-between gap-4 group"
              style={{
                borderColor: "#9090b8",
                backgroundColor: isOpen ? section.openColor : "transparent",
                color: isOpen ? "#1a1a2e" : "#9090b8",
              }}
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4 flex-1 min-w-0">
                <span
                  className="font-pixel text-xs shrink-0"
                  style={{ color: isOpen ? "#1a1a2e" : "#e8c84a" }}
                >
                  {section.number}
                </span>
                <span className="font-pixel text-xs leading-relaxed">
                  {section.title}
                  {section.meta && (
                    <span className="font-vt323 text-lg ml-3 opacity-70">
                      // {section.meta}
                      {section.url && (
                        <span className="ml-2">// {section.url}</span>
                      )}
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-pixel text-xs shrink-0"
                style={{ color: isOpen ? "#1a1a2e" : "#e8c84a" }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div
                className="py-6 px-4"
                style={{
                  backgroundColor: section.openColor,
                  color: "#1a1a2e",
                }}
              >
                <p className="font-vt323 text-xl mb-6 leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>

                <PhotoStrip />

                {section.tag && (
                  <p className="font-pixel text-xs mt-6" style={{ color: "#1a1a2e" }}>
                    {section.tag}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
