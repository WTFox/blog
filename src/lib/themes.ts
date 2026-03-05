export interface SiteTheme {
    name: string
    gradient: string
    lightAccent: string
    darkAccent: string
    light: {
        surface: string
        hover: string
        border: string
        blockquoteBorder: string
        headingColor: string | undefined
        inlineCodeBg: string
        inlineCodeColor: string
        kbdBorder: string
    }
    dark: {
        bg: string
        surface: string
        elevated: string
        border: string
        blockquoteBorder: string
        inlineCodeBg: string
        inlineCodeColor: string
        kbdBorder: string
        mutedText: string
        buttonIcon: string
    }
    codeThemeLight: string
    codeThemeDark: string
}

const themes: Record<string, SiteTheme> = {
    amber: {
        name: "Amber Terminal",
        gradient: "linear(to-l, #B45309, #FBBF24)",
        lightAccent: "#B45309",
        darkAccent: "#FBBF24",
        light: {
            surface: "#FEF3C7",
            hover: "#FEF3C7",
            border: "#E5C07A",
            blockquoteBorder: "#D97706",
            headingColor: "#92400E",
            inlineCodeBg: "#FEF3C7",
            inlineCodeColor: "#92400E",
            kbdBorder: "#B45309",
        },
        dark: {
            bg: "#110D00",
            surface: "#1A1400",
            elevated: "#1F1700",
            border: "#3D2E00",
            blockquoteBorder: "#FBBF24",
            inlineCodeBg: "#2A1F00",
            inlineCodeColor: "#FCD34D",
            kbdBorder: "#FBBF24",
            mutedText: "#8B7355",
            buttonIcon: "#110D00",
        },
        codeThemeLight: "solarizedLight",
        codeThemeDark: "railscast",
    },
    terminal: {
        name: "Terminal Green",
        gradient: "linear(to-l, #00875A, #00FF41)",
        lightAccent: "#00875A",
        darkAccent: "#00FF41",
        light: {
            surface: "#ECFDF5",
            hover: "#D1FAE5",
            border: "#6EE7B7",
            blockquoteBorder: "#059669",
            headingColor: "#064E3B",
            inlineCodeBg: "#ECFDF5",
            inlineCodeColor: "#065F46",
            kbdBorder: "#00875A",
        },
        dark: {
            bg: "#0A0F0A",
            surface: "#0F1A0F",
            elevated: "#142814",
            border: "#1A3A1A",
            blockquoteBorder: "#00FF41",
            inlineCodeBg: "#0F1A0F",
            inlineCodeColor: "#4ADE80",
            kbdBorder: "#00FF41",
            mutedText: "#5F8A5F",
            buttonIcon: "#0A0F0A",
        },
        codeThemeLight: "github",
        codeThemeDark: "obsidian",
    },
    dracula: {
        name: "Dracula",
        gradient: "linear(to-l, #BD93F9, #FF79C6)",
        lightAccent: "#6D28D9",
        darkAccent: "#BD93F9",
        light: {
            surface: "#F5F3FF",
            hover: "#EDE9FE",
            border: "#DDD6FE",
            blockquoteBorder: "#8B5CF6",
            headingColor: "#4C1D95",
            inlineCodeBg: "#F5F3FF",
            inlineCodeColor: "#5B21B6",
            kbdBorder: "#6D28D9",
        },
        dark: {
            bg: "#282A36",
            surface: "#343746",
            elevated: "#3E4155",
            border: "#44475A",
            blockquoteBorder: "#BD93F9",
            inlineCodeBg: "#343746",
            inlineCodeColor: "#F8F8F2",
            kbdBorder: "#FF79C6",
            mutedText: "#6272A4",
            buttonIcon: "#282A36",
        },
        codeThemeLight: "atomOneLight",
        codeThemeDark: "dracula",
    },
    purple: {
        name: "Purple Haze",
        gradient: "linear(to-l, #7928CA, #FF0080)",
        lightAccent: "#7928CA",
        darkAccent: "#FF0080",
        light: {
            surface: "#F7FAFC",
            hover: "#EDF2F7",
            border: "#E2E8F0",
            blockquoteBorder: "#CBD5E0",
            headingColor: undefined,
            inlineCodeBg: "#EDF2F7",
            inlineCodeColor: "#1A202C",
            kbdBorder: "#7928CA",
        },
        dark: {
            bg: "#1A202C",
            surface: "#2D3748",
            elevated: "#2D3748",
            border: "#4A5568",
            blockquoteBorder: "#718096",
            inlineCodeBg: "#2D3748",
            inlineCodeColor: "#EDF2F7",
            kbdBorder: "#FF0080",
            mutedText: "#718096",
            buttonIcon: "white",
        },
        codeThemeLight: "atomOneLight",
        codeThemeDark: "nord",
    },
}

export const ACTIVE_THEME = "amber"
export const activeTheme = themes[ACTIVE_THEME]
export default themes
