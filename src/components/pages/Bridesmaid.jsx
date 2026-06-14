import React from 'react'
import Home from '../Home'

const Bridesmaid = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Bridesmaid"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/bridesmaid.png"
      introEyebrow="With all my heart"
      introParagraphs={[
        'Because you have shared in my laughter, my tears, and my dearest memories, I cannot imagine this day without you beside me.',
        'Will you stand with me and share in my joy as I say \u201CI\u00A0do\u201D?',
      ]}
      entourageLeadIn="Will you be my"
      entourageRole="Bridesmaid?"
      entourageRoleSizeClass="text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem]"
      entourageImageHeightClass="h-[92%]"
    />
  )
}

export default Bridesmaid
