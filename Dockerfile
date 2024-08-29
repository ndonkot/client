# Step 1: Build the Angular app
FROM node:18 AS build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install Angular dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Step 2: Serve the app using NGINX
FROM nginx:alpine

# Copy the built Angular app from the previous step to the NGINX html folder
COPY --from=build /app/dist/client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
