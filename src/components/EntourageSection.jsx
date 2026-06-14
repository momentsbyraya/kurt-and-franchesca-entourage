import React from 'react'

/** Rustic brown / coffee theme */
const COFFEE_DARK = '#4a3728'

const EntourageSection = ({
  image = '/assets/images/entourage/sponsor.png',
  leadIn = 'Will you be our',
  role = 'Principal Sponsor?',
  imageHeightClass = 'h-[82%]',
}) => {
  return (
    <section
      id="entourage"
      data-section="entourage"
      className="relative w-full min-h-[72vh] sm:min-h-[78vh] overflow-hidden"
    >
      {image && (
        <>
          {/* Entourage image covers the bottom half of the section, full width */}
          <img
            src={image}
            alt="Our entourage"
            className={`absolute inset-x-0 bottom-0 z-0 w-full ${imageHeightClass} object-contain object-bottom`}
            loading="lazy"
            decoding="async"
            style={{
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, #000 14%, #000 55%, transparent 95%)',
              maskImage:
                'linear-gradient(to top, transparent 0%, #000 14%, #000 55%, transparent 95%)',
            }}
          />
          {/* Warm wash blending the image into the coffee background */}
          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 ${imageHeightClass}`}
            style={{
              background:
                'linear-gradient(to top, rgba(245,239,230,0.55) 0%, transparent 16%)',
            }}
          />
        </>
      )}

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32">
        <h3
          className="font-foglihten leading-tight max-w-3xl mx-auto"
          style={{ color: COFFEE_DARK }}
        >
          <span className="block font-script text-2xl sm:text-3xl md:text-4xl opacity-90">
            {leadIn}
          </span>
          <span
            className="mt-3 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide"
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
            {role}
          </span>
        </h3>
      </div>
    </section>
  )
}

export default EntourageSection
