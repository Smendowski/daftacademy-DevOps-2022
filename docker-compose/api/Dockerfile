FROM python:3.9

LABEL Version="1.1" Author="Your Name" Email="your@email.address"

ARG USER_ID=1001
ARG PROJECT_DIR=/home/my_app

ENV USER=mobydick
ENV GROUP=app_users
ENV GROUP_ID=1000
ENV HOME $PROJECT_DIR

RUN addgroup --gid $GROUP_ID $GROUP
RUN adduser --uid $USER_ID --ingroup $GROUP --home $HOME $USER

WORKDIR $HOME

COPY requirements.txt $HOME
RUN pip install -r requirements.txt
COPY main.py run.sh $HOME/

USER $USER

EXPOSE 8080
