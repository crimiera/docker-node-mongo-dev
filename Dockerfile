FROM mhart/alpine-node:10 
WORKDIR /app
COPY . .
RUN npm install
RUN npm i -g nodemon
RUN ls -la ./
EXPOSE 3000
CMD [ "npm", "start" ]