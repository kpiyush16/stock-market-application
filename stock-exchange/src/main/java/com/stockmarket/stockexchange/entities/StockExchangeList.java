package com.stockmarket.stockexchange.entities;

import java.util.List;

public class StockExchangeList {
	private List<StockExchange> stockExchangeList;

	public StockExchangeList() {
		super();
	}

	public StockExchangeList(List<StockExchange> stockExchangeList) {
		super();
		this.stockExchangeList = stockExchangeList;
	}

	public List<StockExchange> getStockExchangeList() {
		return stockExchangeList;
	}

	public void setStockExchangeList(List<StockExchange> stockExchangeList) {
		this.stockExchangeList = stockExchangeList;
	}
	
}
