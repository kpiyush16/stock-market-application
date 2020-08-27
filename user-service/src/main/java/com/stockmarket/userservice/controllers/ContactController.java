package com.stockmarket.userservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.userservice.entities.Contact;
import com.stockmarket.userservice.services.ContactService;

@RestController
public class ContactController {
	@Autowired
	private ContactService contactService;
	
	@RequestMapping("/contacts")
	public List<Contact> getAllContacts() {
		return contactService.getAllContacts();
	}
	
	@RequestMapping("/contacts/{id}")
	public Contact getContact(@PathVariable int id) {
//		Contact contact = new User(9898, "sus@gmail.com", "875647", "patna", "bihar", "800003");
		return contactService.getContact(id);
//		return contact;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/contacts")
	public void addContact(@RequestBody Contact contact) {
		contactService.addContact(contact);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/contacts/{id}")
	public void updateContact(@RequestBody Contact contact, @PathVariable int id) {
		contactService.updateContact(contact, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
	public void deleteContact(@PathVariable int id) {
		contactService.deleteContact(id);
	}
}
