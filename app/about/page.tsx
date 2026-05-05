import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutAccordion from "../components/AboutAccordion";

const BTN_BASE: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "22px",
  backgroundColor: "#000080",
  border: "2px solid",
  padding: "8px 20px",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
};

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />

      <div className="site-width px-6 py-12">
        <h1
          className="font-pixel text-center mb-6"
          style={{ fontSize: "24px", color: "#ffff00", textShadow: "2px 2px #ff0000" }}
        >
          ABOUT
        </h1>

        {/* Bio */}
        <p
          className="font-vt323 mb-10"
          style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
        >
          [bio copy TK]
        </p>

        {/* Photo strip placeholder */}
        <div
          className="mb-10 flex gap-4 flex-wrap"
          style={{
            borderTop: "1px dashed #666699",
            borderBottom: "1px dashed #666699",
            padding: "20px 0",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: "200px",
                height: "150px",
                border: "2px solid #666699",
                backgroundColor: "#000040",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="font-vt323" style={{ color: "#666699", fontSize: "18px" }}>
                photo {i}
              </span>
            </div>
          ))}
        </div>

        {/* Resume buttons */}
        <div className="mb-12 flex gap-4 flex-wrap">
          <a href="#" style={{ ...BTN_BASE, color: "#ffff00", borderColor: "#ffff00" }}>
            ► Resume
          </a>
          <a href="#" style={{ ...BTN_BASE, color: "#00ffff", borderColor: "#00ffff" }}>
            ► One-Pager
          </a>
        </div>
      </div>

      <AboutAccordion />

      <Footer />
    </main>
  );
}
