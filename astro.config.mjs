import { defineConfig } from 'astro/config';

// Static site - no adapter needed for Cloudflare Pages
export default defineConfig({
  output: 'static',
});