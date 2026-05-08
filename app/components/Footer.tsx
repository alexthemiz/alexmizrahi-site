import KazooButton from "./KazooButton";
import PinwheelButton from "./PinwheelButton";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "15px",
  color: "#e8c84a",
  lineHeight: 1,
};

export default function Footer() {
  return (
    <>
    <div style={RAINBOW_STYLE} />
    <footer style={{ backgroundColor: "#000080", borderTop: "2px solid #2e2e5a" }}>
      <div className="px-6 py-6 flex items-center justify-between" style={{ maxWidth: "860px", margin: "0 auto" }}>
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
    </>
  );
}
