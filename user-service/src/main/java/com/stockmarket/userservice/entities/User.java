package com.stockmarket.userservice.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int confirmed;
	@Column(unique = true)
	private String username;
	private String password;
	private String userType;
	
	@OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL)
	private Contact contact;

	public User() {
	}

	public User(int id, int confirmed, String username, String password, String userType, Contact contact) {
		super();
		this.id = id;
		this.confirmed = confirmed;
		this.username = username;
		this.password = password;
		this.userType = userType;
		this.contact = contact;
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

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", confirmed=" + confirmed + ", username=" + username + ", password=" + password
				+ ", userType=" + userType + ", contact=" + contact + "]";
	}

	
	
}
