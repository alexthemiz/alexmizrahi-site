import KazooButton from "./KazooButton";
import PinwheelButton from "./PinwheelButton";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "18px",
  color: "#e8c84a",
  lineHeight: 1,
};

export default function Footer() {
  return (
    <footer className="max-w-[900px] mx-auto" style={{ backgroundColor: "#000080" }}>
      <div style={RAINBOW_STYLE} />

      <div className="px-6 py-6 flex items-center justify-between">
        {/* Left: pinwheel */}
        <PinwheelButton />

        {/* Center: copyright */}
        <p
          className="font-vt323"
          style={{ fontSize: "16px", color: "#666699" }}
        >
          © {new Date().getFullYear()} alex mizrahi. all rights reserved. probably.
        </p>

        {/* Right: kazoo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <KazooButton />
          <span style={LABEL_STYLE}>Click for kazoo</span>
        </div>
      </div>

      {/* Visitor counter */}
      <p
        className="font-vt323 text-center pb-4"
        style={{ fontSize: "16px", color: "#666699" }}
      >
        [ visitor #000247 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best viewed in netscape navigator 4.0
      </p>
    </footer>
  );
}
