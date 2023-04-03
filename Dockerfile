FROM node:18-alpine
WORKDIR /root
RUN apk add git
RUN git clone https://github.com/Honshu11/aurifex-core-app.git
WORKDIR /root/aurifex-core-app/
RUN npm install
RUN npm run build
CMD ["npm", "start"]
