import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://afrancodev.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'André Franco',
      openGraph: {
        home: {
          title: 'Home | André Franco',
          description: 'Welcome to my Portfolio!'
        },
        blog: {
          title: 'Blog | André Franco',
          description: 'Welcome to my blog!'
        },
        projects: {
          title: 'Projects | André Franco'
        }
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;