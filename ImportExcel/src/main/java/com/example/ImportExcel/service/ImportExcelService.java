package com.example.ImportExcel.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.example.ImportExcel.entity.ImportExcelEntity;
import com.example.ImportExcel.repository.ImportExcelRepo;


@Service
public class ImportExcelService{

    @Autowired
    private ImportExcelRepo Importexcelrepo;


    public void addExcel(ImportExcelEntity excel) {

        ImportExcelRepo.save(excel);

    }

//    public ImportExcelEntity getCompany(int id) {
//        return ImportExcelRepo.findById(id).get();
//    }

}
