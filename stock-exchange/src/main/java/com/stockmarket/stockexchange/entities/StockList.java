package com.stockmarket.stockexchange.entities;

import java.util.List;

public class StockList {
	private List<Stock> stockList;

	public StockList() {
		super();
	}

	public StockList(List<Stock> stockList) {
		super();
		this.stockList = stockList;
	}

	public List<Stock> getStockList() {
		return stockList;
	}

	public void setStockList(List<Stock> stockList) {
		this.stockList = stockList;
	}
	
}
