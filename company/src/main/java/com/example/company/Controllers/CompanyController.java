package com.example.company.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.company.entities.Company;
import com.example.company.services.CompanyService;

@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;

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
}
