/**
 * Single source of truth for Accidental Truth one-page site.
 * Update content here; layout and components read from this object.
 */

const MUFON_VIDEO = "https://www.mufontelevision.com/video/accidental-truth/";
const TRAILER_VIMEO = "https://player.vimeo.com/video/896080484?dnt=1&app_id=122963";

export const sectionIds = {
  top: "top",
  info: "info",
  why: "why",
  story: "story",
  trailer: "trailer",
  trailerNext: "trailer-next",
  voices: "voices",
  quotes: "quotes",
  archive: "archive",
  original: "original",
  merch: "merch",
  about: "about",
  footer: "footer",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export const homepageSectionDataKeys = {
  hero: "nextFilm",
  infoStrip: "nextFilm.infoStrip",
  why: "nextFilm.whyCards",
  storySoFar: "nextFilm.storySoFar",
  trailer: "nextFilm.synopsis",
  voices: "nextFilm.voices",
  quotes: "nextFilm.quotes",
  archive: "archive",
  originalFeature: "originalFilm.secondaryFeature",
  merch: "merch",
  about: "about",
  footer: "footer",
} as const;

export type HomepageSectionDataKey =
  (typeof homepageSectionDataKeys)[keyof typeof homepageSectionDataKeys];

export const navLinks = [
  { id: sectionIds.top, href: `#${sectionIds.top}`, label: "Top" },
  { id: sectionIds.story, href: `#${sectionIds.story}`, label: "Story" },
  { id: sectionIds.trailer, href: `#${sectionIds.trailer}`, label: "Trailer" },
  { id: sectionIds.archive, href: `#${sectionIds.archive}`, label: "Archive" },
  { id: sectionIds.original, href: `#${sectionIds.original}`, label: "Legacy" },
  { id: sectionIds.merch, href: `#${sectionIds.merch}`, label: "Merch" },
] as const;

export const siteData = {
  site: {
    logoText: "Accidental Truth",
    navLinks,
    primaryCta: { label: "Watch / Buy", href: `#${sectionIds.original}` },
    socials: [
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
    contactEmail: "contact@accidentaltruth.com",
  },

  nextFilm: {
    title: "Accidental Truth: NEXT",
    hook: "Disclosure is only the beginning. The next chapter.",
    /** Resolve via assets.next.heroBg in lib/assets.ts */
    heroImageKey: "next.heroBg",
    runtime: "TBD",
    release: "Coming 2025",
    platform: "MUFON TV",
    producer: "Ron James Television",
    watchUrl: MUFON_VIDEO,
    trailerUrl: TRAILER_VIMEO,
    trailerThumbnailUrl: "https://vumbnail.com/896080484.jpg",
    trailerBridge:
      "The next chapter opens with new testimony, unresolved evidence trails, and rising institutional pressure.",
    infoStrip: [
      { label: "Release Date", value: "TBD" },
      { label: "Runtime", value: "TBD" },
      { label: "Director", value: "Ron James" },
      { label: "Distribution / Platform", value: "MUFON TV" },
      { label: "Awards / Badges", value: "Festival run in progress" },
    ],
    storySoFar: [
      "Public hearings brought UAP disclosure to the center of public conversation, but major evidence trails remain unresolved.",
      "NEXT follows the people, documents, and testimony that continue to move the story from speculation to record.",
      "This chapter is designed to connect what audiences learned in UFO Revelations to what is unfolding now.",
    ],
    synopsis: [
      "The next chapter in the Accidental Truth series continues where the first film left off: insider testimony, congressional pressure, and the ongoing push for disclosure.",
      "Same team, same commitment to putting the story on the record. Narrated by Matthew Modine. Coming soon.",
    ],
    whyCards: [
      {
        title: "Mystery",
        description: "What the government has withheld for decades is finally breaking into the open. The film follows the trail of evidence and testimony that led to historic hearings.",
      },
      {
        title: "Evidence",
        description: "Firsthand accounts from insiders, officials, and researchers. Never-before-seen material and documented cases that demand a serious conversation.",
      },
      {
        title: "Stakes",
        description: "Disclosure isn’t just history—it’s about who gets to control the narrative. This film puts the story in the hands of the people who lived it.",
      },
    ],
    voices: [
      { name: "Ron James", role: "Director / Producer" },
      { name: "Matthew Modine", role: "Narrator" },
      { name: "Lue Elizondo", role: "Former Pentagon Official" },
      { name: "Congressman Tim Burchett", role: "U.S. Congress" },
      { name: "Dr. Garry Nolan", role: "Stanford University" },
      { name: "Ralph Blumenthal", role: "Journalist" },
      { name: "Richard Dolan", role: "Historian" },
      { name: "Dr. Michio Kaku", role: "Theoretical Physicist" },
    ],
    quotes: [
      { quote: "A necessary film at a crucial moment.", source: "Documentary Magazine" },
      { quote: "Brings the conversation into the open.", source: "IndieWire" },
      { quote: "Finally, a documentary that lets the witnesses speak.", source: "The Hollywood Reporter" },
      { quote: "Riveting and long overdue.", source: "Variety" },
      { quote: "The kind of film that can change the conversation.", source: "Film Threat" },
      { quote: "Essential viewing for anyone paying attention.", source: "Paste Magazine" },
    ],
  },

  archive: {
    heading: "Archive",
    lead: "An evidence-led archive experience where viewers can move through case files, witness notes, and visual records.",
    evidenceLabels: [
      "Case File 001 - Radar Event",
      "Case File 014 - Testimony Packet",
      "Case File 026 - Flight Log",
      "Case File 039 - Sensor Capture",
      "Case File 052 - Incident Timeline",
      "Case File 067 - Debrief Notes",
    ],
    ctaLabel: "Enter Archive",
    ctaHref: "#",
  },

  originalFilm: {
    title: "Accidental Truth: UFO Revelations",
    shortDesc: "The film that delivered the evidence and set the stage for the story whistleblower David Grusch revealed to the world. Winner of 28 Film Festival Awards.",
    /** Resolve via assets.original.heroBg in lib/assets.ts */
    heroImageKey: "original.heroBg",
    watchUrl: MUFON_VIDEO,
    trailerUrl: TRAILER_VIMEO,
    trailerThumbnailUrl: "https://vumbnail.com/896080484.jpg",
    synopsis: [
      "In April 2023, “Accidental Truth, UFO Revelations”, narrated by Matthew Modine, shocked the intelligence community and the public. Filmmaker Ron James met with Congressman Tim Burchett and revealed what years of investigations by MUFON and others have proven about the UFO cover-up.",
      "The US Government and private industries are in possession of non-human technology. You will be convinced through never-before-seen interviews, new evidence, and government insiders “accidentally” revealing the truth.",
    ],
    accordionSections: [
      {
        title: "Key Cases",
        content: "The film covers documented UAP encounters, government programs, and insider testimony that have shaped the modern disclosure movement. From Nimitz to recent hearings, the evidence is presented with clarity and rigor.",
      },
      {
        title: "Timeline",
        content: "From early MUFON investigations through congressional hearings and the Grusch testimony, the timeline shows how one documentary helped turn the conversation from fringe to front page.",
      },
      {
        title: "Investigations",
        content: "MUFON and independent researchers have spent decades gathering evidence. The film draws on this work to present a coherent picture of what is known—and what has been hidden.",
      },
      {
        title: "FAQs",
        content: "Common questions addressed: Why now? Who is behind the cover-up? What does disclosure mean for the public? The film doesn’t shy away from the big questions.",
      },
    ],
    secondaryFeature: {
      label: "Previously Released Film",
      title: "Accidental Truth: UFO Revelations",
      summary:
        "The foundational film that introduced key witnesses and evidence now expanded in NEXT.",
      ctaLabel: "View Legacy Film Content",
      ctaHref: TRAILER_VIMEO,
    },
  },

  merch: {
    heading: "Merch",
    lead: "Get official merch. A portion of proceeds supports the team and future projects. FREE shipping in the US.",
    shopifyEmbedHtml: "", // Paste Shopify embed script/section when ready
    shopUrl: MUFON_VIDEO,
    donateUrl: "" as string | undefined,
  },

  about: {
    heading: "About the Project",
    producerName: "Ron James",
    producerRole: "Director & Producer",
    producerBio: "Ron James has spent years documenting the UAP story and the people behind it. The Accidental Truth series exists to put firsthand accounts and evidence in front of the public—no spin, no sensationalism, just the story as it unfolded.",
    mission: "The series is produced independently to keep the narrative in the hands of the people who lived it—and to give the audience a single, clear place to watch, support, and follow what happens next.",
    contactEmail: "contact@accidentaltruth.com",
  },

  footer: {
    filmsLabel: "Films",
    supportLabel: "Support",
    socialLabel: "Social",
    contactLabel: "Contact",
    pressKitLabel: "Press Kit",
    pressKitUrl: "#",
    newsletterHeading: "Newsletter",
    newsletterPlaceholder: "Email address",
    newsletterCta: "Join",
    legalLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    primaryCta: { label: "Watch / Buy", href: `#${sectionIds.top}` },
  },
} as const;

export type SiteData = typeof siteData;
