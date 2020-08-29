package com.stockmarket.stockexchange.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockmarket.stockexchange.entities.StockExchange_Company;
import com.stockmarket.stockexchange.repositories.StockExchange_CompanyRepository;

@Service
public class StockExchange_CompanyService {
	
	@Autowired
	private StockExchange_CompanyRepository stockExchange_CompanyRepository;

	public void addCompany2StockExchange(StockExchange_Company stockExchange_Company) {
		stockExchange_CompanyRepository.save(stockExchange_Company);
	}

	public void deleteCompanyFromStockExchange(int id) {
		stockExchange_CompanyRepository.deleteById(id);
	}

	public List<Integer> getAllCompanies(int stockExchangeId) {
		List<Integer> companyIdList = new ArrayList<>();
		stockExchange_CompanyRepository.findByStockExchangeId(stockExchangeId)
		.forEach(t -> companyIdList.add(t.getCompanyId()));
		return companyIdList;
	}

	public List<Integer> getAllStockExchanges(int companyId) {
		List<Integer> stockExchangeIdList = new ArrayList<>();
		stockExchange_CompanyRepository.findByCompanyId(companyId)
		.forEach(t -> stockExchangeIdList.add(t.getStockExchangeId()));
		return stockExchangeIdList;
		
	}
}
