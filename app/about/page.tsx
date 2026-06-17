import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutAccordion from "../components/AboutAccordion";

const BTN_BASE: React.CSSProperties = {
  fontFamily: "var(--font-vt323), monospace",
  fontSize: "22px",
  backgroundColor: "#000080",
  border: "2px solid",
  padding: "8px 20px",
  textDecoration: "none",
  display: "inline-block",
  cursor: "pointer",
};

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#000080" }}>
      <Header />

      <div className="site-width px-6 pt-12 pb-4">
        <h1
          className="font-pixel text-center mb-6"
          style={{ fontSize: "24px", color: "#ffff00", textShadow: "2px 2px #ff0000" }}
        >
          ABOUT
        </h1>

        {/* Bio */}
        <div className="mb-10 flex flex-col gap-4">
          <p
            className="font-vt323"
            style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
          >
            Most of my career has been about saying things: producing content for brands, managing communications for advocacy campaigns, and finding the right words for whatever needed saying. I&apos;ve written social media copy for credit cards and luxury cars; overseen comms for a coworking and events space that hosted presidential candidates and wellness influencers while serving plant-based elixirs and ayurvedic cuisine; and written and edited content for one of the world&apos;s largest philanthropies. Along the way, I built a Twitter account that landed me in the New York Times (turns out spoiling HuffPost tweets is a path to minor social media fame).
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi1.JPG" alt="Alex Mizrahi" style={{ display: "block", margin: "0 auto", maxWidth: "200px", width: "100%", height: "auto" }} />

          <p
            className="font-vt323"
            style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
          >
            More recently, I&apos;ve started building things, too, both online and IRL. What started as a small pun gag in September 2022 has grown into a series of experiential passion projects, community tools, and interactive games: a kazoo festival in a box truck, an interactive experience that turns s&apos;mores into art, a peer-to-peer lending platform for the circular economy, a{" "}
            <a href="https://world-pop-finals.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#c0c0e0", textDecoration: "underline" }}>
              World Cup-inspired country trivia game
            </a>
            . Whatever the project, I&apos;m always asking the same questions: what&apos;s missing? Is there friction we can remove? How can this be elevated? What would make it genuinely surprising instead of just fine?
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi2.jpg" alt="Alex Mizrahi" style={{ display: "block", margin: "0 auto", maxWidth: "200px", width: "100%", height: "auto" }} />

          <p
            className="font-vt323"
            style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
          >
            With tools like Claude Code removing so many of the walls between a concept and reality, we now live in a world made for Ideas People. I&apos;ve been able to use AI to turn ideas I&apos;ve had for years — or came up with yesterday — into actual working prototypes, learning and iterating as I go. But I&apos;m deliberate about where I draw the line: yes to using AI for coding, productivity, and handling menial or tedious tasks; a firm no to outsourcing writing, design, or the creative elements that make something worth making.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/alexmizrahi3.webp" alt="Alex Mizrahi" style={{ display: "block", margin: "0 auto", maxWidth: "200px", width: "100%", height: "auto" }} />

          <p
            className="font-vt323"
            style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
          >
            I thrive in roles that flow between strategy and execution, writing and producing, big-picture thinking and on-the-ground reality. I&apos;m good at figuring out what something needs, finding the words for it, and making it happen. (Also, more comfortable writing about others than about myself.)
          </p>
          <p
            className="font-vt323"
            style={{ fontSize: "22px", color: "#c0c0e0", lineHeight: 1.5 }}
          >
            Born in Los Angeles. Based in Brooklyn. Remote-friendly. Looking for collaborators on a project, need support for an event, or trying to fill a role on your comms team? Let&apos;s chat.
          </p>
        </div>

        {/* Resume buttons */}
        <div className="mb-10 flex gap-4 flex-wrap justify-center">
          <a href="/resumes/alexmizrahi_events-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...BTN_BASE, color: "#ffff00", borderColor: "#ffff00" }}>
            ► Resume - Experiential
          </a>
          <a href="/resumes/alexmizrahi_communications-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...BTN_BASE, color: "#00ffff", borderColor: "#00ffff" }}>
            ► Resume - Communications
          </a>
        </div>

        <div style={{ borderTop: "1px dashed #666699" }} />
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <AboutAccordion />
      </div>

      <Footer />
    </main>
  );
}
