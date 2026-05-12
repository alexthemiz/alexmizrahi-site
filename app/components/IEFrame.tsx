import { type Photo } from "../data/sections";

interface IEFrameProps {
  photo: Photo;
  accentColor: string;
  onClick: () => void;
}

export default function IEFrame({ photo, accentColor, onClick }: IEFrameProps) {
  const filename = photo.src.split("/").pop() ?? "image";
  const encodedSrc = encodeURI(photo.src);

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={encodedSrc}
      alt={photo.caption ?? ""}
      style={{ width: "200px", height: "auto", display: "block" }}
    />
  );

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
        width: "216px",
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

      {/* Photo + decorative scrollbar */}
      <div style={{ display: "flex" }}>
        {photo.href ? (
          <a
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ display: "block", flexShrink: 0 }}
          >
            {image}
          </a>
        ) : image}
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
