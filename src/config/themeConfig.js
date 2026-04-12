// Primary: blush pink · Accent: soft rose · Deep wine for contrast only
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
        light: '#e8b4c2',
        lightBlack: '#b86e7e',
        cream: '#f7f1ed',
        tan: '#e8b8c4',
        wine: '#6d3d48',
        burgundyDark: '#6d3d48',
        burntOrange: '#6d3d48',
        sageGreen: '#8f5a67',
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
        weddingDate: '2026-06-05',
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
        '--primary-bg': '#b86e7e',
        '--secondary-bg': '#fcecf0',
        '--accent-bg': '#a86b7d',
        '--accent-hover': '#8f5a67',
        '--primary-text': '#4a3e41',
        '--secondary-text': '#b86e7e',
        '--accent-text': '#a86b7d',
        '--muted-text': '#8f5a67',
        '--border-color': '#d996a8',
        '--custom-theme': '#b86e7e',
        '--cream': '#f7f1ed',
        '--tan': '#e8b8c4',
        '--wine': '#6d3d48',
        '--burgundy-dark': '#5c2f3a',
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
