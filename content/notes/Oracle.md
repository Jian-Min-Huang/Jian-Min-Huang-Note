##### date function
```sql
sql> SELECT TO_CHAR(SYSDATE,'YYYY/MM/DD HH24:MI:SS') FROM DUAL;
```

##### top n record
```sql
sql> SELECT * FROM (SELECT * FROM LOTTERY_TYPE ORDER BY ID) WHERE ROWNUM < (n + 1);
```

##### plus and minus time
```sql
sql> SELECT SYSDATE, SYSDATE+1/24, SYSDATE +1/1440, SYSDATE + 1/86400 FROM DUAL;
```

##### execute store procedure
```sql
sql> begin
P_INIT_USER_RET_POINT_77536_77541();
commit;
end
```

##### use sequence
```sql
sql> INSERT INTO TABLE(ID, COLUMN1, COLUMN2, ...) VALUES (SEQUENCE.NEXTVAL, VALUE1, VALUE2, ...);
```

##### show all sequence
```sql
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM DBA_SEQUENCES;
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM ALL_SEQUENCES;
sql> SELECT SEQUENCE_OWNER, SEQUENCE_NAME FROM USERS_SEQUENCES;
```