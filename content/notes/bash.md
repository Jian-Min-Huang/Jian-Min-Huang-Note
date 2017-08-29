##### Q : split large file
```sh
$ split -b 50m top.txt top.part.
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

##### Q : list process and kill it
```sh
$ ps aux | grep java | grep catch
$ kill -9 xxx
```