# Considerations

- What tools should I use to quickly put together an MVP and get something out the door?
- Use something that IKEA is already using
  - https://techradar.ingka.com/
- Searching a product by price should probably not be done using a free text input - could easily be improved
- Sketch in the specification is very vague and seems incorrect in some places - what are the options for those points?

# Questions

- What to do with the /products route? Fall back to home page?
- What do the prices refer to, dollars?
- Dockerized delivery - refers to deploying with Docker or building with Docker?

# Further additions

- Improve administration of products
  - Use a CMS for content, something like Strapi (https://strapi.io/) or Contentful (https://www.contentful.com/)
- How do we apply some security first principles?
  - Host with a provider that takes care of DDoS? Vercel, Cloudflare
  - Rate limit requests
- How to improve the SEO for the site?
  - OpenGraph tags
- Accessibility
  - What is the minimum necessary to have the site be accessible to vision impaired?
- Improved performance (lower latency means more sales)
  - Statically generated product pages
  - Should there be some kind of infinite scrolling on the product list page?
- Improve quality control
  - Add E2E-test
- Design system
  - Color scheme, theming variables etc. to keep everything together when making changes on the design
- i18n
  - Translations
  - Currencies
- Add error tracking
- Add metrics tracking
- Infrastructure as Code

# Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
