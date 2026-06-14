import React from 'react'
import Home from '../Home'

const Groomsmen = ({ onOpenRSVP }) => {
  return (
    <Home
      title="Groomsmen"
      onOpenRSVP={onOpenRSVP}
      entourageImage="/assets/images/entourage/groomsmen.png"
      entourageLeadIn="Will you be my"
      entourageRole="Groomsman?"
      entourageImageHeightClass="h-[92%]"
    />
  )
}

export default Groomsmen
