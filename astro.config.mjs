import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { mdTransform } from "./src/plugins/mdTransform";

export default defineConfig({
    site: "https://arhsm.cat",
    markdown: {
        gfm: true,
        smartypants: true,
        syntaxHighlight: "prism",
        remarkPlugins: [mdTransform],
    },
    integrations: [mdx(), sitemap(), tailwind()],
});
