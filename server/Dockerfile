FROM eclipse-temurin:17-jdk-alpine
WORKDIR /server
COPY target/*.jar cleanreactive-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/cleanreactive-0.0.1-SNAPSHOT.jar"]