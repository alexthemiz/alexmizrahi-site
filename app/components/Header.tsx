import Link from "next/link";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

export default function Header() {
  return (
    <>
    <header className="pt-8 pb-0 text-center">
      <div className="px-6 site-width pb-8">
        {/* Name */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            className="font-pixel mb-4"
            style={{
              fontSize: "20px",
              color: "#ffff00",
              textShadow: "2px 2px #ff0000",
            }}
          >
            ALEX MIZRAHI
          </h1>
        </Link>

        {/* Tagline */}
        <p
          className="font-vt323 mb-4"
          style={{ fontSize: "18px", color: "#00ff00" }}
        >
          Experiential producer. Communications strategist. Ideas man.
        </p>

        {/* Nav */}
        <nav className="flex items-center justify-center gap-2">
          <Link
            href="/about"
            className="font-vt323 hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff", fontSize: "18px" }}
          >
            about
          </Link>
          <span className="font-vt323" style={{ color: "#8a8ac0", fontSize: "18px" }} aria-hidden="true">|</span>
          <a
            href="mailto:alexmiz@gmail.com"
            className="font-vt323 hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff", fontSize: "18px" }}
          >
            email
          </a>
          <span className="font-vt323" style={{ color: "#8a8ac0", fontSize: "18px" }} aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/alexmizrahi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-vt323 hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff", fontSize: "18px" }}
          >
            linkedin
          </a>
          <span className="font-vt323" style={{ color: "#8a8ac0", fontSize: "18px" }} aria-hidden="true">|</span>
          <span className="font-vt323" style={{ color: "#c0c0e0", fontSize: "18px" }}>
            Brooklyn · Los Angeles
          </span>
          <span className="font-vt323" style={{ color: "#8a8ac0", fontSize: "18px" }} aria-hidden="true">|</span>
          <span className="font-vt323" style={{ color: "#c0c0e0", fontSize: "18px" }}>
            available for hire
          </span>
        </nav>
      </div>
    </header>
    <div style={RAINBOW_STYLE} />
    </>
  );
}
