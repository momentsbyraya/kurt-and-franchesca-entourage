import React from 'react'
import Hero from './Hero'
import Venue from './Venue'
import Schedule from './Schedule'
import DressCode from './DressCode'
import EntourageSection from './EntourageSection'
import RSVPSection from './RSVPSection'
import LoveStory from './LoveStory'
import Gallery from './Gallery'
import GiftRegistry from './GiftRegistry'
import FAQ from './FAQ'
import SaveTheDateCounter from './SaveTheDateCounter'
import FullBleedPhoto from './FullBleedPhoto'
import { couple, prenupImages } from '../data'
import { themeConfig } from '../config/themeConfig'
import './pages/Details.css'

const photoAlt = couple.together.replace('&', 'and')

const bgSectionStyle = {
  backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

/** Order of events — blush from theme (no bg-1 texture). */
const orderOfEventsSectionStyle = {
  backgroundColor: themeConfig.cssVariables['--secondary-bg'],
}

const Home = ({ onOpenRSVP }) => {
  return (
    <div className="relative w-full bg-sage">
      {/* 1. First page — photo, date & names (Hero; venue not shown) */}
      <Hero />

      {/* 2. Where to go — venue, directions, time */}
      <div
        className="embossed-bg"
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-2.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-20 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
          <div className="site-content-width">
            <Venue />
          </div>
        </div>

        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 3–4. Full-bleed after venue + order of events — stacked below 992px, side by side lg-custom+ */}
      <div className="lg-custom:flex lg-custom:flex-row lg-custom:items-stretch">
        <div className="lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col lg-custom:min-h-0">
          <FullBleedPhoto
            splitLayout
            splitObjectNudgeLeftLg
            src={prenupImages.fullBleedAfterVenue}
            alt={photoAlt}
          />
        </div>

        <div
          className="lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col"
          style={orderOfEventsSectionStyle}
        >
          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-3.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
              style={{ transform: 'scaleY(-1)' }}
            />
          </div>

          <div className="relative z-20 flex flex-1 items-center justify-center">
            <div className="site-content-width w-full">
              <Schedule />
            </div>
          </div>

          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-2.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
              style={{ transform: 'scaleY(-1)' }}
            />
          </div>
        </div>
      </div>

      {/* 5–6. Full-bleed after schedule + RSVP / Entourage / Gift — photo above content below 992px; content left, photo right lg-custom+ */}
      <div className="flex flex-col lg-custom:flex-row lg-custom:items-stretch">
        <div className="order-1 lg-custom:order-2 lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col lg-custom:min-h-0">
          <FullBleedPhoto
            splitLayout
            splitObjectNudgeRightLg
            src={prenupImages.fullBleedAfterSchedule}
            alt={photoAlt}
          />
        </div>

        <div
          className="order-2 lg-custom:order-1 lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col"
          style={bgSectionStyle}
        >
          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-3.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
              style={{ transform: 'scaleY(-1)' }}
            />
          </div>

          <div className="relative z-20 flex flex-1 flex-col items-center justify-center py-10 sm:py-12 md:py-16 gap-12 sm:gap-14 md:gap-16">
            <div className="site-content-width w-full">
              <RSVPSection onOpenRSVP={onOpenRSVP} />
            </div>
            <div className="site-content-width flex items-center gap-3 w-full max-w-2xl mx-auto px-2">
              <div className="h-px bg-gold/50 flex-1" />
              <div className="w-2 h-2 border border-gold/70 rotate-45 flex-shrink-0" />
              <div className="h-px bg-gold/50 flex-1" />
            </div>
            <div className="site-content-width w-full">
              <EntourageSection />
            </div>
            <div className="site-content-width w-full">
              <GiftRegistry />
            </div>
          </div>

          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-2.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
              style={{ transform: 'scaleY(-1)' }}
            />
          </div>
        </div>
      </div>

      {/* Full-bleed before love story + Love story — photo above story below 992px; media left, story right lg-custom+ */}
      <div className="flex flex-col lg-custom:flex-row lg-custom:items-stretch">
        <div className="lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col lg-custom:min-h-0">
          <FullBleedPhoto
            splitLayout
            src={prenupImages.betweenGiftAndLoveStory}
            alt={photoAlt}
          />
        </div>

        <div
          className="lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col"
          style={orderOfEventsSectionStyle}
        >
          <div className="relative z-20 flex flex-1 items-center justify-center py-6 sm:py-8 md:py-10">
            <div className="site-content-width w-full">
              <LoveStory />
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed after love story + Dress code — photo above dress below 992px; dress left, photo right lg-custom+ */}
      <div className="flex flex-col lg-custom:flex-row lg-custom:items-stretch">
        <div className="order-1 lg-custom:order-2 lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col lg-custom:min-h-0">
          <FullBleedPhoto
            splitLayout
            src={prenupImages.fullBleedAfterLoveStory}
            alt={photoAlt}
          />
        </div>

        <div
          className="order-2 lg-custom:order-1 lg-custom:flex-1 lg-custom:min-w-0 lg-custom:flex lg-custom:flex-col"
          style={bgSectionStyle}
        >
          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-2.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative z-20 flex flex-1 items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
            <div className="site-content-width w-full">
              <DressCode />
            </div>
          </div>

          <div className="relative w-full">
            <img
              src="/assets/images/graphics/flower-banner-3.png"
              alt="Flower banner"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Fifth full-bleed (VAN_5328) + Gallery — stacked */}
      <FullBleedPhoto
        nudgeTopLg
        src={prenupImages.fullBleedAfterDressCode}
        alt={photoAlt}
      />

      <div className="relative z-20 flex items-center justify-center">
        <div className="site-content-width">
          <Gallery />
        </div>
      </div>

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Save the date & countdown */}
      <SaveTheDateCounter />
    </div>
  )
}

export default Home
