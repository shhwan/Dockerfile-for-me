FROM centos:7.5.1804
LABEL maintainer="SHY"

#ARG
ARG gitver="2.9.5"
ARG tmp="/var/tmp"

#ENV
#ENV http_proxy=value
#ENV https_proxy=value
#ENV HTTP_PROXY=value
#ENV HTTPS_PROXY=value

#Yum update & base install & useradd
RUN yum -y update && \
yum -y install epel-release sudo vim make wget unzip zip && \
mkdir -p ${tmp}

#Git install
RUN yum -y install gcc curl-devel expat-devel gettext-devel openssl openssl-devel zlib-devel perl-ExtUtils-MakeMaker autoconf libffi-devel
RUN wget -P ${tmp} https://mirrors.edge.kernel.org/pub/software/scm/git/git-${gitver}.tar.gz
RUN cd ${tmp} && \
tar xzvf git-${gitver}.tar.gz && \
cd ${tmp}/git-${gitver} && \
make prefix=/usr/local all && \
make prefix=/usr/local install && \
source /etc/profile

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

#Psql 11 install
##Postgresql repo Official - https://yum.postgresql.org/repopackages.php
##Postgresql tutorial database sample dvdrental - http://www.postgresqltutorial.com/postgresql-sample-database/
RUN yum -y install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
RUN yum -y install postgresql11-server
#RUN sh /usr/pgsql-11/bin/postgresql-11-setup initdb
COPY ./templates/dvdrental.tar ${tmp}/
#USER postgres
#RUN cd ${tmp} && \ 
#pg_restore -U postgres -d dvdrental ./dvdrental.tar

#exec
CMD ["/sbin/init"]