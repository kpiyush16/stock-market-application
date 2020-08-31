package com.example.company.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entities.Sector;
import com.example.company.repositories.SectorRepo;

@Service
public class SectorService {

	@Autowired
	private SectorRepo SectorRepository;

	public List<Sector> getAllsectors() {
		List<Sector> sectorList = new ArrayList<>();
		SectorRepository.findAll().forEach(sectorList::add);
		return sectorList;
	}

	public Sector getSector(int id) {
		return SectorRepository.findById(id).get();
	}

	public void addSector(Sector sector) {
		SectorRepository.save(sector);

	}

	public void updateSector(Sector sector, int id) {
		if (SectorRepository.existsById(id)) {
			sector.setId(id);
			SectorRepository.save(sector);
		}
	}

	public void deleteSector(int id) {
			SectorRepository.deleteById(id);
	}
}
