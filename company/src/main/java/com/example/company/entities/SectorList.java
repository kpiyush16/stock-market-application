package com.example.company.entities;

import java.util.List;

public class SectorList {
	private List<Sector> sectorlist;

	public SectorList() {
		super();
	}

	public SectorList(List<Sector> sectorlist) {
		super();
		this.sectorlist = sectorlist;
	}

	public List<Sector> getSectorlist() {
		return sectorlist;
	}

	public void setSectorlist(List<Sector> sectorlist) {
		this.sectorlist = sectorlist;
	}
	
}
