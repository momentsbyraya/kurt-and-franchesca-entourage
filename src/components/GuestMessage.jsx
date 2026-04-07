import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { couple } from '../data'
import './GuestMessage.css'

gsap.registerPlugin(ScrollTrigger)

/** Muted moss / forest — body copy */
const mossPrimary = '#4a5a48'
const mossSecondary = '#5d6e5a'

/** Vintage invitation graphic — optional watermark (encoded path) */
const vintageInvitationSrc = `/assets/images/graphics/${encodeURIComponent(
  'Copy of Yellow and Green Vintage Wedding Invitation.png'
)}`

const monogramLogoSrc = '/assets/images/graphics/logo.png'

function VintageDivider({ idSuffix = 'a' }) {
  const gid = `guest-msg-gold-${idSuffix}`
  return (
    <svg
      className="guest-message-divider-svg"
      viewBox="0 0 520 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a6220" />
          <stop offset="28%" stopColor="#c9a84a" />
          <stop offset="52%" stopColor="#f2e6b8" />
          <stop offset="72%" stopColor="#c9a84a" />
          <stop offset="100%" stopColor="#7a6220" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gid})`}
        strokeWidth="0.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M4 22c18-8 32-14 52-12 8 1 14 5 20 10-6-2-12-3-18-1-14 3-24 12-34 20" />
        <path d="M24 26c10-12 28-18 44-16" />
        <path d="M36 18c6-4 14-6 22-4" />
        <path d="M72 20H248" />
        <path d="M272 20H508" />
        <path d="M484 22c-18-8-32-14-52-12-8 1-14 5-20 10 6-2 12-3 18-1 14 3 24 12 34 20" />
        <path d="M464 26c-10-12-28-18-44-16" />
        <path d="M452 18c-6-4-14-6-22-4" />
      </g>
      <path
        d="M260 12l5.5 6.5h7l-5.5 6.5 2 8-7-3.5-7 3.5 2-8-5.5-6.5h7z"
        fill={`url(#${gid})`}
        stroke={`url(#${gid})`}
        strokeWidth="0.35"
      />
    </svg>
  )
}

function CornerFloralsTopRight() {
  return (
    <div
      className="pointer-events-none absolute right-0 top-0 z-[2] w-[42%] max-w-[11rem] pt-2 pr-2 sm:max-w-[13rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 200 180"
        className="h-auto w-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="158" cy="38" rx="28" ry="18" fill="#c4a5a8" opacity="0.55" transform="rotate(-18 158 38)" />
        <ellipse cx="172" cy="52" rx="14" ry="22" fill="#dcc8c4" opacity="0.5" transform="rotate(12 172 52)" />
        <path
          d="M120 8c28 12 48 36 52 68-16-24-40-40-68-48 20 4 36 16 44 34-18-14-38-22-60-24 22 8 38 24 46 44"
          fill="none"
          stroke="#6b7f62"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M132 24c12 8 20 20 22 34M148 18c10 14 14 30 10 46M165 28c-4 18-2 36 8 52"
          fill="none"
          stroke="#8a9c7e"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.75"
        />
        <ellipse cx="175" cy="42" rx="22" ry="14" fill="#9aae8f" opacity="0.35" transform="rotate(-35 175 42)" />
        <ellipse cx="188" cy="72" rx="16" ry="10" fill="#7d9072" opacity="0.4" transform="rotate(25 188 72)" />
      </svg>
    </div>
  )
}

function CornerFloralsBottomLeft() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 z-[2] w-[36%] max-w-[9rem] pb-2 pl-2 sm:max-w-[10.5rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 160 140"
        className="h-auto w-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 120c22-8 40-24 48-46-14 12-32 18-52 18 18-6 34-18 42-36-12 10-28 16-44 16"
          fill="none"
          stroke="#6b7f62"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.82"
        />
        <path
          d="M18 108c14-6 26-16 32-30M28 118c10-8 18-18 22-30"
          fill="none"
          stroke="#8a9c7e"
          strokeWidth="0.85"
          strokeLinecap="round"
          opacity="0.7"
        />
        <ellipse cx="42" cy="98" rx="18" ry="11" fill="#9aae8f" opacity="0.32" transform="rotate(22 42 98)" />
      </svg>
    </div>
  )
}

function GuestMessage() {
  const rootRef = useRef(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined

    // Opacity-only: avoid transform on this ancestor — it makes background-clip
    // gradient text + filters look like a “moving shine” during the tween.
    const tween = gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section
      ref={rootRef}
      className="guest-message-section-full relative w-full"
      aria-labelledby="guest-message-heading"
    >
      <img
        src={vintageInvitationSrc}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.03]"
        loading="lazy"
        decoding="async"
      />
      <CornerFloralsTopRight />
      <CornerFloralsBottomLeft />
      <div className="relative z-10 mx-auto w-full px-4 py-14 sm:py-16 md:py-20">
        <div className="site-content-width mx-auto">
          <article className="relative mx-auto max-w-2xl">
            <h2 id="guest-message-heading" className="sr-only">
              A message for our guests
            </h2>
            <div className="guest-message-inner mb-6 flex justify-center sm:mb-8">
              <img
                src={monogramLogoSrc}
                alt={`${couple.together} monogram`}
                className="h-[4.75rem] w-auto max-w-[min(16rem,70vw)] object-contain sm:h-28 md:h-32"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="guest-message-inner flex flex-col gap-4 text-center font-albert font-light sm:gap-5 md:gap-6"
              style={{ lineHeight: 1.8 }}
            >
              <p
                className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem]"
                style={{ color: mossSecondary }}
              >
                Because you have shared in our lives
                <br />
                through our friendship and love, we,
              </p>
              <p
                className="guest-message-names mx-auto my-8 max-w-[20ch] text-[2.35rem] sm:my-10 sm:text-[2.75rem] md:my-12 md:text-[3.05rem] lg:text-[3.2rem]"
                style={{ letterSpacing: '0.08em' }}
              >
                {couple.together}
              </p>
              <p
                className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem]"
                style={{ color: mossPrimary }}
              >
                invite you to join us as we celebrate our wedding day.
              </p>
              <p
                className="text-[0.9375rem] sm:text-[1rem] md:text-[1.0625rem]"
                style={{ color: mossPrimary }}
              >
                Your presence would mean the world to us as we
                <br />
                say &ldquo;I do.&rdquo;
              </p>
            </div>
            <div className="guest-message-inner mt-7 sm:mt-9">
              <VintageDivider idSuffix="bot" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default GuestMessage
