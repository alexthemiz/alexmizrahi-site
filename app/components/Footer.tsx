import KazooButton from "./KazooButton";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-10 max-w-4xl mx-auto"
      style={{ borderColor: "#9090b8" }}
    >
      <p className="font-vt323 text-xl mb-6" style={{ color: "#9090b8" }}>
        All work conceived, produced, and occasionally eaten by Alex Mizrahi.
      </p>

      {/* Contact */}
      <div className="font-vt323 text-lg mb-6 space-y-1" style={{ color: "#9090b8" }}>
        <p>Brooklyn, NY · Los Angeles, CA</p>
        <p>
          <a
            href="mailto:alexmiz@gmail.com"
            className="hover:text-yellow-300 transition-colors"
          >
            alexmiz@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/alexmizrahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            linkedin.com/in/alexmizrahi
          </a>
        </p>
      </div>

      <KazooButton />
    </footer>
  );
}
