FROM jetbrains/teamcity-agent:2017.2.4

MAINTAINER Jian-Min Huang <yfr.huang@gmail.com>

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get update && \
    apt-get install nodejs && \
    npm install -g yarn \
