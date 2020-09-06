package com.stockmarket.gateway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// import java.util.ArrayList;

import com.stockmarket.gateway.dto.JwtRequest;
// import com.stockmarket.gateway.dto.JwtResponse;
import com.stockmarket.gateway.services.JwtService;
import com.stockmarket.gateway.utils.JwtTokenUtil;
import com.stockmarket.gateway.utils.MyUser;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtService jwtUserService;


	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		System.out.println("in /auth");

		final UserDetails userDetails = jwtUserService.loadUserByUsername(authenticationRequest.getUsername());
		MyUser myUser = jwtUserService.getStore_user();
		// MyUser myUser = this.jwtUserService.getUserByUsername(authenticationRequest.getUsername());
		// final UserDetails userDetails = new User(myUser.getUsername(), myUser.getPassword(), new ArrayList<>());

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword(), myUser);

		final String token = jwtTokenUtil.generateToken(userDetails);
		myUser.setToken(token);
		// JwtResponse jwtReponse = new JwtResponse(token);

		return ResponseEntity.ok(myUser);
	}

	private void authenticate(String username, String password, MyUser myUser)throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e); 
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		if(username.equals(myUser.getUsername()) && password.equals(myUser.getPassword())){
			System.out.println("Valid User");
		}
		else{
			throw new Exception("Invalid Credentials");
		}
	}
	
}
