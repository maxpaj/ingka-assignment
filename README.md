# Install

For local machine development, `node@16` and `npm@8` will suffice. Use `npm install` to install node packages.

For development with Docker, [install Docker](https://docs.docker.com/get-docker/).

# Development

For local machine development, use

```
npm run dev
```

With Docker:

```
docker-compose up --build --force-recreate
```

# Test

On local machine:

```
npm run test
```

Inside Docker container:

```
docker build -t ingka-assignment-test --target test .
docker run --rm --name ingka-assignment-test ingka-assignment-test
```

# Deploy

GitHub actions CI/CD publishes a Docker image to [maxpaju@Docker Hub](https://hub.docker.com/r/maxpaju/ingka-assignment/tags).

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
