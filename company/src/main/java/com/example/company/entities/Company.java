package com.example.company.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Company {

    @Id
    private int id;
    private String ceo;
    private String brief;
    private String code;
    private String name;
    private int contact_id;
    private int sector_id;
    private int stock_exchange_id;

    public Company(){

    }

    public Company(int id, String ceo, String brief, String code, String name, int contact_id, int sector_id, int stock_exchange_id) {
        super();
        this.id = id;
        this.ceo = ceo;
        this.brief = brief;
        this.code = code;
        this.name = name;
        this.contact_id = contact_id;
        this.sector_id = sector_id;
        this.stock_exchange_id = stock_exchange_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCeo() {
        return ceo;
    }

    public void setCeo(String ceo) {
        this.ceo = ceo;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getContact_id() {
        return contact_id;
    }

    public void setContact_id(int contact_id) {
        this.contact_id = contact_id;
    }

    public int getSector_id() {
        return sector_id;
    }

    public void setSector_id(int sector_id) {
        this.sector_id = sector_id;
    }

    public int getStock_exchange_id() {
        return stock_exchange_id;
    }

    public void setStock_exchange_id(int stock_exchange_id) {
        this.stock_exchange_id = stock_exchange_id;
    }


}
