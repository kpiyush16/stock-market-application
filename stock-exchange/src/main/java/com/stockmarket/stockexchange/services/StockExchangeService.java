package com.stockmarket.stockexchange.services;

import com.stockmarket.stockexchange.repositories.StockExchangeRepository;

import java.util.ArrayList;
import java.util.List;

import com.stockmarket.stockexchange.entities.StockExchange;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockExchangeService {
    @Autowired
	private StockExchangeRepository stockExchangeRepository;

	{
		StockExchange nse = new StockExchange(1, "NSE", "National Stock Exchange", 1234), 
		bse = new StockExchange(2, "BSE", "Bombay Stock Exchange", 5678);
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
		stockExchangeRepository.save(stockExchange);
	}

	// Deletion not supported
}