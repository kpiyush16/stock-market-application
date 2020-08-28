package com.example.company.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sector {

    @Id
    private int id;
    private String brief;
    private String name;

    public Sector(){

    }

    public Sector(int id, String brief, String name) {
        super();
        this.id = id;
        this.brief = brief;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
