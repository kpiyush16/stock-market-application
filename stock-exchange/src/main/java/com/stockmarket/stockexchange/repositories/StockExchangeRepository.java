package com.stockmarket.stockexchange.repositories;

import com.stockmarket.stockexchange.entities.StockExchange;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockExchangeRepository extends CrudRepository<StockExchange, Integer> {
    
}