package com.stockmarket.stockexchange.repositories;

import com.stockmarket.stockexchange.entities.Ipo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IpoRepository extends CrudRepository<Ipo, Integer> {
    
}