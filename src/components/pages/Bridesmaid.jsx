import React from 'react'
import Home from '../Home'

const Bridesmaid = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Bridesmaid"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/bridesmaid.png"
      entourageLeadIn="Will you be my"
      entourageRole="Bridesmaid?"
      entourageImageHeightClass="h-[92%]"
    />
  )
}

export default Bridesmaid
