import Link from "next/link";
import KazooButton from "./KazooButton";

export default function Footer() {
  return (
    <footer
      className="px-6 py-6 max-w-4xl mx-auto flex items-center justify-between"
      style={{
        backgroundColor: "#000080",
        borderTop: "2px solid #c0c0c0",
      }}
    >
      <div className="flex items-center gap-6">
        <p
          className="font-vt323"
          style={{ fontSize: "16px", color: "#666699" }}
        >
          © {new Date().getFullYear()} alex mizrahi. all rights reserved. probably.
        </p>
        <Link
          href="/contact"
          className="font-vt323 hover:opacity-75 transition-opacity"
          style={{ fontSize: "16px", color: "#00ffff" }}
        >
          contact
        </Link>
      </div>
      <KazooButton />
    </footer>
  );
}
