// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://italianpizzacatering.com.au/',
      lastModified: new Date(),
    },
    {
      url: 'https://italianpizzacatering.com.au/compare',
      lastModified: new Date(),
    },
    {
      url: 'https://italianpizzacatering.com.au/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://italianpizzacatering.com.au/reports',
      lastModified: new Date(),
    },
  ]
}
