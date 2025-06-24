import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

export default defineConfig({
  output: 'static', 
  base: '/',
  integrations: [
    expressiveCode({ themes: [spectreDark] }),
    mdx(),
    sitemap(),
    spectre({
      name: 'André Franco',
      openGraph: {
        home: {
          title: 'Home | André Franco',
          description: 'Welcome to my Portfolio!',
        },
        blog: {
          title: 'Blog | André Franco',
          description: 'Welcome to my blog!',
        },
        projects: {
          title: 'Projects | André Franco',
        },
      },
    }),
  ],
});
