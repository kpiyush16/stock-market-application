package com.stockmarket.userservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.userservice.entities.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
