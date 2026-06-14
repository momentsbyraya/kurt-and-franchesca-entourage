import React from 'react'
import Hero from './Hero'
import EntourageSection from './EntourageSection'
import RSVPSection from './RSVPSection'
import GuestMessage from './GuestMessage'
import './pages/Details.css'

const Home = ({
  onOpenRSVP,
  title = 'Sponsor',
  entourageImage = '/assets/images/entourage/sponsor.png',
  entourageLeadIn = 'Will you be our',
  entourageRole = 'Principal Sponsor?',
  entourageImageHeightClass = 'h-[82%]',
}) => {
  return (
    <div className="relative w-full bg-sage">
      {/* 1. First page — photo, date & names */}
      <Hero />

      {/* Guest message */}
      <GuestMessage />

      {/* 2. Entourage */}
      <div
        className="relative z-20 w-full overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/images/entourage/sponsor-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <EntourageSection
          image={entourageImage}
          leadIn={entourageLeadIn}
          role={entourageRole}
          imageHeightClass={entourageImageHeightClass}
        />
      </div>

      {/* 12. RSVP */}
      <RSVPSection onOpenRSVP={onOpenRSVP} />
    </div>
  )
}

export default Home
