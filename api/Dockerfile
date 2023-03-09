# Run on Node 18.15 Alpine
FROM node:18.15-alpine 

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY  . .

# Install dependencies
RUN npm install

# Run the app
CMD ["npm", "run", "start"]