package com.stockmarket.gateway.utils;

public class MyUser {
	private int id;
	private String username;
	private String password;
	private String userType;
	private int confirmed;
	private Contact contact;
	private String Token;

	public MyUser() {
	}

	public MyUser(int id, String username, String password, String userType, int confirmed, Contact contact, String Token) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.userType = userType;
		this.confirmed = confirmed;
		this.contact = contact;
		this.Token = Token;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", userType=" + userType
				+ ", confirmed=" + confirmed + ", contact=" + contact + ", Token="+ Token + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(int confirmed) {
		this.confirmed = confirmed;
	}

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	public String getToken() {
		return Token;
	}

	public void setToken(String Token) {
		this.Token = Token;
	}

	
}
