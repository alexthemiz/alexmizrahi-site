import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <div className="px-6 max-w-4xl mx-auto">
        <p className="font-vt323 text-xl" style={{ color: "#9090b8" }}>
          Accordion coming soon...
        </p>
      </div>
    </main>
  );
}
