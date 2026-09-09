export interface Job {
  period: string
  commitment: string
  company: string
  /** Optional company mark. Use a white / transparent PNG or SVG — the section sits on a dark background. */
  logo?: string
  title: string
  summary: string
  skills: string[]
  address: string[]
}

export const jobs: Job[] = [
  {
    period: '2024 — 2025',
    commitment: 'Full-time',
    company: 'Puppeteer Studios',
    logo: './img/puppeteer-studios.png',
    title: '3D animator',
    summary:
      'Character animation for cinematic trailers, taking shots from blocking to final polish and revising them shot by shot in dailies with the directors. Animated scenes for the cinematic trailer of Kwek Kwek, an original studio IP, and joined the game animation team for in-game work — idle cycles and loops built to read cleanly on repeat.',
    skills: [
      'Maya',
      'Blender',
      'Body mechanics',
      'Realistic animation',
      'Character performance',
    ],
    address: ['OMM Citra Building', 'San Miguel Avenue', 'Manila, Philippines'],
  },
  {
    period: '2024',
    commitment: 'Freelance',
    company: 'Freelance',
    title: 'Character modeling',
    summary:
      'Modeled 3D characters for virtual reality projects — sculpt, retopology and look-dev in Maya, texture sets painted in Substance 3D Painter, handed over production-ready.',
    skills: ['Character modeling', 'Maya', 'Substance 3D Painter'],
    address: ['Remote · Camarines Sur', 'Client based in Cebu'],
  },
  {
    period: '2023 — 2024',
    commitment: 'OJT · internship',
    company: 'Puppeteer Studios',
    logo: './img/puppeteer-studios.png',
    title: 'Character modeling intern',
    summary:
      'Built and textured character assets with the modeling team: sculpt, retopology, UVs, look-dev, and turntable renders for review. This is where I learned how characters get built before they get animated.',
    skills: [
      'Character modeling',
      'Maya',
      'Substance 3D Painter',
      'Marmoset',
    ],
    address: ['OMM Citra Building', 'San Miguel Avenue', 'Manila, Philippines'],
  },
]
