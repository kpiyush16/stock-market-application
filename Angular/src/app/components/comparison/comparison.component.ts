import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CompanyModel } from 'src/app/models/company-model';
import { Sector } from 'src/app/models/sector';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { StockExchange } from '../stock-market/stock-exchange/stock-exchange';
import { StockExchangeService } from '../../services/stock-exchange.service'
import { first } from 'rxjs/operators';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Stock } from '../stock-market/stock/stock';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})
export class ComparisonComponent implements OnInit {

  currDate:string;
  currTime:string;

  stockExchangeList:StockExchange[] = [];
  companyList:CompanyModel[] = [];
  sectorList:Sector[] = [];

  chartSectorList:Sector[] = [];
  chartSectorSEList:StockExchange[] = [];
  chartCompanyList:CompanyModel[] = [];
  chartCompanySEList:StockExchange[] = [];

  addEntityForm:FormGroup;
  showChart:boolean=true;
  chosenItem = "company";
  loading = false;
  submitted = false;
  result:any;

  public lineChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (any) = {
    legend: { display: true, labels: { fontColor: 'black' }},
    responsive: true,
    // maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  // public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];
  

  constructor(private formBuilder: FormBuilder, private stockExchangeService: StockExchangeService,
    private datepipe:DatePipe) { 
    setInterval(() => this.date(), 100);
    // this.showChart = true;
    
    this.addEntityForm = this.formBuilder.group({
      stockExchange: [null, Validators.required],
      company: [null, Validators.required],
      // sector: [null, Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required]});
    
      this.stockExchangeService.getAllStockExchanges()
    .pipe(first())
    .subscribe(
      data =>{
        console.log("Data = ");
        console.log(data);
        this.result = data;
        this.stockExchangeList = this.result.stockExchangeList;
        console.log(this.stockExchangeList);
      },
      error =>{
        console.log("Error =", error);
      }
    )

  }
 
  date(){
    let currentDate = new Date();
    this.currDate = currentDate.toDateString();
    this.currTime = currentDate.toLocaleTimeString();
  }

  ngOnInit(): void {    
  }

  addView(){
    this.showChart = false;
  }

  chartView(){
    this.loading = false;
    this.showChart = true;
  }

  f(){
    return this.addEntityForm.value;
  }

  changeEntity(){
    if(this.chosenItem == 'sector'){
      this.addEntityForm.removeControl('company');
      this.addEntityForm.addControl('sector', new FormControl(null, Validators.required));
      if(this.companyList.length > 0){
        this.companyList.forEach((company)=>{
          company.sector.forEach((sector1)=>{
            if(this.sectorList.length == 0){
              this.sectorList.push(sector1);
            }
            else if(!this.sectorList.some(sector2=>sector2.id == sector1.id)){
              this.sectorList.push(sector1);
            }
          })
        })
        console.log(this.sectorList);
      }
    }
    if(this.chosenItem == 'company'){
      this.addEntityForm.removeControl('sector');
      this.addEntityForm.addControl('company', new FormControl(null, Validators.required));
    }
  }

  seSelected(){
    this.stockExchangeService.getCompaniesByStockExchange(this.f().stockExchange.id)
    .pipe(first())
    .subscribe(
      data =>{
        console.log("Data = ");
        console.log(data);
        this.result = data;
        this.companyList = this.result.companyList;
        this.sectorList = [];
        console.log(this.companyList);
        this.changeEntity();
      },
      error =>{
        console.log("Error =", error);
      }
    )
  }


  addEntity(){
    this.submitted=true;
    if (this.addEntityForm.invalid) {
      return;
    }
    this.loading = true;
    
    let stockExchange = this.f().stockExchange;
    if(this.chosenItem == 'sector'){
      let sector = this.f().sector;
      for(let i=0; i<this.chartSectorList.length; i++){
        if(this.chartSectorList[i].id == sector.id && this.chartSectorSEList[i].id == stockExchange.id){
          this.chartView();
          return;
        }
      }
      let companies = [];
      this.companyList.forEach((company)=>{
        company.sector.forEach((sector1)=>{
          if(sector1.id == sector.id){
            companies.push(company);
          }
        })
      })
      this.stockExchangeService.getStocksByStockExchange(stockExchange.id)
      .pipe(first())
        .subscribe(
          data =>{
            console.log("Data = ");
            console.log(data);
            this.result = data;
            this.chartSectorList.push(sector);
            this.chartSectorSEList.push(stockExchange);
            const stocks:Stock[] = this.result.stockList;
            console.log(stocks);
            const chartData = [];
            if(this.lineChartLabels.length == 0){
              let date = this.f().from;
              while(date <= this.f().to){
                this.lineChartLabels.push(this.datepipe.transform(date, 'yyyy-MM-dd'));
                date.setDate(date.getDate()+1);
              }
            }
            this.lineChartLabels.forEach(date => {
              let stockPriceSum = 0.0;
              let count = 0;
              stocks.forEach(stock =>{
                if(stock.date){
                  if(stock.date.toString() == date){
                    companies.forEach(company=>{
                      if(stock.companyId == company.id){
                        stockPriceSum += stock.price;
                        count++;
                      }
                    })
                  }
                }
                
              })
              if(count == 0){
                chartData.push(0.0);
              }
              else{
                chartData.push(stockPriceSum/count);
              }
            });
            console.log(this.lineChartLabels);
            this.lineChartData.push({data:chartData, label:"Sector:"+sector.name+"("+stockExchange.name+")"});
            console.log(this.lineChartData);
            console.log("Calling chartView()");
            this.chartView();
          },
          error =>{
            console.log("Error =", error);
            return error;
          }
        )
    }
    else if(this.chosenItem == 'company'){
      let company = this.f().company;
      for(let i=0; i<this.chartCompanyList.length; i++){
        if(this.chartCompanyList[i].id == company.id && this.chartCompanySEList[i].id == stockExchange.id){
          this.chartView();
          return;
        }
      }
      
      this.stockExchangeService.getStocksByStockExchangeAndCompany(stockExchange.id, company.id)
      .pipe(first())
        .subscribe(
          data =>{
            console.log("Data = ");
            console.log(data);
            this.result = data;
            this.chartCompanyList.push(company);
            this.chartCompanySEList.push(stockExchange);
            const stocks:Stock[] = this.result.stockList;
            console.log(stocks);
            const chartData = [];
            if(this.lineChartLabels.length == 0){
              let date = this.f().from;
              while(date <= this.f().to){
                this.lineChartLabels.push(this.datepipe.transform(date, 'yyyy-MM-dd'));
                date.setDate(date.getDate()+1);
              }
            }
            
            this.lineChartLabels.forEach(date => {
              let stock = stocks.find(stock => stock.date.toString() == date);
              if(stock){
                chartData.push(stock.price);
              }
              else{
                chartData.push(0.0);
              }
            });
            console.log(this.lineChartLabels);
            this.lineChartData.push({data:chartData, label:"Company:"+company.name+"("+stockExchange.name+")"});
            console.log(this.lineChartData);
            console.log("Calling chartView()");
            this.chartView();
          },
          error =>{
            console.log("Error =", error);
            return error;
          }
        )
    }
    else{
      console.log("Error = chosenItem is neither company nor sector!!");
      this.loading = false;
    }
  }

  deleteSector(i:number){
    console.log("Calling deleteSector", i);
    let index = this.lineChartData.findIndex(obj=>
      obj.label == "Sector:"+this.chartSectorList[i].name+"("+this.chartSectorSEList[i].name+")"
    )
    this.chartSectorList.splice(i,1);
    this.chartSectorSEList.splice(i,1);
    console.log(this.chartSectorList, this.chartSectorSEList);
    this.changeData(index);
  }

  deleteCompany(i:number){
    console.log("Calling deleteCompany", i);
    let index = this.lineChartData.findIndex(obj=>
      obj.label.toString() == "Company:"+this.chartCompanyList[i].name+"("+this.chartCompanySEList[i].name+")"
    )
    // console.log("Company:"+this.chartCompanyList[i].name+"("+this.chartCompanySEList[i].name+")");
    this.chartCompanyList.splice(i,1);
    this.chartCompanySEList.splice(i,1);
    console.log(this.chartCompanyList, this.chartCompanySEList);
    this.changeData(index);
  }

  changeData(i:number){
    console.log("index = ", i);
    this.lineChartData.splice(i,1);
    if(this.lineChartData.length == 0){
      this.lineChartLabels = [];
    }
  }

}