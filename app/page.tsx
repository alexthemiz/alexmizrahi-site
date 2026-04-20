import Header from "./components/Header";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <Accordion />
    </main>
  );
}
