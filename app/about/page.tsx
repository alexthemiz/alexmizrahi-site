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

        {/* Resume buttons */}
        <div className="mb-10 flex gap-4 flex-wrap justify-center">
          <a href="/resumes/alexmizrahi_events-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...BTN_BASE, color: "#ffff00", borderColor: "#ffff00" }}>
            ► Resume - Experiential
          </a>
          <a href="/resumes/alexmizrahi_communications-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...BTN_BASE, color: "#00ffff", borderColor: "#00ffff" }}>
            ► Resume - Communications
          </a>
        </div>

        {/* Photos */}
        <div
          className="mb-12 flex gap-4 flex-wrap justify-center"
          style={{
            borderTop: "1px dashed #666699",
            borderBottom: "1px dashed #666699",
            padding: "20px 0",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi1.JPG" alt="Alex Mizrahi" style={{ height: "200px", width: "auto", objectFit: "cover" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi2.jpg" alt="Alex Mizrahi" style={{ height: "200px", width: "auto", objectFit: "cover" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi3.webp" alt="Alex Mizrahi" style={{ height: "200px", width: "auto", objectFit: "cover" }} />
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <AboutAccordion />
      </div>

      <Footer />
    </main>
  );
}
