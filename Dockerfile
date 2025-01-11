# Use the official Node.js 23 Alpine image
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the NestJS application
CMD ["npm", "run", "start:prod"]
