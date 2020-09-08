package com.stockmarket.stockexchange.repositories;

import com.stockmarket.stockexchange.entities.Stock;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends CrudRepository<Stock, Integer>{
    public List<Stock> findByCompanyIdOrderByDateAsc(int companyId);
    public List<Stock> findByStockExchangeIdOrderByDateAsc(int stockExchangeId);
    public List<Stock> findByStockExchangeIdAndCompanyIdOrderByDateAsc(int stockExchangeId, int companyId);
}