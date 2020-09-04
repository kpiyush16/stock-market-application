package com.stockmarket.gateway.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.gateway.dto.JwtRequest;
import com.stockmarket.gateway.dto.JwtResponse;
import com.stockmarket.gateway.services.JwtService;
import com.stockmarket.gateway.utils.JwtTokenUtil;


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

		final UserDetails userDetails = jwtUserService.loadUserByUsername(authenticationRequest.getUsername());

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword(), userDetails);

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password, UserDetails userDetails)throws Exception {
		try {
			if(username.equals(userDetails.getUsername()) && password.equals(userDetails.getPassword())){
				System.out.println("Valid User");
			}
			else{

				throw new Exception("INVALID_CREDENTIALS : P1:" + password + " ,P2:" + userDetails.getPassword());
			}
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
}
