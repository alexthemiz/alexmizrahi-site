import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <p className="font-vt323 text-3xl" style={{ color: "#9090b8" }}>
          TK — letter from the editor.
        </p>
      </section>
      <Footer />
    </main>
  );
}
