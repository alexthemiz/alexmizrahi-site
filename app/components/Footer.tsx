import KazooButton from "./KazooButton";
import PinwheelButton from "./PinwheelButton";

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "15px",
  color: "#e8c84a",
  lineHeight: 1,
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000080", borderTop: "2px solid #2e2e5a" }}>
      <div className="px-6 py-6 flex items-center justify-between" style={{ maxWidth: "750px", margin: "0 auto" }}>
        {/* Left: pinwheel */}
        <PinwheelButton />

        {/* Center: copyright */}
        <p
          className="font-vt323"
          style={{ fontSize: "14px", color: "#666699" }}
        >
          © {new Date().getFullYear()} alex mizrahi. all rights reserved. probably.
        </p>

        {/* Right: kazoo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <KazooButton />
          <span style={LABEL_STYLE}>Click for chicken</span>
        </div>
      </div>
    </footer>
  );
}
