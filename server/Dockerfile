FROM eclipse-temurin:17-jdk-alpine
COPY target/*.jar cleanreactive.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/cleanreactive.jar"]