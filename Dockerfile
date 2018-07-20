FROM node:8-alpine

RUN npm i -g pm2

ADD ./assets /assets

ENV PM2_HOME /var/log/pm2

RUN mkdir -p $PM2_HOME/logs \
  && chown -R node:node $PM2_HOME \
  && chmod -R ug+x $PM2_HOME
  #&& umask 0002

EXPOSE 3000
EXPOSE 2000

CMD ["/usr/local/bin/pm2-runtime", "/assets/pm2.config.js", "--web", "2000"]
