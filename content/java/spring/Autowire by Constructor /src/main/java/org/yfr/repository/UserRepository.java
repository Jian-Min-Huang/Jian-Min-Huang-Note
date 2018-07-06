package org.yfr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yfr.pojo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
