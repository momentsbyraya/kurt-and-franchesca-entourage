import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { dresscode } from '../data'
import Line from './Line'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const DressCode = () => {
  const dressCodeTitleRef = useRef(null)
  const dressCodeContentRef = useRef(null)
  const category1Ref = useRef(null)
  const category2Ref = useRef(null)
  
  /** Formal attire palette — gray, navy, pink, burgundy */
  const formalAttirePalette = [
    { color: '#6B7280', name: 'gray' },
    { color: '#1E3A5F', name: 'navy blue' },
    { color: '#D9A5AD', name: 'pink' },
    { color: '#722F37', name: 'burgundy' },
  ]

  const sections = dresscode.sections || []
  const singleSectionMode = sections.length === 1

  useEffect(() => {
    // Dress Code Title animation
    if (dressCodeTitleRef.current) {
      ScrollTrigger.create({
        trigger: dressCodeTitleRef.current,
        start: "top 80%",
        animation: gsap.fromTo(dressCodeTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Category 1 animation - animate image and content separately
    if (category1Ref.current) {
      const category1Container = category1Ref.current
      const flexContainer = category1Container.querySelector('.flex.flex-row')
      if (flexContainer) {
        const category1Image = flexContainer.querySelector('.dresscode-image-container')
        const category1Content = Array.from(flexContainer.children).find(child => 
          child.classList.contains('w-1/2') && child.querySelector('.font-boska')
        )
        
        if (category1Image) {
          gsap.set(category1Image, { opacity: 0, x: -30 })
        }
        if (category1Content) {
          gsap.set(category1Content, { opacity: 0, x: 30 })
        }
        
        ScrollTrigger.create({
          trigger: category1Ref.current,
          start: "top 75%",
          onEnter: () => {
            if (category1Image) {
              gsap.to(category1Image, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
              })
            }
            if (category1Content) {
              gsap.to(category1Content, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2
              })
            }
          }
        })
      }
    }

    // Category 2 animation (two-section layout only)
    if (!singleSectionMode && category2Ref.current) {
      const category2Container = category2Ref.current
      const flexContainer = category2Container.querySelector('.flex.flex-row')
      if (flexContainer) {
        const category2Image = flexContainer.querySelector('.dresscode-image-container')
        const category2Content = Array.from(flexContainer.children).find(child => 
          child.classList.contains('w-1/2') && child.querySelector('.font-boska')
        )
        
        if (category2Image) {
          gsap.set(category2Image, { opacity: 0, x: 30 })
        }
        if (category2Content) {
          gsap.set(category2Content, { opacity: 0, x: -30 })
        }
        
      ScrollTrigger.create({
          trigger: category2Ref.current,
          start: "top 75%",
          onEnter: () => {
            if (category2Content) {
              gsap.to(category2Content, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
              })
            }
            if (category2Image) {
              gsap.to(category2Image, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.2
              })
            }
          }
        })
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && (
          trigger.vars.trigger === dressCodeTitleRef.current ||
          trigger.vars.trigger === category1Ref.current ||
          trigger.vars.trigger === category2Ref.current
        )) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className="relative w-full min-w-0">
      {/* Dress Code Title */}
      <div ref={dressCodeTitleRef} className="text-center mb-12 sm:mb-16">
        <div>
          <h3 className="relative inline-block px-6 py-3">
            <span 
              className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block leading-none capitalize dress-code-title-text"
            >
              Dress Code
            </span>
          </h3>
          {/* General Dress Code Description */}
          <p className="text-base sm:text-lg font-albert font-thin italic dress-code-description">
            {dresscode.mainDressCode?.description || "Formal attire with these colors on our special day."}
          </p>
        </div>
      </div>

      {/* Dress Code Content */}
      <div className="flex flex-col lg-custom:flex-row gap-4 md:gap-6 lg-custom:gap-4 items-stretch min-w-0">
        {sections[0] && (() => {
          const section = sections[0]
          const textColClass = singleSectionMode
            ? 'w-full min-w-0 flex flex-col text-center lg-custom:text-center'
            : 'w-1/2 min-w-0 lg-custom:w-full flex flex-col text-right lg-custom:text-left order-1 lg-custom:order-2'
          return (
            <div className="relative overflow-visible flex-1">
              <div className="relative overflow-visible">
                <div
                  ref={category1Ref}
                  className="transition-opacity duration-500 ease-in-out"
                >
                  <div className="flex flex-row lg-custom:flex-col gap-6 md:gap-8 lg-custom:gap-6 items-start min-w-0">
                    <div className={textColClass}>
                      <div className="w-full">
                        <div
                          className="text-lg sm:text-xl md:text-2xl font-boska mb-2 text-gold"
                        >
                          {section.title}
                        </div>
                        {section.description && (
                          <p className="text-sm sm:text-base font-albert font-thin italic text-forest mb-3">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {section.image ? (
                      <div className="w-1/2 min-w-0 lg-custom:w-full order-2 lg-custom:order-1">
                        <div className="w-full relative dresscode-image-container">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="h-full w-full rounded object-cover"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {singleSectionMode && (
                    <div className="mt-8 flex w-full min-w-0 flex-col items-center text-center sm:mt-10">
                      <h4 className="mb-5 font-foglihten text-2xl italic sm:mb-6 sm:text-3xl text-forest">
                        Color palette
                      </h4>
                      <div
                        className="flex w-full max-w-full flex-row flex-nowrap items-start justify-center gap-3 overflow-x-auto overflow-y-visible py-1 [scrollbar-width:thin] sm:gap-6 md:gap-8"
                        aria-label="Suggested colors for formal attire"
                      >
                        {formalAttirePalette.map((swatch) => (
                          <div
                            key={swatch.color}
                            className="flex w-[3.5rem] shrink-0 flex-col items-center gap-2 sm:w-[4.75rem] md:w-[5.25rem]"
                          >
                            <button
                              type="button"
                              className="h-10 w-10 shrink-0 rounded-full shadow-[0_2px_10px_rgba(184,110,126,0.15)] outline-none ring-1 ring-forest/15 transition-transform duration-200 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 sm:h-[3.25rem] sm:w-[3.25rem] md:h-14 md:w-14"
                              style={{ backgroundColor: swatch.color }}
                              aria-label={swatch.name}
                            />
                            <span className="text-center font-boska text-[11px] italic leading-snug text-forest sm:text-xs">
                              {swatch.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })()}

        {sections.length > 1 && (
          <>
            <div className="hidden lg-custom:block w-px bg-forest opacity-40 self-stretch" />
            <div className="lg-custom:hidden w-full">
              <Line />
            </div>
          </>
        )}

        {sections[1] && (() => {
          const section = sections[1]
          return (
            <div className="relative overflow-visible flex-1">
              <div className="relative overflow-visible">
                <div
                  ref={category2Ref}
                  className="text-center transition-opacity duration-500 ease-in-out"
                >
                  <div className="flex flex-row lg-custom:flex-col gap-6 md:gap-8 lg-custom:gap-6 items-start min-w-0">
                    {section.image && (
                      <div className="w-1/2 min-w-0 lg-custom:w-full">
                        <div className="w-full relative dresscode-image-container">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                    )}
                    <div className="w-1/2 min-w-0 lg-custom:w-full flex flex-col text-left lg-custom:text-left">
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl font-boska mb-2 text-left lg-custom:text-left text-gold">
                          {section.title}
                        </div>
                        {section.shortDescription && (
                          <p className="text-sm sm:text-base font-albert font-thin italic text-forest text-left lg-custom:text-left">
                            {section.shortDescription}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex w-full min-w-0 flex-col items-center text-center sm:mt-8">
                    <h4 className="mb-5 font-foglihten text-2xl italic sm:mb-6 sm:text-3xl text-forest">
                      Color palette
                    </h4>
                    <div
                      className="flex w-full max-w-full flex-row flex-nowrap items-start justify-center gap-3 overflow-x-auto overflow-y-visible py-1 [scrollbar-width:thin] sm:gap-6 md:gap-8"
                      aria-label="Wedding color palette for guests"
                    >
                      {formalAttirePalette.map((swatch) => (
                        <div
                          key={swatch.color}
                          className="flex w-[3.5rem] shrink-0 flex-col items-center gap-2 sm:w-[4.75rem] md:w-[5.25rem]"
                        >
                          <button
                            type="button"
                            className="h-10 w-10 shrink-0 rounded-full shadow-[0_2px_10px_rgba(184,110,126,0.15)] outline-none ring-1 ring-forest/15 transition-transform duration-200 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 sm:h-[3.25rem] sm:w-[3.25rem] md:h-14 md:w-14"
                            style={{ backgroundColor: swatch.color }}
                            aria-label={swatch.name}
                          />
                          <span className="text-center font-boska text-[11px] italic leading-snug text-forest sm:text-xs">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })()}
      </div>
    </div>
  )
}

export default DressCode
