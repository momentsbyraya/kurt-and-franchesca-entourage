import React from 'react'
import { ArrowRight } from 'lucide-react'
import { couple } from '../data'
import SecondaryButton from './SecondaryButton'

const RSVPSection = ({ onOpenRSVP }) => {
  const deadlineText = couple.rsvpDeadline
    ? `${couple.rsvpDeadline.month} ${couple.rsvpDeadline.day}, ${couple.rsvpDeadline.year}`
    : 'May 4, 2026'

  return (
    <section
      id="rsvp"
      data-section="rsvp"
      className="w-full"
    >
      <div className="w-full text-center">
        <h3 className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none capitalize text-forest">
          RSVP
        </h3>
        <p className="mt-4 text-sm sm:text-base md:text-lg font-albert text-obsidian/85 max-w-2xl mx-auto leading-relaxed">
          We&apos;d love to have you with us! Please favor us with a response by{' '}
          <strong>{deadlineText}</strong>.
          <br />
          <span className="mt-2 inline-block sm:mt-2.5">
            We&apos;ll be finalizing all plans on this date and hope to see you there!
          </span>
        </p>
        {onOpenRSVP && (
          <div className="mt-8 flex justify-center">
            <SecondaryButton onClick={onOpenRSVP} icon={ArrowRight}>
              Respond
            </SecondaryButton>
          </div>
        )}
      </div>
    </section>
  )
}

export default RSVPSection
