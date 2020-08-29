package com.stockmarket.stockexchange.services;

import java.util.ArrayList;
import java.util.List;

import com.stockmarket.stockexchange.repositories.IpoRepository;
import com.stockmarket.stockexchange.entities.Ipo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IpoService {
    
    @Autowired
    private IpoRepository ipoRepository;

    public List<Ipo> getAllIpos() {
        List<Ipo> ipoList = new ArrayList<>();
        ipoRepository.findAll()
        .forEach(ipoList::add);
        return ipoList;
    }

    public Ipo getIpo(int id){
        return ipoRepository.findById(id).get();
    }

    public void addIpo(Ipo ipo) {
        ipoRepository.save(ipo);
    }

    public void updateIpo(Ipo ipo, int id) {
        ipoRepository.save(ipo);
    }

    public void deleteIpo(int id) {
        ipoRepository.deleteById(id);
    }
    
    public List<Ipo> getAllIposByCompany(int companyId) {
        List<Ipo> ipoList = new ArrayList<>();
        ipoRepository.findByCompanyId(companyId)
        .forEach(ipoList::add);
        return ipoList;
    }
    
    public List<Ipo> getAllIposByStockExchange(int stockExchangeId) {
        List<Ipo> ipoList = new ArrayList<>();
        ipoRepository.findByStockExchangeId(stockExchangeId)
        .forEach(ipoList::add);
        return ipoList;
    }
    
    public List<Ipo> getAllIposByStockExchangeAndCompany( int stockExchangeId, int companyId){
        List<Ipo> ipoList = new ArrayList<>();
        ipoRepository.findByStockExchangeIdAndCompanyId(stockExchangeId, companyId)
        .forEach(ipoList::add);
        return ipoList;
    }
}