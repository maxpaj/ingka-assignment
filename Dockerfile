FROM node:16 as base
WORKDIR /app

# Copy app files
COPY . .

RUN npm ci

FROM base as test
CMD ["npm", "run", "test"]

FROM base as development
CMD ["npm", "run", "dev"]

FROM base as build
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app

COPY --from=build ./app/.next ./.next
COPY --from=build ./app/package.json ./package.json
COPY --from=build ./app/package-lock.json ./package-lock.json

RUN npm ci --only=production

EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]