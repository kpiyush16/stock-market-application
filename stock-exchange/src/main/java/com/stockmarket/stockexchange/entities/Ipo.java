package com.stockmarket.stockexchange.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Ipo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;

	private int companyId;
	private double sharePrice;
	private int totalShares;
	private LocalDateTime openDateTime;
	private LocalDateTime closeDateTime;
	private String remarks;

	@ManyToOne(fetch = FetchType.LAZY)
	private StockExchange stockExchange;

	public Ipo() {
		super();
	}

	public Ipo(int id, int companyId, double sharePrice, int totalShares, LocalDateTime openDateTime,
			LocalDateTime closeDateTime, String remarks, StockExchange stockExchange) {
		super();
		Id = id;
		this.companyId = companyId;
		this.sharePrice = sharePrice;
		this.totalShares = totalShares;
		this.openDateTime = openDateTime;
		this.closeDateTime = closeDateTime;
		this.remarks = remarks;
		this.stockExchange = stockExchange;
	}

	@Override
	public String toString() {
		return "Ipo [Id=" + Id + ", companyId=" + companyId + ", sharePrice=" + sharePrice + ", totalShares="
				+ totalShares + ", openDateTime=" + openDateTime + ", closeDateTime=" + closeDateTime + ", remarks="
				+ remarks + ", stockExchange=" + stockExchange + "]";
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	public double getSharePrice() {
		return sharePrice;
	}

	public void setSharePrice(double sharePrice) {
		this.sharePrice = sharePrice;
	}

	public int getTotalShares() {
		return totalShares;
	}

	public void setTotalShares(int totalShares) {
		this.totalShares = totalShares;
	}

	public LocalDateTime getOpenDateTime() {
		return openDateTime;
	}

	public void setOpenDateTime(LocalDateTime openDateTime) {
		this.openDateTime = openDateTime;
	}

	public LocalDateTime getCloseDateTime() {
		return closeDateTime;
	}

	public void setCloseDateTime(LocalDateTime closeDateTime) {
		this.closeDateTime = closeDateTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public StockExchange getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(StockExchange stockExchange) {
		this.stockExchange = stockExchange;
	}

}