import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 pt-10 pb-6 max-w-4xl mx-auto">
      {/* Name */}
      <h1
        className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed"
        style={{ color: "#e8c84a" }}
      >
        ALEX MIZRAHI
      </h1>

      {/* Tagline */}
      <p className="font-vt323 text-2xl mb-8" style={{ color: "#9090b8" }}>
        Experiential producer. Communications strategist. Ideas man.
      </p>

      {/* Nav */}
      <nav className="flex items-center justify-between">
        <Link
          href="/about"
          className="font-vt323 text-xl hover:text-yellow-300 transition-colors"
          style={{ color: "#9090b8" }}
        >
          About
        </Link>
        <span
          className="font-vt323 text-xl animate-pulse"
          style={{ color: "#e8c84a" }}
        >
          * available for work *
        </span>
      </nav>
    </header>
  );
}
