FROM centos:7.5.1804
LABEL maintainer="SHY"

#ARG
ARG gitver="2.9.5"

#ENV
#ENV http_proxy=value
#ENV https_proxy=value
#ENV HTTP_PROXY=value
#ENV HTTPS_PROXY=value

#Yum update & base install & useradd
RUN yum -y update && \
yum -y install epel-release sudo vim make wget unzip zip && \
mkdir -p /var/tmp

#Git install
RUN yum -y install gcc curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-ExtUtils-MakeMaker autoconf libffi-devel
RUN wget -P /var/tmp https://mirrors.edge.kernel.org/pub/software/scm/git/git-${gitver}.tar.gz
RUN cd /var/tmp && \
tar xzvf git-${gitver}.tar.gz && \
cd /var/tmp/git-${gitver} && \
make prefix=/usr/local all && \
make prefix=/usr/local install && \
source /etc/profile

#Httpd install
RUN yum -y install httpd

#enable httpd
RUN systemctl enable httpd

#exec
CMD ["/sbin/init"]