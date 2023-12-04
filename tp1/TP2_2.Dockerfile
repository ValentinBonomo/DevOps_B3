FROM node:latest
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build ./build
RUN groupadd -r group && useradd -r -g group user
RUN chown -R user:group /usr/src/app
USER user
EXPOSE 3000
CMD [ "node", "build/index.js" ]
