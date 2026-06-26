import React from 'react'
import Home from '../Home'

const Bestman = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Best Man"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/groomsmen.png"
      introEyebrow="Through it all"
      introParagraphs={[
        'From the old days to right now, you\u2019ve been there \u2014 steady, solid, and real.',
        'Walk with me as my Best Man on the day I take this next step.',
      ]}
      entourageLeadIn="Will you be my"
      entourageRole="Best Man?"
      entourageRoleSizeClass="text-[2.6rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5rem]"
    />
  )
}

export default Bestman
