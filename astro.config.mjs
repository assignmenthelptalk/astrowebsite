// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ciiassignmenthelp.com',
  output: 'server',   // or 'static' if your site is static
  adapter: vercel(),
  integrations: [sitemap()]
});
