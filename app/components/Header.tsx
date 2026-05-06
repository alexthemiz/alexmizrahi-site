import Link from "next/link";

export default function Header() {
  return (
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
        <nav className="flex items-center justify-center gap-4">
          <Link
            href="/about"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff", fontSize: "18px" }}
          >
            about
          </Link>
          <span className="font-vt323 text-xl" style={{ color: "#00ffff", fontSize: "18px" }} aria-hidden="true">|</span>
          <Link
            href="/contact"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff", fontSize: "18px" }}
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
