// app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = 'https://tomparis.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}