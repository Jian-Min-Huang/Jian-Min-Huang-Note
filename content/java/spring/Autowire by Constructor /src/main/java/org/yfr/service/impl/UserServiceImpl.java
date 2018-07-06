package org.yfr.service.impl;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yfr.pojo.entity.User;
import org.yfr.repository.UserRepository;
import org.yfr.service.UserService;

import java.util.List;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class UserServiceImpl implements UserService {

    private final @NonNull UserRepository userRepository;

    @Override
    public User postUser(String name, Integer age) {
        return userRepository.save(new User(null, name, age));
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

}
