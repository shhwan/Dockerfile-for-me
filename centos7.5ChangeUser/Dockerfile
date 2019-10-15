FROM centos:7.5.1804
LABEL maintainer="SHY"

#ARG
ARG gitver="2.9.5"
ARG USER
ARG PASSWD

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
RUN yum -y install bzip2 bzip2-devel readline readline-devel sqlite sqlite-devel
RUN git clone https://github.com/pyenv/pyenv.git ~/.pyenv
RUN echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
RUN echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
RUN echo 'eval "$(pyenv init -)"' >> ~/.bashrc
#RUN pyenv install 3.7.3 && \
#pyenv global 3.7.3

#Nvm install
##Nvm Homepage(git) - https://github.com/nvm-sh/nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash
#RUN nvm install node && \
#nvm use node