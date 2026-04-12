import React from 'react'
import { entourage } from '../data'
import { themeConfig } from '../config/themeConfig'

const removeMiddleInitial = (name) =>
  name.replace(/\s+[A-Z]\.\s+/g, ' ').replace(/\s+/g, ' ').trim()

/**
 * Hardcoded entourage from `entourage.json` — modal + details page.
 */
const EntourageTextContent = ({
  accentColor: accentColorProp,
  className = '',
  nameClassName = 'text-[9px] sm:text-[13px] md:text-[15px] font-poppins uppercase text-forest',
}) => {
  const accentColor = accentColorProp ?? themeConfig.text.burgundyDark ?? '#6d3d48'
  const labelClass =
    'text-[10px] sm:text-sm md:text-base alice-regular mb-2 uppercase'
  const sectionTitleClass = 'text-base sm:text-lg imperial-script-regular mb-4 text-center'

  const { couple, parents, entourageList } = entourage

  return (
    <div className={`entourage-text-content min-w-0 ${className}`}>
      <div className="mb-6 flex flex-row gap-4 sm:gap-6 justify-center items-center">
        <div className="flex-1 min-w-0">
          <p className={`${labelClass} text-right`} style={{ color: accentColor }}>
            Name of groom
          </p>
          <p className={`${nameClassName} text-right`}>{removeMiddleInitial(couple.groom.name)}</p>
        </div>
        <div className="flex-1 min-w-0">
          <p className={`${labelClass} text-left`} style={{ color: accentColor }}>
            Name of bride
          </p>
          <p className={`${nameClassName} text-left`}>{removeMiddleInitial(couple.bride.name)}</p>
        </div>
      </div>

      <div className="mb-6 flex flex-row gap-4 sm:gap-6 justify-center items-center">
        <div className="flex-1 min-w-0">
          <p className={`${labelClass} text-right`} style={{ color: accentColor }}>
            Parents of the groom
          </p>
          <p className={`${nameClassName} text-right`}>{parents.groom.father}</p>
          <p className={`${nameClassName} text-right`}>{parents.groom.mother}</p>
        </div>
        <div className="flex-1 min-w-0">
          <p className={`${labelClass} text-left`} style={{ color: accentColor }}>
            Parents of the bride
          </p>
          <p className={`${nameClassName} text-left`}>{parents.bride.father}</p>
          <p className={`${nameClassName} text-left`}>{parents.bride.mother}</p>
        </div>
      </div>

      {entourageList.map((block, index) => {
        if (block.ninong && block.ninang) {
          return (
            <div key={`principal-${index}`} className="mb-6">
              <h3 className={sectionTitleClass} style={{ color: accentColor }}>
                Principal sponsors
              </h3>
              <div className="flex flex-row gap-4 sm:gap-6 justify-center items-start">
                <div className="flex-1 min-w-0">
                  <p className={`${labelClass} text-right`} style={{ color: accentColor }}>
                    Ninong
                  </p>
                  <div className="space-y-2">
                    {block.ninong.map((name, i) => (
                      <p key={i} className={`${nameClassName} text-right`}>
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${labelClass} text-left`} style={{ color: accentColor }}>
                    Ninang
                  </p>
                  <div className="space-y-2">
                    {block.ninang.map((name, i) => (
                      <p key={i} className={`${nameClassName} text-left`}>
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }

        if (block.bestman && block.matronOfHonor) {
          return (
            <div key={`honors-${index}`} className="mb-6 flex flex-row gap-4 sm:gap-6 justify-center items-start">
              <div className="flex-1 min-w-0">
                <p className={`${labelClass} text-right`} style={{ color: accentColor }}>
                  Bestman
                </p>
                {block.bestman.map((name, i) => (
                  <p key={i} className={`${nameClassName} text-right`}>
                    {name}
                  </p>
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`${labelClass} text-left`} style={{ color: accentColor }}>
                  Matron of honor
                </p>
                {block.matronOfHonor.map((name, i) => (
                  <p key={i} className={`${nameClassName} text-left`}>
                    {name}
                  </p>
                ))}
              </div>
            </div>
          )
        }

        if (block.groomsmen && block.bridesmaids) {
          return (
            <div key={`party-${index}`} className="mb-6 flex flex-row gap-4 sm:gap-6 justify-start items-start">
              <div className="flex-1 min-w-0">
                <p className={`${labelClass} text-right`} style={{ color: accentColor }}>
                  Groomsmen
                </p>
                <div className="space-y-2">
                  {block.groomsmen.map((name, i) => (
                    <p key={i} className={`${nameClassName} text-right`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className={`${labelClass} text-left`} style={{ color: accentColor }}>
                  Bridesmaids
                </p>
                <div className="space-y-2">
                  {block.bridesmaids.map((name, i) => (
                    <p key={i} className={`${nameClassName} text-left`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        }

        if (block.names?.length) {
          const centered =
            block.category === 'Little Bridesmaid' ||
            block.category === 'Flower Girl' ||
            block.category === 'Ring Bearer' ||
            block.category === 'Coin Bearer' ||
            block.category === 'Bible Bearer' ||
            block.category === 'Little Bride'

          return (
            <div key={`names-${index}`} className={`mb-6 ${centered ? 'text-center' : ''}`}>
              <p
                className={`${labelClass} ${centered ? 'text-center' : 'text-left'}`}
                style={{ color: accentColor }}
              >
                {block.category}
              </p>
              <div className="space-y-2">
                {block.names.map((name, i) => (
                  <p
                    key={i}
                    className={`${nameClassName} ${centered ? 'text-center' : 'text-left'}`}
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default EntourageTextContent
