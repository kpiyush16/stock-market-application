package com.stockmarket.stockexchange.controllers;

import com.stockmarket.stockexchange.entities.Ipo;
import com.stockmarket.stockexchange.entities.IpoList;
import com.stockmarket.stockexchange.services.IpoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IpoController {

    @Autowired
    private IpoService ipoService;

    @GetMapping("/ipos")
    public IpoList getAllIpos() {
    	IpoList ipoList = new IpoList(ipoService.getAllIpos());
		return ipoList;
    }

    @GetMapping("/ipos/{id}")
    public Ipo getIpo(@PathVariable int id) {
        return ipoService.getIpo(id);
    }

    @PostMapping("/ipos")
	public void addIpo(@RequestBody Ipo ipo) {
		ipoService.addIpo(ipo);
	}
	
	@PutMapping("/ipos/{id}")
	public void updateIpo(@RequestBody Ipo ipo, @PathVariable int id) {
		ipoService.updateIpo(ipo, id);
	}
	
	@DeleteMapping("/ipos/{id}")
	public void deleteIpo(@PathVariable int id) {
		ipoService.deleteIpo(id);
	}
	
	@GetMapping("/ipos/companies/{companyId}")
    public IpoList getAllIposByCompany(@PathVariable int companyId) {
		IpoList ipoList = new IpoList(ipoService.getAllIposByCompany(companyId));
		return ipoList;
    }
	
	@GetMapping("/ipos/stockexchanges/{stockExchangeId}")
    public IpoList getAllIposByStockExchange(@PathVariable int stockExchangeId) {
		IpoList ipoList = new IpoList(ipoService.getAllIposByStockExchange(stockExchangeId));
		return ipoList;
    }
	
	@GetMapping("/ipos/stockexchanges/{stockExchangeId}/companies/{companyId}")
    public IpoList getAllIposByStockExchangeAndCompany(@PathVariable int stockExchangeId, @PathVariable int companyId){
		IpoList ipoList = new IpoList(ipoService.getAllIposByStockExchangeAndCompany(stockExchangeId, companyId));
		return ipoList;
    }
	
	
}