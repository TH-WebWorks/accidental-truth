import { Shield, FileText, AlertTriangle, Eye, Lock, Radio, User, Calendar, Database } from 'lucide-react';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
export type Status = 'UNDER OATH' | 'ALLEGATION' | 'HISTORICAL' | 'MEDIA REPORT' | 'CLASSIFIED';
export type Agency = 'NRO' | 'USAF' | 'CIA' | 'DIA' | 'NAVY' | 'CONGRESS' | 'AARO';

export interface CaseFile {
  id: string;
  title: string;
  date: string;
  year: number;
  agency: Agency;
  status: Status;
  riskLevel: RiskLevel;
  excerpt: string;
  fullText: string;
  individuals: string[];
  evidenceType: 'Testimony' | 'Document' | 'Video' | 'Radar' | 'Photo';
  relatedIds: string[];
  redactedPercentage: number;
}

export const MOCK_DATA: CaseFile[] = [
  {
    id: "UAP-2023-CON-01",
    title: "Grusch Public Hearing Opening Statement",
    date: "2023-07-26",
    year: 2023,
    agency: "CONGRESS",
    status: "UNDER OATH",
    riskLevel: "CRITICAL",
    excerpt: "Former intelligence official David Grusch testifies under oath regarding multi-decade UAP crash retrieval and reverse engineering programs.",
    fullText: "I was informed, in the course of my official duties, of a multi-decade UAP crash retrieval and reverse engineering program to which I was denied access. I made the decision based on the data I collected, to report this information to my superiors and multiple Inspectors General, and in effect become a whistleblower. As you know, I have suffered retaliation for my decision. But I am hopeful that my actions will ultimately lead to a positive outcome of increased transparency.",
    individuals: ["David Grusch", "Ryan Graves", "David Fravor"],
    evidenceType: "Testimony",
    relatedIds: ["UAP-2021-NRO-042", "UAP-2004-NAVY-01"],
    redactedPercentage: 5
  },
  {
    id: "UAP-2021-NRO-042",
    title: "NRO Sentinel Satellite Anomaly",
    date: "2021-05-14",
    year: 2021,
    agency: "NRO",
    status: "CLASSIFIED",
    riskLevel: "HIGH",
    excerpt: "Orbital reconnaissance assets detected fast-moving trans-medium object descending from LEO to sea level in < 2 seconds.",
    fullText: "Asset [REDACTED] tracking data indicates target velocity exceeding Mach 20 with no thermal signature. Object transitioned from vacuum to atmosphere without deceleration. Trajectory analysis suggests intelligent control. Data corroborates [REDACTED] sensor readings from surface assets. Recommendation: Immediate compartmentalization of data under SAP [REDACTED].",
    individuals: ["Director [REDACTED]"],
    evidenceType: "Radar",
    relatedIds: ["UAP-2023-CON-01"],
    redactedPercentage: 45
  },
  {
    id: "UAP-2004-NAVY-01",
    title: "USS Nimitz 'Tic Tac' Encounter",
    date: "2004-11-14",
    year: 2004,
    agency: "NAVY",
    status: "HISTORICAL",
    riskLevel: "MEDIUM",
    excerpt: "Commander Fravor engages anomalous white oblong object with no visible propulsion off the coast of San Diego.",
    fullText: "Visual contact established by VFA-41 'Black Aces'. Object described as 'Tic Tac' shaped, approximately 40 feet in length. Object demonstrated superior maneuverability, mirroring F-18 movements before accelerating instantly to vanish point. AEGIS radar confirmed rapid descent from 80,000ft to sea level. Gun camera footage (FLIR1) acquired.",
    individuals: ["David Fravor", "Alex Dietrich"],
    evidenceType: "Video",
    relatedIds: ["UAP-2023-CON-01"],
    redactedPercentage: 10
  },
  {
    id: "UAP-1947-AAF-01",
    title: "Roswell Army Air Field Recovery",
    date: "1947-07-08",
    year: 1947,
    agency: "USAF",
    status: "HISTORICAL",
    riskLevel: "HIGH",
    excerpt: "Initial press release confirms recovery of 'flying disc'. Subsequent retraction identifies debris as weather balloon (Project Mogul).",
    fullText: "RAAF captures flying saucer on ranch in Roswell region. Intelligence office Major Jesse Marcel confirms recovery of metallic debris with memory-metal properties. General Ramey orders retraction. Debris transported to Wright Field (Wright-Patterson AFB). Witness testimony describes non-human biological entities found at secondary site.",
    individuals: ["Jesse Marcel", "General Ramey"],
    evidenceType: "Document",
    relatedIds: [],
    redactedPercentage: 80
  },
  {
    id: "UAP-2020-DBF-01",
    title: "The Debrief: 'Fast Movers' Leak",
    date: "2020-12-02",
    year: 2020,
    agency: "CIA",
    status: "MEDIA REPORT",
    riskLevel: "LOW",
    excerpt: "Leaked intelligence reports highlight concerns over trans-medium vehicles operating with impunity in US airspace.",
    fullText: "Unidentified Aerial Phenomena Task Force (UAPTF) reports circulated via secure channels. Focus on 'trans-medium' capabilities—objects capable of operating in space, atmosphere, and water. Concerns raised regarding flight safety and national security implications. Source indicates [REDACTED] possesses off-world vehicle not made on this earth.",
    individuals: ["Christopher Mellon", "Lue Elizondo"],
    evidenceType: "Document",
    relatedIds: ["UAP-2021-NRO-042"],
    redactedPercentage: 15
  },
  {
    id: "UAP-2022-AARO-09",
    title: "AARO Annual Report Discrepancies",
    date: "2022-10-31",
    year: 2022,
    agency: "AARO",
    status: "ALLEGATION",
    riskLevel: "MEDIUM",
    excerpt: "Whistleblowers allege AARO is not receiving Title 50 clearance to access legacy crash retrieval programs.",
    fullText: "Despite congressional mandate, the All-domain Anomaly Resolution Office (AARO) lacks necessary Title 50 authorities. Legacy programs housed within DOE and private aerospace contractors remain inaccessible. Dr. Kirkpatrick states 'no credible evidence' of ET technology, contradicting classified testimony provided to Senate Intelligence Committee.",
    individuals: ["Sean Kirkpatrick", "David Grush"],
    evidenceType: "Testimony",
    relatedIds: ["UAP-2023-CON-01"],
    redactedPercentage: 30
  },
  {
    id: "UAP-2019-NAVY-03",
    title: "USS Omaha 'Sphere' Video",
    date: "2019-07-15",
    year: 2019,
    agency: "NAVY",
    status: "MEDIA REPORT",
    riskLevel: "MEDIUM",
    excerpt: "FLIR footage shows spherical object flying alongside ship before splashing down without creating debris or wreckage.",
    fullText: "USS Omaha (LCS-12) CIC logs confirm radar contact. Optical sensors track spherical object ~6ft diameter. Object maintains steady velocity against wind. Object descends into water. Submarine search yields no wreckage. Jeremy Corbell releases footage to public.",
    individuals: ["Jeremy Corbell"],
    evidenceType: "Video",
    relatedIds: [],
    redactedPercentage: 0
  },
  {
    id: "UAP-2023-DIA-88",
    title: "Biological Effects Memo",
    date: "2023-02-10",
    year: 2023,
    agency: "DIA",
    status: "CLASSIFIED",
    riskLevel: "CRITICAL",
    excerpt: "Internal memo detailing physiological effects of close encounters: radiation burns, lost time, and Havana Syndrome symptoms.",
    fullText: "Analysis of medical reports from 1990-2023. Personnel in close proximity (<100m) to UAP report ionizing radiation symptoms. [REDACTED] cases of brain injury consistent with directed energy exposure. Recommendation: Bio-hazard protocols for all retrieval teams. The 'Hitchhiker Effect' noted in [REDACTED] personnel.",
    individuals: ["Garry Nolan", "Colm Kelleher"],
    evidenceType: "Document",
    relatedIds: [],
    redactedPercentage: 60
  }
];
