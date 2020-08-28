package com.stockmarket.stockexchange.controllers;

import java.util.List;

import com.stockmarket.stockexchange.entities.StockExchange;
import com.stockmarket.stockexchange.services.StockExchangeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockExchangeController {
    @Autowired
    private StockExchangeService stockExchangeService;

    @RequestMapping("/stockexchanges")
    public List<StockExchange> getAllStockExchanges() {
        return stockExchangeService.getAllStockExchanges();
    }

    @RequestMapping("/stockexchanges/{id}")
    public StockExchange getStockExchange(@PathVariable int id) {
        return stockExchangeService.getStockExchange(id);
    }

    @PostMapping("/stockexchanges")
	public void addstockExchange(@RequestBody StockExchange stockExchange) {
		stockExchangeService.addStockExchange(stockExchange);
	}
	
	@PutMapping("/stockexchanges/{id}")
	public void updatestockExchange(@RequestBody StockExchange stockExchange, @PathVariable int id) {
		stockExchangeService.updateStockExchange(stockExchange, id);
    }
    
    // Deletion is not allowed
}