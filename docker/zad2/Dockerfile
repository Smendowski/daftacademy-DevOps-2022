FROM python:3.9

ARG USER_ID
ARG PROJECT_DIR

RUN export HOME=${PROJECT_DIR}

RUN groupadd -g 1000 app_users

RUN useradd -u ${USER_ID} -g app_users -m -d ${PROJECT_DIR} mobydick

USER ${USER_ID}:app_users
WORKDIR ${PROJECT_DIR}

COPY main.py ${PROJECT_DIR}
COPY requirements.txt ${PROJECT_DIR}
COPY run.sh ${PROJECT_DIR}

RUN pip install -r requirements.txt
ENV PATH=${PATH}:${PROJECT_DIR}/.local/bin

CMD ["bash","./run.sh"]

LABEL Version="1.0" Author="Smendowski" Email="your@email.address"
