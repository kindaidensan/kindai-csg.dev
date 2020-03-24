FROM tomcat:8-jre8

ADD https://github.com/gitbucket/gitbucket/releases/download/4.33.0/gitbucket.war /opt/gitbucket.war

RUN ln -s /gitbucket /root/.gitbucket

VOLUME ./gitbucket/gitbucket-data:/gitbucket

EXPOSE 8080 29418

CMD ["java", "-jar", "/opt/gitbucket.war"]