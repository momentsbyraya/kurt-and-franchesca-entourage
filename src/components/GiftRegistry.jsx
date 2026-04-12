import React, { useState } from 'react'
import { Gift } from 'lucide-react'
import { paymentMethods as paymentMethodsData } from '../data'
import SecondaryButton from './SecondaryButton'
import GiftModal from './GiftModal'

const GiftRegistry = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const { intro, accounts = [] } = paymentMethodsData

  return (
    <section
      id="gift"
      data-section="gift"
      className="w-full"
    >
      <div className="w-full text-center px-4">
        <h3 className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none capitalize text-forest">
          Monetary gift
        </h3>
        {intro && (
          <p className="mt-4 text-sm sm:text-base md:text-lg font-albert text-obsidian/85 max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        )}

        <div className="mt-10 sm:mt-12 flex justify-center">
          <SecondaryButton onClick={() => setModalOpen(true)} icon={Gift} className="gift-button">
            Send gift
          </SecondaryButton>
        </div>
      </div>

      <GiftModal isOpen={modalOpen} onClose={() => setModalOpen(false)} accounts={accounts} />
    </section>
  )
}

export default GiftRegistry
