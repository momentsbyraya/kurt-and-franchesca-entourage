import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Footer from './components/Footer'
import RSVPModal from './components/RSVPModal'
import DynamicTitle from './components/DynamicTitle'
import EnvelopePage from './components/pages/EnvelopePage'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import Details from './components/pages/Details'
import Entourage from './components/pages/Entourage'
import Moments from './components/pages/Moments'
import Bridesmaid from './components/pages/Bridesmaid'
import Groomsmen from './components/pages/Groomsmen'
import { AudioProvider, useAudio } from './contexts/AudioContext'
import { couple, prenupImages } from './data'

function AppContent() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false)
  const [showInvitation, setShowInvitation] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { play } = useAudio()
  const location = useLocation()
  const navigate = useNavigate()

  // Preload critical images and resources
  useEffect(() => {
    const preloadImages = async () => {
      const criticalImages = [
        ...prenupImages.pool,
        // Envelope page assets
        '/assets/images/graphics/textured-bg-2.png',
        '/assets/images/graphics/stamp.png',
        '/assets/images/graphics/cutlery-sketch.png',
        '/assets/images/graphics/ring-sketch.png',
        // NavIndex graphics - all decorative elements
        '/assets/images/graphics/dusty-blue.png',
        '/assets/images/graphics/flower-1.png',
        '/assets/images/graphics/flower-3.png',
        '/assets/images/graphics/flower-4.png',
        '/assets/images/graphics/bg-1.png',
      ]

      // Preload fonts
      const preloadFonts = async () => {
        if (document.fonts && document.fonts.ready) {
          try {
            await document.fonts.ready
          } catch (e) {
            console.warn('Font loading error:', e)
          }
        }
      }

      // Preload images with proper error handling and decoding
      const imagePromises = criticalImages.map((src) => {
        return new Promise((resolve) => {
          if (src.endsWith('.mp4')) {
            // For video, preload it properly
            const video = document.createElement('video')
            video.preload = 'auto'
            video.oncanplaythrough = () => resolve()
            video.onerror = () => resolve() // Resolve even on error to not block
            video.src = src
          } else {
            const img = new Image()
            img.onload = () => {
              // Try to decode the image to ensure it's ready for rendering
              if (img.decode) {
                img.decode()
                  .then(() => resolve())
                  .catch(() => resolve()) // Resolve even if decode fails
              } else {
                resolve()
              }
            }
            img.onerror = () => {
              console.warn(`Failed to load image: ${src}`)
              resolve() // Resolve even on error to not block loading
            }
            img.src = src
            // Set a timeout for each image (15 seconds max per image)
            setTimeout(() => resolve(), 15000)
          }
        })
      })

      // Start font preloading
      const fontPromise = preloadFonts()

      // Wait for all critical resources to load
      // Use Promise.allSettled to ensure we don't block on individual failures
      const results = await Promise.allSettled([
        Promise.all(imagePromises),
        fontPromise
      ])

      // Check if critical images loaded successfully
      const imageResults = results[0]
      if (imageResults.status === 'fulfilled') {
        console.log('All critical images loaded')
      } else {
        console.warn('Some images failed to load:', imageResults.reason)
      }

      // Brief pause so the browser can settle before showing the envelope page
      await new Promise(resolve => setTimeout(resolve, 300))

      setIsLoading(false)
    }

    preloadImages()
  }, [])

  const handleEnvelopeOpen = async () => {
    // Start playing music when invitation is revealed (user interaction allows auto-play)
    await play()
    const targetPath = location.pathname === '/' ? '/sponsor' : location.pathname
    setShowInvitation(true)
    navigate(targetPath)
  }

  return (
    <div className="App min-h-screen wedding-gradient">
      <DynamicTitle />
      <ScrollToTop />
      {/* Loader - shows while preloading */}
      {isLoading && (
        <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8 sm:gap-10 bg-[#F8F3EA] px-4">
          <p
            className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gold"
            style={{ fontFamily: 'var(--letter-font, "Great Vibes", cursive)' }}
          >
            {couple.together}
          </p>
          <Loader />
        </div>
      )}
      {/* Envelope page — after loading, before the invitation site */}
      {!isLoading && !showInvitation && (
        <EnvelopePage onEnvelopeOpen={handleEnvelopeOpen} />
      )}
      {/* Main content - shows after invitation is opened (stamp clicked) */}
      {!isLoading && showInvitation && (
        <>
          <Routes>
            <Route path="/" element={<Navigate to="/sponsor" replace />} />
            <Route path="/sponsor" element={<Home onOpenRSVP={() => setIsRSVPModalOpen(true)} />} />
            <Route path="/bridesmaid" element={<Bridesmaid onOpenRSVP={() => setIsRSVPModalOpen(true)} />} />
            <Route path="/groomsmen" element={<Groomsmen onOpenRSVP={() => setIsRSVPModalOpen(true)} />} />
            <Route path="/details" element={<Details />} />
            <Route path="/entourage" element={<Entourage />} />
            <Route path="/moments" element={<Moments />} />
          </Routes>
          <Footer />
        </>
      )}
      <RSVPModal isOpen={isRSVPModalOpen} onClose={() => setIsRSVPModalOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  )
}

export default App 