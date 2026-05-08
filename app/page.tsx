import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080", overflowX: "hidden" }}>
      <Header />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 0 0" }}>
        <Accordion />
      </div>

      <p
        className="font-vt323 text-center"
        style={{ fontSize: "14px", color: "#666699", padding: "20px 0" }}
      >
        [ visitor #000247 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best viewed in netscape navigator 4.0
      </p>

      <Footer />
    </main>
  );
}
