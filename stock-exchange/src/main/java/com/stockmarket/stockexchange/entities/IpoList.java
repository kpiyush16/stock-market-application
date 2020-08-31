package com.stockmarket.stockexchange.entities;

import java.util.List;

public class IpoList {
	private List<Ipo> ipoList;

	public IpoList() {
		super();
	}

	public IpoList(List<Ipo> ipoList) {
		super();
		this.ipoList = ipoList;
	}

	public List<Ipo> getIpoList() {
		return ipoList;
	}

	public void setIpoList(List<Ipo> ipoList) {
		this.ipoList = ipoList;
	}
	
}
