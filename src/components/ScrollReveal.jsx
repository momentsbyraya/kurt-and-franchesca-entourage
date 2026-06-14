import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollReveal = ({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  duration = 0.75,
  y = 28,
  opacityOnly = false,
  start = 'top 88%',
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const from = opacityOnly ? { opacity: 0 } : { opacity: 0, y }
    const to = opacityOnly ? { opacity: 1 } : { opacity: 1, y: 0 }

    const tween = gsap.fromTo(el, from, {
      ...to,
      duration,
      delay,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [delay, duration, opacityOnly, start, y])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

export default ScrollReveal
