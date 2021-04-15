FROM node:12

ENV APP_DIR /app/current
WORKDIR ${APP_DIR}
COPY . .
RUN npm install --production

WORKDIR ${APP_DIR}/src/server
CMD ["npm", "start"]