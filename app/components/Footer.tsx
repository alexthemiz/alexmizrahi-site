import KazooButton from "./KazooButton";

export default function Footer() {
  return (
    <footer
      className="px-6 py-6 max-w-4xl mx-auto flex items-center justify-between"
      style={{
        backgroundColor: "#16213e",
        borderTop: "2px solid #2e2e5a",
      }}
    >
      <p
        className="font-vt323"
        style={{ fontSize: "16px", color: "#666699" }}
      >
        © {new Date().getFullYear()} alex mizrahi. all rights reserved. probably.
      </p>
      <KazooButton />
    </footer>
  );
}
