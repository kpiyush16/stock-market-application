package com.stockmarket.stockexchange.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Stock {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double closePrice;
    private double companyTurnover;
    private LocalDate date;
    private LocalDateTime dateTime;
    private double openPrice;
    private int companyId;
    private int stockExchange;

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

    /**
     * @return double return the closePrice
     */
    public double getClosePrice() {
        return closePrice;
    }

    /**
     * @param closePrice the closePrice to set
     */
    public void setClosePrice(double closePrice) {
        this.closePrice = closePrice;
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
     * @return double return the openPrice
     */
    public double getOpenPrice() {
        return openPrice;
    }

    /**
     * @param openPrice the openPrice to set
     */
    public void setOpenPrice(double openPrice) {
        this.openPrice = openPrice;
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

    /**
     * @return int return the stockExchange
     */
    public int getStockExchange() {
        return stockExchange;
    }

    /**
     * @param stockExchange the stockExchange to set
     */
    public void setStockExchange(int stockExchange) {
        this.stockExchange = stockExchange;
    }

}