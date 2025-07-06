import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from "./src/utils/readTime.ts";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://vicparkrobotics.ca",

  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "material-theme-palenight",
        wrap: true,
      },
      drafts: true,
    }),
    svelte(),
    sitemap(),
  ],

  adapter: cloudflare(),
});
