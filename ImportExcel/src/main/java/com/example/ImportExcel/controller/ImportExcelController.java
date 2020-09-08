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
import org.apache.poi.ss.usermodel.DataFormatter;

import com.example.ImportExcel.service.ImportExcelService;
import com.example.ImportExcel.repository.ImportExcelRepo;

import java.io.IOException;
import java.util.ArrayList;s
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class ImportExcelController {

    @RequestMapping(value = "/import-excel", method = RequestMethod.POST)
    public ResponseEntity<List<ImportExcelEntity>> importExcelFile(@RequestParam("file") MultipartFile files) throws IOException, IOException {
//    public void importExcelFile(@RequestParam("file") MultipartFile files) throws IOException, IOException {
        HttpStatus status = HttpStatus.OK;
        List<ImportExcelEntity> productList = new ArrayList<>();


        XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream());
        XSSFSheet worksheet = workbook.getSheetAt(0);

        for (int index = 0; index < worksheet.getPhysicalNumberOfRows(); index++) {
            if (index > 0) {
                ImportExcelEntity product = new ImportExcelEntity();

                //XSSFRow row = worksheet.getRow(index);
                //Cell cell1 = row.getCell(0);
                //cell1.setCellType(cell1.CELL_TYPE_STRING);

//                Cell cell1 = row.getCell(0);
//                cell1.getCellType() == cell1.CELL_TYPE_STRING;

                DataFormatter formatter = new DataFormatter(); //creating formatter using the default locale

                Cell cell = worksheet.getRow(index).getCell(0);
                String company_code = formatter.formatCellValue(cell); //Returns the formatted value of a cell as a String regardless of the cell type.

                if(company_code != "") {
                    product.setCompany_Code(company_code);

                    cell = worksheet.getRow(index).getCell(1);
                    String Stock_Exchange = formatter.formatCellValue(cell); //Returns the formatted value of a cell as a String regardless of the cell type.
//                    console.log(product.setStock_Exchange(Stock_Exchange));

                    //product.setStock_Exchange(row.getCell(1).getStringCellValue());

                    cell = worksheet.getRow(index).getCell(2);
                    String Price_Per_Share = formatter.formatCellValue(cell); //Returns the formatted value of a cell as a String regardless of the cell type.
                    product.setPrice_Per_Share(Price_Per_Share);

                    //product.setPrice_Per_Share((double)row.getCell(2).getNumericCellValue());

                    cell = worksheet.getRow(index).getCell(3);
                    String Date = formatter.formatCellValue(cell); //Returns the formatted value of a cell as a String regardless of the cell type.
                    product.setDate(Date);

                    //product.setDate((Date)row.getCell(2).getDateCellValue());
                    //product.setTime(row.getCell(2).getStringCellValue());

                    cell = worksheet.getRow(index).getCell(4);
                    String Time = formatter.formatCellValue(cell); //Returns the formatted value of a cell as a String regardless of the cell type.
                    product.setTime(Time);


                    ImportExcelService.addExcel(product);
                    productList.add(product);
                }
            }
        }

        return new ResponseEntity<>(productList, status);

        //ImportExcelEntity.
    }
}
