package com.example.company.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entities.Company;
import com.example.company.entities.Sector;
import com.example.company.repositories.CompanyRepo;

@Service
public class CompanyService {

	@Autowired
	private CompanyRepo CompanyRepository;

	public List<Company> getAllCompanies() {
		List<Company> companyList = new ArrayList<>();
		CompanyRepository.findAll().forEach(companyList::add);
		return companyList;
	}

	public Company getCompany(int id) {
		return CompanyRepository.findById(id).get();
	}

	public void addCompany(Company company) {
		CompanyRepository.save(company);

	}

	public void updateCompany(Company company, int id) {
		if (CompanyRepository.existsById(id)) {
			company.setId(id);
			CompanyRepository.save(company);
		}
	}

	public void deleteCompany(int id) {
		CompanyRepository.deleteById(id);
	}

	public List<Company> getAllCompaniesBySector(int sectorId) {
		List<Company> companyList = new ArrayList<>();
		CompanyRepository.findBySectorId(sectorId).forEach(companyList::add);
		return companyList;
	}

	public Set<Integer> getAllStockExchanges(int id) {
		return CompanyRepository.findById(id).get().getStockExchangesId();
	}

	public void addStockExchange(int id, int stockExchangeId) {
		Company company = CompanyRepository.findById(id).get();
		Set<Integer> stockExchangesId = company.getStockExchangesId();
		stockExchangesId.add(stockExchangeId);
		company.setStockExchangesId(stockExchangesId);
		CompanyRepository.save(company);

	}

	public void deleteStockExchange(int id, int stockExchangeId) {
		Company company = CompanyRepository.findById(id).get();
		Set<Integer> stockExchangesId = company.getStockExchangesId();
		stockExchangesId.remove(stockExchangeId);
		company.setStockExchangesId(stockExchangesId);
		CompanyRepository.save(company);
	}

	public void addSector(int id, Sector sector) {
		Company company = CompanyRepository.findById(id).get();
		Set<Sector> sectors = company.getSector();
		sectors.add(sector);
		company.setSector(sectors);
		CompanyRepository.save(company);
	}

	public void deleteSector(int id, int sectorId) {
		Company company = CompanyRepository.findById(id).get();
		Set<Sector> sectors = company.getSector();
		for (Sector s : sectors) {
			if (s.getId() == sectorId) {
				sectors.remove(s);
				break;
			}
		}
		company.setSector(sectors);
		CompanyRepository.save(company);
	}

	public void addBoardOfDirector(int id, String boardOfDirector) {
		Company company = CompanyRepository.findById(id).get();
		Set<String> boardOfDirectors = company.getBoardOfDirectors();
		boardOfDirectors.add(boardOfDirector);
		company.setBoardOfDirectors(boardOfDirectors);
		CompanyRepository.save(company);
	}

	public void deleteBoardOfDirector(int id, String boardOfDirector) {
		Company company = CompanyRepository.findById(id).get();
		Set<String> boardOfDirectors = company.getBoardOfDirectors();
		boardOfDirectors.remove(boardOfDirector);
		company.setBoardOfDirectors(boardOfDirectors);
		CompanyRepository.save(company);
	}
}
