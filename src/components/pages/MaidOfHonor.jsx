import React from 'react'
import Home from '../Home'

const MaidOfHonor = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Maid of Honor"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/bridesmaid.png"
      introEyebrow="Forever grateful"
      introParagraphs={[
        'You have held my hand through it all \u2014 the highs, the lows, and everything in between.',
        'I would be honored to have you as my Maid of Honor when I say \u201CI\u00A0do.\u201D',
      ]}
      entourageLeadIn="Will you be my"
      entourageRole="Maid of Honor?"
      entourageRoleSizeClass="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem]"
    />
  )
}

export default MaidOfHonor
