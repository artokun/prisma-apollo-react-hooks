# Use Node.js version 10
FROM mhart/alpine-node:10

# Set the working directory
WORKDIR /usr/src

# Copy package manager files to the working directory and run install
COPY ./package.json ./package-lock.json ./
RUN npm install

# Copy all files to the working directory
COPY ./ ./

CMD [ "npm", "run", "start" ]