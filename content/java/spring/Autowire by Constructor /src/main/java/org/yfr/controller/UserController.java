package org.yfr.controller;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.yfr.pojo.entity.User;
import org.yfr.service.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {

    private final @NonNull UserService userService;

    @GetMapping(path = "users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

}
