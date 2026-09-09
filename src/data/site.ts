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
  role: '3D Animator',
  location: 'Camarines Sur, PH',
  email: 'chr.flora101@gmail.com',
  resumeUrl: './Christian_Flora_Resume.pdf',
  /** Filename the browser saves the résumé as, rather than the generic resume.pdf. */
  resumeFileName: 'Christian_Flora_Resume.pdf',
  resumeSize: '80 KB',
  availability: 'Open to full-time roles · willing to relocate',
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
  'Realistic animation',
]

export const hero = {
  reelDuration: '01:01',
  blurb:
    '3D character animator based in Camarines Sur, Philippines. Two years at Puppeteer Studios animating cinematic trailers and in-game character work, plus character modeling before that. Reel is up top — full shots below.',
  videoSrc: './media/reel/flora-reel-2026.mp4',
  poster: './media/reel/flora-reel-2026.jpg',
}

export interface AboutFact {
  term: string
  lines: string[]
}

export const about = {
  intro:
    'I am a 3D character animator based in Camarines Sur. I started out in character modeling at Puppeteer Studios, moved into animation, and ended up staying two years. Most of my shots are body mechanics — runs, walks, action beats — taken from blocking through polish. Modeling first taught me what a rig needs before a character can move well.',
  closing:
    'Right now I am looking for a full-time animation role, ideally on a team that reviews dailies out loud and says it straight when a shot is not working.',
  portraitSrc: './img/whoiam-web.jpg',
  facts: [
    { term: 'Tools', lines: ['Maya · Blender', 'Substance · Marmoset'] },
    { term: 'Focus', lines: ['Character performance', 'Body mechanics · weight'] },
    { term: 'Based', lines: ['Camarines Sur, PH', 'Willing to relocate'] },
    { term: 'Phone', lines: ['0977 043 3265'] },
  ] satisfies AboutFact[],
}
