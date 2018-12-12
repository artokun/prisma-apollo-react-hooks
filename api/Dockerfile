# Base image
FROM mhart/alpine-node:10

WORKDIR /usr/src
# Install dependencies
COPY ./package*.json ./
RUN npm install -g prisma
RUN npm install
COPY ./ ./
EXPOSE 4000
ENV NODE_ENV=production

# Default command
CMD ["npm", "run", "start"]