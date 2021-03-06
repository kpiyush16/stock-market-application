package com.stockmarket.stockexchange.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StockExchange {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(unique = true, nullable=false)
	private String name;

	private String brief;
	private String remarks;
	private int contactId;

	@ElementCollection
	@CollectionTable(name = "stock_exchange_companies")
	Set<Integer> companiesId = new HashSet<>();

	public StockExchange() {
	}

	public StockExchange(String name) {
		super();
		this.name = name;
	}

	public StockExchange(int id, String name, String brief, String remarks, int contactId, Set<Integer> companiesId) {
		super();
		this.id = id;
		this.name = name;
		this.brief = brief;
		this.remarks = remarks;
		this.contactId = contactId;
		this.companiesId = companiesId;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", name=" + name + ", brief=" + brief + ", remarks=" + remarks
				+ ", contactId=" + contactId + ", companiesId=" + companiesId + "]";
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Set<Integer> getCompaniesId() {
		return companiesId;
	}

	public void setCompaniesId(Set<Integer> companiesId) {
		this.companiesId = companiesId;
	}

}