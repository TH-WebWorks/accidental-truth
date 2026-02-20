/**
 * Single source of truth for Accidental Truth one-page site.
 * Update content here; layout and components read from this object.
 */

const MUFON_VIDEO = "https://www.mufontelevision.com/video/accidental-truth/";
const TRAILER_VIMEO = "https://player.vimeo.com/video/896080484?dnt=1&app_id=122963";

export const siteData = {
  site: {
    logoText: "Accidental Truth",
    navLinks: [
      { href: "#watch-next", label: "Watch NEXT" },
      { href: "#trailer-next", label: "Trailer" },
      { href: "#about", label: "About" },
      { href: "#original", label: "Original Film" },
      { href: "#merch", label: "Merch" },
      { href: "#press", label: "Press" },
    ],
    primaryCta: { label: "Watch / Buy", href: "#watch-next" },
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
    infoStrip: [
      { label: "Runtime", value: "TBD" },
      { label: "Release", value: "2025" },
      { label: "Where to watch", value: "MUFON TV" },
      { label: "Producer", value: "Ron James Television" },
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

  originalFilm: {
    title: "Accidental Truth: UFO Revelations",
    shortDesc: "The film that delivered the evidence and set the stage for the story whistleblower David Grusch revealed to the world. Winner of 28 Film Festival Awards.",
    /** Resolve via assets.original.heroBg in lib/assets.ts */
    heroImageKey: "original.heroBg",
    watchUrl: MUFON_VIDEO,
    trailerUrl: TRAILER_VIMEO,
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
  },

  merch: {
    heading: "Support the Film",
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
    primaryCta: { label: "Watch / Buy", href: "#watch-next" },
  },
} as const;

export type SiteData = typeof siteData;
