import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />
      <div style={RAINBOW_STYLE} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px 32px" }}>
        <Accordion />
      </div>

      <p
        className="font-vt323 text-center py-2"
        style={{ fontSize: "16px", color: "#666699" }}
      >
        [ visitor #000247 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best viewed in netscape navigator 4.0
      </p>

      <div style={RAINBOW_STYLE} />

      <Footer />
    </main>
  );
}
