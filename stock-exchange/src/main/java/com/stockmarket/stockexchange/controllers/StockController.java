package com.stockmarket.stockexchange.controllers;

import com.stockmarket.stockexchange.services.StockService;
import com.stockmarket.stockexchange.entities.Stock;
import com.stockmarket.stockexchange.entities.StockList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {
    @Autowired
    private StockService stockService;

    @RequestMapping("/stocks")
    public StockList getAllStocks() {
        StockList stockList = new StockList(stockService.getAllStocks());
        return stockList;
    }

    @RequestMapping("/stocks/{id}")
    public Stock getStock(@PathVariable int id) {
        return stockService.getStock(id);
    }

    @PostMapping("/stocks")
	public void addstock(@RequestBody Stock stock) {
		stockService.addStock(stock);
	}
	
	@PutMapping("/stocks/{id}")
	public void updatestock(@RequestBody Stock stock, @PathVariable int id) {
		stockService.updateStock(stock, id);
	}
	
	@DeleteMapping("/stocks/{id}")
	public void deletestock(@PathVariable int id) {
		stockService.deleteStock(id);
	}
	
	@RequestMapping("/stocks/stockexchanges/{stockExchangeId}/companies/{companyId}")
    public StockList getAllStocksByStockExchangeAndCompany(@PathVariable int stockExchangeId, @PathVariable int companyId){
        StockList stockList = new StockList(stockService.getStocksByStockExchangeAndCompany(stockExchangeId, companyId));
        return stockList;
    }
	
	@RequestMapping("/stocks/stockexchanges/{stockExchangeId}")
    public StockList getAllStocksByStockExchange(@PathVariable int stockExchangeId) {
        StockList stockList = new StockList(stockService.getStocksByStockExchange(stockExchangeId));
        return stockList;
    }
	
	@RequestMapping("/stocks/companies/{companyId}")
    public StockList getAllStocksByCompany(@PathVariable int companyId) {
        StockList stockList = new StockList(stockService.getStocksByCompany(companyId));
        return stockList;
    }
}