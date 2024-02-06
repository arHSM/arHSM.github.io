/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                accent: "var(--accent)",
                "terminal-screen": "var(--terminal-screen)",
            },
            fontFamily: {
                ibm: '"IBM CGAthin"',
                apricot: '"Apricot 200L 2y"',
            },
        },
    },
    plugins: [],
};
