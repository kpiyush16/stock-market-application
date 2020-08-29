package com.stockmarket.stockexchange.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stockmarket.stockexchange.entities.StockExchange_Company;

@Repository
public interface StockExchange_CompanyRepository extends CrudRepository<StockExchange_Company, Integer>{
	public List<StockExchange_Company> findByStockExchangeId(int stockExchangeId);
	public List<StockExchange_Company> findByCompanyId(int companyId);
}
