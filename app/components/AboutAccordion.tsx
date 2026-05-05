"use client";

import { useState } from "react";

function darken(hex: string, amount = 15): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

const LINK: React.CSSProperties = {
  color: "#e8c84a",
  textDecoration: "underline",
  fontFamily: "var(--font-vt323), monospace",
};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={LINK}>
      {children}
    </a>
  );
}

function Ed({ children }: { children: React.ReactNode }) {
  return <span style={{ opacity: 0.7 }}>{children}</span>;
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", gap: "8px", fontFamily: "var(--font-vt323), monospace", fontSize: "20px", color: "#1a1a2e", lineHeight: 1.4 }}>
      <span style={{ color: "#e8c84a", flexShrink: 0 }}>►</span>
      <span>{children}</span>
    </li>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-vt323), monospace",
      fontSize: "22px",
      color: "#5a3010",
      borderBottom: "1px solid #c0a870",
      paddingBottom: "4px",
      marginTop: "20px",
      marginBottom: "8px",
    }}>
      {children}
    </p>
  );
}

function HuffPoSpoilersContent() {
  return (
    <div>
      <p style={{ fontFamily: "var(--font-vt323), monospace", fontSize: "20px", color: "#1a1a2e", lineHeight: 1.4, marginBottom: "16px" }}>
        In 2012, frustrated with the clickbait clogging my Twitter feed — most glaringly from @HuffingtonPost — I created @HuffPoSpoilers. In April 2013 the account caught on, and in the years since has led to press coverage, imitators, and I would like to think, a wider pushback against the scourge of clickbait.
      </p>

      <H4>By @HuffPoSpoilers</H4>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <Li>Panelist, SXSW Interactive 2017: <A href="http://schedule.sxsw.com/2017/events/PP62522">Gone Fishing: How to Not Let Clickbait Reel You In</A></Li>
        <Li>L.A. Weekly (Sept. 12, 2013): <A href="http://www.laweekly.com/news/an-open-letter-from-huffpospoilers-were-not-gonna-click-it-any-more-4176048">An Open Letter from @HuffPoSpoilers: We're Not Gonna Click it Any More</A> <Ed>[ed note: we've kept clicking anyway]</Ed></Li>
        <Li>Medium (June 13, 2013): <A href="https://medium.com/i-m-h-o/a-glossary-of-words-and-phrases-the-huffington-post-needs-to-ban-from-its-twitter-feed-51eab44b5859">A Glossary of Words and Phrases the Huffington Post Needs to Ban from its Twitter Feed</A></Li>
      </ul>

      <H4>About @HuffPoSpoilers & Clickbait</H4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        <Li>New York Times (April 28, 2013): <A href="http://www.nytimes.com/2013/04/29/business/media/media-critics-turn-to-twitter.html">Turning the Tables on the News Media Tease</A> <Ed>[ed note: online and in print; yes, I have a laminated copy at home]</Ed></Li>
        <Li>Politico (July 19, 2013): <A href="http://www.politico.com/story/2013/07/50-politicos-to-watch-alex-mizrahi-094176">50 Politicos to Watch: Alex Mizrahi</A></Li>
        <Li>Slate (May 10, 2013): <A href="http://www.slate.com/blogs/browbeat/2013/05/10/huffpospoilers_on_twitter_the_clickbait_destroyer.html">Follow Friday: The Clickbait Destroyer</A></Li>
        <Li>Daily Beast (July 14, 2014): <A href="http://www.thedailybeast.com/articles/2014/07/14/saving-us-from-ourselves-the-anti-clickbait-movement.html">Saving Us From Ourselves: The Anti-Clickbait Movement</A></Li>
        <Li>Politico/Capital NY (June 30, 2014): <A href="http://www.capitalnewyork.com/article/magazine/2014/06/8548191/alex-mizrahi-huffpo-spoiler">Alex Mizrahi, HuffPo spoiler</A></Li>
        <Li>Digiday (May 30, 2014): <A href="http://digiday.com/publishers/clickbait-spoilers/">Spoiler Twitter accounts</A></Li>
        <Li>Think Progress (June 2, 2014): <A href="http://thinkprogress.org/culture/2014/06/02/3443688/clickbait-fighting/">The Way One Man Is Waging War On Clickbait Will Blow Your Mind</A></Li>
        <Li>HyperVocal (June 2, 2014): <A href="http://hypervocal.com/news/2014/savedyouaclick-huffpospoilers-interview/">Clickbait-Ruining Kings: Q&A With @SavedYouAClick and @HuffPoSpoilers</A></Li>
        <Li>ABCNews.com (April 30, 2013): <A href="http://abcnews.go.com/blogs/business/2013/04/ny-mans-tweets-spoil-news-stories/">NY Man's Tweets Spoil News Stories</A></Li>
        <Li>Adweek (May 7, 2013): <A href="http://www.adweek.com/socialtimes/huffpospoilers/483194">@HuffPoSpoilers Gives In To Huffington Post Click-Bait So You Don't Have To</A></Li>
        <Li>DailyDot (June 3, 2013): <A href="http://www.dailydot.com/lol/huffpospoilers-alex-mizrahi-twitter/">@HuffPoSpoilers delivers all the news and none of the clickbait</A></Li>
        <Li>HuffingtonPost (April 25, 2013): <A href="http://www.huffingtonpost.com/2013/04/25/huffpospoilers-twitter_n_3157491.html">HuffPoSpoilers Makes Fun Of Huffington Post Twitter Account</A></Li>
      </ul>
    </div>
  );
}

