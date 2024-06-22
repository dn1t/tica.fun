import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
