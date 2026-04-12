import React, { useRef, useEffect, useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { loveStory, prenupImages } from '../data'
import { themeConfig } from '../config/themeConfig'
import './pages/Details.css'

gsap.registerPlugin(ScrollTrigger)

/** Match ace-and-jew-wedding: timeline descriptions split by `\n\n`, else main `content`. */
function buildStoryRows() {
  const textRows = []
  const timeline = loveStory.timeline || []

  if (timeline.length > 0) {
    timeline.forEach((item) => {
      const desc = (item.description || '').trim()
      const parts = desc.split(/\n\n/).map((p) => p.trim()).filter(Boolean)
      if (parts.length === 0) return
      if (parts.length === 1) {
        textRows.push({ text: parts[0] })
      } else {
        parts.forEach((part) => textRows.push({ text: part }))
      }
    })
  } else {
    const raw = (loveStory.content || '').trim()
    raw
      .split(/\n\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((p) => textRows.push({ text: p }))
  }

  const imgs = prenupImages.loveStory || []
  return textRows.map((row, i) => ({
    ...row,
    image: imgs[i % Math.max(imgs.length, 1)] || null,
  }))
}

const LoveStory = () => {
  const titleRef = useRef(null)
  const storySectionRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  const storyRows = useMemo(() => buildStoryRows(), [])
  const polaroidImages = useMemo(
    () => storyRows.map((r) => r.image).filter(Boolean),
    [storyRows]
  )

  useEffect(() => {
    if (!titleRef.current) return undefined
    const trigger = ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 80%',
      animation: gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      ),
      toggleActions: 'play none none reverse',
    })
    return () => trigger.kill()
  }, [])

  useEffect(() => {
    const createdTriggers = []
    const storyItems = storySectionRef.current?.querySelectorAll('.story-item')
    storyItems?.forEach((item, index) => {
      const polaroidWrapper = item.querySelector('.love-story-polaroid-animate')
      const textParagraph = item.querySelector('p.font-albert')
      gsap.set(item, { opacity: 0, y: 28 })
      if (polaroidWrapper) gsap.set(polaroidWrapper, { scale: 0.92 })
      if (textParagraph) gsap.set(textParagraph, { opacity: 0, y: 16 })
      createdTriggers.push(
        ScrollTrigger.create({
          trigger: item,
          start: 'top 82%',
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              delay: index * 0.1,
            })
            if (polaroidWrapper) {
              gsap.to(polaroidWrapper, {
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.2)',
                delay: index * 0.1 + 0.15,
              })
            }
            if (textParagraph) {
              gsap.to(textParagraph, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                delay: index * 0.1 + 0.25,
              })
            }
          },
          toggleActions: 'play none none reverse',
        })
      )
    })
    return () => createdTriggers.forEach((t) => t.kill())
  }, [storyRows.length])

  const formatParagraph = (text) => {
    const quote = '"I found him whom my soul loveth" – Song of Solomon 3:4'
    if (!text.includes(quote)) return text
    const parts = text.split(quote)
    const out = []
    parts.forEach((part, i) => {
      out.push(part)
      if (i < parts.length - 1) {
        out.push(
          <span key={`q-${i}`} className="font-bold italic">
            {quote}
          </span>
        )
      }
    })
    return out
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % polaroidImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + polaroidImages.length) % polaroidImages.length)
  }

  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false)
      else if (e.key === 'ArrowLeft') prevImage()
      else if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, polaroidImages.length])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
      if (overlayRef.current && contentRef.current) {
        gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
        gsap.set(contentRef.current, { scale: 0.9 })
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        gsap.to(contentRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isModalOpen])

  const Polaroid = ({ image, rotation = 0, index, objectPosition }) => (
    <div className="love-story-polaroid-animate inline-flex justify-center">
      <div style={{ transform: `rotate(${rotation}deg)` }}>
        <div
          className="love-story-polaroid-card bg-white shadow-lg relative cursor-pointer w-full max-w-[min(200px,46vw)] sm:max-w-[min(200px,40vw)] md:max-w-[200px]"
          style={{
            border: '4px solid white',
            borderBottom: '12px solid white',
            padding: '2px 2px 8px 2px',
          }}
          onClick={() => handleImageClick(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleImageClick(index)
            }
          }}
          aria-label={`Open love story photo ${index + 1}`}
        >
          <div className="relative">
            <img
              src={image}
              alt={`Love story moment ${index + 1}`}
              className="w-full aspect-square object-cover"
              style={{
                border: '2px solid #FFFBFB',
                borderBottom: 'none',
                display: 'block',
                ...(objectPosition && { objectPosition }),
              }}
            />
            <img
              src="/assets/images/graphics/stamp.png"
              alt=""
              className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
              style={{ top: '-8%', width: '20%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const primaryText = themeConfig.cssVariables['--primary-text'] || '#4a3e41'

  return (
    <div className="relative pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-14">
      <div className="text-center mb-8 sm:mb-10">
        <div className="flex justify-center mb-2 sm:mb-3">
          <img
            src="/assets/images/graphics/heart.png"
            alt=""
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain"
          />
        </div>
        <h3 ref={titleRef} className="relative inline-block px-4 py-1 sm:py-1.5">
          <span className="love-story-title love-story-title--section text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block leading-tight">
            {loveStory.title}
          </span>
        </h3>
      </div>

      <div
        ref={storySectionRef}
        className="relative pb-8 sm:pb-12 md:pb-16 pt-4 sm:pt-6 rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/15 bg-transparent"
      >
        <div className="max-w-5xl mx-auto px-2 sm:px-6 md:px-8">
          <div className="relative z-10 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {storyRows.map((row, index) => {
              const photoLeft = index % 2 === 0
              const image = row.image
              const imgIndex = polaroidImages.indexOf(image)
              const isLast = index === storyRows.length - 1
              const polaroidObjectPosition = isLast
                ? 'center top'
                : index === 0
                  ? 'center 20%'
                  : index === 3
                    ? 'right center'
                    : undefined

              return (
                <div key={index} className="story-item min-h-0 w-full">
                  {photoLeft ? (
                    <div className="grid w-full grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                      <div className="flex justify-center items-center min-w-0 shrink-0">
                        {image && (
                          <Polaroid
                            image={image}
                            rotation={-3}
                            index={imgIndex >= 0 ? imgIndex : index}
                            objectPosition={polaroidObjectPosition}
                          />
                        )}
                      </div>
                      <div className="flex items-center min-w-0">
                        <p
                          className="text-xs sm:text-sm md:text-base font-albert font-thin leading-snug sm:leading-relaxed text-left w-full md:text-[15px]"
                          style={{ color: primaryText }}
                        >
                          {formatParagraph(row.text)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid w-full grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
                      <div className="flex items-center min-w-0">
                        <p
                          className="text-xs sm:text-sm md:text-base font-albert font-thin leading-snug sm:leading-relaxed text-left sm:text-right w-full md:text-[15px]"
                          style={{ color: primaryText }}
                        >
                          {formatParagraph(row.text)}
                        </p>
                      </div>
                      <div className="flex justify-center items-center min-w-0 shrink-0">
                        {image && (
                          <Polaroid
                            image={image}
                            rotation={3}
                            index={imgIndex >= 0 ? imgIndex : index}
                            objectPosition={polaroidObjectPosition}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {isModalOpen && polaroidImages.length > 0 &&
        createPortal(
          <div
            ref={modalRef}
            className="fixed inset-0 z-[10050] flex items-center justify-center"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden
            />

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {polaroidImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            <div
              ref={contentRef}
              className="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center pointer-events-none"
            >
              <img
                src={polaroidImages[currentImageIndex]}
                alt={`Love story image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>

            {polaroidImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-white text-sm font-albert">
                  {currentImageIndex + 1} / {polaroidImages.length}
                </span>
              </div>
            )}
          </div>,
          document.body
        )}
    </div>
  )
}

export default LoveStory
