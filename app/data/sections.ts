export type Photo = { src: string; caption?: string };

export type SubSection = {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  photoColor: string;
  accentColor: string;
  tag?: string;
};

export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag?: string;
  openColor: string;
  photoColor: string;
  accentColor: string;
  photos: Photo[];
  subClosedColor?: string;
  subSections?: SubSection[];
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
    subClosedColor: "#e8c4a0",
    photos: [],
    subSections: [
      {
        id: "smores-corporate",
        title: "Corporate Events",
        description: "",
        photos: [
          { src: '/images/smores-lab/corporate-events/Fora_Smorealis1.jpg' },
          { src: '/images/smores-lab/corporate-events/enchanted_smorest1.JPG' },
          { src: '/images/smores-lab/corporate-events/enchanted_smorest2.JPG' },
        ],
        photoColor: "#e8b07a",
        accentColor: "#b06000",
      },
      {
        id: "smores-festivals",
        title: "Festivals & Cultural",
        description: "",
        photos: [
          { src: '/images/smores-lab/festivals/Aestival1.png' },
          { src: '/images/smores-lab/festivals/CAMP Smore1.png' },
          { src: '/images/smores-lab/festivals/CAMP Smore2.png' },
          { src: '/images/smores-lab/festivals/NTSH1.png' },
        ],
        photoColor: "#e8b07a",
        accentColor: "#b06000",
      },
      {
        id: "smores-private",
        title: "Private Celebrations",
        description: "",
        photos: [
          { src: '/images/smores-lab/parties/congealism1.png' },
          { src: '/images/smores-lab/parties/smorgue1.jpg' },
          { src: '/images/smores-lab/parties/smorgue2.JPG' },
        ],
        photoColor: "#e8b07a",
        accentColor: "#b06000",
      },
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
    subClosedColor: "#e8e0a0",
    photos: [],
    subSections: [
      {
        id: "activations-lolla",
        title: "Lollakazooza",
        description: "",
        photos: [
          { src: '/images/activations/lollakazooza/lollakazooza1.jpg' },
          { src: '/images/activations/lollakazooza/lollakazooza2.jpg' },
          { src: '/images/activations/lollakazooza/lollakazooza3.jpg' },
          { src: '/images/activations/lollakazooza/lollakazooza_flyer.png' },
        ],
        photoColor: "#e8d870",
        accentColor: "#8a7000",
      },
      {
        id: "activations-oneoffs",
        title: "One-Offs",
        description: "",
        photos: [
          { src: '/images/activations/pop-ups/Bunnyhana.png' },
          { src: '/images/activations/pop-ups/bunnyhana1.jpeg' },
          { src: '/images/activations/pop-ups/drz1.jpg' },
          { src: '/images/activations/pop-ups/drz2.jpg' },
          { src: '/images/activations/pop-ups/drz_team.jpg' },
          { src: '/images/activations/pop-ups/pickleball1.jpg' },
          { src: '/images/activations/pop-ups/pickleball5.jpg' },
          { src: '/images/activations/pop-ups/pickleball7.jpg' },
          { src: '/images/activations/pop-ups/wristlemania 2.png' },
        ],
        photoColor: "#e8d870",
        accentColor: "#8a7000",
      },
      {
        id: "activations-weddings",
        title: "Weddings & Private",
        description: "",
        photos: [
          { src: '/images/activations/weddings/IMG_6140 zoomed in.jpg' },
          { src: '/images/activations/weddings/Wimbleden_sign.gif' },
          { src: '/images/activations/weddings/firestarters1.jpg' },
          { src: '/images/activations/weddings/firestarters2.jpg' },
          { src: '/images/activations/weddings/firestarters_sign.jpg' },
          { src: '/images/activations/weddings/hydepark2.png' },
          { src: '/images/activations/weddings/wimbleden1.jpg' },
          { src: '/images/activations/weddings/wimbleden5.jpg' },
        ],
        photoColor: "#e8d870",
        accentColor: "#8a7000",
      },
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
    subClosedColor: "#a0c4e8",
    photos: [],
    subSections: [
      {
        id: "comms-osf",
        title: "Open Society Foundations",
        description: "",
        photos: [
          { src: '/images/communications/open-society-foundations/osf_logo.png' },
        ],
        photoColor: "#78b5e8",
        accentColor: "#1a5a9a",
      },
      {
        id: "comms-assemblage",
        title: "The Assemblage",
        description: "",
        photos: [],
        photoColor: "#78b5e8",
        accentColor: "#1a5a9a",
      },
      {
        id: "comms-bluestate",
        title: "Blue State Digital",
        description: "Clients: US Olympic Committee, Coalition to Protect America's Health Care, Be The Match, Purina",
        photos: [
          { src: '/images/communications/blue-state-digital/bluestate.avif' },
        ],
        photoColor: "#78b5e8",
        accentColor: "#1a5a9a",
      },
    ],
  },
  {
    id: "copywriting",
    number: "05",
    title: "Copywriting",
    description: "",
    openColor: "#e8ccff",
    photoColor: "#d09af5",
    accentColor: "#6a1a9a",
    subClosedColor: "#c8a0e8",
    photos: [],
    subSections: [
      {
        id: "copy-sapient",
        title: "SapientRazorfish",
        description: "Clients: Mercedes-Benz, smartUSA",
        photos: [
          { src: '/images/copywriting/sapientrazorfish/mercedes-benz-logo-11521539785ghkyjiijih.png' },
        ],
        photoColor: "#b878e8",
        accentColor: "#6a1a9a",
      },
      {
        id: "copy-roar",
        title: "ROAR Groupe",
        description: "Clients: JPMorgan Chase, Chase Freedom, Sapphire, Ultimate Rewards",
        photos: [
          { src: '/images/copywriting/roar-groupe/chase_ultimate_rewards.jpg' },
        ],
        photoColor: "#b878e8",
        accentColor: "#6a1a9a",
      },
    ],
  },
];
