// Blush pink, ivory & deep wine burgundy
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
        secondary: 'text-gold',
        accent: 'text-gold',
        muted: 'text-gold/80',
        dark: 'text-forest',
        theme: 'text-gold',
        pause: 'text-white',
        custom: 'text-obsidian',
        light: '#c9959e',
        lightBlack: '#5c2438',
        cream: '#f7f1ed',
        tan: '#c9959e',
        wine: '#5c2438',
        burgundyDark: '#5c2438',
        burntOrange: '#5c2438',
        sageGreen: '#5c2438',
    },

    borders: {
        primary: 'border-forest',
        secondary: 'border-gold/60',
        accent: 'border-gold',
        theme: 'border-gold/40',
        garden: 'border-gold/40',
    },

    buttons: {
        primary: 'bg-forest hover:bg-wedding-600',
        secondary: 'border border-gold hover:border-gold-dark',
        text: 'text-forest hover:text-white',
        theme: 'bg-gold hover:bg-gold-dark',
        garden: 'bg-gold/90 hover:bg-gold',
    },

    hover: {
        primary: 'hover:bg-wedding-600',
        secondary: 'hover:border-gold-dark hover:text-white',
        theme: 'hover:bg-gold-dark',
        garden: 'hover:bg-gold',
    },

    container: {
        maxWidth: 'max-w-[1300px]',
        padding: 'px-4 sm:px-6 lg:px-8',
        center: 'mx-auto',
    },

    calendar: {
        weddingDate: '2026-06-05',
        highlightColor: 'bg-gold',
        heartColor: 'text-gold',
        textColor: 'text-forest',
        headerColor: 'text-gold',
        dayNamesColor: 'text-gold/90',
        background: 'bg-sage',
    },

    paragraph: {
        background: 'bg-sage',
        garden: 'bg-sage',
    },

    cssVariables: {
        '--primary-bg': '#5c2438',
        '--secondary-bg': '#c9959e',
        '--accent-bg': '#5c2438',
        '--accent-hover': '#a67580',
        '--primary-text': '#2b1f24',
        '--secondary-text': '#c9959e',
        '--accent-text': '#c9959e',
        '--muted-text': '#a67580',
        '--border-color': '#4a1d2d',
        '--custom-theme': '#5c2438',
        '--cream': '#f7f1ed',
        '--tan': '#c9959e',
        '--wine': '#5c2438',
        '--burgundy-dark': '#4a1d2d',
        '--garden-bg': '#f7f1ed',
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
            secondary: 'text-gold',
            accent: 'text-gold',
        }
    },

    warmAutumn: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-gold/20',
            accent: 'bg-gold',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-gold',
            accent: 'text-gold',
        }
    },

    gardenWedding: {
        backgrounds: {
            primary: 'bg-sage',
            secondary: 'bg-white',
            accent: 'bg-gold',
            theme: 'bg-sage',
        },
        text: {
            primary: 'text-forest',
            secondary: 'text-gold',
            accent: 'text-gold',
            garden: 'text-gold',
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
