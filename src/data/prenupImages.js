/** Prenup filenames live in /assets/images/prenup/ (spaces & parens encoded for URLs). */
const prenup = (filename) =>
  `/assets/images/prenup/${encodeURIComponent(filename)}`

const hero = prenup('1st picture.jpeg')
const fullBleedAfterVenue = prenup('2nd picture.jpeg')
const fullBleedAfterSchedule = prenup('3rd picture.jpeg')
const fullBleedAfterLoveStory = prenup('4th picture.jpeg')
const fullBleedAfterDressCode = prenup('5th picture.jpeg')

/** Modal order: Desk Mates → Study Buddies → Best Friends → Furparents → Partners for Life */
const loveStory = [
  prenup('Deskmates picture (lovestory section).jpeg'),
  prenup('Study Buddies picture (love story section).jpeg'),
  prenup('Bestfriends pictures (love story section).jpeg'),
  prenup('Furparents pictures (love story section).png'),
  prenup('Partners for life picture (love story section).jpeg'),
]

/** Every prenup asset — order: main set → love story → extra gallery shots → save-the-date */
const gallery = [
  prenup('1st picture.jpeg'),
  prenup('2nd picture.jpeg'),
  prenup('3rd picture.jpeg'),
  prenup('4th picture.jpeg'),
  prenup('5th picture.jpeg'),
  prenup('Deskmates picture (lovestory section).jpeg'),
  prenup('Study Buddies picture (love story section).jpeg'),
  prenup('Bestfriends pictures (love story section).jpeg'),
  prenup('Furparents pictures (love story section).png'),
  prenup('Partners for life picture (love story section).jpeg'),
  prenup('include in gallery(1).jpeg'),
  prenup('include in gallery.jpeg'),
  prenup('iclude in gallery.jpeg'),
  prenup('include in gallery3.jpeg'),
  prenup('Save the date or Countdown picture.jpeg'),
]

/**
 * Same order as `gallery`: object-position for grid thumbs (object-cover).
 * Tuned from actual frames: top-anchored when heads are high; lower % when subjects sit in bottom half.
 */
const galleryThumbObjectPosition = [
  'center top',
  'center 68%',
  'center 18%',
  'center 34%',
  'center 14%',
  'center 24%',
  'center 24%',
  '78% 22%',
  'center 44%',
  '48% 12%',
  '38% 48%',
  'center 22%',
  'center top',
  'center top',
  'center 54%',
]

const countdownBackground = prenup('Save the date or Countdown picture.jpeg')

/** Pool for other features (e.g. Moments grid, preload). Order preserved, duplicates removed. */
const pool = [
  ...new Set([
    hero,
    fullBleedAfterVenue,
    fullBleedAfterSchedule,
    fullBleedAfterLoveStory,
    fullBleedAfterDressCode,
    ...loveStory,
    ...gallery,
    countdownBackground,
  ]),
]

export const prenupImages = {
  pool,
  hero,
  fullBleedAfterVenue,
  fullBleedAfterSchedule,
  fullBleedAfterLoveStory,
  fullBleedAfterDressCode,
  loveStory,
  gallery,
  galleryThumbObjectPosition,
  countdownBackground,
  modalBackground: hero,
  ogImage: hero,
  favicon: hero,
  rsvpBackground: fullBleedAfterDressCode,
  fullBleedMain: fullBleedAfterVenue,
  splitA: {
    left: fullBleedAfterVenue,
    right: fullBleedAfterSchedule,
  },
  splitB: {
    left: fullBleedAfterLoveStory,
    right: fullBleedAfterDressCode,
  },
  splitC: {
    left: loveStory[0],
    right: loveStory[1],
  },
  momentsHero: fullBleedAfterSchedule,
  momentsGrid: [...pool],
}
