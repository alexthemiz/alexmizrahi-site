export default function PhotoStrip() {
  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="shrink-0 w-40 h-32 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            border: "2px solid rgba(0,0,0,0.25)",
          }}
        >
          <span className="font-pixel text-xs opacity-40" style={{ color: "#1a1a2e" }}>
            photo {i}
          </span>
        </div>
      ))}
    </div>
  );
}
