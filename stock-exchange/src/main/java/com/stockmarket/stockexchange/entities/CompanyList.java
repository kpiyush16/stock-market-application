package com.stockmarket.stockexchange.entities;

import java.util.List;

public class CompanyList {
	private List<Company> companyList;

	public CompanyList() {
	}

	public CompanyList(List<Company> companyList) {
		super();
		this.companyList = companyList;
	}

	public List<Company> getCompanyList() {
		return companyList;
	}

	public void setCompanyList(List<Company> companyList) {
		this.companyList = companyList;
	}
	
}
