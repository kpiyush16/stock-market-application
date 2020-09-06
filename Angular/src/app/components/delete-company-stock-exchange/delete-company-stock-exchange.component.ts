import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CompanyModel } from '../../models/company-model'
import { Sector } from '../../models/sector'
import { SectorService } from '../../services/sector.service';
import { StockExchange } from '../../models/stock-exchange'

@Component({
  selector: 'app-delete-company-stock-exchange',
  templateUrl: './delete-company-stock-exchange.component.html',
  styleUrls: ['./delete-company-stock-exchange.component.scss']
})
export class DeleteCompanyStockExchangeComponent implements OnInit {

  id: number;
  company: CompanyModel;
  sector: Sector;
  se: StockExchange;
  ListofSectors: Sector[];
  Res: any;
  ListofSe: StockExchange[];
  Res1: any;


  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService, private sectorService: SectorService) { }

  ngOnInit() {

    this.company = new CompanyModel();
  
    this.id = this.route.snapshot.params['id'];
    
    this.companyService.getCompany(this.id)
      .subscribe(data => {
        //console.log(data)
        this.company = data;
        console.log(this.company.stockExchangesId);
      }, error => console.log(error));

      this.reloadData();

  }

  reloadData(){
    this.companyService.findAll1(this.id).subscribe(data => {
      //this.Res1 = data;
      //console.log(data);
      this.Res1 = data;
      this.ListofSe = this.Res1.stockExchangeList;  
      //console.log(this.Res1);
    });  
 }

  DeleteCompanyStockExchange() {
    this.companyService.DeleteCompanyStockExchange(this.id, this.se.id)
      .subscribe(data => {
        console.log(data);
        this.company = new CompanyModel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.DeleteCompanyStockExchange();    
  }

  gotoList() {
    this.router.navigate(['/view-companies']);
  }


}
