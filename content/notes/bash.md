##### Q : split large file
```sh
$ split -b 50m catalina.out log.part.
```

##### Q : fetch last 100 line and dump to file
```sh
$ tail -n 100 catalina.out > log
```

##### Q : mkdir recusively
```sh
$ mkdir -p ~/x/y
```

##### Q : compress and decompress tar file
```sh
$ tar -zcf log.tar.gz log*
$ tar -zxf log.tar.gz
```

##### Q : decompress gz file
```sh
$ gunzip log.gz
```

##### Q : SCP remote to local and local to remote
```sh
$ scp dev1:~/log.tar.gz .
$ scp ROOT.war dev1:~
```

##### Q : kill process in one command
```sh
$ kill -9 $(ps aux | grep java | grep catch | awk {'print $2'})
ps aux | grep zookeeper | grep -v grep | awk {'print $2'}
```

##### Q : while loop
```sh
$ while true; do date; sleep 1s; done;
```

##### Q : service location
```
$ /etc/init.d/xxx
```

##### other
```
sed, top
```

##### find top 10 large file in directory
```sh
$ du -a /var | sort -n -r | head -n 10
```
 
##### find file or directory with name 
```sh
$ find /home -iname 'showVersion.sh' -type f
$ find /home -iname 'script' -type d
```

##### find ps
```sh
$ ps aux --sort -rss
```

##### ab
```
$ ab -n 10 -c 10 http://www.0878.com/
```

##### proc
```
$ /proc/pid/status
```

##### hosts & hostname
```
$ vi /etc/hosts
$ vi /etc/sysconfig/network
```

##### port
```
$ telnet ip port
```

##### thread dump
```sh
$ jstack -l ${PID} > ~/jstack.out
```

##### stop fireware
```sh
$ service iptables stop (temporary
$ chkconfig iptables off (permanent
```

# check linux distribution type
```sh
$ cat /etc/issue
```

# install java
```sh
$ rpm -ivh jdk-8u162-linux-x64.rpm 
```