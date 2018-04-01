ssh-keygen -t rsa -b 2048
id_rsa_xxx
empty
empty

ssh USER@HOST 'mkdir -p ~/.ssh;cat >> ~/.ssh/authorized_keys' < ~/.ssh/id_rsa.pub
ssh-copy-id -i id_rsa_gitlab.pub root@192.168.250.36

paste public to github

.ssh/config
# GitHub
Host github.com
HostName github.com
User git
Identity File /Users/yFr/.ssh/github/id_rsa_github
# Gitlab
Host gitlab.preuat.com.tw
HostName gitlab.preuat.com.tw
User git
Identity File /Users/yFr/.ssh/gitlab/id_rsa_gitlab



# CentOS 7
```sh
$ sudo yum install ntp -y
$ sudo ntpdate time.stdtime.gov.tw (manual)
$ sudo vi /etc/ntp.conf (setting Server block)
$ sudo systemctl start ntpd
$ sudo systemctl enable ntpd
```

