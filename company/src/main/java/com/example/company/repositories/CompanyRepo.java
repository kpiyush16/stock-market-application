package com.example.company.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.company.entities.Company;

@Repository
public interface CompanyRepo extends CrudRepository<Company, Integer> {

}
