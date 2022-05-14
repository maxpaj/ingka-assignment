FROM node:16-alpine

WORKDIR /app

# Copy over package.json and install packages
COPY package.json ./
RUN npm install

# Copy app files
COPY next.config.js ./
COPY pages ./pages
COPY public ./public
COPY styles ./styles

# Run the app
CMD ["npm", "run", "dev"]