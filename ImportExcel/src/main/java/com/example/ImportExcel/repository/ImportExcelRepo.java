package com.example.ImportExcel.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ImportExcel.entity.ImportExcelEntity;

@Repository
public interface ImportExcelRepo extends CrudRepository<ImportExcelEntity, Integer> {
}