import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

/**
 * @param {{ bankName: string, accountNumber: string, accountName: string }} account
 */
const GiftAccountBlock = ({ account }) => (
  <div className="rounded-xl border border-gold/30 bg-white/90 px-4 py-4 sm:px-5 sm:py-5 space-y-3">
    <div>
      <p className="text-xs font-albert font-medium uppercase tracking-wide text-forest/70">Bank name</p>
      <p className="mt-1 font-albert text-sm sm:text-base text-obsidian font-medium">{account.bankName}</p>
    </div>
    <div>
      <p className="text-xs font-albert font-medium uppercase tracking-wide text-forest/70">Account number</p>
      <p className="mt-1 font-albert text-sm sm:text-base text-obsidian tabular-nums">{account.accountNumber}</p>
    </div>
    <div>
      <p className="text-xs font-albert font-medium uppercase tracking-wide text-forest/70">Name</p>
      <p className="mt-1 font-albert text-sm sm:text-base text-obsidian leading-relaxed">{account.accountName}</p>
    </div>
  </div>
)

const GiftModal = ({ isOpen, onClose, accounts = [] }) => {
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[10060] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        aria-label="Close gift details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-modal-title"
        className="relative z-10 w-full max-w-md rounded-2xl border border-gold/25 bg-sage shadow-[0_20px_50px_-12px_rgba(80,45,55,0.25)] max-h-[min(90vh,640px)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-6 sm:pt-6 pb-2 shrink-0 border-b border-gold/20">
          <h2
            id="gift-modal-title"
            className="font-foglihten text-2xl sm:text-3xl text-forest leading-tight pr-2"
          >
            Monetary gift
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-forest/80 hover:bg-white/60 hover:text-forest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:pb-6 space-y-5">
          {accounts.map((account, index) => (
            <GiftAccountBlock key={`${account.bankName}-${index}`} account={account} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default GiftModal
