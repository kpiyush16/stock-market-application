package com.stockmarket.stockexchange.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stockmarket.stockexchange.entities.Company;
import com.stockmarket.stockexchange.entities.StockExchange;
import com.stockmarket.stockexchange.entities.StockExchange_Company;
import com.stockmarket.stockexchange.services.StockExchangeService;
import com.stockmarket.stockexchange.services.StockExchange_CompanyService;

@RestController
public class StockExchange_CompanyController {
	
	@Autowired
	private StockExchange_CompanyService stockExchange_CompanyService;
	
	@Autowired
	private StockExchangeService stockExchangeService;
	
	@GetMapping("/stockexchanges/{stockExchangeId}/companies")
	public List<Company> getAllCompanies(@PathVariable int stockExchangeId) {
		List<Company> companyList = new ArrayList<>();
		stockExchange_CompanyService.getAllCompanies(stockExchangeId)
		.forEach(
			t -> {
				// TODO Call company microservice
				companyList.add(new Company());
			}
		);
		return companyList;
	}
	
	@GetMapping("/companies/{companyId}/stockexchanges")
	public List<StockExchange> getAllStockExchanges(@PathVariable int companyId) {
		List<StockExchange> stockExchangeList = new ArrayList<>();
		stockExchange_CompanyService.getAllStockExchanges(companyId)
		.forEach(
			t -> {
				stockExchangeList.add(stockExchangeService.getStockExchange(t));
			}
		);
		return stockExchangeList;
	}
	
	@PostMapping("/stockexchanges/companies")
	public void addCompany2StockExchange(@RequestBody StockExchange_Company stockExchange_Company) {
		stockExchange_CompanyService.addCompany2StockExchange(stockExchange_Company);
	}
	
	@DeleteMapping("/stockexchanges/companies/{id}")
	public void deleteCompanyFromStockExchange(@PathVariable int id) {
		stockExchange_CompanyService.deleteCompanyFromStockExchange(id);
	}
	
}
