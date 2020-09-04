package com.stockmarket.stockexchange.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int companyId;
	private double companyTurnover;
	private double price;
	private LocalDate date;
	private LocalDateTime dateTime;

	@ManyToOne(fetch = FetchType.LAZY)
	private StockExchange stockExchange;

	public Stock() {
	}


	public Stock(int id, int companyId, double companyTurnover, double price, LocalDate date, LocalDateTime dateTime, StockExchange stockExchange) {
		this.id = id;
		this.companyId = companyId;
		this.companyTurnover = companyTurnover;
		this.price = price;
		this.date = date;
		this.dateTime = dateTime;
		this.stockExchange = stockExchange;
	}

	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", companyId='" + getCompanyId() + "'" +
			", companyTurnover='" + getCompanyTurnover() + "'" +
			", price='" + getPrice() + "'" +
			", date='" + getDate() + "'" +
			", dateTime='" + getDateTime() + "'" +
			", stockExchange='" + getStockExchange() + "'" +
			"}";
	}
	

	/**
	 * @return int return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * @return LocalDate return the date
	 */
	public LocalDate getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(LocalDate date) {
		this.date = date;
	}

	/**
	 * @return LocalDateTime return the dateTime
	 */
	public LocalDateTime getDateTime() {
		return dateTime;
	}

	/**
	 * @param dateTime the dateTime to set
	 */
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}

	/**
	 * @return int return the companyId
	 */
	public int getCompanyId() {
		return companyId;
	}

	/**
	 * @param companyId the companyId to set
	 */
	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	public StockExchange getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(StockExchange stockExchange) {
		this.stockExchange = stockExchange;
	}


    /**
     * @return double return the companyTurnover
     */
    public double getCompanyTurnover() {
        return companyTurnover;
    }

    /**
     * @param companyTurnover the companyTurnover to set
     */
    public void setCompanyTurnover(double companyTurnover) {
        this.companyTurnover = companyTurnover;
    }

}