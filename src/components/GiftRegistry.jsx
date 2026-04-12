import React from 'react'
import { paymentMethods as paymentMethodsData } from '../data'

const GiftRegistry = () => {
  const { intro, accounts = [], paymentMethods = [] } = paymentMethodsData

  return (
    <section
      id="gift"
      data-section="gift"
      className="w-full pt-16 pb-24 sm:pt-20 sm:pb-28"
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

        <div className="mt-10 sm:mt-12 mx-auto max-w-lg text-left space-y-8">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gold/35 bg-white/80 px-5 py-5 shadow-[0_8px_30px_-8px_rgba(92,36,56,0.12)] sm:px-6 sm:py-6"
            >
              <h4 className="font-foglihten text-xl sm:text-2xl text-forest tracking-wide mb-3">
                {account.title}
              </h4>
              <ul className="space-y-2 font-albert text-sm sm:text-base text-obsidian/90">
                {account.lines.map((line, i) => (
                  <li key={i} className="leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {paymentMethods && paymentMethods.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {paymentMethods.map((method, index) =>
              method.image ? (
                <img
                  key={index}
                  src={method.image}
                  alt={method.name || 'Payment method'}
                  className="max-w-xs w-full h-auto object-contain rounded-xl border border-gold/25 bg-white p-3"
                />
              ) : null
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default GiftRegistry
