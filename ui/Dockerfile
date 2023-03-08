# Base Image - Node 18.15 
FROM node:18.15 as build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build


# Stage 2 - the production environment
FROM nginx:stable-alpine as production-stage

# Copy the build from the previous stage
COPY --from=build-stage /app/dist/ui /usr/share/nginx/html

# Expose the port the app runs in
EXPOSE 80

# Serve the app
CMD ["nginx", "-g", "daemon off;"]
