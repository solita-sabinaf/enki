FROM node:16.14.2-alpine3.15

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

RUN addgroup appuser && adduser --disabled-password --gecos '' appuser --ingroup appuser

# Server
ENV CONTENT_BASE=/app/ui
COPY server /app/server
WORKDIR /app/server

# Application
COPY build /app/ui/

RUN chown -R appuser:appuser /app
USER appuser

ARG BUILD_DATE
ENV BUILD_DATE=$BUILD_DATE

EXPOSE 9000
CMD ["node", "src/server.js"]
