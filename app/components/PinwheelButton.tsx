"use client";

import { useState, useRef } from "react";
import { PUNS } from "../data/puns";

type Pun = { pun: string; definition: string };

export default function PinwheelButton() {
  const [spinning, setSpinning] = useState(false);
  const [currentPun, setCurrentPun] = useState<Pun | null>(null);
  const queueRef = useRef<Pun[]>([]);

  const getNextPun = (): Pun => {
    if (queueRef.current.length === 0) {
      queueRef.current = [...PUNS].sort(() => Math.random() - 0.5);
    }
    return queueRef.current.pop()!;
  };

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setCurrentPun(getNextPun());
    }, 2000);
  };

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <style>{`
        @keyframes pinwheel-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
      `}</style>

      <button
        onClick={handleClick}
        aria-label="Spin for a pun"
        style={{
          background: "none",
          border: "none",
          cursor: spinning ? "default" : "pointer",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden="true"
          style={{
            display: "block",
            animation: spinning ? "pinwheel-spin 2s linear forwards" : "none",
          }}
        >
          <g transform="translate(16,16)">
            <path d="M 0 0 C 2 -4 6 -10 0 -14 C -6 -10 -2 -4 0 0" fill="#e83030" transform="rotate(0)" />
            <path d="M 0 0 C 2 -4 6 -10 0 -14 C -6 -10 -2 -4 0 0" fill="#30c030" transform="rotate(90)" />
            <path d="M 0 0 C 2 -4 6 -10 0 -14 C -6 -10 -2 -4 0 0" fill="#e87020" transform="rotate(180)" />
            <path d="M 0 0 C 2 -4 6 -10 0 -14 C -6 -10 -2 -4 0 0" fill="#3060e8" transform="rotate(270)" />
            <circle cx="0" cy="0" r="2.5" fill="#c0c0c0" />
          </g>
        </svg>
        <span
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "18px",
            color: "#e8c84a",
            lineHeight: 1,
          }}
        >
          Spun for a pun
        </span>
      </button>

      {currentPun && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            right: 0,
            backgroundColor: "#ffff00",
            border: "2px solid #000000",
            width: "427px",
            maxWidth: "90vw",
            padding: "12px 16px",
            zIndex: 100,
          }}
        >
          {/* Header bar */}
          <div
            style={{
              backgroundColor: "#ff0000",
              padding: "4px 10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "-12px -16px 10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-vt323), monospace",
                fontSize: "22px",
                color: "#ffff00",
                lineHeight: 1,
              }}
            >
              {currentPun.pun}
            </span>
            <button
              onClick={() => setCurrentPun(null)}
              style={{
                fontFamily: "var(--font-vt323), monospace",
                fontSize: "20px",
                color: "#ffff00",
                background: "none",
                border: "1px solid #ffff00",
                cursor: "pointer",
                padding: "0 5px",
                lineHeight: 1,
                flexShrink: 0,
                marginLeft: "8px",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#cc0000"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
              aria-label="Close pun"
            >
              X
            </button>
          </div>
          {/* Definition */}
          <p
            style={{
              fontFamily: "var(--font-vt323), monospace",
              fontSize: "17px",
              color: "#000000",
              margin: 0,
              lineHeight: 1.4,
              textAlign: "left",
            }}
          >
            {currentPun.definition}
          </p>
        </div>
      )}
    </div>
  );
}
