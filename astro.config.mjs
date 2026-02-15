// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
     output: 'server',   // or 'static' if your site is static
  adapter: vercel(),
});
