package com.stockmarket.stockexchange.repositories;

import com.stockmarket.stockexchange.entities.Ipo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IpoRepository extends CrudRepository<Ipo, Integer> {
    public List<Ipo> findByCompanyId(int companyId);
    public List<Ipo> findByStockExchangeId(int stockExchangeId);
    public List<Ipo> findByStockExchangeIdAndCompanyId(int stockExchangeId, int companyId);
}