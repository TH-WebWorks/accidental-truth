export type EvidenceType = 'document' | 'photo' | 'audio' | 'radar';

export interface EvidenceCase {
  id: string;
  archiveId: string;
  title: string;
  classification: 'DECLASSIFIED' | 'REDACTED' | 'CONFIDENTIAL' | 'TOP SECRET';
  type: EvidenceType;
  date: string;
  location: string;
  thumbnail: string;
  content: {
    description?: string;
    text?: string; // For documents
    imageUrl?: string; // For photos
    audioUrl?: string; // For audio
    radarData?: any; // For radar
  };
}

export const cases: EvidenceCase[] = [
  {
    id: '1',
    archiveId: 'PROJ-BB-1947-A',
    title: '1947 ROSWELL INCIDENT',
    classification: 'DECLASSIFIED',
    type: 'document',
    date: '1947-07-08',
    location: 'Roswell, NM',
    thumbnail: 'https://picsum.photos/seed/roswell/400/300',
    content: {
      description: 'Initial recovery report from the 509th Bomb Group.',
      text: `SUBJECT: RAAF Captures Flying Saucer On Ranch in Roswell Region

On [REDACTED], the intelligence office of the 509th Bombardment group at Roswell Army Air Field announced at noon today that the field has come into possession of a flying saucer.

According to information released by the department, over authority of Maj. J. A. Marcel, intelligence officer, the disk was recovered on a ranch in the Roswell vicinity, after an unidentified rancher had notified sheriff Geo. Wilcox, here, that he had found the instrument on his premises.

Major Marcel and a detail from his department went to the ranch and recovered the disk.

After the intelligence office here had inspected the instrument it was flown to [REDACTED].

The intelligence office stated that no details of the saucer's construction or its appearance had been revealed.

[REDACTED SECTION 4-A: DEBRIS ANALYSIS]
Material properties exhibit [REDACTED] characteristics. Memory foil structure observed. No conventional propulsion detected.`
    }
  },
  {
    id: '2',
    archiveId: 'PHX-LTS-1997',
    title: 'PHOENIX LIGHTS',
    classification: 'CONFIDENTIAL',
    type: 'photo',
    date: '1997-03-13',
    location: 'Phoenix, AZ',
    thumbnail: 'https://picsum.photos/seed/phoenix/400/300',
    content: {
      description: 'Long exposure photography of stationary lights over the Estrella Mountains.',
      imageUrl: 'https://picsum.photos/seed/phoenix_lights/1200/800'
    }
  },
  {
    id: '3',
    archiveId: 'ATL-SEC-RADAR',
    title: 'RADAR ANOMALY - ATLANTIC',
    classification: 'TOP SECRET',
    type: 'radar',
    date: '2004-11-14',
    location: 'USS Nimitz',
    thumbnail: 'https://picsum.photos/seed/radar/400/300',
    content: {
      description: 'TIC-TAC object tracking data. Velocity exceeds Mach [REDACTED].'
    }
  },
  {
    id: '4',
    archiveId: 'PILOT-TRANS-09',
    title: 'PILOT TRANSMISSION',
    classification: 'REDACTED',
    type: 'audio',
    date: '1978-10-21',
    location: 'Bass Strait, Australia',
    thumbnail: 'https://picsum.photos/seed/audio/400/300',
    content: {
      description: 'Final transmission from Valentich aircraft before disappearance.',
      audioUrl: '#' // Simulated
    }
  },
  {
    id: '5',
    archiveId: 'REND-FOR-80',
    title: 'RENDLESHAM FOREST',
    classification: 'DECLASSIFIED',
    type: 'document',
    date: '1980-12-26',
    location: 'Suffolk, England',
    thumbnail: 'https://picsum.photos/seed/rendlesham/400/300',
    content: {
      description: 'Halt Tape transcript and radiation readings.',
      text: `HALT: I'm looking at it right now. It's... it's weird. It's got a [REDACTED] glow to it.

RADIOMAN: Sir, radiation counters are spiking.

HALT: Confirm. We are reading [REDACTED] microsieverts. The object is metallic, triangular in shape. Approximately 2-3 meters across the base.

It is silent. No engine noise.

[SOUND OF BRANCHES BREAKING]

HALT: It's moving. It's moving up. Back away!`
    }
  },
  {
    id: '6',
    archiveId: 'BEL-WAVE-90',
    title: 'BELGIAN WAVE',
    classification: 'CONFIDENTIAL',
    type: 'photo',
    date: '1990-03-30',
    location: 'Petit-Rechain, Belgium',
    thumbnail: 'https://picsum.photos/seed/belgium/400/300',
    content: {
      description: 'Triangular craft photograph analyzed by Royal Military Academy.',
      imageUrl: 'https://picsum.photos/seed/triangle/1200/800'
    }
  }
];
