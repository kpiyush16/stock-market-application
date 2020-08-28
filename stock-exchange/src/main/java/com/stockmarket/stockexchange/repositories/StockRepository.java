package com.stockmarket.stockexchange.repositories;

import com.stockmarket.stockexchange.entities.Stock;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends CrudRepository<Stock, Integer> {
    
}