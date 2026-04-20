import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 pt-10 pb-6 max-w-4xl mx-auto text-center">
      {/* Name */}
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

      {/* Tagline */}
      <p
        className="font-vt323 mb-3"
        style={{ fontSize: "22px", color: "#00ff00" }}
      >
        Experiential producer. Communications strategist. Ideas man.
      </p>

      {/* Blinking availability */}
      <p
        className="font-vt323 blink mb-8"
        style={{ fontSize: "20px", color: "#ffffff" }}
      >
        ▌ available for work ▌
      </p>

      {/* Nav */}
      <nav className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link
            href="/about"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            about
          </Link>
          <span className="font-vt323 text-xl" style={{ color: "#00ffff" }} aria-hidden="true">|</span>
          <a
            href="mailto:alexmiz@gmail.com"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            contact
          </a>
        </div>
        <a
          href="mailto:alexmiz@gmail.com"
          className="font-vt323 text-xl hover:opacity-75 transition-opacity"
          style={{ color: "#ffff00" }}
        >
          ** hire me **
        </a>
      </nav>
    </header>
  );
}
