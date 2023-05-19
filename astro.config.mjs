import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true
  },
  integrations: [tailwind(), mdx()],
  server: {
    port: 8080,
    host: false
  }
  // server: { port: 8080, host: true},
});