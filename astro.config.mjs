import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [markdoc(), react(), keystatic()],
  output: 'hybrid',
  adapter: cloudflare(),
});