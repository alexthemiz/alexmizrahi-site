export type Photo = { src: string; caption?: string };

export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag?: string;
  openColor: string; // background when open
  photoColor: string;   // background for photo placeholder boxes
  accentColor: string;  // eyebrow text + CTA tag border/text color
  photos: Photo[];
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
    photos: [
      { src: '/images/smores-lab/Aestival1.png' },
      { src: '/images/smores-lab/CAMP Smore1.png' },
      { src: '/images/smores-lab/CAMP Smore2.png' },
      { src: '/images/smores-lab/Fora_Smorealis1.jpg' },
      { src: '/images/smores-lab/NTSH1.png' },
      { src: '/images/smores-lab/congealism1.png' },
      { src: '/images/smores-lab/enchanted_smorest1.JPG' },
      { src: '/images/smores-lab/enchanted_smorest2.JPG' },
      { src: '/images/smores-lab/smorgue1.jpg' },
      { src: '/images/smores-lab/smorgue2.JPG' },
    ],
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
    photos: [
      { src: '/images/activations/Bunnyhana.png' },
      { src: '/images/activations/IMG_6140 zoomed in.jpg' },
      { src: '/images/activations/Wimbleden_sign.gif' },
      { src: '/images/activations/bunnyhana1.jpeg' },
      { src: '/images/activations/drz1.jpg' },
      { src: '/images/activations/drz2.jpg' },
      { src: '/images/activations/drz_team.jpg' },
      { src: '/images/activations/firestarters1.jpg' },
      { src: '/images/activations/firestarters2.jpg' },
      { src: '/images/activations/firestarters_sign.jpg' },
      { src: '/images/activations/hydepark2.png' },
      { src: '/images/activations/lollakazooza1.jpg' },
      { src: '/images/activations/lollakazooza2.jpg' },
      { src: '/images/activations/lollakazooza3.jpg' },
      { src: '/images/activations/lollakazooza_flyer.png' },
      { src: '/images/activations/pickleball1.jpg' },
      { src: '/images/activations/pickleball5.jpg' },
      { src: '/images/activations/pickleball7.jpg' },
      { src: '/images/activations/wimbleden1.jpg' },
      { src: '/images/activations/wimbleden5.jpg' },
      { src: '/images/activations/wristlemania 2.png' },
    ],
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
    photos: [],
  },
  {
    id: "communications",
    number: "04",
    title: "Communications",
    meta: "A decade spanning philanthropy, hospitality, and advocacy.",
    description:
      "The Open Society Foundations: Senior Communications Specialist. Media intelligence reports, global intranet management, internal communications, content writing and editing, media monitoring.\n\nThe Assemblage: Director of Communications. Member, guest, and community engagement; media outreach; event marketing.",
    openColor: "#cce8ff",
    photoColor: "#9acef5",
    accentColor: "#1a5a9a",
    photos: [
      { src: '/images/communications/bluestate.avif' },
      { src: '/images/communications/osf_logo.png' },
    ],
  },
  {
    id: "copywriting",
    number: "05",
    title: "Copywriting",
    description:
      "SapientRazorfish: Mercedes-Benz, smartUSA.\n\nROAR Groupe: JPMorgan Chase, Chase Freedom, Sapphire, Ultimate Rewards.\n\nBlue State Digital: US Olympic Committee, Be The Match, Purina.",
    openColor: "#e8ccff",
    photoColor: "#d09af5",
    accentColor: "#6a1a9a",
    photos: [
      { src: '/images/copywriting/chase_ultimate_rewards.jpg' },
      { src: '/images/copywriting/mercedes-benz-logo-11521539785ghkyjiijih.png' },
    ],
  },
];
