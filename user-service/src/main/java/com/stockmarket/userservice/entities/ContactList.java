package com.stockmarket.userservice.entities;

import java.util.List;

public class ContactList {
	private List<Contact> contactList;

	public ContactList() {
		super();
	}

	public ContactList(List<Contact> contactList) {
		super();
		this.contactList = contactList;
	}

	public List<Contact> getContactList() {
		return contactList;
	}

	public void setContactList(List<Contact> contactList) {
		this.contactList = contactList;
	}
	
}
