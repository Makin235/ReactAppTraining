package com.makin.makintours.repository;

import com.makin.makintours.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
