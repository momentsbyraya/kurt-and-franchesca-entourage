import React from 'react'

const WATERMARK_TEXT = 'THIS IS HALF DONE FOR CLIENT APPROVAL ONLY'

const WatermarkOverlay = () => {
  const rows = Array.from({ length: 30 })
  const perRow = Array.from({ length: 8 })

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
    >
      <div
        className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center gap-10"
        style={{
          transform: 'translate(-50%, -50%) rotate(-30deg)',
          width: '220vmax',
          height: '220vmax',
        }}
      >
        {rows.map((_, i) => (
          <div key={i} className="flex whitespace-nowrap gap-16">
            {perRow.map((__, j) => (
              <span
                key={j}
                style={{
                  color: 'rgba(0, 0, 0, 0.15)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                {WATERMARK_TEXT}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WatermarkOverlay
