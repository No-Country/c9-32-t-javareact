FROM eclipse-temurin:17-jdk-alpine
WORKDIR /server
COPY target/cleanreactive.jar server/cleanreactive.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/server/cleanreactive.jar"]