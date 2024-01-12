# Docker image.
FROM node:18.19.0-alpine

# Which user.
USER root

# Create app directory
WORKDIR /root/app

# Copy app directory.
COPY . .

# Node package install.
RUN npm install

# Node npm build
RUN npm run build

# Set timezone.
ENV TZ=Europe/Istanbul

# Run.
CMD ["npm", "start"]