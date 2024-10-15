FROM node:20.0
COPY . .
RUN npm i
CMD ["npm", "start"]
EXPOSE 3000