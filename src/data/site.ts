export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Reel', href: '#reel' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const profile = {
  name: 'Christian Flora',
  role: '3D Character Animator',
  location: 'Manila, PH',
  email: 'chr.flora101@gmail.com',
  resumeUrl: './resume.pdf',
  availability: 'Open to full-time roles',
}

export interface SocialLink {
  label: string
  href: string
}

export const socials: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'Vimeo', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export const disciplines = [
  'Body mechanics',
  'Character performance',
  'Weight & timing',
  'Blocking through polish',
  'Game animation',
  'Rigging support',
]

export const hero = {
  reelDuration: '00:48',
  blurb:
    '3D character animator in Manila. Two years at Puppeteer Studios doing commercial spots and game cinematics, plus a year of character modeling before that. Reel is up top — full shots below.',
  videoSrc: './media/reel/flora-reel-2025.mp4',
  poster: './media/reel/flora-reel-2025.jpg',
}

export interface AboutFact {
  term: string
  lines: string[]
}

export const about = {
  intro:
    'I am a 3D character animator from Manila. I started out in character modeling at Puppeteer Studios, moved into animation, and ended up staying two years. Most of my shots are body mechanics — runs, walks, action beats — taken from blocking through polish. Modeling first taught me what a rig needs before a character can move well.',
  closing:
    'Right now I am looking for a full-time animation role, ideally on a team that reviews dailies out loud and says it straight when a shot is not working.',
  portraitSrc: './img/whoiam-web.jpg',
  facts: [
    { term: 'Tools', lines: ['Maya · Blender', 'Game animation'] },
    { term: 'Focus', lines: ['Character performance', 'Body mechanics · rigging'] },
    { term: 'Based', lines: ['Manila, PH', 'Open to relocation'] },
    { term: 'Phone', lines: ['0977 043 3265'] },
  ] satisfies AboutFact[],
}
