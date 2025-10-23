# Use Node 18 (alpine for a small image)
FROM node:22-alpine

ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy app source
COPY . .

# Run as non-root user for safety
USER node

# Start the app
CMD ["node", "index.js"]