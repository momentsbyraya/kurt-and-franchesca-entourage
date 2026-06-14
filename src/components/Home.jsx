import React from 'react'
import Hero from './Hero'
import EntourageSection from './EntourageSection'
import GuestMessage from './GuestMessage'
import './pages/Details.css'

const Home = ({
  onOpenRSVP,
  title = 'Sponsor',
  entourageImage = '/assets/images/entourage/sponsor.png',
  entourageLeadIn = 'Will you be our',
  entourageRole = 'Principal Sponsor?',
  entourageRoleSizeClass,
  introEyebrow = 'With hearts full of gratitude',
  introParagraphs = [
    'Because you have guided us with your wisdom and blessed us with your love, we humbly ask you to stand as our Principal Sponsor.',
    'It would be an honor to have you witness and bless our union as we say \u201CI\u00A0do.\u201D',
  ],
}) => {
  return (
    <div className="relative w-full bg-sage">
      {/* 1. First page — photo, date & names */}
      <Hero />

      {/* Guest message */}
      <GuestMessage eyebrow={introEyebrow} paragraphs={introParagraphs} />

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
          roleSizeClass={entourageRoleSizeClass}
          onRespond={onOpenRSVP}
        />
      </div>
    </div>
  )
}

export default Home
