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
        'Through every adventure and milestone, you have stood beside me as a true brother and friend.',
        'Will you stand with me once more as I say \u201CI\u00A0do\u201D?',
      ]}
      entourageLeadIn="Will you be my"
      entourageRole="Groomsman?"
      entourageRoleSizeClass="text-[2.6rem] sm:text-[3.25rem] md:text-[4.25rem] lg:text-[5rem]"
      entourageImageHeightClass="h-[92%]"
    />
  )
}

export default Groomsmen
