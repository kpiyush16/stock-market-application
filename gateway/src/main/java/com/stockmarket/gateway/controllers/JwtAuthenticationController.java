package com.stockmarket.gateway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.DisabledException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

import com.stockmarket.gateway.dto.JwtRequest;
// import com.stockmarket.gateway.dto.JwtResponse;
import com.stockmarket.gateway.services.JwtService;
import com.stockmarket.gateway.utils.JwtTokenUtil;
import com.stockmarket.gateway.utils.MyUser;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	// @Autowired
	// private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtService jwtUserService;

	// @Autowired
	// private PasswordEncoder passwordEncoder;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		System.out.println("in /auth");


		MyUser myUser = this.jwtUserService.getUserByUsername(authenticationRequest.getUsername());
		final UserDetails userDetails = new User(myUser.getUsername(), myUser.getPassword(), new ArrayList<>());

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword(), userDetails);

		final String token = jwtTokenUtil.generateToken(userDetails);
		myUser.setToken(token);

		return ResponseEntity.ok(myUser);
	}

	private void authenticate(String username, String password, UserDetails userDetails)throws Exception {
		if(username.equals(userDetails.getUsername()) && password.equals(userDetails.getPassword())){
			System.out.println("Valid User");
		}
		else{
			throw new Exception("Invalid Credentials");
		}
	}
	
}