function ArchivesContent() {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
      <Li>Panelist, MediaPost Social Media Insider Summit 2014: <A href="http://www.mediapost.com/socialmediainsidersummit/speaker/11544/alex-mizrahi">Social's Next, Next Wave</A></Li>
      <Li>Digiday (Oct. 10, 2014): <A href="http://digiday.com/publishers/many-many-ways-publishers-define-clickbait/">The many different ways publishers define 'clickbait'</A></Li>
      <Li>Digiday (July 9, 2014): <A href="http://digiday.com/brands/cia-social-strategy/">Is the CIA's cheeky social approach smart strategy?</A></Li>
      <Li>BlueStateDigital Blog (Aug. 15, 2014): <A href="https://www.bluestatedigital.com/news/entry/is-the-ice-bucket-challenge-leaving-you-cold">Is The Ice Bucket Challenge Leaving You Cold?</A></Li>
      <Li>Sports Illustrated's The Cauldron (April 6, 2016): <A href="https://thecauldron.si.com/moot-points-d28489d60eb8">The Greatest Moot Points In Sports History</A></Li>
      <Li>Medium (March 2, 2016): <A href="https://medium.com/@alexmiz/a-spotlight-delight-66c0d8fad6c0">A Spotlight Delight: Journalism on the Screen, Past Present & Future</A></Li>
      <Li>Medium (Jan. 24, 2017): <A href="https://medium.com/@alexmiz/marching-was-just-the-beginning-be78b1b3e759">Marching was Just the Beginning</A></Li>
      <Li>Mashable (Oct. 31, 2014): <A href="http://mashable.com/2014/10/31/hallowmeme-costumes/">35 #HallowMEME costumes more intense than your Internet addiction</A> (I went as potato salad)</Li>
      <Li>Mashable (Sept. 18, 2012): <A href="https://mashable.com/2012/09/18/twitter-header/">10 Twitter Header Images Done Right</A> — I came in second, directly ahead of Ryan Seacrest</Li>
      <Li>NPR Fun Facts: <A href="http://nprfunfacts.tumblr.com/">a retired Tumblr and Twitter feed</A> for sharing fascinating trivia from public radio</Li>
      <Li>ReadWrite (Sept. 7, 2012): <A href="http://readwrite.com/2012/09/07/how-advertisers-can-avoid-paying-for-accidental-mobile-clicks/">How Advertisers Can Avoid Paying For Accidental Mobile Clicks</A></Li>
    </ul>
  );
}

function CommunityContent() {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
      <Li>Poll Worker, NYC Board of Elections — 2020 and 2024 general elections, 2021 mayoral primary</Li>
      <Li><A href="https://jfrej.org/">Jews For Racial and Economic Justice (JFREJ)</A> — volunteer and member</Li>
      <Li><A href="https://www.burnerswithoutborders.org/">Burners Without Borders</A> — volunteer</Li>
      <Li><A href="https://www.kostumekult.com/">Kostume Kult</A> — volunteer, member, and participant</Li>
      <Li><A href="https://newyork.figmentproject.org/">FIGMENT NYC</A> — volunteer; free participatory arts event</Li>
      <Li>Schusterman Foundation REALITY community — participant, REALITY Impact 2016</Li>
    </ul>
  );
}

const WRITINGS_OPEN = "#ede0c8";
const WRITINGS_SUB_CLOSED = "#c8b8d8";
const COMMUNITY_OPEN = "#c8dcc0";

