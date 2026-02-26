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
  gallery: "gallery",
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
  gallery: "gallery",
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
  { id: sectionIds.gallery, href: `#${sectionIds.gallery}`, label: "Gallery" },
  { id: sectionIds.original, href: `#${sectionIds.original}`, label: "Legacy" },
  { id: sectionIds.merch, href: `#${sectionIds.merch}`, label: "Merch" },
] as const;

export const siteData = {
  site: {
    logoText: "Accidental Truth",
    navLinks,
    primaryCta: { label: "Watch / Buy", href: `#${sectionIds.merch}` },
    socials: [
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
    contactEmail: "contact@accidentaltruth.com",
  },

  nextFilm: {
    title: "Accidental Truth: NEXT: Beyond UFO Disclosure",
    hook: "Accidental Truth: NEXT: Beyond UFO Disclosure releases April 2026.",
    heroKicker: "Accidental Truth: NEXT",
    heroPrimaryCtaLabel: "Watch clip",
    heroSecondaryCtaLabel: "Buy / Support",
    /** Resolve via assets.next.heroBg in lib/assets.ts */
    heroImageKey: "next.heroBg",
    runtime: "1:43:10",
    release: "Releases April 2026.",
    platform: "MUFON TV",
    producer: "Ron James Television",
    watchUrl: MUFON_VIDEO,
    trailerUrl: "https://youtu.be/rpOdCHwNSGs",
    trailerThumbnailUrl: "https://vumbnail.com/896080484.jpg",
    trailerHeading: "Trailer",
    trailerStatus: "",
    trailerPlaceholder: "",
    trailerBridge:
      "Enjoy a sample clip from the upcoming film Accidental Truth: NEXT: Beyond UFO Disclosure.",
    trailerIntro:
      "In this clip, Ron James and his team direct questions to Congress from the sidelines from a small group of investigators, leading to a revelation no one saw coming from Lue Elizondo!",
    storyHeading: "About the film",
    storySubheading: "Accidental Truth: NEXT",
    storyQuote: "What’s NEXT?",
    storyCtaLabel: "Go to Trailer",
    galleryHeading: "Gallery",
    galleryLead: "Stills from Accidental Truth: NEXT",
    galleryAltPrefix: "Accidental Truth: NEXT still",
    infoStrip: [
      { label: "Release Date", value: "April" },
      { label: "Runtime", value: "1:43:10" },
      { label: "Director", value: "Ron James" },
      { label: "Distribution / Platform", value: "MUFON TV" },
      { label: "Awards / Badges", value: "Festival run in progress" },
    ],
    storySoFar: [
      "Matthew Modine and Thomas Jane ignite the sequel to the hit documentary Accidental Truth. While Washington spins its wheels on UFO disclosure, today’s most advanced thinkers are already looking beyond the reality of non-human intelligence to the bigger question:",
      "What’s NEXT?",
      "A film by Ron James, narrated by Matthew Modine, Accidental Truth: NEXT takes you from inside the cement walls of Washington, D.C., and pushes you far past the edge of what you thought was possible.",
      "Prepare for an adventure that will leave you questioning everything.",
    ],
    synopsis: [
      "Enjoy a sample clip from the upcoming film Accidental Truth: NEXT: Beyond UFO Disclosure.",
      "In this clip, Ron James and his team direct questions to Congress from the sidelines from a small group of investigators, leading to a revelation no one saw coming from Lue Elizondo!",
    ],
    credits: {
      writtenDirectedProducedBy: "Ron James",
      narratedBy: "Matthew Modine",
      featuring: [
        "Congressman Tim Burchett",
        "Senator Kirsten Gillibrand",
        "Congressman Eric Burlison",
        "Congressman André Carson",
        "Thomas Jane",
        "Ralph Blumenthal",
        "Ross Coulthart",
        "Dr. Michio Kaku",
        "Dr. Gary Nolan",
        "Dr. Dianne Powell",
        "Col. John Alexander",
        "Christopher Mellon",
        "Lue Elizondo",
        "Ron James",
        "Richard Dolan",
        "Nick Pope",
        "Paul Hynek",
        "Mike Bara",
        "Nancy Burson",
        "Robert Spearing",
        "Katie Paige",
        "Melinda Leslie",
        "Marena Seren",
        "Danny Sheehan",
        "Steve Bassett",
        "Jimmy Church",
        "Dave MacDonald",
        "Bennie Foggin",
        "James Hodgkins",
        "Whitley Strieber",
        "Rizwan Virk",
        "Patrick Armstrong",
        "Camilla James",
      ],
      executiveProducers: [
        "Ron James",
        "Matthew Modine",
        "Adam Rackoff",
        "Cinco Dedos Películas",
        "Sunil Paleru",
        "Pushpaka Vimana Pictures, LLC",
        "Paul Davids",
        "Hollace Davids",
        "Jennifer Stein",
      ],
      producers: ["Ron James", "Christopher O’Brien"],
    },
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
    lead: "Selected case files, witness notes, and timeline records from the ongoing disclosure story.",
    evidenceLabels: [
      "Case File 001 - Radar Event",
      "Case File 014 - Testimony Packet",
      "Case File 026 - Flight Log",
      "Case File 039 - Sensor Capture",
      "Case File 052 - Incident Timeline",
      "Case File 067 - Debrief Notes",
    ],
    ctaLabel: "Explore Archive",
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
    sectionKicker: "Legacy",
    sectionHeading: "UFO Revelations",
    watchLinksHeading: "Where to Watch",
    descriptionHeading: "Film Description",
    dvdHeading: "DVD/Blu-ray + Bonus Features",
    castHeading: "Cast",
    crewHeading: "Crew",
    awardsHeading: "Awards / Laurels",
    moreLikeThisHeading: "More Like This",
    metadata: {
      rating: "PG",
      runtime: "01:29",
      releaseYear: "Released 2023",
      imdbScore: "IMDB 6.1",
      genre: "Documentary",
    },
    watchLinks: [
      {
        label: "RENT IT ON AMAZON",
        href: "https://www.amazon.com/s?k=Accidental+Truth+UFO+Revelations",
        type: "rent" as const,
      },
      {
        label: "RENT IT ON APPLE",
        href: "https://tv.apple.com/us/search?term=Accidental%20Truth%20UFO%20Revelations",
        type: "rent" as const,
      },
      {
        label: "SEE IT FREE ON TUBI",
        href: "https://tubitv.com/search/accidental%20truth",
        type: "free" as const,
      },
      {
        label: "SEE IT FREE ON YOUTUBE MOVIES",
        href: "https://www.youtube.com/results?search_query=Accidental+Truth+UFO+Revelations",
        type: "free" as const,
      },
    ],
    imminentBookBlock: {
      quote:
        "Disclosure is getting closer, and Luis Elizondo's New Book \"Imminent\" is a major move ahead in the quest for the truth! Lue has been my friend for a long time and I am happy for him and proud of the work he has done!",
      credit: "— Ron James",
      congrats: "Congratulations to Luis Elizondo for his book \"Imminent\"!",
      ctaLine: "Here is where you can order a signed copy today!",
      ctaButton: "ORDER A SIGNED COPY OF \"IMMINENT\"",
      signedCopyUrl: MUFON_VIDEO,
    },
    descriptionParagraphs: [
      "In April 2023, \"Accidental Truth, UFO Revelations\", narrated by acclaimed actor Matthew Modine, shocked the intelligence community, the body politic, and the public. In 2021, filmmaker Ron James met with Congressman Tim Burchett and told him what years of investigations by MUFON and others have proven about the UFO cover-up. Around that time, Burchett led a storm of demands for UFO Disclosure in Washington DC and the world. It is the film that delivered the evidence and set the stage for the story that whistleblower David Grusch revealed to the world and to Congress.",
      "This is the only UFO documentary ever mentioned in a congressional hearing by name.",
      "The US Government and private industries are in possession of non-human technology. They are engaged in programs to reverse engineer the technology and more. The story is true. You will be convinced through never before seen interviews, new evidence and government insiders \"accidentally\" revealing the truth through their sometimes mistaken words.",
      "\"Accidental Truth, UFO Revelations\" has won a stunning 24 film festival awards and been called, \"The most important UFO documentary ever made.\" An incredible cast of experts and insiders come together as never before to reveal the most important story in the history of mankind.",
    ],
    dvdBluRayBlock: {
      title: "\"Accidental Truth - UFO Revelations\" Now on DVD & Blu Ray",
      paragraphs: [
        "Announcing \"Accidental Truth – UFO Revelations\" A film By Ron James. Narrated by Matthew Modine. Now available to rent and to buy on DVD and Blu-Ray!",
        "We are proud to announce that the DVD & Blu Ray versions are now available. This edition is in celebration of our 24th film festival award! We've set a record forwards for an independent UFO Film. We have included some great bonus features!",
      ],
      bonusFeatures: [
        "Full length interview with Congressman Tim Burchett",
        "Autographed limited edition hologram card",
        "Limited Edition Award Celebration packaging",
      ],
      pricingText: "Blu-ray — $29.95 · DVD — $24.95",
      productUrl: MUFON_VIDEO,
      addToCartLabel: "Add to Cart (MUFON TV)",
    },
    cast: [
      "Congressman Tim Burchett",
      "Ralph Blumenthal",
      "Lue Elizondo",
      "Dr. Michio Kaku",
      "Dr. Garry Nolan",
      "Col. John Alexander",
      "Christopher Mellon",
      "Richard Dolan",
      "Dave MacDonald",
      "Nick Pope",
      "Paul Hynek",
      "Don Schmitt",
      "Mike Bara",
      "Katie Griboski (Paige)",
      "Melinda Leslie",
      "Elizabeth April",
      "Cheryll Jones",
      "Danny Sheehan",
      "Jimmy Church",
      "Richard Lang",
      "James Fox",
      "Ron James",
    ],
    crewLabels: {
      writtenDirectedProducedEditedBy: "Written, Directed, Produced and Edited by",
      narratedBy: "Narrated By",
      executiveProducers: "Executive Producers",
      productionCompanies: "Production Companies",
      producers: "Producers",
    },
    crew: {
      writtenDirectedProducedEditedBy: "Ron James",
      narratedBy: "Matthew Modine",
      executiveProducers: [
        "Ron James",
        "Matthew Modine",
        "Adam Rackoff",
        "Paul Davids",
        "Hollace Davids",
        "Jennifer Stein",
      ],
      productionCompanies: [
        "Ron James Television",
        "MUFON Television",
        "Cinco Dedos Peliculas",
      ],
      producers: ["Christopher O'Brien", "Grant Ibrihim", "Jim Martin"],
    },
    awardsBlock: {
      heading: "Festival and contest awards and selections as of 2-21-23",
      subheading: "Accidental Truth – UFO Revelations",
      ourLaurels: "Our Laurels:",
      laurels: [
        {
          name: "Sedona Film Festival",
          result: "Official Selection",
          href: "https://prod5.agileticketing.net/WebSales/pages/info.aspx?evtinfo=271496~e8932fbb-a9ae-4437-a638-ff0cf1793527&epguid=f7b94766-699c-4aa0-9f9b-8245a9cefc05&",
        },
        {
          name: "Sonoma Film Festival",
          result: "Official Selection",
          href: "https://2023siff.eventive.org/schedule",
        },
        {
          name: "Midwest Weird Fest",
          result: "Official Selection",
          href: "http://www.midwestweirdfest.com/program#/accidental-truth-sat-mar-4-12pm/",
        },
        {
          name: "Docs Without Borders",
          result:
            "Official Selection · WINNER – Outstanding Excellence (2 Laurels)",
          href: "https://docswithoutbordersfilmfest.com/DWBFFWinter2023WINNERS.html",
        },
        {
          name: "Accolade Global Film Competition",
          result: "Official Selection · WINNER – Award of Excellence (2 Laurels)",
          href: "https://accoladecompetition.org/",
        },
        {
          name: "ParaPod Film Festival",
          result: "Official Selection",
          href: "https://parapodfestival.com/",
        },
        {
          name: "IndieFEST Film Awards",
          result: "Official Selection · WINNER – Award of Excellence (2 Laurels)",
          href: "https://theindiefest.com/",
        },
        {
          name: "Hollywood Gold Award",
          result: "Official Selection · WINNER – GOLD Award (2 Laurels)",
          href: "https://hollywoodgoldawards.com/january-2023",
        },
      ],
    },
    hashtags:
      "#AccidentalTruth #MUFON #MUFONTV #MatthewModine #LueElizondo #GarryNolan #RalphBlumenthal #MichioKaku #TimBurchett #UAP #Disclosure #ronjames #UFODocumentary",
    moreLikeThis: [
      {
        title: "About the EGG. MUFON Investigators and analysts chime in.",
        duration: "00:22",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "DRONES! Special MUFON Report",
        duration: "00:31",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "UAP Hearing Day Nov 13th",
        duration: "00:06",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "The DC hearings Part 1",
        duration: "00:02",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "The DC Hearings part 2",
        duration: "00:02",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "The Briefing",
        duration: "00:08",
        category: "Special Report",
        url: MUFON_VIDEO,
      },
      {
        title: "Accidental Truth Movie: Debunking the Air Force",
        duration: "00:01",
        category: "Films",
        url: MUFON_VIDEO,
      },
      {
        title: "2023 MUFON Symposium",
        duration: "00:02",
        category: "Symposium",
        url: MUFON_VIDEO,
      },
    ],
  },

  merch: {
    heading: "Merch",
    lead: "Official merch and support options for the production.",
    shopifyEmbedHtml: "", // Paste Shopify embed script/section when ready
    shopUrl: MUFON_VIDEO,
    donateUrl: "" as string | undefined,
    gridHeading: "Featured merch",
    storeHeading: "Store",
    storePlaceholder: "Store checkout integration is coming soon.",
    supportHeading: "Support the Production",
    supportLead: "Merch and direct support help fund production and future releases.",
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
