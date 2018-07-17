FROM 340910543935.dkr.ecr.ap-southeast-1.amazonaws.com/node:8.11.3-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /app

EXPOSE 8000
CMD node index.js
#CMD [ "npm", "start" ]
