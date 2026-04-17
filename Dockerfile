# Development Dockerfile for React application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using npm with legacy peer deps to resolve conflicts
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Expose port 3000 (React development server default port)
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]