FROM centos:7.5.1804
LABEL maintainer="SHY"

#ARG
ARG gitver="2.9.5"
ARG USER="deploy"
ARG PASSWD="deploy_"

#ENV
#ENV http_proxy=value
#ENV https_proxy=value
#ENV HTTP_PROXY=value
#ENV HTTPS_PROXY=value

#Yum update & base install & useradd
RUN yum -y update && \
yum -y install epel-release sudo vim make wget unzip zip && \
useradd -m ${USER} && \
echo "${USER}:${PASSWD}" | chpasswd && \
echo "${USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
mkdir -p /home/${USER}/tmp

#Git install
RUN yum -y install gcc curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-ExtUtils-MakeMaker autoconf libffi-devel
RUN wget -P /home/${USER}/tmp https://mirrors.edge.kernel.org/pub/software/scm/git/git-${gitver}.tar.gz
RUN cd /home/${USER}/tmp && \
tar xzvf git-${gitver}.tar.gz && \
cd /home/${USER}/tmp/git-${gitver} && \
make prefix=/usr/local all && \
make prefix=/usr/local install && \
source /etc/profile

#User Change
USER ${USER}
WORKDIR /home/${USER}
ENV HOME /home/${USER}

#Pyenv install
##Pyenv Homepage(git) - https://github.com/pyenv/pyenv
RUN git clone https://github.com/pyenv/pyenv.git ~/.pyenv
ENV PYENV_ROOT=$HOME/.pyenv
ENV PATH=$PYENV_ROOT/bin:$PATH
RUN source ~/.bash_profile
#RUN pyenv install 3.7.3 && \
#pyenv global 3.7.3

#Nvm install
##Nvm Homepage(git) - https://github.com/nvm-sh/nvm
RUN git clone https://github.com/nvm-sh/nvm.git ~/.nvm
ENV NVM_DIR="$HOME/.nvm"
ENV [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
ENV [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
RUN source ~/.bash_profile
#RUN nvm install node && \
#nvm use node