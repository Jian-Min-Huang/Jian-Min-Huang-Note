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

##### Q : SCP remote to local and local to remote
```sh
$ scp dev1:~/log.tar.gz .
$ scp ROOT.war dev1:~
```

##### Q : kill process in one command
```sh
$ kill -9 $(ps aux | grep java | grep catch | awk {'print $2'})
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
head, tail, sed, top
```