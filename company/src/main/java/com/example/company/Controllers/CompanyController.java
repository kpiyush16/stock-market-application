package com.example.company.Controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.example.company.entities.Contact;
import com.example.company.services.CompanyService;

@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;
    
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/companies")
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
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
    
    @RequestMapping("sector/{sectorId}/companies")
    public List<Company> getCompaniesBySector(@PathVariable int sectorId) {
        return companyService.getAllCompaniesBySector(sectorId);
    }
    
    @GetMapping("/companies/{id}/contacts/{contactId}")
	public Contact getContact(@PathVariable int id, @PathVariable int contactId) {
		return restTemplate.getForObject("http://user-service/contacts/"+contactId, Contact.class);
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
		restTemplate.delete("http://user-service/contacts/"+contactId,Contact.class);
	}
	
}
