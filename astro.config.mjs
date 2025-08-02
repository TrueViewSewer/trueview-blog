import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trueviewsewer.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      customPages: [
        'https://trueviewsewer.com',
        'https://trueviewsewer.com/why-every-utah-county-homebuyer-needs-sewer-scope-inspection',
        'https://trueviewsewer.com/understanding-your-sewer-scope-report-what-to-look-for',
        'https://trueviewsewer.com/utah-county-real-estate-market-sewer-inspections-important'
      ]
    })
  ],
  output: 'static'
});