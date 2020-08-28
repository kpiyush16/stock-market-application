package com.stockmarket.stockexchange.controllers;

import java.util.List;

import com.stockmarket.stockexchange.entities.Ipo;
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

    public List<Ipo> getAllIpos() {
        return ipoService.getAllIpos();
    }

    @GetMapping("/stocks/{id}")
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
}