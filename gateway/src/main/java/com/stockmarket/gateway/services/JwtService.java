package com.stockmarket.gateway.services;

import com.stockmarket.gateway.utils.MyUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JwtService{

	// @Value("${jwt.username}")
	// private String username;
	
	
	// @Value("${jwt.password}")
	// private String password;
	
	@Autowired
    private RestTemplate restTemplate;

	// @Autowired
	// private PasswordEncoder passwordEncoder;
	
	public MyUser getUserByUsername(String input_username) throws Exception{
		MyUser myUser = restTemplate.getForObject("http://user-service/users/name/"+input_username, MyUser.class);
		if(myUser == null){
			throw new Exception("No User found with username: \'" + input_username +"\'");
		}
		else if (myUser.getUsername().equals(input_username)) {
			// return new User(myUser.getUsername(), passwordEncoder.encode(myUser.getPassword()), new ArrayList<>());
			// return new User(myUser.getUsername(), myUser.getPassword(), new ArrayList<>());
			return myUser;
		} else {
			throw new Exception("No User found with username: \'" + input_username +"\'");
		}
	}
	
}
