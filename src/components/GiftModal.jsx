import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Check, Copy, X } from 'lucide-react'

/**
 * @param {{ bankName: string, accountNumber: string, accountName: string, brandImage?: string }} account
 */
const GiftAccountBlock = ({ account }) => {
  const [copied, setCopied] = useState(false)

  const copyNumber = async () => {
    const n = account.accountNumber?.trim() ?? ''
    if (!n) return
    try {
      await navigator.clipboard.writeText(n)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      try {
        const ta = document.createElement('textarea')
        ta.value = n
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gold/30 bg-white/90">
      <div className="w-full bg-white/40">
        {account.brandImage ? (
          <img
            src={account.brandImage}
            alt={account.bankName}
            className="block h-auto w-full object-contain object-center"
          />
        ) : (
          <div className="flex min-h-[3rem] items-center justify-center px-4 py-4 sm:px-5">
            <p className="text-center font-albert text-base font-semibold uppercase tracking-wide text-obsidian sm:text-lg">
              {account.bankName}
            </p>
          </div>
        )}
      </div>

      <div className="h-px w-full shrink-0 bg-gold/25" role="presentation" />

      <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="font-albert text-base font-medium tabular-nums text-obsidian sm:text-lg">
            {account.accountNumber}
          </p>
          <button
            type="button"
            onClick={copyNumber}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/35 bg-white/80 text-forest transition-colors hover:bg-white hover:border-gold/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            aria-label={copied ? 'Copied to clipboard' : `Copy ${account.accountNumber}`}
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-700" aria-hidden />
            ) : (
              <Copy className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>

        <div className="border-t border-gold/25" role="presentation" />

        <p className="text-center font-albert text-sm leading-relaxed text-obsidian sm:text-base">
          {account.accountName}
        </p>
      </div>
    </div>
  )
}

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
