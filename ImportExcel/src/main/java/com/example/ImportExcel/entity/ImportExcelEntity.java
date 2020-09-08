package com.example.ImportExcel.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;
import java.util.Date;

@Entity
public class ImportExcelEntity {

    @Id
    private String Company_Code;
    private String Stock_Exchange;
    private String Price_Per_Share;
    private String date;
    private String time;

    public ImportExcelEntity() {

    }

    public ImportExcelEntity(String company_Code, String stock_Exchange, String price_Per_Share, String date, String time) {
        Company_Code = company_Code;
        Stock_Exchange = stock_Exchange;
        Price_Per_Share = price_Per_Share;
        this.date = date;
        this.time = time;
    }

    public String getCompany_Code() {
        return Company_Code;
    }

    public void setCompany_Code(String company_Code) {
        Company_Code = company_Code;
    }

    public String getStock_Exchange() {
        return Stock_Exchange;
    }

    public void setStock_Exchange(String stock_Exchange) {
        Stock_Exchange = stock_Exchange;
    }

    public String getPrice_Per_Share() {
        return Price_Per_Share;
    }

    public void setPrice_Per_Share(String price_Per_Share) {
        Price_Per_Share = price_Per_Share;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

   public String getTime() {
       return time;
   }

   public void setTime(String time) {
       this.time = time;
   }
}
