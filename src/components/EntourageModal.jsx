import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import ImageLightbox from './ImageLightbox'

const EntourageModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const entourageImages = [
    '/assets/images/entourage/entourage-1.png',
    '/assets/images/entourage/entourage-2.png'
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
      gsap.set(contentRef.current, { y: 20 })

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.25, ease: 'power2.out' })
      gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) setLightbox(null)
  }, [isOpen])

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.out' })
    gsap.to(contentRef.current, { opacity: 0, y: 20, duration: 0.2, ease: 'power2.out' }).then(() => onClose())
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60"
        onClick={handleOverlayClick}
      />

      <div
        ref={contentRef}
        className="absolute inset-0 w-screen h-screen overflow-y-auto"
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-2.png), url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <button
          onClick={handleClose}
          className="fixed top-4 right-4 z-20 p-2 text-forest hover:text-black bg-white/70 hover:bg-white/90 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {entourageImages.map((image, index) => {
              const alt = `Entourage ${index + 1}`
              return (
                <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                  <button
                    type="button"
                    onClick={() => setLightbox({ src: image, alt })}
                    className="block w-full p-0 border-0 bg-transparent cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                    aria-label={`View ${alt} full size`}
                  >
                    <img src={image} alt="" className="w-full h-auto object-contain pointer-events-none" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={!!lightbox}
        src={lightbox?.src}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </div>,
    document.body
  )
}

export default EntourageModal
