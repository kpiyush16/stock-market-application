package com.stockmarket.stockexchange.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Ipo {
    
    @Id
    private int Id;
    private LocalDateTime closeDateTime;
    private LocalDateTime openDateTime;
    private String remarks;
    private double sharePrice;
    private int totalShares;
    private int companyId;
    

    /**
     * @return int return the Id
     */
    public int getId() {
        return Id;
    }

    /**
     * @param Id the Id to set
     */
    public void setId(int Id) {
        this.Id = Id;
    }

    /**
     * @return LocalDateTime return the closeDateTime
     */
    public LocalDateTime getCloseDateTime() {
        return closeDateTime;
    }

    /**
     * @param closeDateTime the closeDateTime to set
     */
    public void setCloseDateTime(LocalDateTime closeDateTime) {
        this.closeDateTime = closeDateTime;
    }

    /**
     * @return LocalDateTime return the openDateTime
     */
    public LocalDateTime getOpenDateTime() {
        return openDateTime;
    }

    /**
     * @param openDateTime the openDateTime to set
     */
    public void setOpenDateTime(LocalDateTime openDateTime) {
        this.openDateTime = openDateTime;
    }

    /**
     * @return String return the remarks
     */
    public String getRemarks() {
        return remarks;
    }

    /**
     * @param remarks the remarks to set
     */
    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    /**
     * @return double return the sharePrice
     */
    public double getSharePrice() {
        return sharePrice;
    }

    /**
     * @param sharePrice the sharePrice to set
     */
    public void setSharePrice(double sharePrice) {
        this.sharePrice = sharePrice;
    }

    /**
     * @return int return the totalShares
     */
    public int getTotalShares() {
        return totalShares;
    }

    /**
     * @param totalShares the totalShares to set
     */
    public void setTotalShares(int totalShares) {
        this.totalShares = totalShares;
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

}