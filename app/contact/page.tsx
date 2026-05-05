import Header from "../components/Header";
import Footer from "../components/Footer";
import GuestbookForm from "../components/GuestbookForm";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <h1
          className="font-pixel text-center mb-6"
          style={{
            fontSize: "24px",
            color: "#ffff00",
            textShadow: "2px 2px #ff0000",
          }}
        >
          GUESTBOOK
        </h1>

        {/* Subhead */}
        <p
          className="font-vt323 text-center mb-8"
          style={{ fontSize: "24px", color: "#c0c0e0" }}
        >
          Sign the guestbook. Send me a note. Tell me how I can be of service.
        </p>

        {/* Contact info */}
        <div
          className="font-vt323 mb-8"
          style={{ fontSize: "22px", color: "#e8c84a", lineHeight: 1.6 }}
        >
          <div>alexmiz@gmail.com</div>
          <div>linkedin.com/in/alexmizrahi</div>
          <div>Brooklyn / Los Angeles</div>
        </div>

        {/* Rainbow divider */}
        <div style={{ ...RAINBOW_STYLE, marginBottom: "40px" }} />

        {/* Form */}
        <GuestbookForm />
      </div>

      <Footer />
    </main>
  );
}
