FROM node:0.10

MAINTAINER Oscar Buse <oscar@kwalinux.nl>

RUN useradd -c 'Oscar' -m -d /home/oscar -s /bin/bash oscar
RUN mkdir -p /data/app
RUN chown -R oscar.oscar /data/app

USER oscar

ENV AP /data/app
# Application Code
COPY *.js* $AP/

WORKDIR $AP

RUN npm install
CMD /usr/local/bin/node /data/app/index.js
