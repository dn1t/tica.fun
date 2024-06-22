import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  integrations: [icon()],
});
