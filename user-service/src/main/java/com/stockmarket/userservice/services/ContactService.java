package com.stockmarket.userservice.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.userservice.entities.Contact;
import com.stockmarket.userservice.repositories.ContactRepository;

@Service
public class ContactService {
	@Autowired
	private ContactRepository contactRepository;

	public List<Contact> getAllContacts() {
		List<Contact> contactList = new ArrayList<>();
		contactRepository.findAll()
				.forEach(contactList::add);
		return contactList;
	}
	
	public Contact getContact(int id) {
		return contactRepository.findById(id).get();
	}

	public Contact addContact(Contact contact) {
		return contactRepository.save(contact);	
	}
	
	public Contact updateContact(Contact contact, int id) {
		contact.setId(id);
		return contactRepository.save(contact);
	}

	public void deleteContact(int id) {
		contactRepository.deleteById(id);
	}
}
