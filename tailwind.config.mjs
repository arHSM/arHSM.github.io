/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                accent: "var(--accent)",
                "accent-bright": "var(--accent-bright)",
                "text-primary": "var(--text-primary)",
                "text-link": "var(--text-link)",
                "mark-background": "var(--mark-background)",
                "code-background": "var(--code-background)",
                "thead-background": "var(--thead-background)",
                "thead-border": "var(--thead-border)",
                "tr-background-a": "var(--tr-background-a)",
                "tr-background-b": "var(--tr-background-b)",
                "header-bg": "var(--header-bg)",
                "terminal-screen": "var(--terminal-screen)",
                "terminal-shadow": "var(--terminal-shadow)",
                "blobs-shadow": "var(--blobs-shadow)",
                "socials-background": "var(--socials-background)",
                "socials-border": "var(--socials-border)",
            },
            fontFamily: {
                ibm: "'IBM CGAthin'",
                apricot: "'Apricot 200L 2y'",
                mono: "'Spline Sans Mono', monospace",
                sans: "'Inter', sans-serif",
            },
        },
    },
    plugins: [],
};
