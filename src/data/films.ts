export interface Clip {
  id: string
  label: string
  src: string
  poster: string
  duration: string
}

export interface CharacterWork {
  id: string
  name: string
  tagline: string
  clips: Clip[]
}

export const characterWorks: CharacterWork[] = [
  {
    id: 'beta',
    name: 'BETA',
    tagline: 'Locomotion · body mechanics',
    clips: [
      {
        id: 'beta-run-i',
        label: 'Run — take I',
        src: './media/beta/beta-run-i.mp4',
        poster: './media/beta/beta-run-i.jpg',
        duration: '00:06',
      },
      {
        id: 'beta-run-ii',
        label: 'Run — take II',
        src: './media/beta/beta-run-ii.mp4',
        poster: './media/beta/beta-run-ii.jpg',
        duration: '00:06',
      },
      {
        id: 'beta-walk-i',
        label: 'Walk — take I',
        src: './media/beta/beta-walk-i.mp4',
        poster: './media/beta/beta-walk-i.jpg',
        duration: '00:06',
      },
      {
        id: 'beta-walk-ii',
        label: 'Walk — take II',
        src: './media/beta/beta-walk-ii.mp4',
        poster: './media/beta/beta-walk-ii.jpg',
        duration: '00:06',
      },
    ],
  },
  {
    id: 'ninja',
    name: 'NINJA',
    tagline: 'Action · two-camera study',
    clips: [
      {
        id: 'ninja-i-cam-a',
        label: 'Take I · camera A',
        src: './media/ninja/ninja-i.mp4',
        poster: './media/ninja/ninja-i.jpg',
        duration: '00:05',
      },
      {
        id: 'ninja-i-cam-b',
        label: 'Take I · camera B',
        src: './media/ninja/ninja-i-cam2.mp4',
        poster: './media/ninja/ninja-i-cam2.jpg',
        duration: '00:05',
      },
    ],
  },
  {
    id: 'penny',
    name: 'PENNY',
    tagline: 'Character acting takes',
    clips: [
      {
        id: 'penny-ii',
        label: 'Take II',
        src: './media/penny/penny-ii.mp4',
        poster: './media/penny/penny-ii.jpg',
        duration: '00:03',
      },
      {
        id: 'penny-iii',
        label: 'Take III',
        src: './media/penny/penny-iii.mp4',
        poster: './media/penny/penny-iii.jpg',
        duration: '00:03',
      },
      {
        id: 'penny-iv',
        label: 'Take IV',
        src: './media/penny/penny-iv.mp4',
        poster: './media/penny/penny-iv.jpg',
        duration: '00:03',
      },
    ],
  },
  {
    id: 'pilot',
    name: 'PILOT',
    tagline: 'Single-shot study',
    clips: [
      {
        id: 'pilot-i',
        label: 'Take I',
        src: './media/pilot/pilot-i.mp4',
        poster: './media/pilot/pilot-i.jpg',
        duration: '00:05',
      },
    ],
  },
  {
    id: 'reimu',
    name: 'REIMU',
    tagline: 'Single-shot study',
    clips: [
      {
        id: 'reimu-i',
        label: 'Take I',
        src: './media/reimu/reimu-i.mp4',
        poster: './media/reimu/reimu-i.jpg',
        duration: '00:06',
      },
    ],
  },
]

export const totalClipCount = characterWorks.reduce(
  (sum, work) => sum + work.clips.length,
  0,
)
