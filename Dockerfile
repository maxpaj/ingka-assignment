FROM node:16-alpine as base

WORKDIR /app

# Copy over package.json and install packages
COPY package.json ./
COPY package-lock.json ./

RUN npm ci

# Copy app files
COPY . .

FROM base as test
CMD ["npm", "run", "test"]

FROM base as development
CMD ["npm", "run", "dev"]

FROM base as build
CMD ["npm", "run", "build"]


FROM base as production
EXPOSE 8080

# Run the app
CMD ["npm", "run", "start"]