import React from 'react'
import Home from '../Home'

const Groomsmen = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Groomsmen"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/groomsmen.png"
      introEyebrow="Brothers for life"
      introParagraphs={[
        'You\u2019ve had my back through every win, every loss, and everything in between \u2014 no questions asked.',
        'Stand with me as I say \u201CI\u00A0do.\u201D',
      ]}
      entourageLeadIn="Will you be my"
      entourageRole="Groomsman?"
      entourageRoleSizeClass="text-[2.6rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5rem]"
      entourageImageHeightClass="h-[92%]"
    />
  )
}

export default Groomsmen
