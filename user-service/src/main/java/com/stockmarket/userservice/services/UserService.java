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

	public void updateUser(User user, int id) {
		user.setId(id);
		User curr_user = userRepository.findById(id).get();
		if(curr_user.getContact() != null) {
			user.getContact().setId(curr_user.getContact().getId());
		}
		userRepository.save(user);
	}

	public void deleteUser(int id) {
		userRepository.deleteById(id);
	}

	public boolean getLogin(User user) {
		Iterable<User> iterable = userRepository.findAll();
		boolean found = false;
		for(User u : iterable) {
            if(u.getUsername().equals(user.getUsername())){
                found = u.getPassword().equals(user.getPassword());
                break;
            }
		}
		return found;
	}

	public User getUserByUsername(String username) {
		return userRepository.findByUsername(username)
				.orElse(null);
	}
}
