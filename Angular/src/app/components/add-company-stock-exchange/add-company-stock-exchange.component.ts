import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { CompanyBod } from '../../models/company-bod'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { StockExchange } from '../../models/stock-exchange'
import { StockExchangeService } from "../../services/stock-exchange.service";

@Component({
  selector: 'app-add-company-stock-exchange',
  templateUrl: './add-company-stock-exchange.component.html',
  styleUrls: ['./add-company-stock-exchange.component.scss']
})
export class AddCompanyStockExchangeComponent implements OnInit {

  id: number;
  company: CompanyModel;
  se: StockExchange;
  companyBod: CompanyBod;
  sector: Sector;
  //companies: CompanyModel[];
  ListofSectors: Sector[];
  Res: any;
  ListofSe: StockExchange[];
  Res1: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService, private sectorService: SectorService, private stockexchangeservice: StockExchangeService) { }

  ngOnInit() {
    this.company = new CompanyModel();
  
      this.id = this.route.snapshot.params['id'];
      
      this.companyService.getCompany(this.id)
        .subscribe(data => {
          //console.log(data)
          this.company = data;
        }, error => console.log(error));
  
        // this.reloadData();

        this.stockexchangeservice.getStockExchanges().subscribe(data => {
          //this.Res1 = data;
          //console.log(data);
          this.Res1 = data;
          this.ListofSe = this.Res1.stockExchangeList;  
          //console.log(this.Res1);
        });  
  }

  // reloadData(){
  //   this.companyService.findAll2().subscribe(data => {
  //     //this.Res1 = data;
  //     //console.log(data);
  //     this.Res1 = data;
  //     this.ListofSe = this.Res1.stockExchangeList;  
  //     //console.log(this.Res1);
  //   });  
  
  //  }

   AddCompanyStockExchange() {
    //console.log(this.company);
    //console.log(this.company.sector);
    //console.log(this.company.stockExchangesId);
    this.companyService.AddCompanyStockExchange(this.id, this.se.id)
      .subscribe(data => {
        console.log(data);
        this.company = new CompanyModel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.AddCompanyStockExchange();    
  }

  gotoList() {
    this.router.navigate(['/view-companies']);
  }  


}
