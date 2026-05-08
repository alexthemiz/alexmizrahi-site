export type Photo = { src: string; caption?: string };

export type PhotoGroup = {
  title: string;
  description: string;
  photos: Photo[];
};

export type SubSection = {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  groups?: PhotoGroup[];
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
  descriptionSuffix?: { prefix?: string; text: string; href: string };
  tag?: string;
  openColor: string;
  photoColor: string;
  accentColor: string;
  photos: Photo[];
  subClosedColor?: string;
  subSections?: SubSection[];
};

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const SECTIONS: Section[] = [
  {
    id: "smores",
    number: "01",
    title: "The S'mores Lab",
    meta: "ongoing project",
    description:
      "Turned the traditional, humdrum s'mores bar into an interactive culinary and art experience where participants build never-before-s'mored creations from a vast range of ingredients, then give them full fashion-style photoshoots. Equal parts food science, participatory art, and campfire nostalgia.",
    descriptionSuffix: { prefix: " Now ", text: "available for booking", href: "https://www.thesmoreslab.com" },
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
        photos: [],
        groups: [
          {
            title: "A Fora S'morealis",
            description: "December 2025: Fora Travel Holiday Party",
            photos: [
              { src: '/images/smores-lab/corporate-events/Fora_Smorealis1.jpg' },

            ],
          },
          {
            title: "The S'moreTwenty Station",
            description: "May 2025: Launch party for new high-end cannabis publication The Other Magazine",
            photos: [
                          { src: '/images/smores-lab/corporate-events/enchanted_smorest1.JPG' },
              { src: '/images/smores-lab/corporate-events/enchanted_smorest2.JPG' },  
            ],
          },
        ],
        photoColor: "#e8b07a",
        accentColor: "#b06000",
      },
      {
        id: "smores-festivals",
        title: "Festivals",
        description: "",
        photos: [],
        groups: [
          {
            title: "Aestival Festival",
            description: "August 2024 in Upstate NY",
            photos: [
              { src: '/images/smores-lab/festivals/Aestival1.png' },
            ],
          },
          {
            title: "Nothing to See Here",
            description: "July 2024",
            photos: [
                            { src: '/images/smores-lab/festivals/NTSH1.png' },
            ],
          },
          {
            title: "Calling All Magical People",
            description: "July 2024",
            photos: [
                            { src: '/images/smores-lab/festivals/CAMP Smore1.png' },
              { src: '/images/smores-lab/festivals/CAMP Smore2.png' },
            ],
          },
        ],
        photoColor: "#e8b07a",
        accentColor: "#b06000",
      },
      {
        id: "smores-private",
        title: "Parties",
        description: "",
        photos: [],
        groups: [
          {
            title: "The S'morgue and The S'moretuary",
            description: "October 2024: City of Gods Halloween",
            photos: [

              { src: '/images/smores-lab/parties/smorgue1.jpg' },
              { src: '/images/smores-lab/parties/smorgue2.JPG' },
            ],
          },
          {
            title: "Death to Congealism",
            description: "September 2024: Death to Realism party",
            photos: [
              { src: '/images/smores-lab/parties/congealism1.png' },
            ],
          },
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
      "Original experiences that encourage active participation rather than passive attendance. Each conceived, named, branded, and produced from scratch.",
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
        description: "September 2025: A free kazoo festival located inside a 20' U-Haul truck, featuring stellar performances by attendees on the main stage, as well as a Petting Kazoo, Bekazzooling Station, VIP Clownge, and tootoring throughout the night. The truck was buzzing with energy. Follow @lollakazooza on Instagram for more.",
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
        title: "Pop-Ups",
        description: "",
        photos: [],
        groups: [
          {
            title: "Bunnyhana",
            description: "July 2025: A late-night, lagamorph-centric pop-up hibachi restaurant at the Calling All Magical People festival",
            photos: [
              { src: '/images/activations/pop-ups/Bunnyhana.png' },
              { src: '/images/activations/pop-ups/bunnyhana1.jpeg' },
            ],
          },
          {
            title: "The Decongestion Relief Zone",
            description: "March 2025: For Shadow Traffic's Competitive Winter Picnicking, I produced the Decongestion Relief Zone: the inverse of Manhattan's Congestion Relief Zone, the DRZ was free to enter but you had to pay to leave; payment came in the form of completing a challenge, after which you were awarded a SNEE-ZPass.",
            photos: [
              { src: '/images/activations/pop-ups/drz1.jpg' },
              { src: '/images/activations/pop-ups/drz2.jpg' },
              { src: '/images/activations/pop-ups/drz_team.jpg' },
            ],
          },
          {
            title: "The Pickle Ball",
            description: "May 2023: As part of Shadow Traffic's Lost Horizon Night Market, I co-produced The Pickle Ball, a pickle-themed gala held in a 26-foot box truck, replete with pickle-carving station, briny beverages, games, and prizes (the prizes were more pickles)",
            photos: [
              { src: '/images/activations/pop-ups/pickleball1.jpg' },
              { src: '/images/activations/pop-ups/pickleball5.jpg' },
              { src: '/images/activations/pop-ups/pickleball7.jpg' },
            ],
          },
          {
            title: "Wristlemania",
            description: LOREM,
            photos: [
              { src: '/images/activations/pop-ups/wristlemania 2.png' },
            ],
          },
        ],
        photoColor: "#e8d870",
        accentColor: "#8a7000",
      },
      {
        id: "activations-weddings",
        title: "Weddings",
        description: "",
        photos: [],
        groups: [
          {
            title: "Nothing to Hyde Park",
            description: "August 2025: I was commissioned by the marrying couple, Charlie and Julia (aka Chulia), to create two activations for their wedding at a country estate outside Caersws, Wales: an icebreaker activity for the first night gathering and a side-room takeover during the big party. Since we were in the UK, I based both activations on UK landmarks. The Icebreaker: Nothing to Hyde Park. Playing off London's Hyde Park and its historic Speakers' Corner, as well as the groom's masterful oratory skills and debate background, I set up a corner space and came up with prompts for participants to ask each other.",
            photos: [
              { src: '/images/activations/weddings/nothingtohydepark.jpg' },
              { src: '/images/activations/weddings/hydepark2.png' },
            ],
          },
          {
            title: "The WimbleDen",
            description: "Being in the homeland of Wimbledon, and knowing that the couple loves pickleball, tennis, and games generally, I converted the space into The WimbleDen, a mini-tennis court where participants could rally, volley, and score without fear of injury or breaking anything (other than serves).",
            photos: [
              { src: '/images/activations/weddings/Wimbleden_sign.gif' },
              { src: '/images/activations/weddings/wimbleden1.jpg' },
              { src: '/images/activations/weddings/wimbleden5.jpg' },
            ],
          },
          {
            title: "Fire Starters",
            description: "September 2023: For the destination wedding of Haley and Sol in Ithaca, NY, I was tasked with creating another first-night icebreaker. Building off the couple's love of hot sauce (which they incorporated throughout the celebration), I created Fire Starters, an homage to Hot Ones that had participants attempting spicy conversations while tasting a series of escalatingly spicy sauces.",
            photos: [
              { src: '/images/activations/weddings/firestarters1.jpg' },
              { src: '/images/activations/weddings/firestarters2.jpg' },
              { src: '/images/activations/weddings/firestarters_sign.jpg' },
            ],
          },
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
    description:
      "Peer-to-peer lending platform for the Burning Man community, and anyone who'd rather borrow than buy. Independently conceived and built as sole founder, handling everything: vibe coding, architecture, UX, branding, copy, and marketing strategy.",
    descriptionSuffix: { prefix: " — ", text: "check it out", href: "https://www.theplayaprovides.com" },
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
