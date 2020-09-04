package com.stockmarket.userservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import com.stockmarket.userservice.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	Optional<User> findByUsername(String username);

}
