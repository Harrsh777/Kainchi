import { SITE_ORIGIN } from '../seo/site';

/** Local ashram photographs used across editorial pages. */
export const SITE_IMAGES = {
  riverTemple:
    '/images/kainchi-dham-vaishno-devi-shikhara.webp',
  templeComplex: '/images/kainchi-dham-neem-karoli-temple.jpg',
  earlyMorning: '/images/kainchi-dham-early-morning.jpg',
  courtyardAerial: '/images/kainchi-dham-ashram-courtyard-aerial.jpg',
  riverValleyThumb: '/images/kainchi-dham-river-valley-ashram.jpg',
  maharajji:
    'https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I',
} as const;

export const HERO_IMAGE = SITE_IMAGES.riverTemple;
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}${SITE_IMAGES.earlyMorning}`;
