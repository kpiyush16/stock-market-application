package com.stockmarket.stockexchange.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StockExchange {
    @Id
    private int id;
    private String brief;
    private String remarks;
    private int contactId;

    public StockExchange() {
    }

    public StockExchange(int id, String brief, String remarks, int contactId) {
        this.id = id;
        this.brief = brief;
        this.remarks = remarks;
        this.contactId = contactId;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", brief='" + getBrief() + "'" +
            ", remarks='" + getRemarks() + "'" +
            ", contactId='" + getContactId() + "'" +
            "}";
    }

    
    /**
     * @return int return the Id
     */
    public int getId() {
        return id;
    }

    /**
     * @param Id the Id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return String return the brief
     */
    public String getBrief() {
        return brief;
    }

    /**
     * @param brief the brief to set
     */
    public void setBrief(String brief) {
        this.brief = brief;
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
     * @return int return the contactId
     */
    public int getContactId() {
        return contactId;
    }

    /**
     * @param contactId the contactId to set
     */
    public void setContactId(int contactId) {
        this.contactId = contactId;
    }

}