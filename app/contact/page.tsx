import Header from "../components/Header";
import Footer from "../components/Footer";
import GuestbookForm from "../components/GuestbookForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />

      <div className="site-width px-6 py-12">
        {/* Contact info */}
        <div
          className="font-vt323 mb-8 flex flex-wrap items-center justify-center gap-x-3"
          style={{ fontSize: "22px", color: "#e8c84a" }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&to=alexmiz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e8c84a", textDecoration: "underline", fontFamily: "var(--font-vt323), monospace" }}
          >
            Email Me
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://linkedin.com/in/alexmizrahi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e8c84a", textDecoration: "underline", fontFamily: "var(--font-vt323), monospace" }}
          >
            LinkedIn
          </a>
          <span aria-hidden="true">|</span>
          <span>Brooklyn, NY / Los Angeles, CA</span>
        </div>

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

        {/* Form */}
        <GuestbookForm />
      </div>

      <Footer />
    </main>
  );
}
