import { type Photo } from "../data/sections";

interface IEFrameProps {
  photo: Photo;
  accentColor: string;
  onClick: () => void;
}

export default function IEFrame({ photo, accentColor, onClick }: IEFrameProps) {
  const filename = photo.src.split("/").pop() ?? "image";
  const encodedSrc = encodeURI(photo.src);

  return (
    <div
      onClick={onClick}
      style={{
        border: "2px solid #c0c0c0",
        cursor: "pointer",
        flexShrink: 0,
        display: "inline-flex",
        flexDirection: "column",
        userSelect: "none",
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
        <div style={{ width: 10, height: 10, backgroundColor: "#ff5f57", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#febc2e", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#28c840", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "10px",
            color: "#ffffff",
            marginLeft: "4px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: "140px",
            textOverflow: "ellipsis",
          }}
        >
          {filename}
        </span>
      </div>

      {/* URL bar */}
      <div
        style={{
          backgroundColor: "#d4d0c8",
          borderBottom: "1px solid #808080",
          borderTop: "1px solid #ffffff",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span style={{ fontSize: "10px" }}>🌐</span>
        <span
          style={{
            fontSize: "10px",
            fontFamily: "monospace",
            color: "#000080",
            flex: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {`C:\\photos\\${filename}`}
        </span>
        <button
          type="button"
          style={{
            fontSize: "9px",
            fontFamily: "monospace",
            backgroundColor: "#d4d0c8",
            border: "1px solid #808080",
            padding: "0 4px",
            cursor: "default",
          }}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          Go
        </button>
      </div>

      {/* Photo + decorative scrollbar */}
      <div style={{ display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={encodedSrc}
          alt={photo.caption ?? ""}
          style={{
            width: "200px",
            height: "auto",
            display: "block",
          }}
        />
        {/* Scrollbar */}
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
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#c0c0c0",
              border: "1px solid #808080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
            }}
          >
            ▲
          </div>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#c0c0c0",
              border: "1px solid #808080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
            }}
          >
            ▼
          </div>
        </div>
      </div>

      {/* Caption — only rendered when truthy */}
      {photo.caption && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            borderTop: "1px solid #c0c0c0",
            padding: "2px 6px",
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "12px",
            color: accentColor,
          }}
        >
          {photo.caption}
        </div>
      )}
    </div>
  );
}
