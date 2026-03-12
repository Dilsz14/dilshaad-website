import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.dilshaadwilliams.co.za'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
              url: BASE_URL,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 1.0,
      },
      {
              url: `${BASE_URL}/about`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.8,
      },
      {
              url: `${BASE_URL}/life-insurance`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.9,
      },
      {
              url: `${BASE_URL}/ai-consultancy`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.9,
      },
      {
              url: `${BASE_URL}/digital-marketing`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.9,
      },
      {
              url: `${BASE_URL}/digital-branding`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.9,
      },
      {
              url: `${BASE_URL}/web-design`,
              lastModified: new Date(),
              changeFrequency: 'monthly',
              priority: 0.9,
      },
      {
              url: `${BASE_URL}/contact`,
              lastModified: new Date(),
              changeFrequency: 'yearly',
              priority: 0.7,
      },
        ]
}
