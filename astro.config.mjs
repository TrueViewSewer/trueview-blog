import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.trueviewsewer.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      customPages: [
        'https://blog.trueviewsewer.com/',
        'https://blog.trueviewsewer.com/blog/',
        'https://blog.trueviewsewer.com/blog/why-every-utah-homebuyer-needs-sewer-scope-inspection/',
        'https://blog.trueviewsewer.com/blog/understanding-your-sewer-scope-report-what-to-look-for/',
        'https://blog.trueviewsewer.com/blog/utah-real-estate-market-sewer-inspections-important/',
        'https://blog.trueviewsewer.com/why-every-utah-homebuyer-needs-sewer-scope-inspection/',
        'https://blog.trueviewsewer.com/understanding-your-sewer-scope-report-what-to-look-for/',
        'https://blog.trueviewsewer.com/utah-real-estate-market-sewer-inspections-important/'
      ]
    })
  ],
  output: 'static'
});
