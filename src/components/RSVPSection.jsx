import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { couple } from '../data'

gsap.registerPlugin(ScrollTrigger)

const COFFEE_DARK = '#4a3728'
const BANNER_SRC = '/assets/images/graphics/for flower-banner (5).png'

const RSVPSection = ({ onOpenRSVP }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return undefined

    const tween = gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  const deadline = couple.rsvpDeadline
    ? `${couple.rsvpDeadline.month} ${couple.rsvpDeadline.day}, ${couple.rsvpDeadline.year}`
    : null

  return (
    <section
      id="rsvp"
      data-section="rsvp"
      className="relative w-full overflow-hidden px-6 py-28 sm:py-32 md:py-40"
    >
      {/* Flower Banner - Top (full viewport width) */}
      <div
        className="absolute top-0 flex items-center justify-center"
        style={{ left: 0, width: '100vw' }}
      >
        <img
          src={BANNER_SRC}
          alt="Flower banner"
          style={{ width: '100vw', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 mx-auto flex max-w-2xl flex-col items-center justify-center py-12 text-center"
      >
        <p className="font-script text-2xl opacity-90 sm:text-3xl md:text-4xl" style={{ color: COFFEE_DARK }}>
          It would be our honor
        </p>
        <h2
          className="mt-3 font-foglihten text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl"
          style={{
            backgroundImage:
              'linear-gradient(118deg, #6b5420 0%, #9a7829 16%, #d4bc6a 34%, #f0e4b8 48%, #c9a43a 62%, #8a6e28 88%, #5c4818 100%)',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          Will You Say Yes?
        </h2>

        {/* Small ornamental divider */}
        <div className="mt-5 flex items-center justify-center gap-3" aria-hidden>
          <span className="h-px w-10 sm:w-14" style={{ backgroundColor: 'rgba(122, 95, 60, 0.45)' }} />
          <span className="text-lg" style={{ color: '#b08d3e' }}>&#10047;</span>
          <span className="h-px w-10 sm:w-14" style={{ backgroundColor: 'rgba(122, 95, 60, 0.45)' }} />
        </div>

        <p
          className="mt-6 max-w-xl font-albert text-[0.9375rem] font-light leading-relaxed sm:text-base md:text-[1.0625rem]"
          style={{ color: COFFEE_DARK }}
        >
          Standing beside us as part of our entourage would mean the world to
          us. Kindly let us know if you&rsquo;ll accept this special role on our
          big day.
        </p>

        {deadline && (
          <p
            className="mt-3 font-albert text-sm font-medium uppercase tracking-wide sm:text-base"
            style={{ color: '#6f4e37' }}
          >
            Kindly confirm by {deadline}
          </p>
        )}

        <button
          type="button"
          onClick={onOpenRSVP}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-gold/50 bg-white/80 px-10 py-3 font-albert text-base font-medium uppercase tracking-wide text-forest shadow-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold/20"
        >
          Confirm Your Yes
        </button>
      </div>

      {/* Flower Banner - Bottom (flipped vertically) */}
      <div
        className="absolute bottom-0 flex items-center justify-center"
        style={{ left: 0, width: '100vw' }}
      >
        <img
          src={BANNER_SRC}
          alt="Flower banner"
          style={{
            width: '100vw',
            height: 'auto',
            display: 'block',
            transform: 'scaleY(-1)',
            transformOrigin: 'center',
          }}
        />
      </div>
    </section>
  )
}

export default RSVPSection
