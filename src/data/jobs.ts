export interface Job {
  period: string
  commitment: string
  company: string
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
    title: '3D character animator',
    summary:
      'Character animation for commercial spots and game cinematics. Handled shots from blocking to final polish, helped the rigging team when a shot needed it, and mentored two junior animators on body mechanics.',
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
      'Took on character modeling work between studio contracts — sculpt, retopology and look-dev in Maya, texture sets painted in Substance 3D Painter, delivered production-ready.',
    skills: ['Character modeling', 'Maya', 'Substance 3D Painter'],
    address: ['Remote', 'Manila, Philippines'],
  },
  {
    period: '2023 — 2024',
    commitment: 'OJT · internship',
    company: 'Puppeteer Studios',
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
