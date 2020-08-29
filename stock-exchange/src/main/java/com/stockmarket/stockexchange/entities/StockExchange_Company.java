package com.stockmarket.stockexchange.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StockExchange_Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int stockExchangeId;
	private int companyId;
	
	
	public StockExchange_Company() {
		super();
	}
	public StockExchange_Company(int id, int stockExchangeId, int companyId) {
		super();
		this.id = id;
		this.stockExchangeId = stockExchangeId;
		this.companyId = companyId;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getStockExchangeId() {
		return stockExchangeId;
	}
	public void setStockExchangeId(int stockExchangeId) {
		this.stockExchangeId = stockExchangeId;
	}
	public int getCompanyId() {
		return companyId;
	}
	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}
	@Override
	public String toString() {
		return "stockExchange_Companies [id=" + id + ", stockExchangeId=" + stockExchangeId + ", companyId=" + companyId
				+ "]";
	}
	
	
	
}