const SUBS = [
  {
    id: "huffpospoilers",
    title: "@HuffPoSpoilers",
    meta: "2012 — present",
    content: <HuffPoSpoilersContent />,
  },
  {
    id: "archives",
    title: "Archives",
    meta: "press, panels & other internet debris",
    content: <ArchivesContent />,
  },
];

export default function AboutAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [writingsSubId, setWritingsSubId] = useState<string | null>(null);

  const toggleMain = (id: string) => {
    setOpenId((prev) => {
      if (prev === id) {
        if (id === "writings") setWritingsSubId(null);
        return null;
      }
      return id;
    });
  };

  const writingsOpen = openId === "writings";
  const communityOpen = openId === "community";

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-0">

      {/* Writings & Press */}
      <div style={{ border: "1px solid #c0c0c0", backgroundColor: "#000040", marginBottom: "4px" }}>
        <button
          onClick={() => toggleMain("writings")}
          className="w-full text-left py-4 px-4 flex items-center justify-between gap-4"
          style={{ backgroundColor: "transparent" }}
          aria-expanded={writingsOpen}
        >
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <span className="font-pixel" aria-hidden="true" style={{ fontSize: "10px", color: "#4a4a7a" }}>01.</span>
            <span className="font-vt323" style={{ fontSize: "34px", color: writingsOpen ? "#e8c84a" : "#c0c0e0", lineHeight: 1.1 }}>
              Writings & Press
            </span>
          </div>
          <span className="font-vt323 shrink-0" style={{ fontSize: "24px", color: writingsOpen ? "#e8c84a" : "#c0c0e0" }}>
            {writingsOpen ? "▼" : "►"}
          </span>
        </button>

        {writingsOpen && (
          <div className="py-6 px-4" style={{ backgroundColor: WRITINGS_OPEN }}>
            {SUBS.map((sub) => {
              const isSubOpen = writingsSubId === sub.id;
              return (
                <div
                  key={sub.id}
                  style={{
                    border: "1px dashed #c0c0c0",
                    backgroundColor: isSubOpen ? darken(WRITINGS_SUB_CLOSED) : WRITINGS_SUB_CLOSED,
                    marginBottom: "4px",
                  }}
                >
                  <button
                    onClick={() => setWritingsSubId(isSubOpen ? null : sub.id)}
                    className="w-full text-left py-3 flex items-center justify-between gap-4"
                    style={{ backgroundColor: "transparent", paddingLeft: "32px", paddingRight: "16px" }}
                  >
                    <span className="font-vt323" style={{ fontSize: "26px", color: isSubOpen ? "#000040" : "#000060", lineHeight: 1.1 }}>
                      {sub.title}
                      <span style={{ fontSize: "20px", opacity: 0.7, marginLeft: "12px" }}>
                        {`// ${sub.meta}`}
                      </span>
                    </span>
                    <span className="font-vt323 shrink-0" style={{ fontSize: "20px", color: isSubOpen ? "#000040" : "#000060" }}>
                      {isSubOpen ? "▼" : "►"}
                    </span>
                  </button>

                  {isSubOpen && (
                    <div style={{ backgroundColor: WRITINGS_OPEN, paddingTop: "16px", paddingBottom: "16px", paddingLeft: "32px", paddingRight: "16px" }}>
                      {sub.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Community & Service */}
      <div style={{ border: "1px solid #c0c0c0", backgroundColor: "#000040", marginBottom: "4px" }}>
        <button
          onClick={() => toggleMain("community")}
          className="w-full text-left py-4 px-4 flex items-center justify-between gap-4"
          style={{ backgroundColor: "transparent" }}
          aria-expanded={communityOpen}
        >
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <span className="font-pixel" aria-hidden="true" style={{ fontSize: "10px", color: "#4a4a7a" }}>02.</span>
            <span className="font-vt323" style={{ fontSize: "34px", color: communityOpen ? "#e8c84a" : "#c0c0e0", lineHeight: 1.1 }}>
              Community & Service
              <span className="font-vt323 ml-3" style={{ fontSize: "22px", opacity: 0.6 }}>
                {" // giving back // showing up"}
              </span>
            </span>
          </div>
          <span className="font-vt323 shrink-0" style={{ fontSize: "24px", color: communityOpen ? "#e8c84a" : "#c0c0e0" }}>
            {communityOpen ? "▼" : "►"}
          </span>
        </button>

        {communityOpen && (
          <div className="py-6 px-4" style={{ backgroundColor: COMMUNITY_OPEN }}>
            <CommunityContent />
          </div>
        )}
      </div>

    </div>
  );
}
