package com.example.company.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.company.entities.Company;

@Repository
public interface CompanyRepo extends CrudRepository<Company, Integer> {
	public List<Company> findBySectorId(int sectorId);
}
