package com.stockmarket.stockexchange.entities;

public class Company {
	private int id;
    private String ceo;
    private String brief;
    private String code;
    private String name;
    private int contact_id;
    
	public Company() {
		super();
	}
	public Company(int id, String ceo, String brief, String code, String name, int contact_id) {
		super();
		this.id = id;
		this.ceo = ceo;
		this.brief = brief;
		this.code = code;
		this.name = name;
		this.contact_id = contact_id;
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
    
}
