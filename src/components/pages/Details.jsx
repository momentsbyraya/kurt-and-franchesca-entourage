import React, { useEffect, useRef, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft } from 'lucide-react'
import ImageBanner from '../ImageBanner'
import Divider from '../Divider'
import Line from '../Line'
import SecondaryButton from '../SecondaryButton'
import PhotoSection from '../PhotoSection'
import EntourageDetailsSection from '../EntourageDetailsSection'
import './Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Details = () => {
  const navigate = useNavigate()
  const [copiedIndex, setCopiedIndex] = useState(null)
  const sectionRef = useRef(null)
  const backButtonRef = useRef(null)
  const headerContentRef = useRef(null)
  const photoSectionRef = useRef(null)
  const curvedDivider1Ref = useRef(null)
  const curvedDivider2Ref = useRef(null)
  const curvedDivider3Ref = useRef(null)

  // Random background position, rotation, and flip - Base layer (old-book-2)
  const bgStyleBase = useMemo(() => {
    const posX = Math.random() * 100 // 0% to 100%
    const posY = Math.random() * 100 // 0% to 100%
    const rotation = (Math.random() * 360) - 180 // -180 to 180 degrees
    const flipX = Math.random() > 0.5 ? -1 : 1 // Random horizontal flip
    const flipY = Math.random() > 0.5 ? -1 : 1 // Random vertical flip
    return {
      backgroundImage: 'url(/assets/images/graphics/old-book-2.png)',
      backgroundSize: 'cover',
      backgroundPosition: `${posX}% ${posY}%`,
      transform: `rotate(${rotation}deg) scaleX(${flipX}) scaleY(${flipY})`,
      opacity: 0.75
    }
  }, [])

  // Random background position, rotation, and flip - Top layer (old-book-bg)
  const bgStyle = useMemo(() => {
    const posX = Math.random() * 100 // 0% to 100%
    const posY = Math.random() * 100 // 0% to 100%
    const rotation = (Math.random() * 360) - 180 // -180 to 180 degrees
    const flipX = Math.random() > 0.5 ? -1 : 1 // Random horizontal flip
    const flipY = Math.random() > 0.5 ? -1 : 1 // Random vertical flip
    return {
      backgroundImage: 'url(/assets/images/graphics/old-book-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: `${posX}% ${posY}%`,
      transform: `rotate(${rotation}deg) scaleX(${flipX}) scaleY(${flipY})`,
      opacity: 0.5
    }
  }, [])

  useEffect(() => {
    // Set initial hidden states to prevent glimpse
    if (sectionRef.current) {
      gsap.set(sectionRef.current, { x: '100%', opacity: 0 })
    }
    if (backButtonRef.current) {
      gsap.set(backButtonRef.current, { opacity: 0, scale: 0 })
    }
    
    // Page slide-in animation on mount
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      )
    }

    // Back button fade-in animation after page slides in
    if (backButtonRef.current) {
      gsap.fromTo(backButtonRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", delay: 0.6 }
      )
    }

    // Scroll-triggered animations for individual elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    // Header content (description and graphics) animation
    if (headerContentRef.current) {
      ScrollTrigger.create({
        trigger: headerContentRef.current,
        start: "top 80%",
        animation: gsap.fromTo(headerContentRef.current, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }







    // Photo Section animation
    if (photoSectionRef.current) {
      ScrollTrigger.create({
        trigger: photoSectionRef.current,
        start: "top 80%",
        animation: gsap.fromTo(photoSectionRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Curved Divider animations
    if (curvedDivider1Ref.current) {
      ScrollTrigger.create({
        trigger: curvedDivider1Ref.current,
        start: "top 85%",
        animation: gsap.fromTo(curvedDivider1Ref.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.6, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    if (curvedDivider2Ref.current) {
      ScrollTrigger.create({
        trigger: curvedDivider2Ref.current,
        start: "top 85%",
        animation: gsap.fromTo(curvedDivider2Ref.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.6, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    if (curvedDivider3Ref.current) {
      ScrollTrigger.create({
        trigger: curvedDivider3Ref.current,
        start: "top 85%",
        animation: gsap.fromTo(curvedDivider3Ref.current,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.6, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
    <section
      ref={sectionRef}
      id="details"
      data-section="details"
      className="relative pb-20 w-full overflow-visible details-section"
    >
      <div
        className="relative"
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Flower Banner Image at Top */}
        <ImageBanner
          src="/assets/images/graphics/flower-banner.png"
          alt="Flower banner"
        />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center pt-12 pb-32">
          <div className="site-content-width">
            {/* Header Section */}
            <div className="text-center">
              <div ref={headerContentRef}>
                <p className="text-base sm:text-lg font-albert font-thin text-obsidian max-w-3xl mx-auto leading-relaxed">
                  Join us as we exchange our vows
                </p>
                <Divider />
            </div>
          </div>
          </div>
        </div>

        {/* Flower Divider */}
        <div ref={curvedDivider1Ref} className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower divider"
            className="w-full h-full object-contain"
            style={{ transform: 'scale(2.5) rotate(5deg)' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-12 gap-10 sm:gap-12">
        <div className="site-content-width w-full">
          <EntourageDetailsSection />
        </div>
      </div>

      {/* Curved Line Divider */}
      {/* <div ref={curvedDivider2Ref} className="relative w-full py-8 flex items-center justify-center">
        <svg 
          className="w-full h-16 sm:h-20 md:h-24" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,50 Q300,20 600,50 T1200,50" 
            stroke="#1F2B20" 
            strokeWidth="2" 
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div> */}
                    
      {/* Photo Section intentionally disabled */}

      {/* Curved Line Divider */}
      {/* <div ref={curvedDivider3Ref} className="relative w-full py-8 flex items-center justify-center">
        <svg 
          className="w-full h-16 sm:h-20 md:h-24" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,50 Q300,20 600,50 T1200,50" 
            stroke="#1F2B20" 
            strokeWidth="2" 
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div> */}

      {/* Flower Divider - Flipped horizontally and vertically */}
      <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center my-8">
        <img 
          src="/assets/images/graphics/flower-divider.png" 
          alt="Flower divider" 
          className="w-full h-full object-contain"
          style={{ 
            transform: 'scale(2.5) rotate(5deg) scaleX(-1) scaleY(-1)',
            transformOrigin: 'center'
          }}
        />
      </div>

      {/* Graphics with horizontal lines */}
      <div className="mt-12 relative z-20">
        <Divider />
      </div>

    </section>


    
    {/* Back Button - Circular, Bottom Right - Outside section to avoid transform issues */}
    <button
      ref={backButtonRef}
      onClick={() => {
        // Slide out page to the left before navigating
        if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            x: '-100%',
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              navigate('/')
            }
          })
        } else {
          navigate('/')
        }
      }}
      className="fixed bottom-12 right-6 z-[100] w-14 h-14 bg-gold text-forest rounded-full shadow-lg border border-forest/10 hover:bg-gold-dark hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center group back-button"
      aria-label="Back to home"
    >
      <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
    </button>
    </>
  )
}

export default Details





