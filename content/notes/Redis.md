#####
```sh
$ redis-cli KEYS "prefix:*" | xargs redis-cli DEL
```