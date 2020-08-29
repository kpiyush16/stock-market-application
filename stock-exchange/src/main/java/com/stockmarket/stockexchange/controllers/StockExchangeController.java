package com.stockmarket.stockexchange.controllers;

import java.util.List;

import com.stockmarket.stockexchange.entities.Contact;
import com.stockmarket.stockexchange.entities.StockExchange;
import com.stockmarket.stockexchange.services.StockExchangeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class StockExchangeController {
    @Autowired
    private StockExchangeService stockExchangeService;
    
    @Autowired
    private RestTemplate restTemplate;


    @RequestMapping("/stockexchanges")
    public List<StockExchange> getAllStockExchanges() {
        return stockExchangeService.getAllStockExchanges();
    }

    @RequestMapping("/stockexchanges/{id}")
    public StockExchange getStockExchange(@PathVariable int id) {
        return stockExchangeService.getStockExchange(id);
    }

    @PostMapping("/stockexchanges")
	public void addstockExchange(@RequestBody StockExchange stockExchange) {
		stockExchangeService.addStockExchange(stockExchange);
	}
	
	@PutMapping("/stockexchanges/{id}")
	public void updatestockExchange(@RequestBody StockExchange stockExchange, @PathVariable int id) {
		stockExchangeService.updateStockExchange(stockExchange, id);
    }
	
	@GetMapping("/stockexchanges/{id}/contacts/{contactId}")
	public Contact getContact(@PathVariable int id, @PathVariable int contactId) {
		return restTemplate.getForObject("http://user-service/contacts/"+contactId, Contact.class);
	}
	
	@PostMapping("/stockexchanges/{id}/contacts")
	public void addContact(@RequestBody Contact contact, @PathVariable int id) {
		Contact newContact = restTemplate.postForObject("http://user-service/contacts",contact, Contact.class);
		StockExchange stockExchange = stockExchangeService.getStockExchange(id);
		stockExchange.setContactId(newContact.getId());
		stockExchangeService.updateStockExchange(stockExchange, id);
	}
	
	@PutMapping("/stockexchanges/{id}/contacts/{contactId}")
	public void updateContact(@RequestBody Contact contact, @PathVariable int id, @PathVariable int contactId) {
		restTemplate.put("http://user-service/contacts/"+contactId, contact);
	}
    
    // Deletion is not allowed
}