import Link from "next/link";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

export default function Header() {
  return (
    <header className="pt-10 pb-0 text-center">
      <div className="px-6 max-w-4xl mx-auto pb-10">
        {/* Name */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            className="font-pixel mb-4"
            style={{
              fontSize: "24px",
              color: "#ffff00",
              textShadow: "2px 2px #ff0000",
            }}
          >
            ALEX MIZRAHI
          </h1>
        </Link>

        {/* Tagline */}
        <p
          className="font-vt323 mb-6"
          style={{ fontSize: "22px", color: "#00ff00" }}
        >
          Experiential producer. Communications strategist. Ideas man.
        </p>

        {/* Nav */}
        <nav className="flex items-center justify-center gap-4">
          <Link
            href="/about"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            about
          </Link>
          <span className="font-vt323 text-xl" style={{ color: "#00ffff" }} aria-hidden="true">|</span>
          <Link
            href="/contact"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            contact
          </Link>
        </nav>
      </div>
      <div style={RAINBOW_STYLE} />
    </header>
  );
}
