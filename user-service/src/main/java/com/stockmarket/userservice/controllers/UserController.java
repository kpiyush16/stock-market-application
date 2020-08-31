package com.stockmarket.userservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.userservice.entities.User;
import com.stockmarket.userservice.entities.UserList;
import com.stockmarket.userservice.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/users")
	public UserList getAllUsers() {
		UserList userList = new UserList(userService.getAllUsers());
		return userList;
	}
	
	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable int id) {
//		User user = new User(123, 1, "sushant", "password", "user", 9898);
		return userService.getUser(id);
//		return user;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/users")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/users/{id}")
	public void updateUser(@RequestBody User user, @PathVariable int id) {
		userService.updateUser(user, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/users/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
	}
	
	@RequestMapping("/users/login")
    public ResponseEntity<Boolean> getLogin(@RequestBody User user){
        boolean isValid = userService.getLogin(user);
        return new ResponseEntity<Boolean>(isValid, HttpStatus.OK);
    }
}
