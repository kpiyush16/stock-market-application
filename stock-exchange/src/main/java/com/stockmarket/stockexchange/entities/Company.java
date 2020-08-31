package com.stockmarket.stockexchange.entities;

import java.util.HashSet;
import java.util.Set;

public class Company {
	private int id;
	private String name;
	private String ceo;
	private String brief;
	private String code;
	private int contactId;
	private Set<Sector> sector = new HashSet<>();
	Set<Integer> stockExchangesId = new HashSet<>();
	private Set<String> boardOfDirectors = new HashSet<>();

	public Company() {

	}

	public Company(int id, String name, String ceo, String brief, String code, int contactId, Set<Sector> sector,
			Set<Integer> stockExchangesId, Set<String> boardOfDirectors) {
		super();
		this.id = id;
		this.name = name;
		this.ceo = ceo;
		this.brief = brief;
		this.code = code;
		this.contactId = contactId;
		this.sector = sector;
		this.stockExchangesId = stockExchangesId;
		this.boardOfDirectors = boardOfDirectors;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", ceo=" + ceo + ", brief=" + brief + ", code=" + code
				+ ", contactId=" + contactId + ", sector=" + sector + ", stockExchangesId=" + stockExchangesId
				+ ", boardOfDirectors=" + boardOfDirectors + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public int getContactId() {
		return contactId;
	}

	public void setContactId(int contactId) {
		this.contactId = contactId;
	}

	public Set<Sector> getSector() {
		return sector;
	}

	public void setSector(Set<Sector> sector) {
		this.sector = sector;
	}

	public Set<Integer> getStockExchangesId() {
		return stockExchangesId;
	}

	public void setStockExchangesId(Set<Integer> stockExchangesId) {
		this.stockExchangesId = stockExchangesId;
	}

	public Set<String> getBoardOfDirectors() {
		return boardOfDirectors;
	}

	public void setBoardOfDirectors(Set<String> boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}

}
