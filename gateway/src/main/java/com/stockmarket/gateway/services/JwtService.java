package com.stockmarket.gateway.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class JwtService implements UserDetailsService {

	// @Value("${jwt.username}")
	// private String username;
	
	
	// @Value("${jwt.password}")
	// private String password;
	
	@Autowired
    private RestTemplate restTemplate;

	// @Autowired
	// private PasswordEncoder passwordEncoder;
	
	
	@Override
	public UserDetails loadUserByUsername(String input_username) throws UsernameNotFoundException {
		MyUser myUser = restTemplate.getForObject("http://user-service/users/name/"+input_username, MyUser.class);
		if(myUser == null){
			throw new UsernameNotFoundException("User not found with username: " + input_username);
		}
		else if (myUser.getUsername().equals(input_username)) {
			// return new User(myUser.getUsername(), passwordEncoder.encode(myUser.getPassword()), new ArrayList<>());
			return new User(myUser.getUsername(), myUser.getPassword(), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + myUser.getUsername());
		}
	}
	
}
