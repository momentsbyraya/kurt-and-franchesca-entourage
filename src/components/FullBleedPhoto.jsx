import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImageLightbox from './ImageLightbox'

gsap.registerPlugin(ScrollTrigger)

/**
 * Single photo spanning the viewport width; no margin/padding on the strip.
 * `splitLayout`: half-width column (e.g. beside schedule at lg-custom+) — full bleed of column, not viewport.
 * `splitObjectNudgeLeftLg` / `splitObjectNudgeRightLg`: at lg-custom+, nudge object-position (split only; use one).
 * `nudgeTopLg`: at lg-custom+, nudge full-width strip focal point slightly up (non-split only).
 */
const FullBleedPhoto = ({
  src,
  alt = '',
  splitLayout = false,
  splitObjectNudgeLeftLg = false,
  splitObjectNudgeRightLg = false,
  nudgeTopLg = false,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    gsap.set(el, { opacity: 0, y: 48 })
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      animation: gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
      }),
      toggleActions: 'play none none reverse',
    })

    return () => {
      trigger.kill()
    }
  }, [src])

  return (
    <>
      <div
        ref={wrapRef}
        className={
          splitLayout
            ? 'm-0 p-0 w-full min-w-0 flex flex-col overflow-hidden lg-custom:flex-1 lg-custom:min-h-0'
            : 'm-0 p-0 max-w-none overflow-x-clip'
        }
        style={
          splitLayout
            ? { margin: 0, padding: 0, width: '100%' }
            : { width: '100vw', margin: 0, padding: 0 }
        }
      >
        <img
          src={src}
          alt={alt}
          className={
            splitLayout
              ? `m-0 p-0 border-0 align-middle block min-h-[min(40vh,320px)] w-full max-w-none cursor-pointer object-cover object-center lg-custom:h-full lg-custom:min-h-0 lg-custom:flex-1 ${
                  splitObjectNudgeLeftLg
                    ? 'lg-custom:object-[32%_center]'
                    : splitObjectNudgeRightLg
                      ? 'lg-custom:object-[58%_center]'
                      : ''
                }`
              : `m-0 p-0 border-0 align-middle block h-auto w-screen max-w-none cursor-pointer object-cover object-center lg-custom:max-h-[500px] lg-custom:object-cover ${
                  nudgeTopLg ? 'lg-custom:object-[center_42%]' : 'lg-custom:object-center'
                }`
          }
          style={{ margin: 0, padding: 0, display: 'block' }}
          loading="lazy"
          decoding="async"
          role="button"
          tabIndex={0}
          aria-label={alt ? `View full size: ${alt}` : 'View full size'}
          onClick={() => setLightboxOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setLightboxOpen(true)
            }
          }}
        />
      </div>
      <ImageLightbox
        isOpen={lightboxOpen}
        src={src}
        alt={alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}

export default FullBleedPhoto
