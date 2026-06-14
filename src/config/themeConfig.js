// Primary: coffee brown · Accent: latte/tan · Deep espresso for contrast only
export const themeConfig = {
    backgrounds: {
        primary: 'bg-forest',
        secondary: 'bg-gold',
        accent: 'bg-gold',
        light: 'bg-white/50',
        theme: 'bg-sage',
        garden: 'bg-sage',
        crumpledPaper: 'bg-[url("/assets/images/crumpled-paper.png")] bg-cover bg-center bg-no-repeat',
    },

    text: {
        primary: 'text-forest',
        secondary: 'text-gold-dark',
        accent: 'text-gold-dark',
        muted: 'text-forest/75',
        dark: 'text-forest',
        theme: 'text-gold-dark',
        pause: 'text-white',
        custom: 'text-obsidian',
        light: '#c9ad8e',
        lightBlack: '#8a6a4f',
        cream: '#f5efe6',
        tan: '#d9c2a6',
        wine: '#6f4e37',
        burgundyDark: '#4a3728',
        burntOrange: '#8a6a4f',
        sageGreen: '#6f4e37',
    },

    borders: {
        primary: 'border-forest',
        secondary: 'border-gold-dark/50',
        accent: 'border-gold-dark',
        theme: 'border-forest/30',
        garden: 'border-forest/25',
    },

    buttons: {
        primary: 'bg-forest hover:bg-wedding-600',
        secondary: 'border border-gold-dark hover:border-forest',
        text: 'text-white hover:text-white',
        theme: 'bg-gold-dark hover:bg-forest',
        garden: 'bg-gold-dark/90 hover:bg-gold-dark',
    },

    hover: {
        primary: 'hover:bg-wedding-600',
        secondary: 'hover:border-forest hover:text-forest',
        theme: 'hover:bg-forest',
        garden: 'hover:bg-gold-dark',
    },

    container: {
        maxWidth: 'max-w-[1300px]',
        padding: 'px-4 sm:px-6 lg:px-8',
        center: 'mx-auto',
    },

    calendar: {
        weddingDate: '2026-11-09',
        highlightColor: 'bg-forest',
        heartColor: 'text-forest',
        textColor: 'text-obsidian',
        headerColor: 'text-forest',
        dayNamesColor: 'text-forest/90',
        background: 'bg-sage',
    },

    paragraph: {
        background: 'bg-sage',
        garden: 'bg-sage',
    },

    cssVariables: {
        '--primary-bg': '#6f4e37',
        '--secondary-bg': '#f3ebdd',
        '--accent-bg': '#8a6a4f',
        '--accent-hover': '#5b4636',
        '--primary-text': '#3b2f2a',
        '--secondary-text': '#6f4e37',
        '--accent-text': '#8a6a4f',
        '--muted-text': '#6f4e37',
        '--border-color': '#c4a484',
        '--custom-theme': '#6f4e37',
        '--cream': '#f5efe6',
        '--tan': '#d9c2a6',
        '--wine': '#6f4e37',
        '--burgundy-dark': '#4a3728',
        '--garden-bg': '#f5efe6',
        /** Coffee accent for schedule / accents (matches opening “Invited”) */
        '--burgundy-red': '#6f4e37',
    }
}

export const themePresets = {
    darkElegant: {
        backgrounds: {
            primary: 'bg-forest',
            secondary: 'bg-gold',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-white',
            secondary: 'text-gold',
            accent: 'text-gold',
        }
    },

    lightRomantic: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-white',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-gold-dark',
            accent: 'text-gold-dark',
        }
    },

    warmAutumn: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-forest/15',
            accent: 'bg-forest',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-gold-dark',
            accent: 'text-gold-dark',
        }
    },

    gardenWedding: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-white',
            accent: 'bg-forest',
            theme: 'bg-sage',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-gold-dark',
            accent: 'text-gold-dark',
            garden: 'text-gold-dark',
        }
    }
}

export const getThemeColor = (type, variant = 'primary') => {
    return themeConfig[type]?.[variant] || themeConfig.text.primary
}

export const applyThemePreset = (presetName) => {
    const preset = themePresets[presetName]
    if (preset) {
        Object.assign(themeConfig, preset)
    }
}
