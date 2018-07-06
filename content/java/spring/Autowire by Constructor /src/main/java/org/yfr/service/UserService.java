package org.yfr.service;

import org.yfr.pojo.entity.User;

import java.util.List;

public interface UserService {

   User postUser(String name, Integer age);

   List<User> getUsers();

}
