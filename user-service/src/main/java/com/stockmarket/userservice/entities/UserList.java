package com.stockmarket.userservice.entities;

import java.util.List;

public class UserList {
	private List<User> userList;

	public UserList() {
		super();
	}
	
	public UserList(List<User> userList) {
		super();
		this.userList = userList;
	}

	@Override
	public String toString() {
		return "UserList [userList=" + userList + "]";
	}

	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}
	
}
