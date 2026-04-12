/**
 * Prenup photos in /assets/images/prenup/
 * Sorted list — each file is assigned to a page role (hero, bleeds, love story, etc.).
 * The home Gallery shows every file in this list; add new filenames here when you add photos.
 */
const PRENUP_FILES = [
  'DSCF1458.jpg',
  'VAN_4681.jpg',
  'VAN_4833.jpg',
  'VAN_5001.jpg',
  'VAN_5259.jpg',
  'VAN_5328.jpg',
  'VAN_5541.jpg',
  'VAN_6024.jpg',
  'VAN_6061.jpg',
  'VAN_6078.jpg',
  'VAN_6219.jpg',
  'VAN_6286.jpg',
  'VAN_6318.jpg',
  'VAN_6583.jpg',
  'VAN_6645.jpg',
].sort()

const prenup = (filename) =>
  `/assets/images/prenup/${encodeURIComponent(filename)}`

const F = PRENUP_FILES

// 0–14: each index used once
const hero = prenup('VAN_6078.jpg')
const fullBleedAfterVenue = prenup(F[2])
const fullBleedAfterSchedule = prenup(F[3])
const fullBleedAfterLoveStory = prenup(F[4])
const fullBleedAfterDressCode = prenup(F[5])
/** Favicon, OG / Twitter card — same file as full-bleed after dress code */
const shareThumbnail = prenup('VAN_5328.jpg')
const countdownBackground = prenup(F[6])
/** Full-bleed between gift (RSVP block) and love story — same file as countdown bg */
const betweenGiftAndLoveStory = countdownBackground
/** Save The Date / countdown section — VAN_4681 */
const saveTheDateBackground = prenup('VAN_4681.jpg')
const modalBackground = prenup(F[7])
const loveStory = F.slice(8, 14).map(prenup) // 6 images → love-story polaroids / lightbox
/** All prenup images — home Gallery grid + lightbox (order can differ from `F` for display) */
const gallery = (() => {
  const urls = [...F.map(prenup)]
  const swapInGallery = (fileA, fileB) => {
    const ua = prenup(fileA)
    const ub = prenup(fileB)
    const ia = urls.indexOf(ua)
    const ib = urls.indexOf(ub)
    if (ia !== -1 && ib !== -1) {
      ;[urls[ia], urls[ib]] = [urls[ib], urls[ia]]
    }
  }
  swapInGallery('VAN_6286.jpg', 'VAN_6583.jpg')
  swapInGallery('VAN_6061.jpg', 'VAN_6078.jpg')
  return urls
})()

/** Preload: priority URLs first, then full set once (deduped) */
const pool = [
  ...new Set([
    hero,
    fullBleedAfterVenue,
    fullBleedAfterSchedule,
    fullBleedAfterLoveStory,
    fullBleedAfterDressCode,
    countdownBackground,
    saveTheDateBackground,
    modalBackground,
    ...loveStory,
    ...gallery,
  ]),
]

/** Moments page: banner only (grid empty so we don’t repeat home / love photos) */
const momentsBanner = gallery[0]
const momentsGrid = []

export const prenupImages = {
  pool,
  hero,
  fullBleedAfterVenue,
  fullBleedAfterSchedule,
  betweenGiftAndLoveStory,
  fullBleedAfterLoveStory,
  fullBleedAfterDressCode,
  loveStory,
  gallery,
  countdownBackground,
  saveTheDateBackground,
  modalBackground,
  ogImage: shareThumbnail,
  favicon: shareThumbnail,
  /** Legacy aliases — same files as above, no extra disk paths */
  rsvpBackground: modalBackground,
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
  momentsBanner,
  momentsGrid,
  /** @deprecated use momentsBanner — kept for any stale imports */
  momentsHero: momentsBanner,
}
