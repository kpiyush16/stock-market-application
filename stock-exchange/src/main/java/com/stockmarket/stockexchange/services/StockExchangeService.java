package com.stockmarket.stockexchange.services;

import com.stockmarket.stockexchange.repositories.StockExchangeRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.stockmarket.stockexchange.entities.StockExchange;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockExchangeService {
    @Autowired
	private StockExchangeRepository stockExchangeRepository;

	
	public void initialize() {
		StockExchange nse = new StockExchange(1, "NSE", "National Stock Exchange", "Remark1", 1234, new HashSet<>()),
		bse = new StockExchange(2, "BSE", "Bombay Stock Exchange", "Remark2", 5678, new HashSet<>());
		stockExchangeRepository.save(nse);
		stockExchangeRepository.save(bse);
	}
	
	public List<StockExchange> getAllStockExchanges() {
		List<StockExchange> stockExchangeList = new ArrayList<>();
		stockExchangeRepository.findAll()
				.forEach(stockExchangeList::add);
		return stockExchangeList;
	}
	
	public StockExchange getStockExchange(int id) {
		return stockExchangeRepository.findById(id).get();
	}

	public void addStockExchange(StockExchange stockExchange) {
		stockExchangeRepository.save(stockExchange);	
	}
	
	public void updateStockExchange(StockExchange stockExchange, int id) {
		if(stockExchangeRepository.existsById(id)){
			stockExchange.setId(id);
			stockExchangeRepository.save(stockExchange);
		}
		
	}

	public Set<Integer> getAllCompanies(int id) {
		return stockExchangeRepository.findById(id).get().getCompaniesId();
	}

	public void addCompany(int id, int companyId) {
		StockExchange stockExchange = stockExchangeRepository.findById(id).get(); 
		Set<Integer> companiesId = stockExchange.getCompaniesId();
		companiesId.add(companyId);
		stockExchange.setCompaniesId(companiesId);
		stockExchangeRepository.save(stockExchange);
	}

	public void deleteCompany(int id, int companyId) {
		StockExchange stockExchange = stockExchangeRepository.findById(id).get(); 
		Set<Integer> companiesId = stockExchange.getCompaniesId();
		companiesId.remove(companyId);
		stockExchange.setCompaniesId(companiesId);
		stockExchangeRepository.save(stockExchange);
	}

	// Deletion not supported
}