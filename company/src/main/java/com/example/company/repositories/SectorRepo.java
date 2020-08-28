package com.example.company.repositories;

import com.example.company.entities.Sector;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectorRepo extends CrudRepository<Sector, Integer> {

}
