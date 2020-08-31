package com.stockmarket.userservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.userservice.entities.Contact;
import com.stockmarket.userservice.entities.ContactList;
import com.stockmarket.userservice.services.ContactService;

@RestController
public class ContactController {
	@Autowired
	private ContactService contactService;
	
	@RequestMapping("/contacts")
	public ContactList getAllContacts() {
		ContactList contactList = new ContactList(contactService.getAllContacts());
		return contactList;
	}
	
	@RequestMapping("/contacts/{id}")
	public Contact getContact(@PathVariable int id) {
		return contactService.getContact(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/contacts")
	public Contact addContact(@RequestBody Contact contact) {
		return contactService.addContact(contact);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/contacts/{id}")
	public Contact updateContact(@RequestBody Contact contact, @PathVariable int id) {
		return contactService.updateContact(contact, id);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
	public void deleteContact(@PathVariable int id) {
		contactService.deleteContact(id);
	}
}
