import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ExternalLink, X } from 'lucide-react'
import { couple, prenupImages } from '../data'

const RSVP_FORM_URL =
  couple.rsvpFormUrl ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdyep4NmcWPiBSUb-V9b_rT0PIVjFBRXM1zLMDBgPH6T76HxA/viewform?usp=header'

const RSVP_FORM_EMBED_URL =
  couple.rsvpGoogleFormEmbedUrl ||
  'https://docs.google.com/forms/d/e/1FAIpQLSdyep4NmcWPiBSUb-V9b_rT0PIVjFBRXM1zLMDBgPH6T76HxA/viewform?embedded=true'

const RSVPModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const scrollLockYRef = useRef(0)

  useEffect(() => {
    if (!isOpen) return undefined

    const html = document.documentElement
    const body = document.body
    scrollLockYRef.current = window.scrollY

    const scrollbarWidth = window.innerWidth - html.clientWidth
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyPaddingRight: body.style.paddingRight,
    }

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollLockYRef.current}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    const blockBackgroundScroll = (event) => {
      const iframe = modalRef.current?.querySelector('iframe')
      if (iframe && event.target === iframe) return
      event.preventDefault()
    }

    window.addEventListener('wheel', blockBackgroundScroll, { passive: false })
    window.addEventListener('touchmove', blockBackgroundScroll, { passive: false })

    gsap.set(overlayRef.current, { opacity: 0 })
    gsap.set(contentRef.current, { opacity: 0, y: 24 })

    gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' })
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    })

    return () => {
      window.removeEventListener('wheel', blockBackgroundScroll)
      window.removeEventListener('touchmove', blockBackgroundScroll)

      html.style.overflow = prev.htmlOverflow
      body.style.overflow = prev.bodyOverflow
      body.style.position = prev.bodyPosition
      body.style.top = prev.bodyTop
      body.style.left = prev.bodyLeft
      body.style.right = prev.bodyRight
      body.style.width = prev.bodyWidth
      body.style.paddingRight = prev.bodyPaddingRight
      window.scrollTo(0, scrollLockYRef.current)
    }
  }, [isOpen])

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.out' })
    gsap
      .to(contentRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.25,
        ease: 'power2.out',
      })
      .then(() => {
        onClose()
      })
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex flex-col m-0 p-0 overflow-hidden overscroll-none"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0 cursor-pointer overflow-hidden"
        onClick={handleOverlayClick}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${prenupImages.modalBackground})`,
            filter: 'blur(14px)',
            transform: 'scale(1.12)',
          }}
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col flex-1 min-h-0 w-full h-full min-w-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 border-b border-gold/25 bg-sage/95 backdrop-blur-md">
          <h2 className="text-xl sm:text-2xl font-leckerli font-light text-forest">
            Confirm Your Yes
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-forest hover:bg-gold/20 rounded-full transition-colors duration-200"
            aria-label="Close confirmation form"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden bg-sage/90 backdrop-blur-sm">
          <div className="w-full flex-1 min-h-0 overflow-hidden border-0 rsvp-modal-content flex flex-col px-2 pt-2 pb-2 sm:px-4 sm:pt-3 sm:pb-2">
            <iframe
              title="RSVP — Google Form"
              src={RSVP_FORM_EMBED_URL}
              className="h-full w-full min-h-0 flex-1 rounded-md border border-gold/20 bg-white shadow-inner"
              loading="lazy"
            />
          </div>
          <div className="shrink-0 flex flex-wrap items-center justify-center gap-2 border-t border-gold/20 px-4 py-3 sm:px-6 sm:py-4">
            <a
              href={RSVP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-4 py-2.5 text-sm font-albert text-forest shadow-sm transition-colors hover:bg-gold/15 hover:border-gold/60"
            >
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              Open form in browser
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default RSVPModal
