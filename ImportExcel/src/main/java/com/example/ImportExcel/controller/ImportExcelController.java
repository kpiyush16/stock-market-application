package com.example.ImportExcel.controller;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.apache.poi.ss.usermodel.Cell;

import com.example.ImportExcel.entity.ImportExcelEntity;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class ImportExcelController {

    @RequestMapping(value = "/import-excel", method = RequestMethod.POST)
    public ResponseEntity<List<ImportExcelEntity>> importExcelFile(@RequestParam("file") MultipartFile files) throws IOException, IOException {
        HttpStatus status = HttpStatus.OK;
        List<ImportExcelEntity> productList = new ArrayList<>();

        XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream());
        XSSFSheet worksheet = workbook.getSheetAt(0);

        for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
            if (index > 0) {
                ImportExcelEntity product = new ImportExcelEntity();

                XSSFRow row = worksheet.getRow(index);
                //Cell cell1 = row.getCell(0);
                //cell1.setCellType(cell1.CELL_TYPE_STRING);

//                Cell cell1 = row.getCell(0);
//                cell1.getCellType() == cell1.CELL_TYPE_STRING;

                product.setCompany_Code((int) row.getCell(0).getNumericCellValue());
                product.setStock_Exchange(row.getCell(1).getStringCellValue());
                product.setPrice_Per_Share((double)row.getCell(2).getNumericCellValue());
                product.setDate((Date)row.getCell(2).getDateCellValue());
                product.setTime(row.getCell(2).getStringCellValue());

                productList.add(product);
            }
        }

        return new ResponseEntity<>(productList, status);
    }
}
