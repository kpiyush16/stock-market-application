package com.example.company.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.company.entities.Company;
import com.example.company.entities.CompanyList;
import com.example.company.entities.Contact;
import com.example.company.entities.Sector;
import com.example.company.entities.StockExchange;
import com.example.company.entities.StockExchangeList;
import com.example.company.services.CompanyService;

@RestController
@CrossOrigin
public class CompanyController {

    @Autowired
    private CompanyService companyService;
    
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/companies")
    public CompanyList getAllCompanies() {
    	CompanyList companyList = new CompanyList(companyService.getAllCompanies());
		return companyList;
    }

    @RequestMapping("/companies/{id}")
    public Company getCompany(@PathVariable int id) {
        return companyService.getCompany(id);
    }

    @RequestMapping(method= RequestMethod.POST, value="/companies")
    public void addCompany(@RequestBody Company company) {
        companyService.addCompany(company);
    }

    @RequestMapping(method= RequestMethod.PUT, value="/companies/{id}")
    public void updateCompany(@RequestBody Company company, @PathVariable int id) {
        companyService.updateCompany(company, id);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/companies/{id}")
    public void deleteCompany(@PathVariable int id) {
        companyService.deleteCompany(id);
    }
    
    @GetMapping("/companies/sectors/{sectorId}")
    public CompanyList getCompaniesBySector(@PathVariable int sectorId) {
    	CompanyList companyList = new CompanyList(companyService.getAllCompaniesBySector(sectorId));
		return companyList;
    }
    
    @PostMapping("/companies/{id}/sectors")
	public void addSector(@RequestBody Sector sector, @PathVariable int id) {
		companyService.addSector(id, sector);
	}
	
	@DeleteMapping("/companies/{id}/sectors/{sectorId}")
	public void deleteSector(@PathVariable int sectorId, @PathVariable int id) {
		companyService.deleteSector(id, sectorId);
	}
	
	@PostMapping("/companies/{id}/boardofdirectors")
	public void addBoardOfDirector(@RequestBody String boardOfDirector, @PathVariable int id) {
		companyService.addBoardOfDirector(id, boardOfDirector);
	}
	
	@DeleteMapping("/companies/{id}/boardofdirectors/{boardOfDirector}")
	public void deleteBoardOfDirector(@PathVariable String boardOfDirector, @PathVariable int id) {
		companyService.deleteBoardOfDirector(id, boardOfDirector);
	}
    
    @GetMapping("/companies/{id}/contacts/{contactId}")
	public Contact getContact(@PathVariable int id, @PathVariable int contactId) {
    	if(companyService.getCompany(id).getContactId() == contactId) {
    		return restTemplate.getForObject("http://user-service/contacts/"+contactId, Contact.class);
    	}
		return null;
	}
	
	@PostMapping("/companies/{id}/contacts")
	public void addContact(@RequestBody Contact contact, @PathVariable int id) {
		Contact newContact = restTemplate.postForObject("http://user-service/contacts",contact, Contact.class);
		Company company = companyService.getCompany(id);
		company.setContactId(newContact.getId());
		companyService.updateCompany(company, id);
	}
	
	@PutMapping("/companies/{id}/contacts/{contactId}")
	public void updateContact(@RequestBody Contact contact, @PathVariable int id, @PathVariable int contactId) {
		restTemplate.put("http://user-service/contacts/"+contactId, contact);
	}
	
	@DeleteMapping("/companies/{id}/contacts/{contactId}")
	public void deleteContact(@PathVariable int id, @PathVariable int contactId) {
		Company company = companyService.getCompany(id);
		if(company.getContactId() == contactId) {
			restTemplate.delete("http://user-service/contacts/"+contactId,Contact.class);
			company.setContactId(0);
			companyService.addCompany(company);
		}
	}
	
	@GetMapping("/companies/{id}/stockexchanges")
	public StockExchangeList getAllStockExchanges(@PathVariable int id) {
		Set<Integer> stockExchangesId = companyService.getAllStockExchanges(id);
		List<StockExchange> stockExchangeList1 = new ArrayList<>();
		restTemplate.getForObject("http://stock-exchange/stockexchanges", StockExchangeList.class).getStockExchangeList()
		.forEach(t -> {
			if(stockExchangesId.contains(t.getId())) {
				stockExchangeList1.add(t);
			}
		});
		StockExchangeList stockExchangeList = new StockExchangeList(stockExchangeList1);
		return stockExchangeList;
	}
	
	@PostMapping("/companies/{id}/stockexchanges")
	public void addStockExchange(@RequestBody int stockExchangeId, @PathVariable int id) {
		restTemplate.postForObject("http://stock-exchange/stockexchanges/"+stockExchangeId+"/companies",id, Integer.class);
		companyService.addStockExchange(id, stockExchangeId);
	}
	
	@DeleteMapping("/companies/{id}/stockexchanges/{stockExchangeId}")
	public void deleteStockExchange(@PathVariable int stockExchangeId, @PathVariable int id) {
		companyService.deleteStockExchange(id, stockExchangeId);
	}
}
