import React from 'react'
import ScrollReveal from './ScrollReveal'

/** Rustic brown / coffee theme */
const COFFEE_DARK = '#4a3728'

const EntourageSection = ({
  image = '/assets/images/entourage/sponsor.png',
  leadIn = 'Will you be our',
  role = 'Principal Sponsor?',
  roleSizeClass = 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
  onRespond,
}) => {
  return (
    <section
      id="entourage"
      data-section="entourage"
      className="relative w-full overflow-hidden flex flex-col items-center"
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32">
        <h3
          className="font-foglihten leading-tight max-w-3xl mx-auto"
          style={{ color: COFFEE_DARK }}
        >
          <ScrollReveal as="span" className="block">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl uppercase opacity-90"
              style={{ fontFamily: "'Goudy Bookletter 1911', serif" }}
            >
              {leadIn}
            </span>
          </ScrollReveal>
          <ScrollReveal as="span" className="block" opacityOnly delay={0.12}>
            <span
              className={`mt-6 mb-4 sm:mt-7 sm:mb-5 md:mt-8 md:mb-6 block font-bold uppercase tracking-wide ${roleSizeClass}`}
              style={{
                fontFamily: "'Goudy Bookletter 1911', serif",
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
              {role}
            </span>
          </ScrollReveal>
        </h3>
      </div>

      {image && (
        <div className="relative z-0 w-full">
          {/* Entourage image now takes up space in the flow, full width */}
          <img
            src={image}
            alt="Our entourage"
            className="block w-full h-auto object-contain object-bottom"
            loading="lazy"
            decoding="async"
            style={{
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, #000 14%, #000 55%, transparent 95%)',
              maskImage:
                'linear-gradient(to top, transparent 0%, #000 14%, #000 55%, transparent 95%)',
            }}
          />
        </div>
      )}

      {/* Brown wash smooth edge pinned to the bottom-most part of the section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-40"
        style={{
          background:
            'linear-gradient(to top, rgba(138,106,79,0.62) 0%, rgba(138,106,79,0.36) 38%, transparent 100%)',
        }}
      />

      {onRespond && (
        <ScrollReveal
          className="relative z-20 flex justify-center w-full pb-8 sm:pb-10 -mt-4 sm:-mt-6"
          delay={0.2}
        >
          <button
            type="button"
            onClick={onRespond}
            className="inline-flex items-center justify-center rounded-none border border-gold bg-[#4a3728]/50 px-10 py-3 font-albert text-base font-medium uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#4a3728]/60"
          >
            Respond
          </button>
        </ScrollReveal>
      )}
    </section>
  )
}

export default EntourageSection
