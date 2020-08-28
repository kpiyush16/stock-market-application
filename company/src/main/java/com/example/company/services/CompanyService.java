package com.example.company.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.company.entities.Company;
import com.example.company.repositories.CompanyRepo;


@Service
public class CompanyService {

    @Autowired
    private CompanyRepo CompanyRepository;

    public List<Company> getAllCompanies() {
        List<Company> companyList = new ArrayList<>();
        CompanyRepository.findAll()
                .forEach(companyList::add);
        return companyList;
    }

    public Company getCompany(int id) {
        return CompanyRepository.findById(id).get();
    }

    public void addCompany(Company company) {
        CompanyRepository.save(company);

    }

    public void updateCompany(Company company, int id) {
        CompanyRepository.save(company);
    }

    public void deleteCompany(int id) {
        CompanyRepository.deleteById(id);
    }
}
