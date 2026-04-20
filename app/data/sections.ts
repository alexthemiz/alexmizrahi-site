export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag: string;
  openColor: string; // background when open
  photoColor: string;   // background for photo placeholder boxes
  accentColor: string;  // eyebrow text + CTA tag border/text color
};

export const SECTIONS: Section[] = [
  {
    id: "smores",
    number: "01",
    title: "The S'mores Lab",
    meta: "ongoing project",
    url: "thesmoreslab.com",
    description:
      "Turned the traditional, humdrum s'mores bar into an interactive culinary and art experience where participants build never-before-s'mored creations from a vast range of ingredients, then give them full fashion-style photoshoots. Equal parts food science, participatory art, and campfire nostalgia.",
    tag: "make your next event sweeter * available for booking *",
    openColor: "#ffe5cc",
    photoColor: "#f5c9a0",
    accentColor: "#b06000",
  },
  {
    id: "activations",
    number: "02",
    title: "Activations",
    meta: "Communal Delights",
    description:
      "Lollakazooza. The Pickle Ball. The Decongestion Relief Zone. Bunnyhana. Wedding icebreakers. Festival surprises. Original experiences that encourage active participation rather than passive attendance. Each conceived, named, branded, and produced from scratch.",
    tag: "* let's make something *",
    openColor: "#fffacc",
    photoColor: "#f5ef9a",
    accentColor: "#8a7000",
  },
  {
    id: "tpp",
    number: "03",
    title: "The Playa Provides",
    meta: "in development",
    url: "theplayaprovides.com",
    description:
      "Peer-to-peer lending platform for the Burning Man community, and anyone who'd rather borrow than buy. Independently conceived and built as sole founder, handling everything: vibe coding, architecture, UX, branding, copy, and marketing strategy.",
    tag: "* in progress *",
    openColor: "#ccf0e0",
    photoColor: "#9adbc0",
    accentColor: "#1a7a4a",
  },
  {
    id: "communications",
    number: "04",
    title: "Communications",
    meta: "A decade spanning philanthropy, hospitality, and advocacy.",
    description:
      "The Open Society Foundations: Senior Communications Specialist. Media intelligence reports, global intranet management, internal communications, content writing and editing, media monitoring.\n\nThe Assemblage: Director of Communications. Member, guest, and community engagement; media outreach; event marketing.",
    tag: "",
    openColor: "#cce8ff",
    photoColor: "#9acef5",
    accentColor: "#1a5a9a",
  },
  {
    id: "copywriting",
    number: "05",
    title: "Copywriting",
    description:
      "SapientRazorfish: Mercedes-Benz, smartUSA.\n\nROAR Groupe: JPMorgan Chase, Chase Freedom, Sapphire, Ultimate Rewards.\n\nBlue State Digital: US Olympic Committee, Be The Match, Purina.",
    tag: "",
    openColor: "#e8ccff",
    photoColor: "#d09af5",
    accentColor: "#6a1a9a",
  },
];
