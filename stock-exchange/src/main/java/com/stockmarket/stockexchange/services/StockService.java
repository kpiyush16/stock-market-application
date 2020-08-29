package com.stockmarket.stockexchange.services;

import java.util.ArrayList;
import java.util.List;

import com.stockmarket.stockexchange.entities.Stock;
import com.stockmarket.stockexchange.repositories.StockRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {
    
    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        List<Stock> stockList = new ArrayList<>();
		stockRepository.findAll()
				.forEach(stockList::add);
		return stockList;
    }

    public Stock getStock(int id){
        return stockRepository.findById(id).get();
    }

    public void addStock(Stock stock) {
        stockRepository.save(stock);
    }

    public void updateStock(Stock stock, int id) {
        stockRepository.save(stock);
    }

    public void deleteStock(int id) {
        stockRepository.deleteById(id);
    }

	public List<Stock> getStocksByStockExchangeAndCompany(int stockExchangeId, int companyId) {
		List<Stock> stockList = new ArrayList<>();
		stockRepository.findByStockExchangeIdAndCompanyId(stockExchangeId, companyId)
				.forEach(stockList::add);
		return stockList;	}
	
	public List<Stock> getStocksByStockExchange(int stockExchangeId) {
		List<Stock> stockList = new ArrayList<>();
		stockRepository.findByStockExchangeId(stockExchangeId)
				.forEach(stockList::add);
		return stockList;
	}
	
	public List<Stock> getStocksByCompany(int companyId) {
		List<Stock> stockList = new ArrayList<>();
		stockRepository.findByCompanyId(companyId)
				.forEach(stockList::add);
		return stockList;
	}
	
}