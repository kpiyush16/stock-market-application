package com.stockmarket.userservice.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	private int id;
	private int confirmed;
	private String username;
	private String password;
	private String userType;
	private int contactId;

	public User() {
	}

	public User(int id, int confirmed, String username, String password, String userType, int contactId) {
		super();
		this.id = id;
		this.confirmed = confirmed;
		this.username = username;
		this.password = password;
		this.userType = userType;
		this.contactId = contactId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(int confirmed) {
		this.confirmed = confirmed;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
	}
}
