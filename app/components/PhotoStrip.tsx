interface PhotoStripProps {
  photoColor: string;
}

export default function PhotoStrip({ photoColor }: PhotoStripProps) {
  return (
    <div className="flex gap-3 py-2" style={{ overflowX: "auto" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="shrink-0 flex items-center justify-center"
          style={{
            width: "calc(25% - 9px)",
            minWidth: "100px",
            height: "128px",
            backgroundColor: photoColor,
            border: "1px solid #2e2e5a",
          }}
        >
          <span
            className="font-pixel"
            style={{ fontSize: "8px", color: "#1a1a2e", opacity: 0.6 }}
          >
            photo {i}
          </span>
        </div>
      ))}
    </div>
  );
}
