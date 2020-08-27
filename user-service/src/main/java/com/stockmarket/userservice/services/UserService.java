package com.stockmarket.userservice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.userservice.entities.User;
import com.stockmarket.userservice.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getAllUsers() {
		List<User> userList = new ArrayList<>();
		userRepository.findAll()
				.forEach(userList::add);
		return userList;
	}
	
	public User getUser(int id) {
		return userRepository.findById(id).get();
	}

	public void addUser(User user) {
		userRepository.save(user);
		
	}
}
