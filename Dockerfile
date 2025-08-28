# Use the official Node.js image as the base image
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the working directory
COPY . .

# Start the application
CMD ["npm", "start"]